---
title: OWASP Top 10
draft: false
tags:
  - OWASP
  - OWASPTop10
  - WebSecurity
  - Application-Security
  - cybersecurity
  - Secure-coding
  - Threat-Modeling
  - Security-Risk
  - DevSecOps
  - Security-Awareness
NeedsReview: true
---
# 🛡️ OWASP Top Ten Overview

The **OWASP Top Ten** is a globally recognized standard awareness document for developers and web application security professionals. It represents a broad consensus on the most critical security risks to web applications.

> **Purpose**: To guide developers and organizations toward more secure coding practices and foster a culture of secure software development.

---

## 📅 OWASP Top Ten 2025 – Project Status

- **Current Status (as of July 2025)**:  
    The OWASP team is on track to release the **OWASP Top 10:2025** in **late summer or early fall 2025**.  
    **Stay tuned for the official announcement!**

---

## 🔟 OWASP Top Ten 2021 – Web Application Security Risks

The 2021 edition introduced:

- **3 new categories**
- **4 renamed or re-scoped categories**
- **Consolidation of some previous risks**

| **OWASP ID** | **Category**                                                       | **Key Notes**                                                                                                                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A01:2021     | Broken Access Control                                              | Moved up from #5; Found in 94% of tested apps; Mapped to 34 [[Vulnerability Assessment & Hardening#Introduction to CWE and MITRE\|CWEs]]                                                                                                                              |
| A02:2021     | [[Encryption#🔐 Data Encryption Overview\|Cryptographic Failures]] | Formerly “Sensitive Data Exposure”; Focuses on cryptographic issues as root causes                                                                                                                                                                                    |
| A03:2021     | Injection                                                          | Includes [[SQL Injection (SQLi)]], [[NoSQL Injection]], [[OS Command Injection (Shell Injection)]], and [[Cross-Site Scripting (XSS)]]; Found in 94% of tested apps                                                                                                   |
| A04:2021     | Insecure Design _(New)_                                            | Emphasizes [[MITRE ATT&CK (Threat Modeling and Hunting)\|Threat Modeling]], secure design patterns, and reference architectures                                                                                                                                       |
| A05:2021     | Security Misconfiguration                                          | Moved up from #6; Now includes [[XML External Entity (XXE)]]                                                                                                                                                                                                          |
| A06:2021     | Vulnerable and Outdated Components                                 | Formerly “Using Components with [[Vulnerability Assessment & Hardening\|Know Vulnerabilities]]”; Difficult to test and assess risk                                                                                                                                    |
| A07:2021     | Identification and Authentication Failures                         | Formerly “Broken Authentication”; Now includes identification-related [[Vulnerability Assessment & Hardening#Introduction to CWE and MITRE\|CWEs]]                                                                                                                    |
| A08:2021     | Software and Data Integrity Failures _(New)_                       | Includes insecure deserialization; Focuses on [[Securing the CI-CD Pipeline\|CI/CD]], software updates, and [[CIA Principles#🧾 Integrity\|Data Integrity]]                                                                                                           |
| A09:2021     | Security Logging and Monitoring Failures                           | Formerly “Insufficient Logging & Monitoring”; Expanded scope, critical for [[NIST SP 800-61 R2 (Incident Response)#📊 Indicators of Compromise ( Indicators of Compromise (IOCs) and Frameworks Indicators of Compromise (IOCs) and Frameworks )\|Incident Response]] |
| A10:2021     | [[Server-Side Request Forgery (SSRF)]] _(New)_                     | Added based on community feedback; High exploit and impact potential despite low incidence                                                                                                                                                                            |

---

Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)