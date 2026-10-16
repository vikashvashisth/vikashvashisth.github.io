export type Project = {
  slug: string; index: string; title: string; shortTitle: string; discipline: string; summary: string; question: string;
  introduction?: string;
  preliminary?: { rows: string[][]; note: string; figures: {title: string; src: string; alt: string; caption: string}[] };
  portfolioStudy?: {
    status: string;
    objective: string;
    contribution: string;
    scope: string[];
    assumptions: string[];
    modelDefinition: { heading: string; items: string[] }[];
    solverModels: { solver: string; details: string }[];
    baseline: { headers: string[]; rows: string[][] };
    meshComparison: { headers: string[]; rows: string[][] };
    flow: { headers: string[]; rows: string[][] };
    pitch: { headers: string[]; rows: string[][] };
    solverComparison: { headers: string[]; rows: string[][] };
    checks: string[];
    limitations: string[];
    figures: { title: string; src: string; alt: string; caption: string }[];
    supportingContours: { title: string; src: string; alt: string; caption: string }[];
    verificationFigures: { title: string; src: string; alt: string; caption: string }[];
    convergenceFigures: { title: string; src: string; alt: string; caption: string }[];
  };
  approach: string[]; evidence: { value: string; label: string }[]; outcomes: string[]; contribution: string;
  heroImage?: { src: string; alt: string; caption: string };
  cardImage?: { src: string; alt: string };
  figures: { title: string; src?: string; alt?: string; caption?: string }[];
  videos?: { title: string; src: string; poster: string; caption: string }[];
  coupling?: { completed: string; ongoing: string; note: string };
  conference?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    evidence: { value: string; label: string }[];
    figures: { title: string; src: string; alt: string; caption: string }[];
    contribution?: string;
    citations: { year: string; title: string; event: string; authors: string; doi?: string }[];
  };
  collaboration?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    evidence: { value: string; label: string }[];
    figures: { title: string; src: string; alt: string; caption: string }[];
    contribution?: string;
    citations: { year: string; title: string; event: string; authors: string; doi?: string }[];
  };
  experimental?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    evidence: { value: string; label: string }[];
    figures: { title: string; src: string; alt: string; caption: string }[];
    contribution?: string;
    recordLabel?: string;
    citations: { year: string; title: string; event: string; authors: string; doi?: string }[];
  };
  publications: { title: string; journal: string; year: string; doi?: string }[];
};

