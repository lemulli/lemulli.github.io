---
layout: page
title: Data Cleanup Agent for Salesforce
description: Built with AgentForce to deduplicate and clean CRM data
img: assets/img/salesforce-agentforce-cleanup.png
importance: 1
category: fun
related_publications: false
---

<div class="project">

<div class="flex-col-image">
  {% include figure.liquid path="assets/img/salesforce-agentforce-cleanup.jpg" class="side-image" alt="AgentForce-powered CRM data cleanup" %}
  <div class="side-caption">
    <strong>Fig 1:</strong> A lightweight AgentForce agent cleans up messy CRM records from inside Salesforce.
  </div>
</div>

<div class="flex-row">
  <div class="flex-col-text">
    <p>
      This project is part of the Salesforce AgentForce Hackathon, which wraps up on April 30. I teamed up with Gabby, a Salesforce Admin, to build a custom cleanup agent that lives right inside Salesforce.
    </p>
    <p>
      AgentForce is Salesforce’s new product that lets you build small agents to automate common tasks. We wanted to tackle one of the biggest pain points: messy CRM data.
    </p>
  </div>
</div>

<div class="project-section">
  <h2>What the agent does</h2>
  <div class="flex-row">
    <div class="flex-col-text">
      <ul>
        <li>Finds and merges duplicate leads, contacts, and accounts</li>
        <li>Standardizes fields like state names, phone numbers, etc.</li>
        <li>Flags missing fields and suggests values based on context</li>
        <li>Lets the user review and approve changes right in the UI</li>
      </ul>
      <p>
        The goal is to cut down on manual cleanup and help users trust the data they’re working with.
      </p>
    </div>
  </div>
</div>

<div class="project-section">
  <h2>Why this matters</h2>
  <div class="flex-row">
    <div class="flex-col-text">
      <ul>
        <li>CRM data is often duplicated, incomplete, or entered in weird formats</li>
        <li>Sales and support teams waste time cleaning it—or worse, use bad data</li>
        <li>Good cleanup tools exist, but they’re usually external or expensive</li>
      </ul>
      <p>
        Our agent stays in Salesforce and runs automatically or on-demand, which keeps things simple.
      </p>
    </div>
  </div>
</div>

<div class="project-section">
  <h2>What I’m learning</h2>
  <div class="flex-row">
    <div class="flex-col-text">
      <ul>
        <li>How to build with the new AgentForce framework</li>
        <li>Using the Salesforce CLI and doing more pro-code development</li>
        <li>Digging into the Metadata and REST APIs to update records</li>
        <li>Working through Trailmixes to better understand Salesforce workflows</li>
      </ul>
      <p>
        It’s a lot, but the hands-on part of the hackathon is helping it all click.
      </p>
    </div>
  </div>
</div>

<div class="project-section">
  <h2>Next steps</h2>
  <div class="flex-row">
    <div class="flex-col-text">
      <ul>
        <li>Add a dashboard that shows cleanup results and confidence scores</li>
        <li>Test the agent across more object types (not just Leads)</li>
        <li>Make the cleanup process more customizable for different teams</li>
      </ul>
      <p>
        Once the hackathon wraps, we’ll decide whether to turn it into a full app or just keep it as a working demo.
      </p>
    </div>
  </div>
</div>

</div>