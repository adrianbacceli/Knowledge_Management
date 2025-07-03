---
title: CIA Triad
draft: false
tags:
  - CIA
  - InfoSec
  - Security-Principles
  - Fundamentals
NeedsReview: false
---
## Overview

> [!info]  
> The **CIA Triad** is a foundational model in **information security**. It outlines three core principles that guide the protection of data and systems: **Confidentiality, Integrity, and Availability**.

These principles are used to assess risk, design controls, and align cybersecurity practices with business goals.

---

## 🔐 Confidentiality

> Restricting access to data to only those who are authorized.

### Key Concepts
- Preventing unauthorized access or disclosure
- Enforced through **access controls**, **encryption**, and **data classification**
- Applies to all forms of data: physical, digital, and verbal

### Common Controls
- Role-based access control (RBAC)
- Multi-factor authentication (MFA)
- Encryption at rest and in transit

---

## 🧾 Integrity

> Ensuring that data is **accurate**, **complete**, and **has not been tampered with**.

### Key Concepts
- Preventing unauthorized changes or corruption of data
- Includes both intentional and unintentional modifications

### Common Controls
- Checksums and hashing (e.g., SHA-256)
- Digital signatures
- Version control and audit logging

---

## 🚦 Availability

> Ensuring that **authorized users** have **timely and reliable access** to data and systems.

### Key Concepts
- Systems and data must be accessible when needed
- Protects against outages, hardware failures, and denial-of-service attacks

### Common Controls
- Redundant systems and backups
- Disaster recovery planning
- Load balancing and failover systems

---

## 🧩 CIA Triad in Practice

| Principle       | Threat Example                     | Control Example                  |
|----------------|-------------------------------------|----------------------------------|
| Confidentiality| Unauthorized database access        | Encryption, access control       |
| Integrity      | File tampering or corruption        | Hashing, digital signatures      |
| Availability   | Ransomware or DDoS attack           | Backups, network redundancies    |

---

> [!tip]  
> These three principles are **interdependent**. Strengthening one often affects the others. A secure system balances all three based on the **organization’s risk profile** and operational needs.

---

## Summary

The CIA Triad is not a framework but a **conceptual foundation** used across all major cybersecurity standards. It informs security policies, threat modeling, incident response, and compliance efforts.

- Core to NIST, ISO/IEC 27001, and other standards  
- Essential for building trust in systems and data  
- Relevant for both technical and governance teams  