export const projects: Project[] = [
  {
    slug: "microwave-plasma-quenching", index: "01", title: "Microwave Plasma Reactor Modelling & Forced-Jet Quenching", shortTitle: "Plasma Reactor & Quenching", discipline: "Reacting flow · Plasma · LES · Validation",
    summary: "A validated 3D CFD framework connecting plasma thermo-chemistry, flow organisation and rapid quenching to reactor performance for sustainable nitrogen fixation.",
    introduction: "Validated 3D multiphysics CFD analysis of coupled flow, heat transfer and finite-rate chemistry in a microwave plasma reactor. The analysis connects plasma behaviour and quenching to NO yield and energy performance.",
    question: "How can a microwave plasma reactor preserve newly formed NO while reducing the energy penalty caused by high-temperature backward reactions?",
    approach: ["Three-dimensional reacting-flow simulations with finite-rate air chemistry", "Warm-plasma treatment with chemical non-equilibrium", "Transient LES for the forced-quenching configuration", "Direct comparison with Raman, FTIR and wall-temperature measurements", "Baseline intrinsic quenching compared with split-feed impinging jets"],
    evidence: [{ value: "~6000 K", label: "resolved plasma-core temperature" }, { value: "+6-10%", label: "predicted NO-yield improvement" }, { value: "−6-8%", label: "predicted specific-energy reduction" }, { value: "<800 K", label: "quenched product-gas temperature" }],
    outcomes: ["Resolved the coupled mass, momentum, heat and chemical-reaction fields inside a strongly three-dimensional swirling reactor.", "Identified spatially distinct NO-formation and NO-destruction regions and explained the role of intrinsic radial cooling.", "Showed how impinging jets reorganise the flow and suppress downstream thermal decomposition.", "Selected a quench configuration that improved predicted NO yield by 6-10% and reduced specific energy consumption by 6-8% relative to the intrinsic-quenching baseline."],
    contribution: "Led development of the 3D CFD framework, selected the turbulence and kinetic modelling approach, performed simulations and numerical checks, compared predictions with experimental measurements, and translated the results into reactor-design recommendations with cross-functional collaborators.",
    heroImage: { src: "/research/plasma/hero.webp", alt: "Graphical summary of microwave plasma reactor modelling and forced-jet quenching", caption: "From validated reactor-scale CFD to forced-quenching design: temperature, flow and NO chemistry resolved in three dimensions." },
    figures: [
      { title: "Reactor and measurement schematic", src: "/research/plasma/reactor-schematic.webp", alt: "Microwave plasma reactor and optical measurement arrangement", caption: "Experimental reactor and diagnostic arrangement used to anchor the CFD model." },
      { title: "Temperature validation", src: "/research/plasma/temperature-validation.webp", alt: "Comparison of simulated and experimental plasma temperature profiles", caption: "Axial temperature predictions compared with experiments at multiple radial locations." },
      { title: "Intrinsic-quenching net production rate", src: "/research/plasma/intrinsic-fields.webp", alt: "Net rate of production field in the intrinsic-quenching reactor, in kmol per cubic metre per second", caption: "The contour shows the net species production-rate field [kmol/m³·s] in the intrinsic-quenching reactor." },
      { title: "Axial nitric-oxide molar-flow comparison", src: "/research/plasma/quenching-performance.webp", alt: "Nitric-oxide molar flow versus axial position for non-quenching at 20 SLM and forced quenching at 10 plus 10 SLM", caption: "The curves compare axial NO molar flow for the 20 SLM non-quenching case and the 10+10 SLM forced-quenching case, with jet injection at x/D = 8. The source figure labels 54.3% as the potential maximum quenching efficiency." },
    ],
    coupling: {
      completed: "A one-way/manual workflow connecting ANSYS HFSS and ANSYS Fluent has been implemented, providing a foundation for electromagnetic-CFD analysis.",
      ongoing: "Iterative two-way coupling using temperature-dependent plasma properties and Python/PyFluent automation remain in development. The automated coupled loop is not yet demonstrated and validated.",
      note: "This workflow is a separate extension to the plasma work, not the method used to obtain the published 2024 and 2026 results presented above.",
    },
    publications: [{ title: "Analysis of a Plasma Reactor Performance for Direct Nitrogen Fixation by Use of Three-Dimensional Simulations and Experiments", journal: "Chemical Engineering Journal 497, 154756", year: "2024", doi: "10.1016/j.cej.2024.154756" }, { title: "Analysis of Forced and Intrinsic Quenching in a Plasma Reactor for Nitrogen Fixation by Use of Three-Dimensional Simulations and Experiments", journal: "Chemical Engineering Journal 543, 178575", year: "2026", doi: "10.1016/j.cej.2026.178575" }],
  },
  {
    slug: "bubble-breakup-les-vof", index: "02", title: "Bubble and Droplet Breakup in Turbulent Flows", shortTitle: "Bubble and Droplet Breakup", discipline: "Multiphase · LES-VOF · HPC · Validation",
    summary: "High-resolution LES-VOF simulations and matched experiments reveal how turbulent vortices, fluid-property ratios and internal flow govern bubble and droplet deformation and fragmentation.",
    question: "How do turbulent vortices, viscosity ratio and density ratio change breakup time, internal flow and daughter-fragment formation?",
    approach: ["Large-eddy simulation coupled with volume-of-fluid interface tracking", "Dynamic Smagorinsky-Lilly subgrid model and adaptive mesh refinement", "Matched high-speed experiments under identical hydrodynamic conditions", "Property-ratio comparison across air-water, dodecane-water and octanol-water systems", "Analysis of interfacial energy, internal velocity, pressure, stress and daughter sizes", "Large-scale parallel simulation using national HPC resources"],
    evidence: [{ value: "94%", label: "turbulent kinetic energy resolved" }, { value: "d₀/100", label: "local interface resolution" }, { value: "30×", label: "neck velocity vs mean bubble velocity" }, { value: "HPC", label: "large-scale numerical execution" }],
    outcomes: ["Captured stochastic deformation and daughter-size distributions in agreement with matched experiments.", "Resolved the accelerating internal redistribution flow that precedes bubble-neck collapse.", "Explained why liquid droplets and air bubbles deform and fragment over different timescales.", "Connected viscosity and inertia to thread formation, satellite fragments and daughter-size outcomes.", "Produced mechanistic evidence for improving population-balance breakup kernels used in reactor-scale CFD."],
    contribution: "Developed and executed the interface-resolving CFD methodology, designed the numerical-resolution strategy, planned and executed the HPC simulations, compared multiple fluid systems, validated predictions against high-speed experiments and led the mechanistic interpretation, conference presentation and journal publication.",
    heroImage: { src: "/research/bubble/hero.webp", alt: "Graphical summary of internal stress and velocity during turbulent bubble breakup", caption: "Interface-resolving LES-VOF exposes the internal velocity and stress fields that precede neck collapse." },
    figures: [
      { title: "Adaptive interface mesh", src: "/research/bubble/adaptive-mesh.webp", alt: "Adaptive computational mesh around deforming bubble interfaces", caption: "Adaptive refinement tracks deformation and neck formation down to a local resolution of d₀/100." },
      { title: "Experimental breakup sequences", src: "/research/bubble/experiment-simulation.webp", alt: "Photographic high-speed sequences of turbulent bubble breakup", caption: "High-speed photographs record the bubble deformation and breakup sequence." },
      { title: "Internal redistribution flow", src: "/research/bubble/internal-flow.webp", alt: "Velocity vectors and contours inside a deforming bubble before breakup", caption: "The internal redistribution flow accelerates as the neck approaches collapse." },
    ],
    conference: {
      title: "Comparing Bubble and Droplet Breakup Mechanisms",
      paragraphs: [
        "Presented at ISCRE 28 in Finland, this study extended the interface-resolving LES-VOF methodology from air bubbles to liquid droplets with different density and viscosity ratios. The simulations matched the experimental geometry and hydrodynamic conditions and resolved short-lived pressure, deformation and internal-flow mechanisms that could not be measured directly.",
        "The air-water system exhibited rapid neck formation and internal redistribution flow. The dodecane-water system deformed over a longer timescale and produced more daughter fragments, while the more viscous octanol-water system formed long interfacial threads and fragmented into as many as 50 daughter droplets.",
        "These results provide mechanistic evidence for improving breakup kernels used in population-balance and reactor-scale multiphase CFD models."
      ],
      evidence: [
        { value: "Micrometre-scale resolution", label: "Small daughter fragments resolved beyond experimental imaging limits" },
        { value: "Up to 50", label: "daughter fragments in the viscous system" },
        { value: "Large Eddy Simulations", label: "interface-resolving CFD methodology" },
        { value: "HPC", label: "large-scale numerical execution" }
      ],
      figures: [
        { title: "Bubble and Droplet Dynamics in Continuous Media", src: "/research/bubble/iscre/behavior-map.webp", alt: "Conceptual comparison of bubble, low-viscosity droplet and high-viscosity droplet deformation and breakup in turbulent continuous media", caption: "The behavior map summarizes how bubbles, lower-viscosity droplets and more viscous droplets follow different deformation, necking and fragmentation pathways in turbulent flow." },
        { title: "Matched Breakup Sequences", src: "/research/bubble/iscre/breakup-comparison.webp", alt: "Experimental and simulated breakup sequences for a dodecane droplet and an air bubble in water", caption: "Representative experimental and simulated sequences show the longer deformation period of the dodecane droplet and the faster neck formation of the air bubble." },
        { title: "Interfacial Deformation and Pressure", src: "/research/bubble/iscre/pressure-comparison.webp", alt: "Normalized interfacial area and dynamic-pressure evolution for dodecane-water and air-water breakup", caption: "Normalized interfacial area and dynamic-pressure fields expose different deformation timescales and pressure-driven breakup pathways." },
        { title: "Turbulence-Interface Interaction During Breakup", src: "/research/bubble/iscre/turbulence-interface-interaction.webp", alt: "Normalized interfacial area with turbulence structures and pressure fields during air-bubble breakup", caption: "A time-resolved sequence links changes in interfacial area to the surrounding turbulent structures and the pressure field inside the deforming bubble." }
      ],
      citations: [
        { year: "2024", title: "Mechanistic Studies on Bubble and Droplet Dynamics in Turbulent Flows", event: "ISCRE 28, Finland", authors: "Vikash Vashisth and Ronnie Andersson" }
      ]
    },
    publications: [{ title: "Dynamics of Bubble Breakup Under Turbulent Flow Conditions", journal: "Chemical Engineering Journal 511, 162019", year: "2025", doi: "10.1016/j.cej.2025.162019" }],
  },
  {
    slug: "shear-thinning-rivulet", index: "03", title: "Gravity-Driven Shear-Thinning Rivulet Flow", shortTitle: "Shear-Thinning Rivulet Flow", discipline: "Non-Newtonian · Free surface · VOF · Industrial process CFD",
    summary: "An experimental-numerical investigation of wetting, fingering instability and gravity-driven transport of formulated shear-thinning liquids on inclined surfaces.",
    question: "Can a 3D free-surface model predict the unstable spreading and wetting footprint of formulated shear-thinning fluids across changing inclinations?",
    approach: ["Three-dimensional VOF model for gravity-driven free-surface transport", "Cross-type rheology fitted to measured shear-thinning properties", "Contact-line, surface-tension and inclination effects", "Experimental comparison of wetted area, front length and flow morphology", "Process-focused collaboration with Reckitt Benckiser during the IIT Guwahati appointment"],
    evidence: [{ value: "3D VOF", label: "interface-resolving framework" }, { value: "Exp. + CFD", label: "paired validation methodology" }, { value: "Non-Newtonian", label: "measured rheology included" }],
    outcomes: ["Reproduced the evolution of gravity-driven rivulet morphology and fingering behaviour.", "Compared simulated and measured wetted area and propagation length across formulations.", "Assessed how plate inclination changes spreading, instability and wettability.", "Demonstrated a transferable workflow for coating, cleaning, film-flow and formulated-product applications."],
    contribution: "Developed the transient 3D VOF model, coupled interface transport with measured non-Newtonian rheology, established mesh independence, validated predictions against experiments and delivered technical findings and process-optimisation recommendations for the IIT Guwahati-Reckitt Benckiser collaboration.",
    heroImage: { src: "/research/rivulet/hero.webp", alt: "Side-by-side CFD and experimental gravity-driven shear-thinning rivulet profiles", caption: "Direct comparison of the predicted and observed free-surface instability for a formulated shear-thinning liquid." },
    cardImage: { src: "/research/rivulet/card-combined.webp", alt: "Adjustable inclined experimental rig alongside the CFD domain and computational mesh" },
    figures: [
      { title: "Adjustable inclined experimental rig", src: "/research/rivulet/experimental-setup.webp", alt: "Experimental apparatus for gravity-driven flow on an adjustable inclined plate", caption: "The adjustable platform controlled plate inclination while the evolving wetted footprint was recorded." },
      { title: "Computational domain and mesh", src: "/research/rivulet/mesh.webp", alt: "Three-dimensional inclined computational domain and structured mesh", caption: "The 3D VOF domain resolves gravity-driven spreading, the free surface and contact-line development." },
      { title: "Quantitative experiment-CFD validation", src: "/research/rivulet/quantitative-validation.webp", alt: "Experimental and numerical comparisons of covered area and propagation length", caption: "Predicted wetted area and propagation length were evaluated against measurements across operating conditions." },
      { title: "Formulation-dependent flow profiles", src: "/research/rivulet/formulation-profiles.webp", alt: "Predicted rivulet profiles for four shear-thinning liquid formulations", caption: "Distinct formulations produce different spreading footprints and fingering patterns under otherwise comparable conditions." },
    ],
    publications: [{ title: "Experimental and Numerical Validation on Instability of Gravity-Driven Shear Thinning Fluid", journal: "Lecture Notes in Mechanical Engineering", year: "2023", doi: "10.1007/978-981-97-6776-2_35" }],
  },
  {
    slug: "rotor-stator-mixer", index: "04", title: "Rotor-Stator Mixer Modelling & Design", shortTitle: "Rotor-Stator Mixer Design", discipline: "Rotating machinery · LES/RANS · Mixing · Scale-up",
    summary: "A body of CFD work connecting stator geometry, rotating flow structures, turbulence and residence-time behaviour to the performance of high-shear mixers.",
    question: "How do rotor-stator geometry and fluid rheology change pumping, turbulence, power demand and the time required to achieve uniform mixing?",
    approach: ["Transient sliding-mesh LES and engineering RANS modelling", "Dynamic Smagorinsky treatment of rotating turbulent structures", "Newtonian and power-law non-Newtonian fluids", "Geometry comparison across circular, square, inclined, slotted, mesh and disintegrated stators", "Power-number validation, tracer RTD and mixing-time analysis"],
    evidence: [{ value: "210", label: "holes in the inclined stator design" }, { value: "±22.5°", label: "engineered jet inclination" }, { value: "LES + RANS", label: "fidelity matched to the question" }, { value: "≤10%", label: "power-number deviation from benchmark" }],
    outcomes: ["Explained how stator openings control jet penetration, recirculation and dead-zone formation.", "Quantified turbulence statistics, dissipation and blade-passing fluctuations using LES.", "Compared power demand, pumping behaviour, RTD and mixing time across designs and viscosities.", "Translated flow-field evidence into geometry-selection guidance for dispersion and process intensification."],
    contribution: "Led the CFD methodology and analysis across multiple rotor-stator studies, developed novel geometry concepts, validated power consumption, quantified turbulence and mixing metrics and connected local flow mechanisms to design and scale-up decisions.",
    heroImage: { src: "/research/mixer/hero.webp", alt: "Flow trajectories produced by circular-hole and square-hole rotor-stator mixer heads", caption: "Stator geometry reorganises jet penetration, circulation loops and the regions available for bulk mixing." },
    figures: [
      { title: "Mixer-head geometry family", src: "/research/mixer/geometries.webp", alt: "Developed rotor-stator head and alternative circular, fine-hole and slotted stators", caption: "The geometry study compares opening size, shape and distribution while retaining the same mixer architecture." },
      { title: "Sliding-mesh resolution", src: "/research/mixer/mesh.webp", alt: "Computational mesh around the rotor, stator and sliding interface", caption: "Local refinement resolves the rotor-stator gap, stator openings and transient rotating interface." },
      { title: "Turbulent dissipation structures", src: "/research/mixer/dissipation.webp", alt: "Three-dimensional turbulent dissipation structures around rotor-stator mixer heads", caption: "High-dissipation structures identify where the mixer concentrates deformation and energy input." },
      { title: "Tracer mass-fraction histories", src: "/research/mixer/rtd.webp", alt: "Tracer mass fraction versus flow time at monitoring locations and rotational speeds", caption: "Tracer mass fraction is plotted against flow time for multiple monitoring locations and rotor speeds." },
    ],
    videos: [
      { title: "Tracer release case A", src: "/research/mixer/tracer-case-1.mp4", poster: "/research/mixer/tracer-case-1-poster.jpg", caption: "Side-by-side transient transport through circular-hole, fine-hole and slotted stators for a tracer introduced near the mixer level." },
      { title: "Tracer release case B", src: "/research/mixer/tracer-case-2.mp4", poster: "/research/mixer/tracer-case-2-poster.jpg", caption: "The same three geometries compared for a tracer initially located in the lower vessel region." },
      { title: "Tracer release case C", src: "/research/mixer/tracer-case-3.mp4", poster: "/research/mixer/tracer-case-3-poster.jpg", caption: "The same geometry comparison for a tracer introduced in the upper vessel region." },
    ],
    collaboration: {
      eyebrow: "Collaborative CHISA study",
      title: "Blending Performance of Batch Rotor-Stators",
      paragraphs: [
        "Developed with collaborators at Loughborough University, this CHISA 2024 study examined bulk blending across three batch rotor-stator head designs. RANS CFD compared water and aqueous glycerol at 500 and 2000 rpm, while power characterization and conductivity measurements quantified mixing to 95% homogeneity.",
        "The flow fields showed that higher viscosity shortened the jets leaving the mixer head and changed the bulk recirculation pattern. Increasing the rotor speed strengthened axial-to-radial transport and produced additional vortices around the vessel baffles.",
        "At equal power input per unit volume, the three heads produced similar blending performance. The measured mixing times followed the general form of the axial-flow impeller correlation after adjusting its constant to 6.3. The result highlights a practical scale-up risk: some batch rotor-stator designs may still need a supplementary impeller to maintain adequate bulk circulation."
      ],
      evidence: [
        { value: "3 mixer heads", label: "slotted, gridded and toothed designs compared" },
        { value: "0.001-0.012 Pa s", label: "fluid-viscosity range evaluated" },
        { value: "500-2000 rpm", label: "rotor-speed range evaluated" },
        { value: "95% homogeneity", label: "conductivity-based mixing-time criterion" }
      ],
      figures: [
        { title: "Viscosity-Dependent Bulk Circulation", src: "/research/mixer/chisa/viscosity-flow-patterns.webp", alt: "CFD flow patterns for water and aqueous glycerol in a batch rotor-stator vessel at 500 rpm", caption: "The more viscous liquid produces shorter jets and reorganizes the vessel-scale vortices and recirculation loops." },
        { title: "Rotor-Speed Effect on Vessel Flow", src: "/research/mixer/chisa/rotor-speed-flow-patterns.webp", alt: "CFD flow patterns for water at 500 and 2000 rpm in a batch rotor-stator vessel", caption: "At 2000 rpm, stronger discharge drives axial-to-radial transport and creates multiple vortices around the baffles." },
        { title: "Turbulent Kinetic Energy Near the Stator", src: "/research/mixer/chisa/turbulent-kinetic-energy.webp", alt: "Turbulent kinetic energy fields near the rotor-stator head for water and aqueous glycerol", caption: "Turbulent kinetic energy concentrates around the stator region and the edges of the stator openings." },
        { title: "Blending and Mixing-Time Validation", src: "/research/mixer/chisa/blending-validation.webp", alt: "Blending performance as a function of power input and comparison of measured and predicted mixing times", caption: "The head designs collapse onto comparable power-based blending trends, while measured 95% mixing times are compared with the adjusted correlation." }
      ],
      contribution: "My contribution: Performed the CFD analysis used to compare viscosity- and speed-dependent flow structures and contributed the results to the collaborative interpretation of batch blending performance.",
      citations: [
        { year: "2024", title: "Blending Performance of Batch Rotor-Stators", event: "CHISA 2024 - Conference contribution", authors: "A. Williams, V. Vashisth, S. Tsochataridou, C. D. Rielly and N. G. Ozcan-Taskin" }
      ]
    },
    experimental: {
      eyebrow: "Experimental research",
      title: "Experimental Nanoparticle De-agglomeration",
      paragraphs: [
        "Two experimental studies investigated how rotor-stator geometry, ultrasonication, liquid viscosity and solid loading affect the de-agglomeration of fumed silica nanoparticles. Particle-size analysis, rheology, electron microscopy and calorimetric power measurements connected operating conditions to breakup mechanisms, dispersion stability and energy consumption.",
        "The rotor-stator study compared disintegrated and mesh heads at 4000-8000 rpm. The mesh head generated a higher volume of fines and produced particles as small as approximately 30 nm, compared with approximately 50 nm for the disintegrated head, but required greater power input.",
        "The ultrasonication study extended the investigation to silica concentrations of 1-10 wt% and continuous-phase viscosities of 1-100 mPa s. Erosion remained the dominant breakup mechanism, while higher solid loading improved the reported processing efficiency because more fines were produced without a significant increase in power draw."
      ],
      evidence: [
        { value: "~30 nm", label: "smallest fines produced using the mesh head" },
        { value: "1-100 mPa s", label: "continuous-phase viscosity range investigated" },
        { value: "1-10 wt%", label: "silica concentration range studied using ultrasonication" },
        { value: "4000-8000 rpm", label: "rotor-speed range evaluated experimentally" }
      ],
      figures: [
        { title: "Experimental Systems and Mixer Heads", src: "/research/mixer/nanoparticle/experimental-systems.webp", alt: "Ultrasonication and rotor-stator experimental systems with disintegrated and mesh stator heads", caption: "Probe ultrasonication and batch rotor-stator systems provided complementary high-shear processing routes. Sources: Vikash and Kumar (2020) and Vashisth et al. (2022)." },
        { title: "Particle-Size Outcomes", src: "/research/mixer/nanoparticle/particle-size-outcomes.webp", alt: "Rotor-stator particle-size distributions and Z-average comparison across rotor speeds and liquid viscosities", caption: "Rotor-stator processing shifted particle volume from coarse agglomerates toward fines, while the mesh head produced lower Z-average values across the tested rotor speeds and viscosities. Source: Vashisth et al. (2022)." },
        { title: "Rheological Transition During Ultrasonication", src: "/research/mixer/nanoparticle/rheology-transition.webp", alt: "Shear stress as a function of shear rate for a 10 weight percent Aerosil 200 dispersion in water at different ultrasonication times", caption: "At 10 wt% silica loading, the dispersion shows a non-Newtonian response after 15 minutes of ultrasonication and moves toward Newtonian behavior at longer treatment times. Source: Vikash and Kumar (2020)." },
        { title: "Microscopy Evidence of Erosion", src: "/research/mixer/nanoparticle/erosion-microscopy.webp", alt: "Scanning and transmission electron microscopy images of de-agglomerated silica nanoparticles", caption: "SEM and TEM images show small fragments alongside larger agglomerates, supporting erosion as the dominant breakup mechanism. Source: Vikash and Kumar (2020)." },
        { title: "Power and Performance Tradeoff", src: "/research/mixer/nanoparticle/power-performance.webp", alt: "Ultrasonication power draw across silica concentrations and rotor-stator power draw across speeds and viscosities", caption: "Power draw increased with liquid viscosity and rotor speed. The mesh head improved fines generation but required more power than the disintegrated head. Sources: Vikash and Kumar (2020) and Vashisth et al. (2022)." }
      ],
      contribution: "My contribution: Shared responsibility for conceptualization and led methodology, validation and formal analysis across both studies. I conducted the ultrasonication investigation and visualization and wrote the original drafts of both manuscripts.",
      recordLabel: "Related experimental publications",
      citations: [
        { year: "2022", title: "Nanoparticle De-agglomeration in Viscous Fluids Using Different High Shear Mixer Geometries", event: "Chemical Engineering Science 248, 117132", authors: "Vikash Vashisth, K.D.P. Nigam and Vimal Kumar", doi: "10.1016/j.ces.2021.117132" },
        { year: "2020", title: "Ultrasonic-Assisted De-agglomeration and Power Draw Characterization of Silica Nanoparticles", event: "Ultrasonics Sonochemistry 65, 105061", authors: "Vikash and Vimal Kumar", doi: "10.1016/j.ultsonch.2020.105061" }
      ]
    },
    publications: [
      { title: "Hydrodynamics and Mixing Characterization in a Novel High Shear Mixer", journal: "Chemical Engineering and Processing 120, 57-67", year: "2017", doi: "10.1016/j.cep.2017.06.008" },
      { title: "Turbulent Statistics of Flow Fields Using Large Eddy Simulations in Batch High Shear Mixers", journal: "Chemical Engineering Research and Design 147, 561-569", year: "2019", doi: "10.1016/j.cherd.2019.05.045" },
      { title: "Design and Development of High Shear Mixers: Fundamentals, Applications and Recent Progress", journal: "Chemical Engineering Science 232, 116296", year: "2021", doi: "10.1016/j.ces.2020.116296" },
      { title: "Effect of Stator Geometries on Flow Fields and Mixing Performance for Viscous Fluids", journal: "Chemical Engineering and Processing 180, 108595", year: "2022", doi: "10.1016/j.cep.2021.108595" },
    ],
  },
];

