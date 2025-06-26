---
title: NIST CSF 2.0
draft: false
tags:
  - Defensive-Security
  - Framework
  - NIST-CSF
  - Identify
  - Protect
  - Detect
  - Respond
  - Recover
  - cybersecurity
NeedsReview: false
---
# 📌 **NIST Cybersecurity Framework (CSF) — Quick Reference**

> [!summary] Core Concept  
> A flexible, risk-based framework developed by **NIST** to help organizations manage and reduce cybersecurity risks across sectors.

---

## 🧩 **Framework Core: 5 Key Functions**

These are **interdependent** categories of cybersecurity activities:

```mermaid
flowchart LR
    ID[Identify]
    PR[Protect]
    DE[Detect]
    RS[Respond]
    RC[Recover]
    ID --> PR --> DE --> RS --> RC
```

### 🔐 NIST CSF Functions Overview

|Function|Description|Categories|
|---|---|---|
|🔍 **Identify**|Understand your organizational environment to manage cybersecurity risks.|Asset Management, Business Environment, Governance, Risk Assessment, Risk Management Strategy, Supply Chain Risk Management|
|🛡️ **Protect**|Implement safeguards to limit the impact of potential events.|Access Control, Awareness and Training, Data Security, Information Protection Processes and Procedures, Maintenance, Protective Technology|
|🚨 **Detect**|Identify the occurrence of a cybersecurity event.|Anomalies and Events, Security Continuous Monitoring, Detection Processes|
|🚒 **Respond**|Take action regarding a detected incident.|Response Planning, Communications, Analysis, Mitigation, Improvements|
|🔁 **Recover**|Restore capabilities or services after a cyber event.|Recovery Planning, Improvements, Communications|

---

## 🧭 Framework Tiers

Reflects **maturity of risk management** processes:

|Tier|Description|
|---|---|
|1|Partial|
|2|Risk Informed|
|3|Repeatable|
|4|Adaptive|

---

### 🎯 Framework Profile

Tailored implementation aligned with:

- Business needs
- Risk tolerance
- Resources

Used for **gap analysis** between current and target cybersecurity posture.

> [!tip] Helpful Tip  
> 🔄 Align existing policies and tools (e.g., SIEMs, firewalls, training programs) to the CSF's core functions to identify gaps and prioritize actions.
---

---
# NIST Cybersecurity Framework Core

The NIST Cybersecurity Framework (CSF) is structured into five core **Functions**, which are further divided into **Categories** and **Subcategories**, supported by **Informative References**.

### Core Functions:
- **Identify (ID)**
- **Protect (PR)**
- **Detect (DE)**
- **Respond (RS)**
- **Recover (RC)**

Each function represents a high-level cybersecurity outcome and helps organize cybersecurity activities at a strategic level.

> [!note]  
> Each Function is supported by Categories and Subcategories, which describe specific outcomes and security activities.

---

## Framework Implementation Tiers

Implementation Tiers describe the degree to which an organization's cybersecurity risk management practices exhibit the characteristics defined in the Framework.

### Key Points:

- Tiers range from **Partial (Tier 1)** to **Adaptive (Tier 4)**.
- They **do not** represent maturity levels.
- They reflect **risk management process integration**, **threat awareness**, and **cybersecurity culture**.

> [!tip]  
> Choose a Tier based on risk appetite, regulatory requirements, and implementation feasibility.

### Considerations for Tier Selection:

- Risk management processes
- Threat and vulnerability awareness
- Business and security alignment
- Legal and governance requirements

---

## Framework Profiles

Profiles align the Framework Core with business requirements, risk tolerance, and resources.

### Types:

- **Current Profile**: The "as-is" state of cybersecurity posture.
- **Target Profile**: The "to-be" state aligned with business goals.

### Uses:

- Identify gaps between Current and Target Profiles
- Prioritize improvements
- Develop a cybersecurity roadmap

> [!example]  
> Comparing Profiles can reveal specific areas for improvement in asset management, detection capabilities, or incident response readiness.

---

## How to Use Framework Profiles: Example

Subcategories are mapped to measurable objectives:

|Function|Category|Subcategory|Current|Target|Cost|Priority|
|---|---|---|---|---|---|---|
|Identify|AM|ID.AM-2|4|8|Low|Medium|
|Protect|DS|PR.DS-2|7|7|Moderate|Medium|
|Detect|AE|DE.AE-4|6|8|High|High|
|Respond|AN|RS.AN-4|5|7|Moderate|Medium|
|Recover|RP|RC.RP-1|6|8|Moderate|Medium|

> [!warning]  
> Not all subcategories may apply to every organization. Customize Profiles to fit organizational needs.

Scoring ranges from 0 to 10, with associated cost and implementation priority to guide planning.

---

## Using the Framework: Asset Management Example

Consider the **Asset Management** category within the **Identify (ID)** function:

- Category ID: `ID.AM`
- Focus areas:
    - Physical devices and systems
    - Software platforms and applications
    - Communication and data flows
    - External information systems

Each subcategory defines increasingly specific and actionable security outcomes.

> [!note]  
> Use this approach to develop specific action items within each Function and evaluate organizational readiness.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)