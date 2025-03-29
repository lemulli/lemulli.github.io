---
layout: page
title: DICOM to BIDS Converter
description: A Python-based tool for secure DICOM to BIDS conversion with NIMH MOMMA grant compliance, including sensitive data scrubbing and JSON sidecar generation
img: assets/img/dicom-bids-cover.jpg
importance: 2
category: work
giscus_comments: true
---

## Overview

A specialized Python tool designed to convert DICOM medical imaging data to BIDS format, specifically tailored for NIMH MOMMA grant submissions. The tool ensures strict compliance with data format requirements while implementing robust security measures for handling sensitive clinical information.

## Key Features

- **Secure Data Handling**: Automated scrubbing of sensitive PHI/PII information
- **NIMH Compliance**: Strict adherence to MOMMA grant data format requirements
- **JSON Sidecar Generation**: Automated creation of standardized metadata files
- **Validation Pipeline**: Built-in checks for BIDS compliance and data integrity
- **Audit Trail**: Comprehensive logging of all data transformations

## Technical Implementation

The converter is built with a focus on security and compliance:

- **Data Processing**: 
  - Automated DICOM tag extraction and sanitization
  - PHI/PII detection and removal
  - BIDS-compliant file renaming and organization
- **Metadata Management**:
  - JSON sidecar generation with standardized fields
  - Validation against BIDS specification
  - Custom field mapping for MOMMA requirements
- **Security Features**:
  - Secure file handling protocols
  - Audit logging of all operations
  - Data integrity verification

## Project Structure

```
dicom-bids-converter/
├── src/
│   ├── core/           # Core conversion logic
│   ├── validators/     # BIDS and MOMMA compliance checks
│   ├── security/       # PHI/PII handling
│   └── utils/         # Helper functions
├── tests/             # Test suite
├── config/           # Configuration files
└── docs/            # Documentation
```

## Key Workflows

### Data Conversion Pipeline

1. DICOM data ingestion and validation
2. Sensitive information detection and removal
3. BIDS-compliant file organization
4. JSON sidecar generation
5. Final validation and reporting

### Compliance Features

- Automated PHI/PII detection and removal
- MOMMA-specific metadata requirements
- BIDS specification validation
- Data integrity verification
- Comprehensive audit logging

## Impact

This tool addresses critical needs in clinical research by:

- Ensuring compliance with NIMH data requirements
- Protecting sensitive patient information
- Standardizing data formats for research
- Reducing manual effort in data preparation
- Providing audit trails for regulatory compliance

## Future Development

Planned enhancements include:

- Integration with additional DICOM tag mappings
- Enhanced validation rules for MOMMA requirements
- Improved error reporting and recovery
- Support for additional clinical research standards

## Technologies Used

- Python 3.8+
- pydicom
- nibabel
- pandas
- json
- logging
- pathlib
- pytest 