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

# Waterfall approach

Divided in 6 steps
1. Establish project requirements
2. Design the software
3. develop the software
4. test code
5. release the project
6. conduct maintenance

## Drawbacks
1. If the test finds an issue, the waterfall stops
2. When one team is blocked because other teams did not complete their tasks the development is stopped.

---
# Software Pipelines 
is a process that uses automation and tools to facilitate movement through each phase of the software development lifecycle.

Unlike traditional development, software pipelines help developers release changes quickly.
Developers can modify an application’s code without disturbing other parts of the project.

**Usually includes**
1. Automated integration and testing: Consistent process, seamless security, testing through the lifecycle
2. Code validation
3. Reporting measures.


---
## 🚀 What is CI/CD?

CI/CD is a process that DevSecOps teams use to create software and automate updates.
stands for:

**CI (Continuous Integration)**:  
Automatically building and testing your code every time you make changes and are uploaded into a shared repository. (e.g., pushing to GitHub). The goal is to catch bugs early and keep the codebase always in a working state.

**CD (Continuous Delivery or Deployment)**:
- **Delivery**: Automatically preparing code for deployment (e.g., building a release, sending to staging). Manual Approval in staging phase.
- **Deployment**: Actually pushing the code to production (e.g., updating a live website or app) automatically.

You don’t need to trigger anything manually — everything happens when code is pushed or merged. Think: **automation for coding workflows**.


---
**CI/CD has 4 steps**
### Source:  
* developers compile their code into a shared repository.
* Each developer works solely on the source code in this repository to ensure consistency.
* The team monitors for any deviation from the source code.

### Build:
* Developers implement edits to the source code in the shared repository.
* This triggers a build.
### Test:
* Automated security tests check the new build’s integrity.
* If any bugs are found in the build’s code, the pipeline stops the process until developers fix the problem.
### Deploy:
* The software deploys to end users within minutes.

---

## 🔁 Overview of CI/CD Steps with GitHub Actions

GitHub Actions lets you define **workflows** that automatically run when certain **events** occur (like pushing code). These workflows let you automate **CI/CD pipelines**.

## 🔹 1. **Source** (Collaborative Coding in Git/GitHub)

### What Happens:

- Developers clone a GitHub repo, work on code locally, then **commit and push** changes to a **shared GitHub repository**.
- Git ensures **version control**, while GitHub provides **collaboration**, **branching**, and **pull requests**.
- Monitoring is done using **branch protection rules**, **code reviews**, and **GitHub Actions triggers** (like when code is pushed to `main`).

### GitHub Example:

- You work offline → make changes → `git push origin main`
- GitHub records the change; Actions can now respond.
- 
---

## 🔹 2. **Build** (Compiling or Assembling the Code)

### What Happens:

- Once code is pushed to GitHub, it **triggers a workflow** (like a GitHub Action).
- This workflow **builds** the app: compiles code, installs dependencies, or assembles a static site.

> 🛠️ In your Quartz site, GitHub Actions builds your static files automatically — that’s a "Build" phase.

---

## 🔹 3. **Test** (Automated Validation)

### What Happens:

- After building, **automated tests** run to catch bugs, check security, or validate functionality.
- If a test fails, the CI pipeline **stops**, and developers must fix the issues.


This might run:

- Unit tests (for logic)
- Security checks
- Linting (style and syntax)

If this step fails, the workflow exits early — ensuring bad code doesn’t get deployed.

---

## 🔹 4. **Deploy** (Automatic Delivery to Users)

### What Happens:

- If all tests pass, the pipeline **automatically deploys** the code.
- This could mean:
    
    - Publishing to GitHub Pages
    - Deploying to Vercel, Netlify, Firebase, AWS, etc.
    - Releasing a Docker image or app build

> In your Quartz setup, your GitHub Action builds your site and **deploys it to GitHub Pages** — that’s CI/CD’s deploy step.

---
## 🎯 Summary of Each CI/CD Phase with GitHub:

