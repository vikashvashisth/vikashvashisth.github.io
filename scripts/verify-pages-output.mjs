import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = path.join(root, "dist", "client");
const contentPath = path.join(root, "app", "content.ts");
const content = await readFile(contentPath, "utf8");
const slugs = [
  ...new Set([...content.matchAll(/["']?slug["']?\s*:\s*"([^"]+)"/g)].map((match) => match[1])),
];

assert.ok(slugs.length > 0, "No project slugs were found in app/content.ts.");

async function listFiles(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(path.join(directory, entry.name), relative)));
    } else {
      files.push(relative);
    }
  }
  return files;
}

await access(path.join(output, "index.html"));
const files = await listFiles(output);
const fileSet = new Set(files);
const forbiddenPath = /(^|\/)(incoming-edu|node_modules|\.openai|\.wrangler|\.sites-runtime)(\/|$)|(^|\/)(LOCAL_HANDOFF_NOTES|EDU_Page_Review|EDU_Figure_Review_Notes|EDU_Engineering_Basis)/i;

for (const file of files) {
  assert.doesNotMatch(file, forbiddenPath, `Private or development file in output: ${file}`);
}

for (const slug of slugs) {
  const routeFile = `projects/${slug}/index.html`;
  assert.ok(fileSet.has(routeFile), `Missing statically exported project route: ${routeFile}`);
}

const htmlFiles = files.filter((file) => file.endsWith(".html"));
for (const htmlFile of htmlFiles) {
  const html = await readFile(path.join(output, htmlFile), "utf8");
  const references = html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi);
  for (const [, reference] of references) {
    if (!reference.startsWith("/") || reference.startsWith("//")) continue;
    const pathname = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
    if (pathname === "/") {
      assert.ok(fileSet.has("index.html"), `Broken local reference in ${htmlFile}: ${reference}`);
      continue;
    }
    const relative = pathname.replace(/^\/+/, "");
    const candidatePaths = path.extname(relative)
      ? [relative]
      : [`${relative.replace(/\/+$/, "")}/index.html`, `${relative}.html`];
    assert.ok(
      candidatePaths.some((candidate) => fileSet.has(candidate)),
      `Broken local reference in ${htmlFile}: ${reference}`,
    );
  }
}

for (const filename of [
  "Vikash_Vashisth_CV.pdf",
  "Vikash_Vashisth_Industrial_CV.pdf",
  "Vikash_Vashisth_CFD_Specialist_CV.pdf",
  "Vikash_Vashisth_Academic_CV.pdf",
]) {
  assert.ok(fileSet.has(filename), `Missing downloadable CV: ${filename}`);
}

console.log(
  `Static output verified: ${htmlFiles.length} HTML pages, ${files.length} files, ${slugs.length} project routes, four CV downloads.`,
);
