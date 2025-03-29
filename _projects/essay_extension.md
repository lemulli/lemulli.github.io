---
layout: page
title: AI Writing Feedback for Google Docs
description: Socratic writing coach focused on structure, clarity, and age-appropriate feedback
img: assets/img/google-docs-writing-extension.jpg
importance: 2
category: in progress
related_publications: false
---

<div class="project">

<div class="flex-col-image">
  {% include figure.liquid path="assets/img/google-docs-writing-extension.jpg" class="side-image" alt="Google Docs AI writing assistant for student essays" %}
  <div class="side-caption">
    <strong>Fig 1:</strong> A writing extension for Google Docs that encourages stronger thinking, not just better grammar.
  </div>
</div>

<div class="flex-row">
  <div class="flex-col-text">
    <p>
      This project started as a way to help students improve their essays in a more thoughtful, age-appropriate way. Instead of just offering grammar corrections or AI re-writes, this Google Docs extension gives structured feedback that supports critical thinking and strong writing habits.
    </p>
    <p>
      I built it as a Chrome extension that interacts with essay text directly in the Doc and offers contextual feedback via side comments and/or a feedback panel.
    </p>
  </div>
</div>

<div class="project-section">
  <h2>What it does</h2>
  <div class="flex-row">
    <div class="flex-col-text">
      <ul>
        <li>Provides age-appropriate feedback based on the writer’s self-reported age</li>
        <li>Uses a Socratic tone—asks guiding questions instead of giving answers</li>
        <li>Highlights structure, reasoning, clarity, and genre alignment</li>
        <li>Optionally infers original prompt and writing purpose</li>
        <li>Never rewrites the student's work—just gives thoughtful guidance</li>
      </ul>
      <p>
        It's meant to teach better thinking, not just better sentences.
      </p>
    </div>
  </div>
</div>

<div class="project-section">
  <h2>How it works</h2>
  <div class="flex-row">
    <div class="flex-col-text">
      <ul>
        <li>Built using the Google Docs API and Chrome extension framework</li>
        <li>Backed by a custom model (currently DeepSeek R1) hosted on AWS</li>
        <li>Supports inference-time parameters: age, writing style, and prompt type</li>
        <li>May evolve to include a fine-tuned model or lightweight RAG approach</li>
      </ul>
      <p>
        The model generates inline feedback that reflects the student’s level and intent.
      </p>
    </div>
  </div>
</div>

<div class="project-section">
  <h2>Why I built it</h2>
  <div class="flex-row">
    <div class="flex-col-text">
      <p>
        Most AI writing tools are focused on speed or fluency. That’s fine for adults, but for students (especially younger or neurodivergent ones), it’s more important to support the thinking behind the writing.
      </p>
      <p>
        I wanted a tool that:
      </p>
      <ul>
        <li>Respects the writer’s voice</li>
        <li>Helps them build structure and logic</li>
        <li>Encourages revision without taking over the process</li>
      </ul>
    </div>
  </div>
</div>

<div class="project-section">
  <h2>Next steps</h2>
  <div class="flex-row">
    <div class="flex-col-text">
      <ul>
        <li>Improve age detection and prompt inference features</li>
        <li>Test with teachers and students for usability and tone</li>
        <li>Possibly add rubric-based scoring or standards alignment</li>
        <li>Explore partnerships or publishing as a lightweight edtech tool</li>
      </ul>
      <p>
        Right now it’s in prototype phase, but it’s already helping kids write better essays—with their own voice intact.
      </p>
    </div>
  </div>
</div>

</div>