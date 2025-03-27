---
layout: page
title: Mapping Cancerous Tumors in 3D
description: Tumor Cell Type Prediction App
img: assets/img/spatialtrans16_9_2new.jpg
importance: 4
category: work
related_publications: true
---

<div class="project">

<div class="flex-col-image">
  {% include figure.liquid path="assets/img/spatialtrans16_9_2new.jpg" class="side-image" alt="Spatial Transcriptomics: 3D tissue analysis" %}
  <div class="side-caption">
    <strong>Fig 1:</strong> By mapping gene activity in 3D, we can see distinct tumor regions.
  </div>
</div>

<div class="flex-row">
  <div class="flex-col-text">
    <p>
      A <strong>tumor</strong> isn't just a blob of identical cells. Each has its own mix of cell types, often arranged unevenly. Spatial transcriptomics is a new RNA sequencing technique that shows us where these different cells actually sit inside the tumor.
    </p>

    <p>
      This project uses spatial transcriptomics data from 12 tumors, measuring expression at 50,000+ sites to map cell types in 3D. Our goal is to train a classifier that identifies what type of tumor cell (like "Leading Edge" vs "Tumor Core") lives at each spot. 
    </p>

    <p>
      The original code and modeling details are in my <strong>CS 7641</strong> course project, with a big chunk of the actual data processing and model training documented in <code>original_cell_class_nb.ipynb</code>. We got decent accuracy (~94%) on our final binary classification. 
    </p>
  </div>
</div>

<div class="project-section">
  <h2>The Science → Understanding Tumor Heterogeneity</h2>
  
  <div class="flex-row">
    <div class="flex-col-text">
      <p>
        Tumors are complex structures with different regions that behave in unique ways. Understanding this spatial heterogeneity is critical for developing targeted treatments and improving patient outcomes.
      </p>
    </div>
  </div>
  
  <h3>The Problem → Traditional Sequencing</h3>
  
  <div class="flex-col-image">
    {% include figure.liquid path="assets/img/bell-curve-graph-normal-or-gaussian-distribution-template-probability-theory-mathematical-function-statistics-or-logistic-data-diagram-isolated-on-white-background-vector.jpg" class="side-image" alt="Bell curve showing averaging effect" %}
    <div class="side-caption">
      <strong>Fig 2:</strong> Bulk sequencing lumps everything together into one big average.
    </div>
  </div>
  
  <div class="flex-row">
    <div class="flex-col-text">
      <p>
        A lot of "classic" sequencing methods blend all tumor cells together into a single sample. That means we only see <em>average</em> gene expression. It misses out on the 3D differences—like whether a cell is on the invasive outer edge or deep in the center. 
      </p>
      <p>
        Why this matters:
      </p>
      <ul>
        <li><strong>No spatial details</strong>: We can't see which cells are near blood vessels or the tumor's boundary.</li>
        <li><strong>Over-simplification</strong>: Tumors are complex, but averaging them can hide key behaviors.</li>
        <li><strong>Less targeted treatment</strong>: If we don't know where the most aggressive regions are, we can't focus therapy there.</li>
      </ul>
    </div>
  </div>
  
  <h3>Solution → Spatial Transcriptomics</h3>
  
  <div class="flex-col-image">
    {% include figure.liquid path="assets/img/10x-Genomics-spatial-2-1-720x380.png" class="side-image" alt="Spatial transcriptomics workflow" %}
    <div class="side-caption">
      <strong>Fig 3:</strong> Specialized slides capture RNA signals along with their locations.
    </div>
  </div>
  
  <div class="flex-row">
    <div class="flex-col-text">
      <p>
        Spatial transcriptomics keeps track of the <strong>location</strong> of each read. After cutting a tumor into thin slices, each slice is placed on a special slide, which catches the RNA at specific coordinates. That way, we know exactly where each cell was in the tissue.  
      </p>
      <h4>Leading Edge (LE) vs. Tumor Core (TC)</h4>
      <p>
        Researchers often describe at least two main zones in solid tumors:
      </p>
      <ul>
        <li><strong>Leading Edge (LE)</strong>: Aggressive outer zone that can invade healthy tissue.</li>
        <li><strong>Tumor Core (TC)</strong>: Deeper area in the mass, still malignant but sometimes less invasive.</li>
      </ul>
      <p>
        Our classifier aims to mark each coordinate as LE or TC. This helps pinpoint where the most dangerous spots might be.
      </p>
    </div>
  </div>
