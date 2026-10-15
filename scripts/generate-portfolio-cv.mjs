
export function generateCV(data) {
  const W=595.28,H=841.89,M=44,CW=W-2*M;
  const normalWidths={}; const chars=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  const widths=[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584];
  for(let i=0;i<chars.length;i++)normalWidths[chars[i]]=widths[i]||556;
  function width(s,size,bold=false){return [...s].reduce((n,c)=>n+(normalWidths[c]||556),0)*size/1000*(bold?1.045:1);}
  const esc=s=>s.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)");
  const objs=[null]; const add=s=>(objs.push(s),objs.length-1);
  const catalog=add("");const pagesObj=add("");
  const regular=add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const bold=add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const pageIds=[];const metrics=[];
  for(let page=0;page<data.pages.length;page++){
    let y=H-M,stream="",annots=[];
    function text(s,x,yy,size=10.4,b=false,color="0.08 0.10 0.12"){
      if(/[^\x20-\x7e]/.test(s))throw Error("Non-ASCII PDF text");
      stream+=`BT /${b?"F2":"F1"} ${size} Tf ${color} rg 1 0 0 1 ${x.toFixed(2)} ${yy.toFixed(2)} Tm (${esc(s)}) Tj ET\n`;
    }
    function wrap(s,max,size,b=false){const out=[];let line="";for(const word of s.split(/\s+/)){const test=line?line+" "+word:word;if(width(test,size,b)>max&&line){out.push(line);line=word;}else line=test;}if(line)out.push(line);return out;}
    function paragraph(s,{size=10.3,leading=13.2,indent=0,bullet=false,b=false,gap=5}={}){
      const lines=wrap(s,CW-indent,size,b);
      if(bullet)text("-",M,y,size,true);
      for(const line of lines){text(line,M+indent,y,size,b);y-=leading;}
      y-=gap;
    }
    function link(label,url,x,yy,size=9.3){text(label,x,yy,size,false,"0.10 0.30 0.35");annots.push(add(`<< /Type /Annot /Subtype /Link /Rect [${x} ${yy-2} ${x+width(label,size)} ${yy+size+2}] /Border [0 0 0] /A << /S /URI /URI (${esc(url)}) >> >>`));}
    if(page===0){
      text(data.name,M,y,23,true);y-=24;text(data.role,M,y,13,true);y-=20;
      text(data.contact,M,y,9.3);annots.push(add(`<< /Type /Annot /Subtype /Link /Rect [${M+280} ${y-2} ${M+CW} ${y+11}] /Border [0 0 0] /A << /S /URI /URI (mailto:vikasche.engg@gmail.com) >> >>`));y-=16;
      link(data.portfolio,data.portfolio,M,y);let lx=M+width(data.portfolio,9.3)+20;
      for(const [label,url]of data.links){link(label,url,lx,y);lx+=width(label,9.3)+16;}y-=24;
    }else{ text("Vikash Vashisth",M,y,10,true);text(data.role,W-M-width(data.role,9),y,9);y-=25; }
    for(const block of data.pages[page]){
      const [kind,a,b]=block;
      if(kind==="section"){y-=7;text(a,M,y,10.5,true);y-=18;}
      else if(kind==="employer"||kind==="position"){
        y-=kind==="employer"?5:0;const size=kind==="employer"?10.3:9.7;
        const right=b||"";const available=CW-(right?width(right,9,true)+14:0);const lines=wrap(a,available,size,true);
        for(let i=0;i<lines.length;i++){text(lines[i],M,y,size,true);if(i===0&&right)text(right,W-M-width(right,9,true),y,9,true);y-=13;}
        y-=kind==="position"?3:0;
      }else if(kind==="skill"){paragraph(a+": "+b,{size:10.1,leading:13,gap:5});}
      else if(kind==="bullet"){paragraph(a,{indent:12,bullet:true,size:10.3,leading:13.2,gap:5});}
      else if(kind==="publication"){paragraph(a,{indent:10,bullet:true,size:9.5,leading:12.1,gap:4});}
      else paragraph(a,{size:kind==="paragraph"&&page===1?9.7:10.3,leading:12.8,gap:5});
    }
    if(y<49)throw Error("Page "+(page+1)+" overflows: "+y);
    metrics.push({page:page+1,bottom:y});
    text("Vikash Vashisth",M,28,8,false,"0.4 0.4 0.4");text("Page "+(page+1)+" of 2",W-M-48,28,8,false,"0.4 0.4 0.4");
    const content=add("<< /Length "+stream.length+" >>\nstream\n"+stream+"endstream");
    const pid=add(`<< /Type /Page /Parent ${pagesObj} 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 ${regular} 0 R /F2 ${bold} 0 R >> >> /Contents ${content} 0 R /Annots [${annots.map(i=>i+" 0 R").join(" ")}] >>`);pageIds.push(pid);
  }
  objs[catalog]=`<< /Type /Catalog /Pages ${pagesObj} 0 R >>`;
  objs[pagesObj]=`<< /Type /Pages /Count 2 /Kids [${pageIds.map(i=>i+" 0 R").join(" ")}] >>`;
  const info=add("<< /Title (Vikash Vashisth - CFD and Thermal-Fluid Engineer) /Author (Vikash Vashisth) >>");
  let pdf="%PDF-1.4\n";const offsets=[0];
  for(let i=1;i<objs.length;i++){offsets.push(pdf.length);pdf+=i+" 0 obj\n"+objs[i]+"\nendobj\n";}
  const xref=pdf.length;pdf+="xref\n0 "+objs.length+"\n0000000000 65535 f \n";
  for(let i=1;i<objs.length;i++)pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \n";
  pdf+=`trailer\n<< /Size ${objs.length} /Root ${catalog} 0 R /Info ${info} 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return {pdf,metrics};
}

import {readFile,writeFile} from "node:fs/promises";
import {fileURLToPath} from "node:url";
const sourcePath=new URL("../cv/portfolio-cv.json",import.meta.url);
const data=JSON.parse(await readFile(sourcePath,"utf8"));
const {pdf,metrics}=generateCV(data);
for(const name of ["Vikash_Vashisth_CV.pdf","Vikash_Vashisth_CFD_Specialist_CV.pdf"]){
 await writeFile(new URL("../public/"+name,import.meta.url),pdf,"ascii");
}
console.log("Generated two A4 pages:",metrics);
