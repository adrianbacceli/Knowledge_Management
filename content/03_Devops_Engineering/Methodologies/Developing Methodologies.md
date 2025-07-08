---
title: Developing Methodologies
draft: false
tags:
  - SBOM
  - Software-Bill-of-materials
  - Waterfall
  - SLSA
  - Software-Pipelines
  - CI/CD
NeedsReview: false
---

> [!summary] Core Concept  
This note outlines various software development methodologies and security strategies—from traditional waterfall approaches to modern CI/CD pipelines, including insights into supply chain security and SBOM implementation.

# 🧱 Traditional Development

## Waterfall Approach

Divided into 6 steps:
1. Establish project requirements  
2. Design the software  
3. Develop the software  
4. Test code  
5. Release the project  
6. Conduct maintenance  

### Drawbacks
- Testing failures halt the entire flow  
- Team interdependency can block progress  

---

# 🔄 Modern Software Development

## Software Pipelines

Automated processes used to streamline the software lifecycle:

### Common Features:
1. Automated integration and testing  
2. Code validation  
3. Reporting measures  

> Helps developers release updates rapidly and reduce disruptions.

---

## 🚀 CI/CD Pipeline (Continuous Integration / Continuous Delivery)

### What is CI/CD?
Automation of coding workflows for efficient, secure releases:

- **CI**: Auto-build/test code on changes  
- **CD**: Deliver (manual gate) or deploy (auto-publish) code  

---

### 📍 CI/CD 4-Step Flow

1. **Source**: Code pushed to a shared repo with version control and branch protections.
2. **Build**: Workflow triggers compile, dependency installation, or static site build.
3. **Test**: Automated validation: unit tests, security scans, linting.
4. **Deploy**: Delivery to platforms like GitHub Pages, Vercel, Docker Hub, etc.

---

### 🔧 CI/CD with GitHub Actions

1. Source (Git):  Code is committed and pushed to GitHub Triggering workflows, reviewed via PRs and protection rules.
2. Build: GitHub Actions compile/build your app/site  
3. Test:  Run checks automatically; stop on failure
4. Deploy: Auto-release to staging, production, or site hosting platforms  

---

### 📊 CI/CD Summary Table

|**Phase**|**What You Do**|**GitHub Tools**|
|---|---|---|
|Source|Push code|Git, GitHub|
|Build|Compile app/site|GitHub Actions|
|Test|Automated checks|GitHub Actions|
|Deploy|Release to users|GitHub Pages, Vercel|

---

### 🔐 Security in CI/CD

- Integrated automated security testing  
- Tests during each stage of CI/CD  
- Reduces manual effort, improves app health  

---

# 🧩 Software Supply Chain Security

## 🔐 What is the Software Supply Chain?

All people, processes, and tools involved in software development:

- Code & repos  
- CI/CD tools  
- Third-party packages  
- Human roles and policies  

> [!info] Did You Know?  
> A single compromised library can cascade across thousands of systems.

---

## 🛠️ Attack Surface

### 👥 People  
Targets for phishing, insider threats, credential theft  

### 🔄 Processes  
Weak policy enforcement, poor access control  

### 🧩 Technology  
Malicious containers, plugins, or libraries  

> [!warning] Caution Ahead  
> ⚠️ People remain the most vulnerable vector.

---

## 🧨 Threat Actor Flow

```mermaid
flowchart TD
    A[Threat Actor Recon] --> B[Identify People/Process/Tech Weaknesses]
    B --> C[Compromise CI/CD or Source Code]
    C --> D[Inject Malware / Backdoor]
    D --> E[Release Software to Public]
    E --> F[Exploit Users and Infrastructure]
````

---

## 🛡️ Defense Strategies

1. Security Hardening: Limit the attack surface via config and infra
2. Continuous Vulnerability Checks: Run automated scans in CI/CD
3. SBOM:  Track components in use → [[#🧾 Software Bill of Materials (SBOM)]]

> [!tip] Helpful Tip
> 💡 SBOMs increase transparency and ensure compliance.

---
## 🍕 Software Supply Chain Analogy

> Software is like making a pizza.

* Ingredients = code & tools
* Recipe = build process
* Chef = developers
* Kitchen = infra & clouds

> [!note] Quick Reminder
> Hackers target any part—bad ingredients, tricked chefs, or open kitchens.

---

## 🛡️ Supply Chain Security Frameworks

### SLSA Framework

```mermaid
graph TD
    A[Level 1: Provenance] --> B[Level 2: Build Integrity]
    B --> C[Level 3: Reproducible Builds]
    C --> D[Level 4: Hermetic Builds]
```

> [!quote] Prompt Wisdom
> “SLSA ensures trust and verification, not just CVE detection.”

→ See: [[SLSA Framework (Software Supply Chain)]]

---

## 🧾 Software Bill of Materials (SBOM)

Machine-readable inventory of software components:

| Tool          | Description                  | Format          |
| ------------- | ---------------------------- | --------------- |
| **Syft**      | SBOM from code/containers    | CycloneDX, SPDX |
| **CycloneDX** | OWASP SBOM format            | JSON, XML       |
| **SPDX**      | Linux Foundation open format | RDF, JSON, [[YAML]] |

> [!tip] Why It Matters
> CVEs are easier to trace when SBOMs are available.

---
## ✅ Final Recommendations

* Harden pipelines
* Use access controls
* Generate/review SBOMs
* Audit dependencies regularly
* Educate personnel


---

# 🛡️ CVE Detection in Software

## Vulnerability Scanners

| Tool           | Scans                                                                     | Integrations       |
| -------------- | ------------------------------------------------------------------------- | ------------------ |
| **Snyk**       | Code, [[Infrastructure Automation#🛠️ Infrastructure as Code (IaC)\|IaC]] | GitHub, GitLab     |
| **Trivy**      | Containers, FS                                                            | Docker, K8s        |
| **Dependabot** | GitHub PRs                                                                | Native integration |
| **OWASP DC**   | Java, .NET                                                                | CI/CD pipelines    |

---

## 📦 Artifact Registries with CVE Tools

| Registry          | CVE Scanning | Notes                  |
| ----------------- | ------------ | ---------------------- |
| JFrog Artifactory | ✅            | Built-in Xray          |
| GitHub Packages   | ✅            | Linked with Dependabot |
| Docker Hub        | ✅            | Basic scan shown       |

---

## 🔁 CVE Scan Workflow

```mermaid
flowchart TD
    A[CVE Published] --> B{CVE Database Updated}
    B --> C[Scanner Checks SBOM/Artifacts]
    C --> D{Vulnerability Found?}
    D -- Yes --> E[Alert Developer]
    D -- No --> F[Continue Monitoring]
```

---

## ✅ Best Practices

* ✅ SBOM for every release
* ✅ Use CI-integrated scanners
* ✅ Favor SLSA-compliant artifacts
* ✅ Monitor CVE feeds regularly

> [!warning] Stay Ahead
> ⚠️ Scan dev and prod environments consistently.