</div>

<div class="project-section">
  <h2>Implementation Details → Process & Model</h2>

<div class="flex-row">
  <div class="flex-col-text">
    <h3>Data Setup</h3>
    <ol>
      <li><strong>Tumor Slicing & Sequencing</strong><br>  
         Each tumor is thinly sliced, and each slice is placed on an RNA-capturing slide.</li>  
      <li><strong>Coordinate-Based Dataset</strong><br>  
         For every (x,y)—and sometimes z—coordinate, we have gene expression levels.<br>  
         Pathologists label those spots as "LE" or "TC," giving us ground truth.</li>  
      <li><strong>Preprocessing</strong><br>  
         We normalized read counts, removed noise, and handled batch effects (since these slides come from different tumors).</li>
    </ol>

    <h3>LE vs. TC Classification</h3>
    <ul>
      <li><strong>Modeling</strong>: We used a straightforward Python ML pipeline. All the details—like feature selection (log2 fold change), cross-validation, and final metrics—are in <code>original_cell_class_nb.ipynb</code>.</li>  
      <li><strong>Accuracy</strong>: Around 94% on our test splits.</li>  
      <li><strong>Output</strong>: Each coordinate gets a label of "LE" or "TC," effectively creating a map of the tumor's cell zones.</li>
    </ul>

    <h3>App & AWS Setup</h3>
    <ol>
      <li><strong>Frontend</strong><br>  
         Built with <strong>React + TypeScript + Vite</strong>. Users can upload new tumor data via a simple form.</li>  
      <li><strong>Backend (AWS Lambda & DynamoDB)</strong><br>  
         The trained model (Python) runs on AWS Lambda for quick, serverless predictions.<br>  
         Prediction results go into DynamoDB, so we can later fetch them for visualization.</li>  
      <li><strong>3D Visualization</strong><br>  
         The user sees a color-coded 3D rendering of the tumor. LE vs. TC spots are clearly marked.</li>
    </ol>
  </div>
</div>
</div>

<div class="project-section">
  <h2>Results → Impact & Future Plans</h2>
  
  <div class="flex-row">
    <div class="flex-col-text">
      <ul>
        <li><strong>Better Surgical Targeting</strong>: Surgeons could pay special attention to the leading edge areas when removing tumors.</li>  
        <li><strong>Tailored Therapies</strong>: Aggressive edge regions might need more potent treatments.</li>  
        <li><strong>Tracking Changes</strong>: You can compare these spatial maps before and after treatment to see if the dangerous cells are shrinking.</li>
      </ul>

      <p><strong>Where to go next:</strong></p>
      <ul>
        <li><strong>More Cell Types</strong>: We're only doing LE vs. TC here, but you could expand to immune cells, stroma, etc.</li>  
        <li><strong>Deeper 3D</strong>: Capture thicker sections to build a full volumetric model.</li>  
        <li><strong>Automation</strong>: Develop a one-click pipeline, from raw images to final classification, that reduces manual intervention.</li>
      </ul>
    </div>
  </div>
</div>

<div class="project-section">
  <h2>Conclusion → Clinical Impact</h2>
  
  <div class="flex-row">
    <div class="flex-col-text">
      <p>Spatial transcriptomics finally brings location into the picture. Instead of averaging a tumor into one big reading, we see exactly where the most worrisome cells live. Our classifier (detailed in <code>original_cell_class_nb.ipynb</code>) helps separate the leading edge from the core, and our AWS-powered web tool makes it simple to explore these 3D maps. By knowing <em>where</em> these cells are, doctors can make better decisions about treatments and surgeries.</p>
    </div>
  </div>
</div>

<div class="references">
  <h2>References</h2>
  <p>1. Arora, R. et al. <em>Spatial transcriptomics reveals distinct and conserved tumor core and edge architectures.</em> <strong>Nature Communications</strong> (2023).</p>
  <p>2. Puram, S. V. et al. <em>Single-cell transcriptomic analysis of primary and metastatic tumor ecosystems in head and neck cancer.</em> <strong>Cell</strong> (2017).</p>
  <p>3. <a href="https://www.10xgenomics.com/spatial-transcriptomics">10x Genomics: Spatial Transcriptomics</a></p>
</div>

</div>