|**Phase**|**What You Do**|**GitHub Tools**|
|---|---|---|
|**Source**|Push code to a shared repo|Git, GitHub|
|**Build**|Compile or prepare the app/site|GitHub Actions|
|**Test**|Run automated tests/linting/security scans|GitHub Actions|
|**Deploy**|Automatically send updates to users|GitHub Pages, Netlify, etc. via Actions|

---
# Security in CI/CD
CI/CD pipelines support integrated and automated security testing. There are several steps in the CI/CD pipeline, and automation helps streamline the workflow. With automation, DevSecOps teams can introduce security tests at many points throughout the development process. The application is regularly tested without needing human intervention, which results in a more healthy application, and less time investment from developers.

---

# Software Supply Chain

> [!summary] Core Concept  
Software supply chain attacks exploit weaknesses in the people, processes, and technologies involved in software development and deployment. These vulnerabilities allow threat actors to inject malicious code, manipulate dependencies, or gain unauthorized access to critical infrastructure—potentially compromising end-user systems downstream.

## 🔐 What is the Software Supply Chain?

The **software supply chain** encompasses all the **people**, **processes**, and **technologies** involved in developing, maintaining, and distributing software. This includes:

- Code scripts and source code repositories  
- CI/CD pipelines  
- Third-party libraries, plugins, containers  
- Developers, analysts, and other credentialed personnel  
- Policy and review cycles  
- Vendors and service providers

> [!info] Did You Know?  
> A compromised open-source library can affect thousands of downstream applications if not properly monitored.

---

## 🎯 Attack Surface & Vulnerabilities

### 👥 People
- Developers, security analysts, and managers can be **phished**, **socially engineered**, or **insider threats**.
- Anyone with credentials to CI/CD pipelines or repositories is a potential target.

> [!warning] Caution Ahead  
> ⚠️ Employees are often considered the weakest link in the supply chain.

### 🔄 Processes & Policies
- Poor access control  
- Weak update/rollback policies  
- Insecure feedback/review cycles  
- Ineffective approvals and communication

### 🧩 Technology & Dependencies
- Open-source libraries with malicious updates  
- Containers infected at build time  
- Compromised plugins or third-party tools  

---

## 🧨 Threat Actor Tactics

