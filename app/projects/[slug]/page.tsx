import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, type Project } from "../../content";
import figureDimensions from "../../figure-dimensions.json";


type Figure = {title:string;src?:string;alt?:string;caption?:string};
function ScientificImage({src,alt}:{src:string;alt:string}) {
 const size=(figureDimensions as Record<string,number[]>)[src];
 return <img src={src} alt={alt} width={size?.[0]} height={size?.[1]} loading="lazy"/>;
}
function FigureCard({item,hero=false}:{item:Figure;hero?:boolean}) {
 const full=item.src;
 const quantitative=full?.endsWith("/quantitative-validation.webp");
 const thermal=full?.endsWith("/Medium_Solid_Temperature.png");
 const geometry=full?.endsWith("/edu/geometry.png");
 const chart=full?.endsWith("/flow-rate-comparison.png") || full?.endsWith("/helix-pitch-comparison.png");
 return <figure className={hero ? "hero-research-figure scientific-figure" : quantitative || chart ? "scientific-figure figure-wide" : "scientific-figure"}>
  {full && <a className="research-figure-link" href={full} target="_blank" rel="noreferrer" aria-label={`Open full-size figure: ${item.title} (new tab)`}>
   {geometry ? <svg className="annotated-media" viewBox="0 0 1938 1320" role="img" aria-label="Six-turn reference: homogenized stator, aluminium housing and helical coolant passage; schematic heat route from stator through housing to coolant">
    <image href={full} width="1938" height="1166"/>
    <g fill="white" stroke="#142b3a" strokeWidth="3">
      <path d="M 470 220 L 790 300 M 1450 180 L 1190 145 M 1460 750 L 1265 695" fill="none"/>
      <rect x="50" y="155" width="450" height="80" rx="8"/>
      <rect x="1410" y="115" width="480" height="80" rx="8"/>
      <rect x="1410" y="725" width="480" height="80" rx="8"/>
    </g>
    <g fill="#142b3a" fontSize="38" fontFamily="sans-serif">
      <text x="80" y="208">Homogenized stator</text>
      <text x="1440" y="168">Aluminium housing</text>
      <text x="1440" y="778">Helical coolant path</text>
      <text x="160" y="1220">Heat route (schematic): stator → housing → coolant</text>
      <text x="160" y="1280" fontSize="32">Six turns · 30 mm pitch · two connected end ports</text>
    </g>
   </svg> : thermal ? <svg className="annotated-media" viewBox="0 0 1920 1080" role="img" aria-label="Temperature on housing and homogenized-stator surfaces, with component labels and original temperature scale in kelvin">
    <image href={full} width="1920" height="1080"/>
    <rect x="500" y="28" width="980" height="90" fill="white"/>
    <text x="960" y="82" textAnchor="middle" fontSize="38" fill="#142b3a">Reference-design solid-surface temperature</text>
    <path d="M 420 505 L 730 600" stroke="white" strokeWidth="8"/><path d="M 420 505 L 730 600" stroke="#142b3a" strokeWidth="3"/>
    <rect x="115" y="442" width="340" height="78" rx="8" fill="white" stroke="#142b3a" strokeWidth="2"/><text x="285" y="491" textAnchor="middle" fontSize="34" fill="#142b3a">Housing</text>
    <path d="M 1390 270 L 1080 345" stroke="white" strokeWidth="8"/><path d="M 1390 270 L 1080 345" stroke="#142b3a" strokeWidth="3"/>
    <rect x="1350" y="195" width="480" height="90" rx="8" fill="white" stroke="#142b3a" strokeWidth="2"/><text x="1590" y="250" textAnchor="middle" fontSize="34" fill="#142b3a">Homogenized stator</text>
   </svg> : <ScientificImage src={full} alt={item.alt ?? item.title}/>}
  </a>}
  <figcaption><strong>{item.title}</strong>{item.caption && <span>{item.caption}</span>}{full && <a className="figure-fullsize" href={full} target="_blank" rel="noreferrer">Open full-size figure ↗<span className="sr-only"> (new tab)</span></a>}</figcaption>
  {quantitative && <details className="panel-reader"><summary>Inspect individual comparison panels</summary><p>Panels retain their original axes, legends and error bars. Positions identify the panels without assuming a formulation mapping.</p><div className="panel-grid">{[[0,0,388,302],[392,0,383,302],[0,307,388,306],[392,307,383,306],[0,618,388,282],[392,618,383,282]].map(([x,y,w,h],i)=><div key={i}><h3>{["Top left","Top right","Middle left","Middle right","Bottom left","Bottom right"][i]}</h3><svg viewBox={`${x} ${y} ${w} ${h}`} role="img" aria-label={`Original comparison panel ${i+1}`}><image href={full} width="775" height="900"/></svg></div>)}</div></details>}
 </figure>;
}
function AnimationPlayer({video}:{video:{title:string;src:string;poster:string;caption:string}}) {
 return <figure><video controls playsInline preload="none" poster={video.poster} aria-label={video.title}><source src={video.src} type="video/mp4"/>Your browser does not support embedded video.</video><figcaption><strong>{video.title}</strong><span>{video.caption}</span></figcaption></figure>;
}