projects.push({
  "slug": "edu-cooling-jacket",
  "index": "05",
  "title": "Preliminary Baseline Results - EDU Cooling Jacket",
  "shortTitle": "EDU Cooling Jacket - Conjugate Heat Transfer",
  "discipline": "STAR-CCM+ · CHT · Preliminary results",
  "summary": "A developing electric drive unit cooling-jacket model coupling coolant flow with heat conduction through the housing and stator. Preliminary thermal results and conservation checks establish a baseline for further verification.",
  "question": "How does a helical cooling passage remove stator heat, and what temperature distribution and pressure loss does the baseline model predict?",
  "approach": [
    "Conjugate heat transfer in STAR-CCM+, coupling coolant flow and solid conduction",
    "Helical coolant passage within the housing-stator geometry",
    "Polyhedral volume mesh with near-wall prism layers in the coolant passage",
    "A 5,000 W stator heat input and coolant mass flow of 0.110 kg/s",
    "Monitoring coolant pressure drop, maximum stator temperature and energy balance over 1,000 iterations"
  ],
  "evidence": [
    {
      "value": "5,000 W",
      "label": "stator heat input"
    },
    {
      "value": "12.571 K",
      "label": "mass-flow-averaged coolant temperature rise"
    },
    {
      "value": "465.838 K",
      "label": "maximum stator temperature"
    },
    {
      "value": "0.1350%",
      "label": "preliminary energy imbalance"
    }
  ],
  "outcomes": [
    "The baseline predicts a mass-flow-averaged coolant temperature increase from 338.150 K to 350.721 K.",
    "The reported coolant heat gain is 4,993.25 W, approximately 6.75 W below the stator heat input.",
    "The solid-temperature field identifies a hot region within the stator, with a reported maximum of 465.838 K. This result is a baseline prediction, not evidence of an acceptable operating temperature.",
    "The monitored pressure drop and maximum stator temperature approach stable values during the run. Mesh independence has not yet been established."
  ],
  "contribution": "Developed the STAR-CCM+ baseline model, prepared the computational mesh, ran the thermal-fluid simulation, and evaluated temperature fields, pressure loss and conservation reports. Further work is planned on mesh sensitivity, design comparisons, automation and comparison with ANSYS Fluent.",
  "heroImage": {
    "src": "/research/edu/geometry.png",
    "alt": "EDU housing and stator geometry with a helical coolant passage",
    "caption": "Baseline electric drive unit cooling-jacket geometry showing the helical coolant path and port arrangement."
  },
  "figures": [
    {
      "title": "Geometry Cutaway",
      "src": "/research/edu/cutaway.png",
      "alt": "Geometry Cutaway",
      "caption": "A section through the housing-stator assembly exposes the coolant passage arrangement."
    },
    {
      "title": "Axial Mesh Section",
      "src": "/research/edu/mesh.png",
      "alt": "Axial Mesh Section",
      "caption": "Polyhedral mesh across the solid regions and coolant passage, with local refinement near the channel."
    },
    {
      "title": "Near-Wall Mesh Detail",
      "src": "/research/edu/mesh-detail.png",
      "alt": "Near-Wall Mesh Detail",
      "caption": "Prism layers resolve the near-wall coolant region. The image documents mesh structure; mesh independence remains to be established."
    },
    {
      "title": "Solid Temperature Distribution",
      "src": "/research/edu/solid-temperature.png",
      "alt": "Solid Temperature Distribution",
      "caption": "Baseline solid-temperature contour. The report gives a maximum stator temperature of 465.838 K."
    },
    {
      "title": "Coolant Boundary Temperature",
      "src": "/research/edu/coolant-temperature.png",
      "alt": "Coolant Boundary Temperature",
      "caption": "Temperature on the coolant boundary surface. These local surface values are distinct from the mass-flow-averaged inlet and outlet temperatures in the results table."
    },
    {
      "title": "Coolant Static Pressure",
      "src": "/research/edu/pressure.png",
      "alt": "Coolant Static Pressure",
      "caption": "Static-pressure distribution along the helical passage. The colour-scale extrema are not an inlet-to-outlet pressure-drop report."
    }
  ],
  "publications": [],
  "preliminary": {
    "rows": [
      [
        "Inlet mass flow",
        "-0.110000",
        "kg/s"
      ],
      [
        "Outlet mass flow",
        "+0.110000",
        "kg/s"
      ],
      [
        "Inlet coolant temperature, mass-flow averaged",
        "338.150",
        "K"
      ],
      [
        "Outlet coolant temperature, mass-flow averaged",
        "350.721",
        "K"
      ],
      [
        "Coolant temperature rise",
        "12.571",
        "K"
      ],
      [
        "Maximum stator temperature",
        "465.838",
        "K"
      ],
      [
        "Stator heat input",
        "5,000.00",
        "W"
      ],
      [
        "Coolant heat gain",
        "4,993.25",
        "W"
      ],
      [
        "Energy imbalance",
        "0.1350",
        "%"
      ]
    ],
    "note": "Preliminary results at 1,000 iterations. Coolant heat gain calculated using mass flow, constant specific heat capacity, and coolant temperature rise. Mesh independence has not yet been established.",
    "figures": [
      {
        "title": "Energy Balance Error",
        "src": "/research/edu/energy-convergence.png",
        "alt": "Energy Balance Error",
        "caption": "Energy-balance error decreases over the simulation. The reported imbalance at 1,000 iterations is 0.1350%."
      },
      {
        "title": "Coolant Pressure Drop",
        "src": "/research/edu/pressure-convergence.png",
        "alt": "Coolant Pressure Drop",
        "caption": "The pressure-drop monitor settles after the initial iteration transients. The full iteration history is retained."
      },
      {
        "title": "Maximum Stator Temperature",
        "src": "/research/edu/temperature-convergence.png",
        "alt": "Maximum Stator Temperature",
        "caption": "The maximum stator temperature approaches a stable value, with a final reported value of 465.838 K."
      }
    ]
  }
});

