---
title: Secrets Management
draft: false
tags:
  - security
  - secrets-management
  - DevSecOps
NeedsReview: false
---
> [!note]  
> This note covers best practices for managing secrets in software systems, including vault-based storage and automated secret scanning.

## Overview

Secrets management involves securely storing, accessing, and auditing sensitive information such as API keys, credentials, tokens, and certificates. This is a critical aspect of DevSecOps and infrastructure security.

## Vault-Based Storage

Vaults are specialized tools designed to store secrets in a secure, encrypted manner with access controls, auditing, and rotation policies. Commonly used vault solutions include:

- **HashiCorp Vault** – Open-source and enterprise-grade secrets management tool with fine-grained access policies.
- **AWS Secrets Manager** – Managed service for storing and retrieving secrets programmatically.
- **Azure Key Vault** – Microsoft’s cloud-native vault for keys, secrets, and certificates.
- **Google Secret Manager** – Managed service for storing API keys and secrets on GCP.

> [!tip]  
> Vaults should be integrated with applications using environment variables or secrets injection, not hardcoded in source code.

## Secret Scanning Tools

These tools automate the detection of secrets inadvertently committed to code repositories or other plaintext locations.

### Popular Secret Scanners

- **GitGuardian** – Scans public and private repositories for sensitive information leaks.
- **truffleHog** – Searches git history for high-entropy strings or known secret patterns.
- **gitleaks** – Lightweight tool to scan for secrets via regex patterns and entropy analysis.
- **Talisman** – Pre-commit hook that prevents sensitive files or secrets from being committed.
- Sonarsource – Free Open Source detection code and rules [Secrets Detection by Sonar | Sonar](https://www.sonarsource.com/solutions/secrets-detection/)

> [!warning]  
> Scanning tools should be part of your CI/CD pipelines to prevent secrets from entering version control in the first place.

## Best Practices

- Avoid hardcoding secrets in code.
- Use environment-specific secrets and rotate them regularly.
- Limit access based on least privilege principles.
- Enable logging and auditing on all access attempts.
- Automate secret injection at runtime using secure mechanisms.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
