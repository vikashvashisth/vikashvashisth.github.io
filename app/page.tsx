import { featuredPublications, projects } from "./content";

const capabilities = [
  ["Multiphase Flow", "VOF · Turbulence-Interface Interactions · Bubble & Droplet Dynamics · Non-Newtonian Free-Surface Flows"],
  ["Reacting Flow & Plasma", "Multi-Species Transport · Finite-Rate Chemistry · Coupled Flow, Thermal & Chemical Analysis · Plasma Reactor · Electromagnetic-CFD Coupling"],
  ["Turbulence & Rotating Flows", "LES · RANS · Turbulent Flow Structures · Energy Dissipation · Rotor-Stator Interactions · Mixing & Residence-Time Analysis"],
  ["Heat Transfer & Thermal Management", "Conjugate Heat Transfer (CHT) · Liquid Cooling · Convective Heat Transfer · Thermal Radiation · Thermal Quenching"],
  ["Flow Solvers & Numerical Methods", "Compressible & Incompressible Flows · Pressure-Based & Density-Based Solvers · Transient Simulation · Adaptive Mesh Refinement"],
  ["Verification & Validation", "Mesh-Independence Studies · Convergence Assessment · Experimental Validation"],
];

const engineeringTools = [
  ["Simulation & Multiphysics", "ANSYS Fluent · STAR-CCM+ · ANSYS HFSS · ANSYS Workbench"],
  ["CAD & Geometry", "Siemens NX · Ansys DesignModeler"],
  ["Programming, Automation & Analysis", "UDF/C · Python · PyFluent · PyAEDT · MATLAB · Jupyter Notebook"],
  ["Computing & Post-Processing", "HPC · Linux · Tecplot"],
];

