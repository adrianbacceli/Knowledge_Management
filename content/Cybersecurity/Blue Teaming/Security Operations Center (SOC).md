---
title: Security Operations Center (SOC)
draft: false
tags:
  - SOC
  - Roles
  - tools
NeedsReview: true
---
# 🛡️ Roles Within a Security Operations Center (SOC)

> [!summary] Core Concept  
> A Security Operations Center (SOC) is composed of various specialized roles that work together to protect an organization’s digital infrastructure. Each role contributes to the continuous monitoring, detection, and response to security threats.

---

## 👨‍💼 SOC Director

- **Responsibilities:**
    - Strategic planning and overall management of the SOC.
    - Budgeting and staffing.
    - Aligning SOC goals with the organization’s security objectives.

---

## 👩‍💼 SOC Manager

- **Responsibilities:**
    - Oversees daily operations.
    - Manages the SOC team.
    - Coordinates incident response.
    - Ensures collaboration with other departments.

---

## 🧑‍💻 Tier 1 Analyst (Alert Analyst)

- **Responsibilities:**
    - Monitors security alerts and events.
    - Performs initial triage of potential incidents.
    - Escalates suspicious activity to Tier 2 analysts.

---

## 🧑‍🔬 Tier 2 Analyst (Incident Responder)

- **Responsibilities:**
    - Investigates escalated incidents.
    - Identifies patterns and attack vectors.
    - Develops mitigation strategies.

---

## 🧠 Tier 3 Analyst (Threat Hunter)

- **Responsibilities:**
    - Handles complex and advanced threats.
    - Conducts proactive threat hunting.
    - Collaborates with other teams to enhance defenses.

---

## 🛠️ Detection Engineer

- **Responsibilities:**
    - Develops and maintains detection rules for tools like SIEM, IDS/IPS, and EDR.
    - Works with analysts to identify detection gaps.
    - Continuously improves threat detection capabilities.

---

## 🚨 Incident Responder

- **Responsibilities:**
    - Leads response to active security incidents.
    - Performs digital forensics and containment.
    - Coordinates recovery and post-incident analysis.

---

## 🌐 Threat Intelligence Analyst

- **Responsibilities:**
    - Collects and analyzes threat intelligence.
    - Shares insights with the SOC team.
    - Helps anticipate and defend against emerging threats.

---

## 🧰 Security Engineer

- **Responsibilities:**
    - Builds and maintains security infrastructure.
    - Provides technical support to the SOC.
    - Implements new security technologies.

---

## 📋 Compliance & Governance Specialist

- **Responsibilities:**
    - Ensures adherence to industry standards and regulations.
    - Supports audits and reporting.
    - Promotes best practices in security governance.

---

## 📚 Security Awareness & Training Coordinator

- **Responsibilities:**
    - Develops cybersecurity training programs.
    - Raises awareness across the organization.
    - Encourages a culture of security.

---

# 🛠️ SOC Tools

|Tool|Description|
|---|---|
|**SIEM** (Security Information & Event Management)|Aggregates and analyzes log data from across the organization to detect suspicious activity.|
|**IDS** (Intrusion Detection System)|Monitors network traffic for signs of known threats and alerts when detected.|
|**IPS** (Intrusion Prevention System)|Similar to IDS, but actively blocks detected threats.|
|**EDR** (Endpoint Detection & Response)|Provides visibility and response capabilities on endpoint devices (e.g., laptops, servers).|

---

# 👥 Roles Within a SOC

|Role|Summary|
|---|---|
|**SOC Director**|Oversees strategic planning, budgeting, and alignment with business goals.|
|**SOC Manager**|Manages daily operations and coordinates incident response.|
|**Detection Engineer**|Creates and maintains detection rules and signatures for SOC tools.|
|**Security Engineer**|Develops and maintains security infrastructure and tools.|
|**Tier 1 Analyst**|Monitors alerts, triages events, and escalates incidents.|
|**Tier 2 Analyst**|Investigates escalated incidents and identifies patterns.|
|**Tier 3 Analyst**|Conducts threat hunting and handles advanced threats.|
|**Incident Responder**|Leads containment, forensics, and remediation of incidents.|
|**Threat Intelligence Analyst**|Analyzes threat data to inform proactive defense.|
|**Compliance & Governance Specialist**|Ensures adherence to standards and supports audits.|
|**Security Awareness & Training Coordinator**|Develops training programs to promote security culture.|

---

# 🧬 SOC Generations

## 🔹 SOC 1.0 – Traditional SOC

- Focused on **security intelligence platforms** and **identity management**.
- Alerts are **uncorrelated**, leading to alert fatigue.
- Analysts must switch between multiple tools and platforms.

## 🔹 SOC 2.0 – Intelligence-Driven SOC

- Integrates **threat intelligence** and **security telemetry**.
- Uses **network flow analysis** and **anomaly detection**.
- More context-aware and capable of correlating events.

## 🔹 SOC 3.0 – Cognitive / Next-Gen SOC

- Incorporates **machine learning** and **AI** to enhance decision-making.
- Aims to **reduce analyst workload** and improve detection accuracy over time.
- Continuously learns from past incidents to improve future responses.

---

# Monitoring & SIEM
**SIEM Business Requirements & Use Cases**

1. Log Aggregation & Normalization
2. Threat Alerting
3. Contextualization & Response
4. Compliance with PCI DSS, HIPAA, and GDPR

### **Data Flows Within A SIEM**

Collect/ingest logs from various data sources.

data normalization and data aggregation.

Detection rules, dashboards, visualizations, alerts, and incidents.

### **Benefits**

- Centralized perspective on all logs and events
- Easier investigation / incident response process
- Centralized dashboard for notifications
- built-in capable intelligence for settings
- built-in capable intelligence for summaries and customizable reports.
- integrating AI based on behavioral and pattern analysis.
- Proactive reaction and respond to potential incidents,
- lower the expenses associated with a full-scale security breach
- fulfilling compliance standards like ISO and HIPAA.
