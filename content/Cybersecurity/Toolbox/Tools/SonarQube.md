---
title: SonarQube
draft: false
tags:
  - SonarQube
  - SAST
  - Vulnerability
  - vulnerability-scanning
  - tools
  - DevSecOps
  - Code-Quality
NeedsReview: false
---

> [!note]
> This note provides a structured overview of SonarQube as used in a real-world cloud setup by the `adrianbacceli` organization. Daily code analysis runs using the free cloud tier with Continuous Delivery enabled.

# SonarQube: Introduction to Static Code Analysis

SonarQube is a **Static Application Security Testing ([[DevOps and DevSecOps#🧪 **SAST (Static Application Security Testing) Tools**|SAST]])** tool that automatically analyzes source code to detect:

- Bugs (that affect correctness or behavior)
- Security vulnerabilities (that can be exploited)
- Code smells (patterns that reduce maintainability)

> [!tip]
> Integrating SonarQube into your CI/CD pipeline lets you catch issues early—before code reaches production.

---

# Core Concepts in SonarQube

Each metric SonarQube provides supports a different aspect of code quality. Here’s a breakdown to help interpret them effectively.

## 🔰 Quality Gates

A **Quality Gate** is a set of thresholds that your code must meet to be considered “clean” or “deployable.” These include limits on:

- Number of new bugs or vulnerabilities
- Coverage percentage
- Maintainability issues

> [!warning]
> If a project fails its Quality Gate, it's flagged and should not be deployed.

---

## 📉 Reliability

**Reliability** measures how likely your application is to fail at runtime due to defects.

- Focus: Logical errors, null pointer dereferences, API misuse.
- Goal: Fewer bugs → more stable software.

> [!example]
> A method that could throw an unhandled exception will be flagged under Reliability.

---

## 🔐 Security & Security Review

**Security** metrics focus on finding exploitable weaknesses such as:

- SQL Injection
- Cross-Site Scripting (XSS)
- Hardcoded secrets

**Security Review** supplements this by evaluating whether security guidelines are systematically followed.

> [!tip]
> Automating these reviews helps enforce secure coding practices across teams.

---

## 🛠️ Maintainability

**Maintainability** reflects how easily the code can be modified, extended, or refactored.

- Measured through "code smells"
- Common issues: duplicate code, overly complex methods, magic numbers

> [!note]
> Clean, maintainable code is easier to onboard, debug, and enhance.

---

## ✅ Test Coverage

**Coverage** tells you how much of your code is exercised by automated tests.

- Expressed as a percentage
- Combined with conditions: e.g., "Coverage on new code must be ≥ 80%"

> [!warning]
> High coverage doesn’t guarantee correctness—but low coverage is a red flag.

---

## ♻️ Duplications

Duplicate code increases maintenance overhead and the risk of inconsistent changes.

- SonarQube flags duplicated blocks across files or modules.
- Encourages reuse via methods or shared modules.

---

## 📊 Size Metrics

Size metrics help teams plan and scale by quantifying:

- Number of lines
- Complexity
- Files/modules involved

Use these metrics to manage technical debt and scale architecture decisions appropriately.

---

## 🌍 Language Support

SonarQube supports multi-language codebases including:

- **Java**, **JavaScript**, **TypeScript**
- **Python**, **C/C++**, **Go**, and more

> [!note]
> This makes it suitable for polyglot teams and monorepos.

---

# 🧾 Summary Table

| Feature           | What It Measures                          | Why It Matters                              |
|-------------------|-------------------------------------------|---------------------------------------------|
| Quality Gate       | Overall pass/fail based on thresholds     | Blocks faulty code from being deployed      |
| Reliability        | Potential bugs                            | Ensures runtime stability                   |
| Security           | Vulnerabilities and insecure patterns     | Guards against attacks                      |
| Security Review    | Adherence to security best practices      | Encourages secure development lifecycle     |
| Maintainability    | Code smells and complexity                | Improves long-term manageability            |
| Coverage           | Test execution against code paths         | Reduces risk of undetected defects          |
| Duplications       | Repetitive code                           | Supports DRY principle and cleaner design   |
| Size               | Codebase structure and scale              | Helps with planning and resource allocation |

---

> [!tip]
> Start with small codebases to get comfortable with interpreting metrics before scaling SonarQube to larger projects.