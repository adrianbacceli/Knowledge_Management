---
title: Business Continuity and Data Loss Prevention
draft: false
tags:
  - data-loss
  - Prevention
  - data-protection
  - de-identification
  - PII
  - business-continuity
  - fault-tolerance
  - disaster-recovery
  - high-availability
  - storage
NeedsReview: false
---
> [!warning]
> **Data loss** is not just about losing access to data—it includes unauthorized disclosure of sensitive, proprietary, or classified information. Prevention requires proactive strategies involving access control, monitoring, and data handling practices

## What is Data Loss?

Data loss refers to the **unauthorized disclosure** of proprietary, classified, or sensitive information. It can occur through:

- **Data leakage** (accidental exposure)
- **Data theft** (intentional exfiltration)
- **Data Inaccessibility or Corruption** (rendered unusable)

> [!example]
> _Example:_ Personal employment information being publicly exposed due to a misconfigured cloud storage bucket.

As a cloud cybersecurity professional, your responsibility is to **protect all forms of data** from exposure or misuse.

---
## Preventing Unauthorized Access

Data loss can be mitigated by enforcing **resiliency**.

> [!quote] **Resiliency:** The ability to prepare for, respond to, and recover from disruptions.

To effectively prevent data loss, implement these key strategies:

1. **Identity and Access Management (IAM)**  
    Ensure that only authorized users and systems can access specific resources by implementing strong IAM controls such as multifactor authentication, least privilege access, and regular audits.

2. **De-identification of Sensitive Data**  
    Protect personal and sensitive information by removing or masking identifiers, reducing the risk of exposure even if unauthorized access occurs.




### Identity and Access Management ([[Identity & Access Management (IAM)|IAM]])

IAM helps secure data by ensuring that only **authorized users** can access it. This is based on the:

> [!tip]
> **Principle of Least Privilege**: Assign users only the minimum access rights necessary for their roles.

**Questions to guide access decisions:**
- _Who is accessing the data?_
- _Why do they need the data?_
- _When and from where are they accessing it?_

> [!note] 
> Implementing continuous monitoring and anomaly detection can help identify suspicious access patterns and potential insider threats.

---

## De-identification

De-identification removes personal identifiers from datasets to prevent data from being linked to specific individuals.

> [!quote]
> According to the U.S. National Institute of Standards and Technology (NIST),  
> _“De-identification removes identifying information from a data set so that individual data can’t be linked with specific individuals.”_

### Methods of De-identification

- **Redaction**: Permanently removing sensitive values.
- **Replacement**: Substituting identifiers with placeholders.
- **Data Masking**: Obscuring data using generic characters (e.g., `****`, `####`).
- **Tokenization**: Replacing sensitive data with randomly generated tokens.
- **Generalization**: Replacing specific values with broader categories (e.g., exact age with age range).

> [!tip] 
> Combine IAM with data de-identification to create a defense-in-depth strategy that addresses both access control and data sensitivity.


---
# Business Continuity Plan (BCP)

> [!note]  
> These techniques ensure IT infrastructure and services remain available or can be restored quickly after disruptions.

1. Determine the most critical Time
2. Set the RTO / RPO and uptimes [[RPO, RTO, and calculating Uptime]]
3. Conduct a Risk Assessment
4. Document [[#Disaster Recovery Plan (DRP)]]
5. Communicate BCP and DRP
6. Test and update BCP and DRP

---
## Disaster Recovery Plan (DRP)

Disaster recovery involves a set of policies and procedures for restoring IT infrastructure, including data access, after a natural or human-induced disaster.

**Phases:**
- **Before Disaster**: Primary site runs operations; data is replicated to DR site.
- **After Disaster**: DR site takes over if primary site becomes unavailable.

1. Document each team member's role
2. Establish Recovery Solutions
3. CSP DRP communication

---
## Fault Isolation

> [!tip]  
> Fault isolation doesn't prevent component failure but contains the impact to avoid cascading effects.

Fault isolation ensures that the failure of one system component does not impact the overall system. Examples include:

- Isolated virtual operating systems (VOS)
- Redundant paths

---
## Single Points of Failure (SPOF)

> [!warning]  
> SPOFs are critical risks that can take down entire systems.

SPOFs occur at multiple levels:

- **Compute-level**
- **Storage-level**
- **Network-level**
- **Site-level** (e.g., entire data center)

### Compute Clustering

Clusters provide high availability and load balancing:
- **Service Failover**: Automatically move services to another compute system. 
- **Heartbeat Signals**: Monitor health of compute nodes.
- **Types**:
    - Active/Active
    - Active/Passive

### Link Aggregation
Combines multiple network links:
- Between switches
- Between switch and node

Benefits:
- Enables failover in case of link failure
- Provides higher throughput

### NIC Teaming
Groups multiple NICs into a single logical NIC:
- Ensures failover during NIC or link failure
- Distributes traffic across NICs

### Multipathing
Provides multiple data paths between compute and storage systems:
- **Failover**: Redirect I/O to alternate paths if one fails
- **Load Balancing**: Distribute I/O across all active paths

### Elastic Load Balancing
Dynamically distributes traffic across VM instances:
- Automatically scales resources to meet demand
- Detects unhealthy instances and reroutes traffic

### Storage Fault Tolerance Mechanisms
Protects data in storage systems:
**Techniques:**
1. **RAID**
2. **Erasure Coding**
3. **Dynamic Disk Sparing**
4. **Cache Protection**

> [!example]  
> Dynamic disk sparing automatically replaces a failing disk with a spare to prevent data loss. Multiple spares improve availability.

---
## Site-Level Fault Tolerance — Availability Zones
Availability zones are isolated data center locations:
- Each has its own resources
- Connected via low-latency links
- Services can failover between zones in case of outage

---
_Adapted from: Information Storage and Management v5_
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)

