// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "What I&#39;ve been up to in recent months.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-mapping-cancerous-tumors-in-3d",
      
        title: "Mapping Cancerous Tumors in 3D",
      
      description: "Tumor Cell Type Prediction App",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/transcriptomics/";
        
      },
    },{id: "post-ai-powered-data-cleanup-for-salesforce",
      
        title: "AI-Powered Data Cleanup for Salesforce",
      
      description: "Enhancing CRM data hygiene using AI for automated cleanup, deduplication, and standardization.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hackathon/";
        
      },
    },{id: "post-ai-powered-data-cleanup-for-salesforce",
      
        title: "AI-Powered Data Cleanup for Salesforce",
      
      description: "Enhancing CRM data hygiene using AI for automated cleanup, deduplication, and standardization.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/hackathon/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-dicom-to-bids-converter",
          title: 'DICOM to BIDS Converter',
          description: "A Python-based tool for secure DICOM to BIDS conversion with NIMH MOMMA grant compliance, including sensitive data scrubbing and JSON sidecar generation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_dicom_bids/";
            },},{id: "projects-bids-qc-package",
          title: 'BIDS QC Package',
          description: "A Docker-based app for structural and functional MRI QC with annotation tools and HTML reports",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bids_qc/";
            },},{id: "projects-ai-writing-feedback-for-google-docs",
          title: 'AI Writing Feedback for Google Docs',
          description: "Socratic writing coach focused on structure, clarity, and age-appropriate feedback",
          section: "Projects",handler: () => {
              window.location.href = "/projects/essay_extension/";
            },},{id: "projects-data-cleanup-agent-for-salesforce",
          title: 'Data Cleanup Agent for Salesforce',
          description: "Built with AgentForce to deduplicate and clean CRM data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hackathon/";
            },},{id: "projects-mapping-cancerous-tumors-in-3d",
          title: 'Mapping Cancerous Tumors in 3D',
          description: "Tumor Cell Type Prediction App",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spatial_transcriptomics/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lemulli", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lemull", "_blank");
        },
      },];