function Nav() {
  return (
    <header className="site-header">
      <a className="identity" href="#top" aria-label="Vikash Vashisth, back to top">
        <span className="identity-mark" aria-hidden="true">VV<span>.</span></span>
        <span className="identity-name">Vikash Vashisth<small>CFD Engineer</small></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#projects">Projects</a><a href="#expertise">Expertise</a>
        <a href="#publications">Publications</a><a href="#about">About</a>
      </nav>
      <a className="contact-link" href="mailto:vikasche.engg@gmail.com">Contact <span aria-hidden="true">↗</span></a>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#projects">Skip to projects</a>
      <Nav />
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">CFD Engineer <span aria-hidden="true">/</span> Gothenburg, Sweden</p>
          <h1 id="hero-title">Advanced CFD <span>for Multiphase, Reacting, and Thermal-Fluid Systems</span></h1>
          <p className="lede"><strong>CFD grounded in physical understanding, numerical verification and experimental evidence.</strong></p>
          <p className="hero-detail">I use CFD to investigate performance limitations and evaluate design improvements, combining fluid mechanics, heat transfer and multiphysics analysis. My engineering assessments draw on physical interpretation, numerical verification and experimental evidence.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
            <a className="button secondary" href="/Vikash_Vashisth_CV.pdf?v=20261019-cv" download="Vikash_Vashisth_CV.pdf">Download industry CV <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Experience and CFD workflow">
            <div><strong>9+</strong><span>years in CFD & multiphysics</span></div>
            <div><strong>4+</strong><span>years post-PhD experience</span></div>
            <div className="workflow-proof"><strong>End-to-end CFD</strong><span>From problem definition to engineering conclusions</span></div>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame"><img src="/vikash-vashisth.webp" alt="Vikash Vashisth" fetchPriority="high" /></div>
          <div className="portrait-note"><span>Currently</span><strong>Researcher at Chalmers</strong><small>Open to Work</small></div>
        </div>
      </section>

      <section className="positioning" aria-label="Engineering approach">
        <div className="section-shell positioning-inner"><p>CFD Simulation</p><p>Multiphysics</p><p>Numerical Verification</p><p>Experimental Validation</p><p>Engineering Analysis</p></div>
      </section>

      <section id="projects" className="section-shell block-section">
        <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2>CFD in Practice</h2></div><p>Case studies connecting detailed CFD analysis, experimental evidence and engineering outcomes, alongside a completed thermal-fluid design study. Every figure comes from my own work.</p></div>
        <div className="project-grid">
          {projects.map((project) => {
            const cardImage = project.cardImage || project.heroImage;
            return (
              <a key={project.slug} className="project-card" href={`/projects/${project.slug}/`}>
                <div className="card-top"><span>{project.index}</span><p>{project.discipline}</p></div>
                {cardImage ? <div className="card-research-image"><img src={cardImage.src} alt={cardImage.alt} loading="lazy" /></div> : <div className="figure-placeholder"><span>Project figure</span><small>to be added</small></div>}
                <div className="card-copy"><h3>{project.shortTitle}</h3><p>{project.summary}</p></div>
                <div className="card-link">View case study <span aria-hidden="true">↗</span></div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="additional-projects section-shell">
        <div className="section-heading"><div><p className="eyebrow">Further experience</p><h2>Coupled Thermal-Flow Analysis</h2></div></div>
        <article className="supporting-project">
          <div className="supporting-project-intro"><span>Heat transfer · Radiation · Process equipment</span><h3>Mixed Convective and Radiative Heat Transfer in Spiral-Coiled Tubes</h3><p>Numerical analysis of turbulent convection coupled with thermal radiation in compact spiral-coiled heat exchangers for high-temperature heat recovery.</p></div>
          <div className="supporting-project-details"><div><small>Models</small><strong>RNG k-ε + P-1 radiation</strong></div><div><small>Parameter space</small><strong>Re 10,000-100,000</strong></div><div><small>Engineering question</small><strong>Radiation contribution to heat transfer</strong></div></div>
          <div className="supporting-project-footer"><p>Examined the influence of curvature ratio, wall emissivity and optical thickness on heat-transfer performance.</p><a href="https://doi.org/10.1115/1.4043946" target="_blank" rel="noreferrer">View publication ↗</a></div>
        </article>
      </section>

      <section id="expertise" className="expertise-section">
        <div className="section-shell">
          <div className="section-heading light"><div><p className="eyebrow">02 / Technical Expertise</p><h2>Physics. Numerics.<br/>Engineering Judgement</h2></div><p>Modelling choices matched to the physical problem, with numerical checks and experimental comparison to establish what the results can support.</p></div>
          <div className="capability-grid">{capabilities.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><ul className="capability-items">{text.split(" · ").map(term => <li key={term}>{term}</li>)}</ul></article>)}</div>
          <section className="engineering-tools" aria-labelledby="tools-title">
            <h3 id="tools-title">Simulation & Engineering Tools</h3>
            <div className="tools-grid">{engineeringTools.map(([title, text]) => <article key={title}><h4>{title}</h4><p>{text}</p></article>)}</div>
          </section>
        </div>
      </section>

      <section id="publications" className="section-shell block-section">
        <div className="section-heading"><div><p className="eyebrow">03 / Technical record</p><h2>Selected Publications</h2></div><p>Recent publications, 2022-2026, supporting the methods, physical insights and results presented in this portfolio.</p></div>
        <div className="publication-list">{featuredPublications.map(([year, title, journal, doi], i) => <article key={title}><span>{year}</span><h3>{doi ? <a className="publication-doi-link" href={`https://doi.org/${doi}`} target="_blank" rel="noreferrer">{title} ↗</a> : title}</h3><p>{journal}</p><b aria-hidden="true">{String(i + 1).padStart(2, "0")}</b></article>)}</div>
        <div className="publication-footer"><a className="text-link" href="https://scholar.google.co.in/citations?user=JfO8GY8AAAAJ&hl=en" target="_blank" rel="noreferrer">View all publications on Google Scholar <span aria-hidden="true">↗</span></a></div>
      </section>

      <section id="about" className="about-section">
        <div className="section-shell about-grid">
          <div><p className="eyebrow">04 / Professional profile</p><h2>Technical Depth<br/>Practical Perspective</h2><p className="about-name">Vikash Vashisth<span>CFD Engineer · Gothenburg, Sweden</span></p></div>
          <div className="about-copy">
            <p className="about-lead">My work combines detailed CFD and multiphysics analysis with experimental validation and physical interpretation to understand complex flows and evaluate system performance.</p>
            <p>At Chalmers University of Technology, I lead CFD simulations and technical interpretation in collaborative reactor-development work. My experience spans plasma and reacting flows, interface-resolving multiphase simulations, rotor-stator mixers, non-Newtonian free surfaces and heat transfer.</p>
            <p>Collaborations with NitroCapt, Reckitt Benckiser, Maastricht University and Loughborough University have connected my modelling work with experiments and equipment performance. This includes presenting results, examining model assumptions and developing recommendations with experimental and engineering colleagues.</p>
            <p>I am pursuing industry roles in CFD and simulation engineering, applying this experience to design development, performance evaluation and challenging flow problems.</p>
            <p className="work-authorisation"><strong>Work authorisation:</strong> Authorised to work in Sweden. No employer sponsorship required to start employment.</p>
            <div className="profile-links"><a href="https://www.linkedin.com/in/vikash-vashisth-phd-b8576838" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://scholar.google.co.in/citations?user=JfO8GY8AAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar ↗</a><a href="https://orcid.org/0000-0003-4644-2624" target="_blank" rel="noreferrer">ORCID ↗</a><a href="mailto:vikasche.engg@gmail.com">Email ↗</a></div>
          </div>
        </div>
      </section>

      <footer><div><p>Open to CFD & Simulation Roles</p><a href="mailto:vikasche.engg@gmail.com">vikasche.engg@gmail.com ↗</a></div><div><span>Vikash Vashisth</span><span>Gothenburg, Sweden · Open to relocation</span></div></footer>
    </main>
  );
}
