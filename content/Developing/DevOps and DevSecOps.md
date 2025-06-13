---
title: DevOps and DevSecOps
draft: false
tags:
  - DevSecOps
  - DevOps
NeedsReview: false
---
> [!summary] Core Concept  
DevSecOps integrates security into each phase of the DevOps lifecycle. Rather than treating security as an afterthought, the DevSecOps model emphasizes a *[[Google Cloud Security Architecture#🕒 What does **Shift Left** mean?|Shift Left]]* approach, embedding security practices early in development workflows to reduce risk and increase resilience.

## 🔐 What is DevSecOps?

DevSecOps enhances the traditional DevOps approach by integrating **security across the entire software lifecycle**. While DevOps focuses on **development, deployment, and operations**, DevSecOps embeds **code analysis, compliance checks, threat modeling**, and **secure coding standards** from the very beginning.

> [!note] Quick Reminder  
> Dev = Development, Ops = Operations, Sec = Security — All teams collaborate throughout.

---

## 🌀 DevSecOps Lifecycle: 7 Phases

### 1. 🧠 Plan
- Define scope, assets, and data templates
- Perform threat modeling and analysis
- Assign IAM roles for proper access control
- Choose security tools and testing frameworks

### 2. 💻 Code
- Apply secure coding practices
- Conduct peer code reviews
- Integrate plugins for static analysis, bug detection, and policy enforcement
- Automate vulnerability scanning during coding

### 3. 🏗 Build
- Compile code and generate build artifacts
- Integrate vulnerability scanning and security gates
- Use automated CI/CD tools for early detection
- Enforce _[[Google Cloud Security Architecture#🕒 What does **Shift Left** mean?|Shift Left]]_ strategies to catch issues earlier

### 4. 🧪 Test
- Execute both manual and automated tests
- Validate build integrity, functionality, and performance
- Perform compliance verification
- Conduct QA and triage for any security-related findings

### 5. 🚀 Release
- Validate readiness of the environment using automated security checks
- Review and sign off final configuration and artifacts
- Confirm all security and compliance checks have passed

### 6. 📦 Deploy
- Automate production deployment
- Push software to end users using secured pipelines
- Ensure secure containerization and environment isolation

### 7. 🔍 Operate
- Monitor for real-time vulnerabilities and anomalies
- Implement continuous feedback loops to improve future builds
- Patch issues proactively
- Share insights between Dev, Sec, and Ops teams

---

## 🔐 DevSecOps Key Components

- **Code Analysis**: Continuous scanning for weaknesses and bugs
- **Change Management**: Controlled and auditable updates
- **Compliance Checks**: Automated verification of regulatory standards
- **Security Training**: Empower teams to code and deploy securely
- **Threat Modeling**: Anticipate and mitigate risk early

> [!tip] Helpful Tip  
> 💡 The earlier you find a vulnerability (left in the lifecycle), the cheaper and easier it is to fix it.

---

## 🌱 Culture Shift: “**_[[Google Cloud Security#🕒 What does **Shift Left** mean?|Shift Left]]” Mentality

> [!abstract] Key Concept  
> Shift Left refers to integrating security practices early in the development pipeline — rather than waiting for post-deployment fixes. It reduces time to remediation, improves code quality, and lowers breach risk.

---

## 🧭 Summary

| Phase   | Focus                | Security Approach              |
| ------- | -------------------- | ------------------------------ |
| Plan    | Threat modeling, IAM | Define risks and controls      |
| Code    | Development          | Secure coding, static analysis |
| Build   | Compiling            | Integrated security checks     |
| Test    | Validation           | Manual & automated testing     |
| Release | Final checks         | Compliance review and sign-off |
| Deploy  | Go live              | Secured deployment pipelines   |
| Operate | Monitoring           | Real-time feedback & patching  |

---

> [!success] Takeaway  
> ✅ DevSecOps shifts security from being a bottleneck to becoming a collaborative enabler — making secure software development faster, smarter, and safer.

