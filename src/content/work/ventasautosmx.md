---
title: "VentasAutosMX"
subTitle: "Structured vehicle quotation and proposal system"
role: "Product Designer & Full-stack Developer"
duration: "4 months"
stack: ["Laravel", "MySQL", "PDF Generation", "WhatsApp Integration"]
tags: ["Process Automation", "System Architecture", "Internal Tool"]
pubDate: 2023-01-16
---

## 01 — Context

The client required a centralized platform to manage vehicle quotations. Previously, information was exchanged manually through informal channels, resulting in inconsistencies, delays and formatting errors.

The objective extended beyond listing vehicles — the real need was to structure and automate the internal quotation workflow.

---

## 02 — Problem

Three operational friction points were identified:

- Vehicle data was submitted without standardized structure  
- Agents manually formatted proposals for each client  
- Proposal generation required repetitive and error-prone processes  

This lack of structure reduced efficiency and made scalability difficult.

---

## 03 — Objective

Design and implement a system that:

- Structured vehicle data input through a controlled multi-step flow  
- Enabled agent review and validation within a dedicated dashboard  
- Automatically generated formatted PDF proposals  
- Allowed proposal delivery directly via WhatsApp  

The goal was to reduce manual effort and ensure consistency across all quotations.

---

## 04 — System Design

The platform was built around a structured data model that validated inputs before submission.

Core components included:

- Multi-step vehicle submission form with validation logic  
- Agent dashboard for review, approval and editing  
- Automated PDF generation engine based on dynamic templates  
- WhatsApp integration for direct client delivery  

![Agent dashboard overview](/assets/img/projects/ventasautomx/admindashboard.webp)

The architecture ensured each quotation followed a standardized structure, reducing human error and improving turnaround time.

---

## 05 — Implementation

The system was developed using Laravel with custom logic for:

- Data validation and normalization  
- Dynamic PDF rendering from structured database entries  
- Controlled user roles and permission management  
- Clear quotation status states  

The PDF generation layer transformed structured data into a professional proposal document without manual formatting.



---

## 06 — Outcome

- Reduced manual formatting time  
- Standardized proposal structure across all agents  
- Improved client response time  
- Created a scalable internal quotation system  

The result was not simply a listing website, but a structured operational tool that automated and standardized the vehicle quotation process.
