---
layout: page
title: BIDS QC Package
description: A Docker-based app for structural and functional MRI QC with annotation tools and HTML reports
img: assets/img/bids-qc-cover.jpg
importance: 3
category: work
giscus_comments: true
---

## Overview

The BIDS Quality Control Package is a comprehensive tool designed to streamline the quality control process for neuroimaging data in BIDS format. This package provides an integrated workflow for structural and functional MRI quality assessment, combining automated processing with interactive review capabilities.

## Key Features

- **Interactive Review Interface**: Web-based annotation server for manual review of structural MRI data
- **Automated Processing Pipeline**: Includes N4 bias correction and skull stripping
- **Comprehensive Reporting**: Generates detailed QC reports for structural MRI data
- **fMRI Quality Control**: Dedicated tools for functional MRI data assessment
- **Docker Support**: Containerized environment ensuring consistent execution across platforms

## Technical Implementation

The package is built with Python and integrates several key technologies:

- **Backend**: Flask-based web server for the annotation interface
- **Image Processing**: Integration with FSL and SynthStrip for neuroimaging processing
- **Containerization**: Docker support for reproducible environments
- **Data Management**: CSV-based storage for QC annotations and results

## Project Structure

```
bids-qc-pkg/
├── src/
│   ├── commands/         # CLI command implementations
│   ├── processing/       # Image processing modules
│   ├── web/             # Web interface components
│   └── utils/           # Utility functions
├── tests/               # Test suite
├── docker/             # Docker configuration
└── docs/               # Documentation
```

## Key Workflows

### Structural MRI QC Pipeline

1. Generate slice images for review
2. Interactive annotation through web interface
3. Automated processing of selected scans
4. Quality assessment of processed images
5. Report generation

### Functional MRI QC

- Automated quality assessment of fMRI data
- Integration with FSL's TOPUP for distortion correction
- Comprehensive reporting of fMRI-specific metrics

## Impact

This tool addresses a critical need in neuroimaging research by:

- Standardizing the QC process across research groups
- Reducing manual effort through automation
- Ensuring reproducibility through containerization
- Providing an intuitive interface for non-technical users

## Future Development

Planned enhancements include:

- Integration with additional QC metrics
- Support for more BIDS modalities
- Enhanced visualization capabilities
- Machine learning-based automated QC suggestions

## Technologies Used

- Python 3.8+
- Flask
- NumPy
- NiBabel
- FSL
- Docker
- Pandas
- Matplotlib/Seaborn 