```mermaid
flowchart TD
    A[Threat Actor Recon] --> B[Identify People/Process/Tech Weaknesses]
    B --> C[Compromise CI/CD or Source Code]
    C --> D[Inject Malware / Backdoor]
    D --> E[Release Software to Public]
    E --> F[Exploit Users and Infrastructure]
````

> [!note] Quick Reminder  
> Attacks can occur _at any point_ in the chain—from code writing to final deployment.

---

## 🛡️ Defensive Strategies

### 🧰 1. Security Hardening
Strengthen systems to minimize vulnerabilities and reduce attack surface.

### 🕵️ 2. Continuous Vulnerability Checks
Implement automated scans during CI/CD stages. Patch immediately when flaws are detected.

### 📜 3. Software Bill of Materials ([[Developing Methodologies#🧾 Software Bill of Materials (SBOM)|SBOM]])
Maintain a machine-readable list of all components and dependencies in use.

> [!tip] Helpful Tip  
> 💡 An SBOM helps prove compliance and provides transparency to stakeholders.

---

## ✅ Final Recommendations

- Harden CI/CD pipelines
- Enforce strict credential and access control
- Integrate SBOM generation and review
- Continuously scan and audit dependencies
- Educate personnel on social engineering risks

> [!success] Securing Supply Chain  
> ✅ Implementing these measures secures your software supply chain and protects both your organization and your users.



---

# 🧩 Simplifying the Software Supply Chain?

Think of **software** like a **pizza** 🍕.

To make a pizza, you need:

- Ingredients (cheese, sauce, dough)
- A recipe
- A chef
- A kitchen

In the **software world**:

- The _ingredients_ = pieces of code and tools
- The _recipe_ = how you build the app (process)
- The _chef_ = developers and engineers
- The _kitchen_ = computers and cloud systems

➡️ All of this together is called the **software supply chain** — it’s the entire process from writing code to delivering the final app to users.

---

## 🔐 Why do we need to secure it?

Because **hackers** can:

- Mess with the ingredients (bad code)
- Sneak into the kitchen (unsecure devices)
- Trick the chef (fake tools or updates)

So we have to **lock down every step** of the pizza-making process!

---

## Frameworks to secure the supply chain
In modern development, securing the software supply chain is essential to protect against tampering, unauthorized changes, and vulnerable dependencies. One of the most robust frameworks for this purpose is **SLSA (Supply-chain Levels for Software Artifacts)**, which provides a structured approach to verifying build integrity, source authenticity, and third-party dependencies. SLSA is particularly relevant for organizations operating CI/CD pipelines in the cloud, where automation and external integrations are common. For a detailed breakdown of the SLSA levels, trust boundaries, and recommended technical controls, refer to the [[SLSA Framework (Software Supply Chain)|SLSA Framework (Software Supply Chain)]] note.


---
# 🔐 CVE Detection in Software Components

Understand how to quickly identify if a new CVE affects any component in your software using industry tools and practices.

> [!info] Purpose
> This note outlines best practices and tools for identifying CVEs via SBOMs, SLSA, vulnerability scanners, and artifact repositories.

---

## 🧾 Software Bill of Materials (SBOM)

A **Software Bill of Materials** is a machine-readable inventory of all components used in a software system.

| Tool       | Description                                       | Format         |
|------------|---------------------------------------------------|----------------|
| **Syft**   | CLI tool to generate SBOMs from containers/code   | CycloneDX, SPDX |
| **CycloneDX** | Lightweight SBOM format from OWASP              | JSON, XML       |
| **SPDX**   | Open standard for SBOMs from the Linux Foundation | RDF, JSON, YAML |

> [!tip] Why It Matters
> An SBOM lets you match components in your app to known CVEs using automated tools.

---

## 🛡️ Vulnerability Scanning

Tools that scan your dependencies and images for known vulnerabilities using CVE databases like the **NVD**.

| Tool               | Scans        | Integrations          |
|--------------------|--------------|------------------------|
| **Snyk**           | Code, containers, IaC | GitHub, GitLab, CI/CD |
| **Trivy**          | Containers, filesystems | Docker, Kubernetes     |
| **Dependabot**     | GitHub repos | Auto pull requests     |
| **OWASP DC**       | Java, .NET   | CI/CD compatible       |

---

## 🧬 SLSA: Supply Chain Levels for Software Artifacts

**SLSA** is a security framework that defines increasing levels of integrity for software builds.

```mermaid
graph TD
    A[Level 1: Provenance] --> B[Level 2: Build Integrity]
    B --> C[Level 3: Reproducible Builds]
    C --> D[Level 4: Hermetic Builds]
````

> [!quote] SLSA  
> "SLSA is not about detecting CVEs directly but ensuring the components you're using are trusted and verifiable."

---

## 📦 Artifact Repositories

Registries often integrate scanning tools to flag known CVEs in stored artifacts.

|Registry|CVE Scanning|Notes|
|---|---|---|
|**JFrog Artifactory**|✅|Built-in Xray scanner|
|**GitHub Packages**|✅|Integrated with Dependabot|
|**Docker Hub**|✅|Shows scan results|

---

## 🔁 CVE Identification Workflow

```mermaid
flowchart TD
    A[CVE Published] --> B{CVE Database Updated}
    B --> C[Vulnerability Scanner Checks SBOM/Artifacts]
    C --> D{Vulnerable Component Found?}
    D -- Yes --> E[Alert Developer]
    D -- No --> F[Continue Monitoring]
```

---

## ✅ Best Practices

- ✅ Generate and store an SBOM for every release.
- ✅ Use scanners like Trivy or Snyk in CI/CD.
- ✅ Prefer SLSA-compliant artifacts. 
- ✅ Monitor CVE feeds (e.g., NVD, GitHub Advisories).

---

> [!warning] Stay Ahead  
> Regularly scan both development and deployed environments to catch vulnerabilities introduced post-deployment.