const eduProject = projects.find(({ slug }) => slug === "edu-cooling-jacket");
if (!eduProject) {
  throw new Error("EDU Cooling Jacket project entry is missing.");
}

const eduPortfolioStudy: NonNullable<Project["portfolioStudy"]> = {
  status: "Completed independent engineering study",
  objective:
    "A helical cooling jacket must remove stator heat without imposing excessive pressure loss. I compared channel-turn count and operating flow to quantify the thermal–hydraulic trade-off.",
  contribution:
    "I built the parameterized three-body CAD in Siemens Designcenter/NX, prepared the conjugate-heat-transfer models, and studied mesh sensitivity, flow rate, channel diameter and helix pitch. I developed assisted STAR-CCM+ extraction and PyFluent CAD-to-results workflows for setup checks, checkpoint recovery, conservation reports and standardized exports; multi-case exploration was not fully automated.",
  scope: [
    "Compared the six-turn reference geometry with five- and seven-turn channels at 0.110 kg/s, and evaluated flow rates from 0.088 to 0.132 kg/s.",
    "Compared the STAR-CCM+ reference with a separately configured ANSYS Fluent baseline.",
  ],
  assumptions: [
    "Comparative steady conjugate heat transfer uses a homogenized stator, constant properties, uniform heat input, zero added interface resistance and adiabatic exterior surfaces.",
  ],
  modelDefinition: [
    {
      heading: "Operating conditions and boundary assumptions",
      items: [
        "Nominal 5 kW heat load distributed uniformly through an equivalent stator. The discrete-mesh volumetric source is not normalized to exactly 5,000 W in every case; reported integrated heat input varies slightly by mesh.",
        "Coolant inlet temperature: 338.15 K (65 °C). Studied mass-flow range: 0.088–0.132 kg/s; six-turn reference flow: 0.110 kg/s.",
        "Thermally coupled interfaces have zero additional contact resistance. Exterior surfaces are adiabatic; ambient convection, radiation and other heat-rejection paths are excluded.",
      ],
    },
    {
      heading: "Coolant properties",
      items: [
        "50 wt% ethylene-glycol/water; constant density 1,036 kg/m³, specific heat 3,611 J/(kg·K), dynamic viscosity 0.00118 Pa·s and thermal conductivity 0.414 W/(m·K).",
        "Setup history references MEGlobal data near 65 °C; the edition, correlation and interpolation method are unverified.",
      ],
    },
    {
      heading: "Solid properties",
      items: [
        "Aluminium housing: conductivity 237 W/(m·K), density 2,702 kg/m³ and specific heat 903 J/(kg·K); alloy grade and original property source are unverified.",
        "Homogenized stator: conductivity 21 W/(m·K), density 7,450 kg/m³ and specific heat 463 J/(kg·K); windings and laminations are not resolved.",
      ],
    },
    {
      heading: "Near-wall and design-selection criteria",
      items: [
        "Fluent achieved y+: minimum 0.0699, maximum 2.7854 and area average 1.2795.",
        "Provisional 0.5 K temperature and 1% pressure mesh-sensitivity targets are numerical checks, not product acceptance requirements.",
        "Hydraulic power is fluid-side pressure-flow power, not pump electrical consumption.",
      ],
    },
  ],
  solverModels: [
    {
      solver: "STAR-CCM+",
      details:
        "Steady segregated flow and energy with SST k–ω and All y+ Wall Treatment. Velocity and pressure under-relaxation factors are 0.7 and 0.3.",
    },
    {
      solver: "ANSYS Fluent",
      details:
        "Steady pressure-based, energy-enabled SST k–ω model with SIMPLE pressure–velocity coupling and second-order pressure and transport schemes. Fluent's named near-wall option is not recorded.",
    },
  ],
  baseline: {
    headers: [
      "Design",
      "Flow (kg/s)",
      "Peak stator temperature (K)",
      "Total pressure drop (Pa)",
      "Hydraulic power (W)",
    ],
    rows: [
      ["Six-turn reference design", "0.110", "466.2", "3,208", "0.341"],
    ],
  },
  meshComparison: {
    headers: ["Mesh", "Cells", "Integrated heat input (W)", "Peak stator temperature (K)", "Total pressure drop (Pa)", "Energy imbalance (%)"],
    rows: [
      ["Production", "1.07 million", "5,000.00", "466.0", "3,222", "0.00675"],
      ["Medium · reference", "2.47 million", "5,000.71", "466.2", "3,208", "0.00181"],
      ["Fine", "3.69 million", "5,001.40", "466.1", "3,240", "0.0167"],
    ],
  },
  flow: {
    headers: [
      "Case",
      "Flow (kg/s)",
      "Stator max (K)",
      "Total Δp (Pa)",
      "Hydraulic power (W)",
    ],
    rows: [
      ["Low", "0.088", "470.1", "2,257", "0.192"],
      ["Six-turn reference", "0.110", "466.2", "3,208", "0.341"],
      ["High", "0.132", "463.4", "4,312", "0.549"],
    ],
  },
  pitch: {
    headers: [
      "Design",
      "Pitch (mm)",
      "Stator max (K)",
      "Total Δp (Pa)",
      "Hydraulic power (W)",
    ],
    rows: [
      ["Six-turn reference design", "30", "466.2", "3,208", "0.341"],
      ["Five-turn cooling channel", "36", "468.1", "2,681", "0.285"],
      ["Seven-turn cooling channel", "25.7", "464.8", "3,727", "0.396"],
    ],
  },
  solverComparison: {
    headers: ["Metric", "STAR-CCM+ Medium", "ANSYS Fluent", "Difference"],
    rows: [
      ["Maximum stator temperature (K)", "466.2", "464.5", "Fluent is 1.71 K lower"],
      ["Total pressure drop (Pa)", "3,208", "3,522", "Fluent is 9.77% higher"],
    ],
  },
  checks: [
    "The Medium mesh is used as the intermediate comparison baseline. Production-to-Medium changes were 0.226 K in peak temperature and 0.426% in total pressure drop; Medium-to-Fine changes were 0.148 K and 1.003%, respectively.",
    "This mesh-independence assessment is non-monotonic and does not establish that all fields are mesh independent. The Medium-to-Fine pressure-drop change is slightly above the provisional 1% check.",
    "For the Medium mesh, energy imbalance is 0.00181% and signed mass imbalance is −6.18 × 10⁻⁸ kg/s.",
    "Across the low, reference and high flow cases, energy imbalance was 0.0154%, 0.00181% and 0.0111%, respectively.",
  ],
  limitations: [
    "No approved maximum stator temperature or hydraulic/pumping budget is established; design selection remains conditional on those requirements.",
    "The solver comparison is not experimental validation; hardware performance requires testing.",
  ],
  figures: [
    {
      title: "Six-turn reference geometry",
      src: "/research/edu/geometry.png",
      alt: "Electric-drive housing, homogenized stator and six-turn helical coolant channel",
      caption:
        "Parameterized housing, homogenized stator and six-turn coolant channel at 30 mm pitch. This reference geometry is distinct from the Medium computational mesh.",
    },
    {
      title: "Flow-rate thermal–hydraulic comparison",
      src: "/research/edu/flow-rate-comparison.png",
      alt: "Aligned panels show maximum stator temperature and total pressure drop versus coolant mass flow, highlighting the 0.110 kilograms per second Medium baseline",
      caption:
        "Peak stator temperature and total pressure drop across three flow rates on the Medium mesh; the six-turn reference is 0.110 kg/s.",
    },
    {
      title: "Channel-turn thermal–hydraulic comparison",
      src: "/research/edu/helix-pitch-comparison.png",
      alt: "Aligned panels compare maximum stator temperature and total pressure drop for six-turn, five-turn and seven-turn cooling channels",
      caption:
        "Peak stator temperature and total pressure drop for the six-turn reference and five- and seven-turn channels at 0.110 kg/s.",
    },
    {
      title: "Stator temperature distribution · six-turn reference",
      src: "/research/edu/Medium_Solid_Temperature.png",
      alt: "Solid-surface temperature contour for the housing and homogenized stator in the STAR-CCM+ Medium baseline",
      caption:
        "The STAR-CCM+ scene titled “Stator Temperature Distribution” shows the housing and homogenized-stator surfaces for the six-turn reference at 0.110 kg/s on the Medium mesh.",
    },
    {
      title: "Six-turn reference · coolant static pressure",
      src: "/research/edu/Medium_Static_Pressure.png",
      alt: "Coolant static-pressure contour from the documented STAR-CCM+ Medium baseline",
      caption:
        "Static pressure distribution along the coolant channel for the six-turn reference at 0.110 kg/s. The total pressure drop is reported separately.",
    },
  ],
  supportingContours: [
    {
      title: "Six-turn reference · coolant boundary temperature",
      src: "/research/edu/Medium_Coolant_Boundary_Temperature.png",
      alt: "Coolant boundary surface-temperature contour from the documented STAR-CCM+ Medium baseline",
      caption:
        "Coolant-side boundary temperature for the six-turn reference at 0.110 kg/s. This surface field is distinct from bulk coolant temperature.",
    },
  ],
  verificationFigures: [
    {
      title: "STAR-CCM+ Medium · coolant-wall y+",
      src: "/research/edu/Medium_Wall_Yplus.png",
      alt: "STAR-CCM+ Medium coolant-wall y+ distribution on selected displayed parts",
      caption: "STAR-CCM+ Medium wall y+ on the displayed coolant-wall parts; legend range is approximately 0.047–2.81.",
    },
  ],
  convergenceFigures: [
    {
      title: "Six-turn reference · total pressure-drop monitor",
      src: "/research/edu/Medium_Pressure_Drop_Convergence.png",
      alt: "STAR-CCM+ Medium total pressure-drop monitor from iteration 2000 to 3000",
      caption:
        "The total pressure-drop monitor settles near 3.21 kPa over the final 1,000 iterations.",
    },
    {
      title: "Six-turn reference · maximum stator-temperature monitor",
      src: "/research/edu/Medium_Stator_Temperature_Convergence.png",
      alt: "STAR-CCM+ Medium maximum stator-temperature monitor from iteration 2000 to 3000",
      caption:
        "The maximum stator-temperature monitor is nearly steady around 466.2 K over the final 1,000 iterations.",
    },
    {
      title: "Six-turn reference · residual history",
      src: "/research/edu/Medium_Residual_Convergence.png",
      alt: "STAR-CCM+ Medium residuals from iteration 2000 to 3000",
      caption:
      "STAR-CCM+ residual histories over iterations 2000–3000.",
    },
  ],
};

