---
layout: distill
title: Mapping Cancerous Tumors in 3D
description: Tumor Cell Type Prediction App
tags: [Cancer, Spatial Transcriptomics, 3D Mapping, Machine Learning]
giscus_comments: true
date: 2025-03-14
featured: true
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true

authors:
  - name: LE Mullins
    url: "https://linkedin.com/in/yourlinkedin"
    affiliations:
      name: AI & Data Science

bibliography: spatial-transcriptomics.bib

toc:
  - name: Introduction
  - name: "The Problem: Traditional Sequencing"
  - name: "Solution: Spatial Transcriptomics"
  - name: Implementation Details
    subsections:
      - name: Data Extraction & Preprocessing
      - name: LE vs TC Classification
      - name: Web App & AWS Integration
  - name: Results & Next Steps
  - name: Conclusion
  - name: References

_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: center;
    margin: 12px 0;
    font-size: 16px;
  }
  .spatial-img {
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    display: block;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .img-caption {
    text-align: center;
    font-style: italic;
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: #666;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
  }
  .figure-container {
    margin: 2rem 0;
  }
---

# Introduction

This project explores a **3D mapping approach to cancer tumors**, showing where each cell type lives within the tumor mass. Conventional methods often treat the tumor as one uniform sample, but in reality, **different regions can behave very differently**. Our aim is to help clinicians detect and target the most dangerous tumor zones.

<div class="figure-container">
  {% include figure.liquid path="assets/img/spatialtrans16_9_2new.jpg" class="spatial-img" alt="Spatial Transcriptomics: 3D tissue analysis showing gene expression at specific coordinates within the tumor" %}

</div>

---

# The Problem: Traditional Sequencing

Traditional sequencing workflows blend many cells together, resulting in an "average" gene expression profile. This hides **important spatial details**. For instance, cells on the **tumor's outer rim** may invade and adapt more aggressively than cells in the inner core. Missing that distinction can hamper treatment strategies and conceal key biological signals.

Common pitfalls of traditional approaches:
- **No spatial context** → We lose which cells are near edges or blood vessels.  
- **Limited insight** → Tumors are heterogeneous; ignoring spatial variability leads to oversimplified conclusions.  
- **Challenges in therapy** → Without knowing which zones drive spread, doctors can't refine surgical margins or drug targeting effectively.

---

# Solution: Spatial Transcriptomics

Spatial transcriptomics solves these issues by measuring gene expression **at each coordinate** in the tissue. Surgeons remove the tumor, cut it into thin slices, and place them on specialized slides that capture RNA reads. This preserves the "where" of each cell—so we know which spots are near the boundary, which are in the center, and how gene activities differ.

<div class="figure-container">
  {% include figure.liquid path="assets/img/10x-Genomics-spatial-2-1-720x380.png" class="spatial-img" alt="Workflow diagram showing spatial transcriptomics process from tissue sample to gene expression data" %}
  <div class="img-caption">
    <strong>Figure 2:</strong> The spatial transcriptomics workflow captures gene expression while preserving positional information. Tissue sections are placed on specialized slides with barcoded capture spots that record RNA from their specific locations.
  </div>
</div>

## Leading Edge (LE) vs. Tumor Core (TC)

Many studies highlight that tumors split into at least two broad areas:
- **Leading Edge (LE)**: Cells here can invade healthy tissue. They often resist treatments and adapt quickly.
- **Tumor Core (TC)**: Cells lie deeper within the mass. They tend to be more stable or differentiated, yet still malignant.

By mapping these zones, we can pinpoint **which spots** are associated with worse outcomes (e.g., metastasis) and tailor interventions accordingly.

---

# Implementation Details

### Data Extraction & Preprocessing

1. **Tumor Slicing & Sequencing**  
   - Each tumor is sliced into thin sections.  
   - RNA capture spots on each slide record which genes are active.  

2. **Coordinate-Based Dataset**  
   - For every (x, y) location—and sometimes even z-depth—we store expression levels.  
   - Pathologists label certain spots as LE or TC to create training data.  

3. **Cleaning & Normalization**  
   - We filter noise, normalize read counts, and handle batch effects across different tumor samples.

### LE vs TC Classification

We built a **binary classifier** using ~12 tumors of training data:
- **Model Architecture**: A standard machine-learning pipeline in Python (see `original_cell_class_nb.ipynb` for metrics).  
- **Cross-Validation**: Achieved around **94% accuracy** on test folds.  
- **Output**: Each coordinate is assigned "LE" or "TC," based on gene expression signatures.

The classification helps clinicians see exactly where the "edge" cells are—and how far they might have spread.

### Web App & AWS Integration

1. **Frontend**:  
   - Built with **React + TypeScript + Vite** for a modern, fast UI.  
   - Users upload 3D tumor data in a simple form.  

2. **AWS Lambda & DynamoDB**:  
   - **`script.py`** loads the trained model on AWS Lambda for scalable inference.  
   - Inference results—i.e., the labeled matrix—go into a DynamoDB table.  

3. **Bringing It All Together**:  
   - The user sees a color-coded 3D map of their tumor, highlighting LE vs. TC zones.  
   - This approach is cost-effective, modular, and easily shared among collaborators.

---

# Results & Next Steps

Our model demonstrated robust classification in identifying leading edge vs. core cells. Clinicians can now:
- **Refine Surgical Margins**: Focus on LE zones for deeper resection.  
- **Target Therapies More Precisely**: Use more aggressive treatments where they matter most.  
- **Monitor Response**: Compare pre- and post-treatment maps for progress tracking.

In future iterations, we aim to:
- **Add More Cell Types**: Identify immune cells, stromal cells, and other subtypes in each spot.  
- **Enhance 3D Depth**: Incorporate thicker z-stacks for truly volumetric data.  
- **Automate Entire Pipeline**: Minimize manual steps, further speeding up time to insight.

---

# Conclusion

**Spatial transcriptomics** provides the high-resolution map that traditional bulk sequencing lacks. By combining that approach with a machine-learning classifier, we can highlight the most dangerous tumor areas. Our web tool, powered by AWS, helps clinicians and researchers visualize these classifications quickly and **act on** them with more precise, data-driven treatments. This project signals a leap forward in how we understand—and fight—cancer.

---

# References

1. Arora, R. et al. *Spatial transcriptomics reveals distinct and conserved tumor core and edge architectures.* *Nature Communications* (2023).  
2. Puram, S. V. et al. *Single-cell transcriptomic analysis of primary and metastatic tumor ecosystems in head and neck cancer.* *Cell* (2017).  
3. [10x Genomics: Spatial Transcriptomics](https://www.10xgenomics.com/spatial-transcriptomics)  