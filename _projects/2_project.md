---
layout: page
title: BIDS QC Package
description: A Docker-based app for structural and functional MRI QC with annotation tools and HTML reports
img: assets/img/bids-qc-cover.jpg
importance: 3
category: work
giscus_comments: true
---

Notes:

The incoming file is a three dimensional MRI image. An initial problem is finding where the center is to slice, so we look for the brightest slide and slice from there. 

The slices are generated in an intial part of the pipeline, which makes images and does calculations to be displayed in the annotation tool.

The annotation tool consists of a server which displays a different page for each image. You can mark "good", "bad" or "unsure" as well as make notes, and that will be saved to a csv to inform later parts of the pipeline.

the fmri tool includes standard fmri QC pipeline, 

with: 
-   
- etc

It is wrapped in a docker container with github CICD hosted on AWS for other labs to query.

See code on github here:    2

Here's how I built a lightweight, modular QC pipeline for MRI using BIDS data.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/initial-view.jpg" title="Initial Structural QC" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/annotation-interface.jpg" title="Annotation Interface" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/final-struct.jpg" title="Final Structural Output" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  Left: Generated QC slices for manual review.  
  Middle: Flask-based annotation server for structural ratings.  
  Right: Output after N4 bias correction and skull stripping.
</div>

## 💡 Project Overview

This tool provides a command-line and Docker-based interface for structural and functional MRI quality control workflows. It supports:

- Initial slice generation
- Manual annotation interface
- Final QC processing (bias correction + skull stripping)
- QC report generation (HTML)
- Optional fMRI distortion correction

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/report.jpg" title="QC Report" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/docker-run.jpg" title="Docker CLI Example" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  An example of the structural QC report and Docker usage instructions.
</div>

## ⚙️ Technologies Used

- Python (nibabel, pandas, matplotlib, flask)
- FSL & SynthStrip via Docker
- Bootstrap grid for layout
- Dockerfile with multi-stage build
- CLI access via `pyproject.toml` + console scripts

## 🧪 Commands Available

- `bids-qc-initial-struct`
- `bids-qc-annotate-struct`
- `bids-qc-final-struct`
- `bids-qc-report-struct`
- `bids-qc-fmri-qc`

## 🚀 Run It via Docker

```bash
docker run -v /path/to/bids:/data -p 8080:8080 bids-qc-pkg bids-qc-annotate-struct /data