Object.assign(eduProject, {
  title: "EDU Cooling Jacket - Thermal-Hydraulic Design Study",
  shortTitle: "EDU Cooling Jacket Design Study",
  discipline: "STAR-CCM+ · ANSYS Fluent · Conjugate heat transfer",
  summary:
    "I developed a conjugate-heat-transfer model of an electric-drive cooling jacket to quantify the trade-off between stator cooling and coolant pressure loss.",
  introduction: eduPortfolioStudy.objective,
  contribution: eduPortfolioStudy.contribution,
  portfolioStudy: eduPortfolioStudy,
  preliminary: undefined,
  heroImage: undefined,
  cardImage: {
    src: "/research/edu/geometry.png",
    alt: "EDU cooling-jacket housing, stator and six-turn helical coolant passage",
  },
  figures: [],
  outcomes: [],
});

export const featuredPublications: [string, string, string, string?][] = [
  ["2026", "Analysis of Forced and Intrinsic Quenching in a Plasma Reactor for Nitrogen Fixation", "Chemical Engineering Journal", "10.1016/j.cej.2026.178575"],
  ["2025", "Dynamics of Bubble Breakup Under Turbulent Flow Conditions", "Chemical Engineering Journal", "10.1016/j.cej.2025.162019"],
  ["2024", "Analysis of a Plasma Reactor Performance for Direct Nitrogen Fixation", "Chemical Engineering Journal", "10.1016/j.cej.2024.154756"],
  ["2023", "Experimental and Numerical Validation on Instability of Gravity-Driven Shear Thinning Fluid", "Lecture Notes in Mechanical Engineering", "10.1007/978-981-97-6776-2_35"],
  ["2022", "Effect of Stator Geometries on Flow Fields and Mixing Performance for Viscous Fluids", "Chemical Engineering and Processing", "10.1016/j.cep.2021.108595"],
];
