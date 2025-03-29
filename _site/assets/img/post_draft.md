## Mapping Tumors in 3D: The Promise of Spatial Transcriptomics

A cancer tumor is not simply one thing (cancer). Tumors contain many types of cancer cells (and some normal cells too!), arranged in complex 3 dimensional layers. Spatial transcriptomics is a new biomedical method that allows for 3d exploration of the environment inside of a tumor. When spatial transcriptomics is performed, the tumor is completely surgically removed and cut into thin slices, which are in turn put on a special slide  that goes into a sequencing machine. The slide then…. that measures which genes are active in each spot of tissue. That way, we are able to see a detailed map of where each cell sits in a tumor environment, and what it’s doing, rather than taking the average expression levels across the whole tumor.

Instead of blending the gene expression of all the cells into a single average, we see a detailed map of where each cell sits—and what it’s doing.

---

### Why Spatial Transcriptomics Matters

Typical sequencing methods lose key information when all cells get mixed together. Spatial transcriptomics preserves the “where” of gene expression. This is crucial in cancer, where one region might be more aggressive than another. By analyzing slices of tumor, we identify dangerous zones, possible treatment targets, and how cells change across different layers.

---

### The Leading Edge vs. the Tumor Core

Tumors often split into two main regions:
- **Leading Edge (LE)**: Cells here invade surrounding tissue and may resist treatments.
- **Tumor Core (TC)**: Cells occupy the center, often growing more slowly and behaving less aggressively.

In many studies, LE cells show higher metastatic potential. They can adapt, dodge therapies, and spread. Core cells are still malignant but tend to remain more differentiated and stable. Knowing this split helps doctors focus on zones with the worst outcomes.

---

### Predicting the Most Dangerous Regions

Our work draws on a binary classification model that learns from pathologists’ labels. We used data from 12 tumors, each sliced and scanned for gene expression patterns. Cross-validation tests, as shown in our `original_cell_class_nb.ipynb`, showed high performance (around 94% accuracy). That means we can reliably flag which regions belong to LE or TC based on gene activity.

---

### How This Informs Treatment

Surgeons can zero in on LE cells when planning where to cut. Radiologists might concentrate on LE zones for more focused doses. Oncologists can try new drugs that target specific invasion genes found in LE cells. The goal: shrink metastatic potential before it takes hold. Meanwhile, cells in the core might respond well to standard treatments like chemo or targeted therapies.

---

### Visualizing the Tumor in 3D

Instead of simple 2D slices, our pipeline produces a **3D coordinate map** of the tumor.  
- **Input**: A 3D dataset of gene expression.  
- **Model**: The classifier evaluates each (x, y, z) coordinate, assigning “LE” or “TC.”  
- **Output**: A structured map (e.g., a sparse matrix) that flags each voxel’s classification in space.

Users can then convert this coordinate map into a true 3D visualization, revealing subtle boundaries that 2D views might hide.
---

### The Web App: Bringing it to Clinics

We turned this pipeline into an accessible web app:
- **Frontend**: React + TypeScript + Vite for quick uploads and a sleek interface.
- **Backend**: AWS-hosted model runs all the heavy lifting.
- **Database**: DynamoDB stores the 3D classification outputs.

Doctors and researchers can upload patient data, press “Run,” and see a color-coded 3D tumor. Our code in `script.py` and `index.py` orchestrates these steps behind the scenes.

---

### A Look Ahead

Spatial transcriptomics offers a high-resolution view of cancer biology. Leading edge cells aren’t just a margin detail; they can determine how quickly a tumor spreads. By pinpointing them, we improve therapy design. The day may come where your doctor uses a “heatmap” of invasive cells before deciding on treatment. And with each new insight, we get closer to more effective, personalized cancer care.