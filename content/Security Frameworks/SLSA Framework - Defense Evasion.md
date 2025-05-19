---
title: SLSA Framework - Defense Evasion
draft: false
tags:
  - supply-chain
  - slsa
  - cloud-security
NeedsReview: false
---
> [!summary] Core Concept  
SLSA (Supply-chain Levels for Software Artifacts) is a framework used to secure the software supply chain. It establishes trust through integrity controls for build processes, source code, and dependencies.
## 🔹 What is SLSA?

SLSA (pronounced "salsa") helps organizations **harden their software supply chain** by enforcing secure build processes and dependency management. It defines **levels of assurance** and **trust boundaries** that software artifacts must meet to be considered secure.

> [!info] Did You Know?  
> SLSA originated from Google’s internal security practices and is now part of the OpenSSF (Open Source Security Foundation).

---

## 🎯 SLSA Key Concepts

### 🔹 Artifact
A **digital object** (file, binary, container image, etc.) produced in the software development lifecycle.

### 🔹 Provenance
A description of **how**, **where**, and **with what tools** an artifact was built. Provenance provides traceability.

---

## 🔐 Trust Boundaries

SLSA focuses on 3 main **trust boundaries** to improve supply chain integrity:

```mermaid
flowchart TD
    A[Source Integrity] --> B[Code reflects developer intent]
    A --> C[Traceable modifications]
    D[Build Integrity] --> E[Uses original dependencies]
    D --> F[Follows CI/CD workflow]
    G[Dependencies] --> H[Security-checked before use]
````

1. **Build Integrity**: Verifies correct dependencies and secure workflows.
    
2. **Source Integrity**: Ensures code reflects developer intent and can be traced.
    
3. **Dependencies**: All libraries and packages are verified and scanned.
    

---

## 🏗️ SLSA Levels Overview

SLSA levels form a **progressive pyramid**, where each level builds upon the previous one:

|Level|Description|
|---|---|
|**L0**|No SLSA requirements met|
|**L1**|Artifact provenance is documented|
|**L2**|Uses a **hosted build platform**|
|**L3**|**Tamper-resistant provenance** enforced by the platform|

> [!tip] Helpful Tip  
> 💡 Each track is completed independently—focus on what's most relevant to your CI/CD pipeline first.

---

## 🔧 Recommended Technical Controls

- ✅ **Version Control** (e.g., Git)
- 🔍 **Vulnerability Scanning**
- 🧪 **Build Verification**
- 🚀 **Deployment Policies**
- 📦 **Artifact Management**

These controls **complement SLSA** and increase software resilience against supply chain attacks.

---

## 🟥 Limitations of SLSA

> [!warning] Caution Ahead  
> ⚠️ SLSA does not protect against:
> 
> - Developers writing malicious code
>     
> - Intentionally insecure design
>     
> - Assessing code quality
>     

---

## ✅ Summary

SLSA helps cloud security professionals and dev teams:

- Track **provenance**
- Improve **artifact integrity**
- Protect CI/CD workflows
- Secure **dependencies and sources**

> [!success] Well Done!  
> ✅ Adopting SLSA levels and trust boundaries builds a secure foundation for artifact creation and supply chain defense.