function CaseFeature({feature,variant="conference"}:{feature:NonNullable<Project["conference"]>|NonNullable<Project["experimental"]>;variant?:"conference"|"experiment"}){
  return <section className={`case-conference${variant === "experiment" ? " case-experiment" : ""}`}>
    <div className="section-shell">
      <div className="conference-intro">
        <div>{feature.eyebrow && <p className="eyebrow">{feature.eyebrow}</p>}<h2>{feature.title}</h2></div>
        <div className="conference-copy">{feature.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <div className="conference-evidence">{feature.evidence.map(({value,label})=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      <div className="conference-figures">{feature.figures.map(item=><FigureCard key={item.src} item={item}/>)}</div>
      {feature.contribution && <p className="conference-contribution">{feature.contribution}</p>}
      <div className="conference-citation"><p className="eyebrow">{"recordLabel" in feature && feature.recordLabel ? feature.recordLabel : "Conference presentation"}</p><div className="conference-records">{feature.citations.map(item=><article key={`${item.event}-${item.title}`}><span>{item.year}</span><div><h3>{item.doi ? <a className="publication-doi-link" href={`https://doi.org/${item.doi}`} target="_blank" rel="noreferrer">{item.title} ↗</a> : item.title}</h3><p>{item.event}</p><p>{item.authors}</p></div></article>)}</div></div>
    </div>
  </section>;
}

function ResultsTable({headers,rows,label}:{headers:string[];rows:string[][];label:string}){
  return <><p className="table-scroll-hint">On smaller screens, scroll the table horizontally to see all columns.</p><div className="edu-table-wrap" role="region" aria-label={label} tabIndex={0}><table><thead><tr>{headers.map((header)=><th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row,i)=><tr key={`${label}-${i}`}>{row.map((value,j)=><td key={`${label}-${i}-${j}`}>{value}</td>)}</tr>)}</tbody></table></div></>;
}

function PortfolioStudy({study}:{study:NonNullable<Project["portfolioStudy"]>}){
  const [geometry, flow, turns, thermal] = study.figures;
  const metrics = [
    {value:"2.76 K",label:"lower peak stator temperature · flow 0.110 to 0.132 kg/s"},
    {value:"+61.3%",label:"hydraulic power · same flow increase, excluding pump efficiency"},
    {value:"1.44 K",label:"lower peak stator temperature · seven vs six turns at 0.110 kg/s"},
    {value:"+16.2%",label:"total pressure drop · same seven- vs six-turn comparison"},
  ];
  return <div className="edu-study edu-integrated">
    <nav className="case-section-nav section-shell" aria-label="Case study sections"><a href="#case-outcomes">Engineering outcomes</a><a href="#case-evidence">Figures and evidence</a><a href="#case-model">Model credibility</a><a href="#edu-next">Design implications</a></nav>
    <section className="case-visual section-shell"><FigureCard item={geometry} hero/></section>
    <section className="case-body section-shell">
      <aside><p className="eyebrow">Engineering question</p><h2>How much additional cooling do changes in flow and channel geometry buy, and at what pressure loss?</h2><p className="edu-story-copy">I investigated how coolant flow and helical-channel geometry change heat removal from an electric-drive housing. The engineering question was how much additional cooling each change buys, and what pressure loss accompanies it. Without a manufacturer temperature limit or pump-head budget, my result is a set of conditional design choices.</p></aside>
      <div><p className="eyebrow">Modelling approach</p><ol>
        {["Parameterized three-body CAD: coolant, aluminium housing and homogenized stator","STAR-CCM+ conjugate heat transfer with mesh-sensitivity and conservation checks","Flow-rate and channel-turn comparisons, plus a separate Fluent baseline benchmark"].map((item,i)=><li key={item}><span>0{i+1}</span>{item}</li>)}
      </ol><p className="edu-story-copy">I used approximately 5 kW of uniform stator heat generation, 65 °C inlet coolant and 50 wt% ethylene-glycol/water. Steady flow, constant properties, zero added interface resistance and adiabatic exterior surfaces define the comparison. They exclude alternative heat-rejection paths and contact penalties. The homogenized stator maximum is not a resolved winding hotspot.</p></div>
    </section>
    <section className="evidence-band" aria-label="Predicted thermal-hydraulic results"><div className="section-shell evidence-grid">{metrics.map(({value,label})=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section id="case-outcomes" className="case-results section-shell">
      <div><p className="eyebrow">Engineering outcomes</p><h2>What the Model Revealed</h2></div>
      <div className="outcome-list"><article id="edu-flow"><span>01</span><p className="edu-story-copy">Increasing flow from 0.110 to 0.132 kg/s reduced peak stator temperature by 2.76 K while total pressure drop rose 34.4%. Hydraulic power rose 61.3%; this is fluid-side pressure-flow power, excluding pump efficiency and electrical consumption. I would consider this change when a few kelvin matter and the cooling circuit can supply the additional flow and head.</p></article><article id="edu-turns"><span>02</span><p className="edu-story-copy">At 0.110 kg/s, seven turns at 25.7 mm pitch were 1.44 K cooler than the six-turn, 30 mm reference, with 16.2% higher total pressure drop. Five turns at 36 mm pitch were 1.91 K warmer, with 16.4% lower pressure drop. More turns change channel length and cooling coverage together; these results do not isolate either contribution or prove a particular loss mechanism.</p></article></div>
    </section>
    <section id="case-model" className="case-model-evidence section-shell">
      <p className="eyebrow">Model credibility</p><h2>Numerical basis and comparison limits</h2><p className="edu-story-copy">I used the intermediate mesh as the comparison reference after checking three resolutions, monitor histories and conservation. Successive peak-temperature changes were below 0.23 K; total-pressure-drop changes were about 1% or less. The response was non-monotonic, and the 1.003% Medium-to-Fine pressure change narrowly exceeded the provisional 1% target. This supports comparative use with qualifications, rather than formal mesh independence.</p>
      <details className="edu-archive"><summary>Model assumptions, material qualifications and solver settings</summary>
        <div className="edu-model-grid">{study.solverModels.map(({solver,details})=><article key={solver}><h3>{solver}</h3><p>{details}</p></article>)}</div>
        <div className="edu-model-grid">{study.modelDefinition.map(({heading,items})=><article key={heading}><h3>{heading}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div>
      </details> <details className="edu-archive"><summary>Numerical evidence and cross-solver differences</summary>
        <h3>Three meshes of the same reference geometry</h3><ResultsTable {...study.meshComparison} label="Mesh sensitivity and conservation"/>
        <ul>{study.checks.map(item=><li key={item}>{item}</li>)}</ul>
        <h3>Separate Fluent baseline</h3><ResultsTable {...study.solverComparison} label="Cross-solver baseline benchmark"/>
        <p>Fluent predicted a 1.71 K lower maximum and 9.77% higher total pressure drop. The temperature difference is comparable to the turn-count gains, so I would assess setup, mesh, property and reporting differences before relying on a small absolute margin. This benchmark is not experimental validation or proof that either solver is more accurate.</p>
      </details> <details className="edu-archive"><summary>Restarted monitor histories, residuals and wall y+</summary>
        <p>The retained histories cover iterations 2000 to 3000 following a restart. Pressure has a restart transient; temperature changes on a narrow vertical scale. Residuals decrease, but this record does not establish that every convergence criterion passed. The y+ map is wall-resolution evidence, not a mesh image.</p>
        <div className="figure-grid">{[...study.convergenceFigures,...study.verificationFigures].map(item=><FigureCard key={item.src} item={item}/>)}</div>
      </details>
    </section>
    <section id="case-evidence" className="case-figures section-shell">
      <div className="section-heading"><div><p className="eyebrow">Engineering evidence</p><h2>Figures That Support the Engineering Story</h2></div><p className="edu-story-copy">The six-turn reference at 0.110 kg/s predicts a 466.2 K stator maximum. Its displayed stator surface is hotter than the outer housing. I use this field to show the spatial thermal response; it does not establish local heat-transfer coefficients or a dominant thermal resistance.</p></div>
      <div className="figure-grid">{[thermal,flow,turns].map(item=><FigureCard key={item.src} item={item}/>)}</div>
      <details className="edu-archive"><summary>Reference reports and supporting coolant fields</summary>
        <ResultsTable {...study.baseline} label="Six-turn reference reports"/>
        <p>Static-pressure colour extrema are distinct from reported inlet-to-outlet total pressure drop. Coolant boundary temperature is a surface field, not bulk coolant temperature.</p>
        <div className="figure-grid">{study.supportingContours.map(item=><FigureCard key={item.src} item={item}/>)}</div>
      </details> <details className="edu-archive"><summary>Inspect the three flow-rate cases</summary><ResultsTable {...study.flow} label="Flow-rate comparison"/><p>Displayed temperatures and powers are rounded. Headline changes use the supplied verified project deltas; they cannot be reconstructed exactly from rounded entries.</p></details> <details className="edu-archive"><summary>Inspect channel-turn results at fixed mass flow</summary><ResultsTable {...study.pitch} label="Channel-turn comparison"/><p>These geometries use case-specific meshes, a 14 mm channel and the same 180 mm axial cooling span. Changing pitch also changes turn count. The available evidence does not establish a combined high-flow, seven-turn result.</p></details>
    </section>
    <section id="edu-next" className="case-results section-shell">
      <div><p className="eyebrow">Engineering judgement</p><h2>My recommendation depends on the constraint</h2></div>
      <div className="outcome-list"><article><span>01</span><p className="edu-story-copy">For a pressure-constrained circuit with sufficient thermal margin, I would carry the five-turn option forward. For a tighter thermal constraint with available head, I would assess seven turns or increased flow against the required margin. I would retain six turns as the comparison reference until those requirements are defined.</p></article><article><span>02</span><p className="edu-story-copy">Before a hardware decision, I would establish the allowable component temperatures and circuit pump curve, check sensitivity to contact resistance, material properties and heat distribution, and extend verification to candidate geometries. Winding-resolved temperatures, representative duty cycles, manufacturing and sealing review, and a measured thermal-hydraulic benchmark would be needed to judge hardware suitability.</p></article></div>
    </section>
    <section className="contribution section-shell"><p className="eyebrow">My contribution</p><p className="edu-story-copy">I built parameterized three-body CAD in Siemens Designcenter/NX, representing coolant, aluminium housing and a homogenized stator. I configured STAR-CCM+ conjugate-heat-transfer studies for mesh sensitivity, flow rate, channel diameter and helix pitch, plus a separate ANSYS Fluent baseline benchmark. I automated STAR-CCM+ extraction and a PyFluent CAD-to-results workflow with checks, restart recovery and exports. These workflows did not automate the entire multi-case design study; the comparisons here cover flow and turn count.</p></section>
  </div>;
}
export function generateStaticParams(){ return projects.map(({slug})=>({slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const project=projects.find(p=>p.slug===slug);
  if (!project) return {title: "Project not found | Vikash Vashisth | CFD Engineer"};
  const url = `/projects/${project.slug}/`;
  const image = project.cardImage?.src ?? project.heroImage?.src ?? "/vikash-vashisth.webp";
  const title = `${project.shortTitle} | Vikash Vashisth | CFD Engineer`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, siteName: "Vikash Vashisth | CFD Engineer", title, description: project.summary, images: [{ url: image, alt: project.cardImage?.alt ?? project.heroImage?.alt ?? "Vikash Vashisth" }] },
    twitter: { card: "summary_large_image", title, description: project.summary, images: [image] },
  };
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const project=projects.find((p)=>p.slug===slug); if(!project) notFound();
  const current=projects.findIndex(p=>p.slug===slug); const next=projects[(current+1)%projects.length];
  return <main className="case-page"><header className="case-nav"><a className="wordmark" href="/">VV<span>.</span></a><nav aria-label="Project navigation"><a href="/#projects">All projects</a><a href="/Vikash_Vashisth_CV.pdf?v=20261019-cv">Industry CV</a><a href="mailto:vikasche.engg@gmail.com">Contact</a></nav></header>
    <section className="case-hero section-shell"><p className="eyebrow">Case study {project.index} · {project.discipline}</p><h1>{project.title}</h1><p>{project.portfolioStudy ? project.summary : project.introduction ?? project.summary}</p></section>
    {project.contributionSummary && <section className="early-contribution section-shell"><p className="eyebrow">My contribution</p><p>{project.contributionSummary}</p></section>}
    {!project.portfolioStudy && <nav className="case-section-nav section-shell" aria-label="Case study sections"><a href="#case-outcomes">Engineering outcomes</a><a href="#case-evidence">Figures and evidence</a><a href="#case-record">Publications</a></nav>}
    {project.portfolioStudy ? <PortfolioStudy study={project.portfolioStudy}/> : <>
      <section className="case-visual section-shell">{project.heroImage ? <figure className="hero-research-figure"><a className="research-figure-link" href={project.heroImage.src} target="_blank" rel="noreferrer" aria-label={`Open full-size figure: ${project.heroImage.alt} (new tab)`}><img src={project.heroImage.src} alt={project.heroImage.alt}/></a><figcaption>{project.heroImage.caption}<a className="figure-fullsize" href={project.heroImage.src} target="_blank" rel="noreferrer">Open full-size figure <span aria-hidden="true">↗</span><span className="sr-only"> (new tab)</span></a></figcaption></figure> : <div className="large-placeholder"><span>Project figure</span><small>High-resolution export to be added</small></div>}</section>
      <section className="case-body section-shell"><aside><p className="eyebrow">Engineering question</p><h2>{project.question}</h2></aside><div><p className="eyebrow">Modelling approach</p><ol>{project.approach.map((item,i)=><li key={item}><span>0{i+1}</span>{item}</li>)}</ol></div></section>
      <section className="evidence-band"><div className="section-shell evidence-grid">{project.evidence.map(({value,label})=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
      {project.preliminary && <section className="baseline-results section-shell" aria-labelledby="baseline-title"><p className="eyebrow">In progress · Results at 1,000 iterations</p><h2 id="baseline-title">Preliminary Baseline Results - EDU Cooling Jacket</h2><div className="baseline-table-wrap"><table><thead><tr><th scope="col">Quantity</th><th scope="col">Value</th><th scope="col">Unit</th></tr></thead><tbody>{project.preliminary.rows.map(([quantity,value,unit])=><tr key={quantity}><th scope="row">{quantity}</th><td>{value}</td><td>{unit}</td></tr>)}</tbody></table></div><p>The negative inlet sign indicates flow entering the domain. The heat input and coolant heat gain differ by approximately <strong>6.75 W</strong>.</p><p><em>{project.preliminary.note}</em></p></section>}
      <section id="case-outcomes" className="case-results section-shell"><div><p className="eyebrow">Engineering outcomes</p><h2>What the Model Revealed</h2></div><div className="outcome-list">{project.outcomes.map((item,i)=><article key={item}><span>0{i+1}</span><p>{item}</p></article>)}</div></section>
      {project.modelEvidence && <section className="case-model-evidence section-shell" aria-labelledby="model-evidence-title"><p className="eyebrow">Model credibility</p><h2 id="model-evidence-title">Numerical basis and experimental evidence</h2><p>{project.modelEvidence.summary}</p><details className="edu-archive"><summary>Inspect the published model checks and comparisons</summary><div className="model-evidence-items">{project.modelEvidence.items.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.text}</p><a href={`https://doi.org/${item.doi}`} target="_blank" rel="noreferrer">{item.sourceLabel} ↗<span className="sr-only"> (new tab)</span></a></article>)}</div></details></section>}
      <section id="case-evidence" className="case-figures section-shell"><div className="section-heading"><div><p className="eyebrow">Engineering evidence</p><h2>Figures That Support the Engineering Story</h2></div><p>{project.preliminary ? "Geometry, mesh and field plots document the preliminary baseline model." : "Each visual demonstrates model setup, validation, physical insight or quantified performance."}</p></div><div className="figure-grid">{project.figures.map(item=><FigureCard key={item.title} item={item}/>)}</div></section>
      {project.preliminary && <section className="case-figures baseline-convergence section-shell"><div className="section-heading"><div><p className="eyebrow">Numerical checks</p><h2>Baseline Convergence Checks</h2></div><p>Monitor histories support assessment of iterative convergence. They do not establish mesh independence or experimental validation.</p></div><div className="figure-grid">{project.preliminary.figures.map(item=><figure key={item.src}><a className="research-figure-link" href={item.src} target="_blank" rel="noreferrer" aria-label={`Open full-size figure: ${item.title} (new tab)`}><img src={item.src} alt={item.alt} loading="lazy"/></a><figcaption><strong>{item.title}</strong><span>{item.caption}</span><a className="figure-fullsize" href={item.src} target="_blank" rel="noreferrer">Open full-size figure ↗</a></figcaption></figure>)}</div></section>}
    </>}
    {project.assessment && <section className="case-assessment section-shell"><h2>Interpreting the comparison</h2><p>{project.assessment}</p></section>}
    {project.conference && <CaseFeature feature={project.conference}/>} 

    {project.breakupAnimations && <section className="breakup-animations section-shell" aria-labelledby="breakup-animations-title"><p className="eyebrow">Interface-resolving simulation</p><h2 id="breakup-animations-title">Breakup animations</h2><p>Rendered interfaces show deformation and fragmentation. The blue geometry provides spatial context. Player time is playback time, not a recovered simulation timestamp.</p><div className="breakup-animation-featured">{project.breakupAnimations.featured.map(video=><AnimationPlayer key={video.src} video={video}/>)}</div><details className="breakup-animation-supporting"><summary>Additional views</summary><div className="video-grid">{project.breakupAnimations.supporting.map(video=><AnimationPlayer key={video.src} video={video}/>)}</div></details></section>}
    {project.coupling && <section className="case-coupling section-shell" aria-labelledby="coupling-title">
      <div className="coupling-heading"><p className="eyebrow">Completed multiphysics workflow</p><h2 id="coupling-title">HFSS-Fluent Coupling</h2><p>{project.coupling.note}</p></div>
      <dl className="coupling-status">
        <div><dt>Implemented workflow</dt><dd>{project.coupling.completed}</dd></div>
        <div><dt>Two-way data exchange</dt><dd>{project.coupling.details}</dd></div>
      </dl>
    </section>}
    {project.videos && <section className="case-videos section-shell"><div className="section-heading"><div><p className="eyebrow">Transient mixing</p><h2>Tracer Transport Across Three Stator Designs</h2></div><p>Original thesis simulations compare circular-hole, fine-hole and slotted stators side by side.</p></div><div className="video-grid"><AnimationPlayer video={project.videos[0]}/></div><details className="supporting-details"><summary>Additional tracer-release locations</summary><div className="video-grid">{project.videos.slice(1).map(video=><AnimationPlayer key={video.src} video={video}/>)}</div></details></section>}
    {project.collaboration && <CaseFeature feature={project.collaboration}/>} 
    {project.experimental && <details className="supporting-details section-shell"><summary>Supporting experimental work: nanoparticle de-agglomeration</summary><CaseFeature feature={project.experimental} variant="experiment"/></details>}
    {!project.portfolioStudy && <section className="contribution section-shell"><p className="eyebrow">My contribution</p><p>{project.contribution}</p></section>}
    {project.publications.length > 0 && <section id="case-record" className="case-publications section-shell"><p className="eyebrow">Related publications</p>{project.publications.map(pub=><article key={pub.title}><span>{pub.year}</span><div><h3>{pub.doi ? <a className="publication-doi-link" href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">{pub.title} ↗</a> : pub.title}</h3><p>{pub.journal}</p></div></article>)}</section>}
    <a className="next-project" href={`/projects/${next.slug}/`}><span>Next case study</span><strong>{next.shortTitle} ↗</strong></a>
  </main>;
}
