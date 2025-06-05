---
title: Identity & Access Management (IAM)
draft: false
tags:
  - IAM
  - AAA
  - MFA
  - SAML
  - OAuth
  - OpenID
  - RBAC
  - ABAC
NeedsReview: true
---

# Identity & Access Management (IAM)

> [!abstract] Summary  
> - **SAML**, **OAuth 2.0**, **OpenID Connect**
> - **RBAC**, **ABAC**, **MFA**
> 

### 🔐 **Multi-Factor Authentication (MFA)** or **Authentication Factors**

Here’s a breakdown:

|Factor Type|Description|Example|
|---|---|---|
|**Something You Know**|A secret the user knows|Password, PIN, passphrase|
|**Something You Have**|A physical object the user possesses|Smartphone, security token, smart card|
|**Something You Are**|A biometric trait|Fingerprint, facial recognition, iris scan|

---

### 🧠 Additional (Emerging) Factors

Some models expand this to include:

|Factor|Description|
|---|---|
|**Somewhere You Are**|Based on location (e.g., GPS, IP address)|
|**Something You Do**|Behavioral biometrics (e.g., typing rhythm, mouse movement)|
|**Time-Based**|Access allowed only during certain times|

---

### 🔐 What is AAA?

|Component|Description|
|---|---|
|**Authentication**|Verifies _who_ you are (e.g., username + password, biometrics).|
|**Authorization**|Determines _what_ you can access (e.g., role-based access to files or systems).|
|**Accounting**|Tracks _what_ you do (e.g., logging access times, actions taken).|

---

### 🧭 How AAA Fits into IAM

**IAM (Identity and Access Management)** is the broader discipline that governs **how identities are created, managed, and used** within an organization. AAA is the **technical foundation** that enables IAM to function.

|IAM Function|AAA Role|
|---|---|
|Identity provisioning|Supports **Authentication**|
|Access control policies|Enforced through **Authorization**|
|Audit and compliance|Enabled by **Accounting**|

---

_**Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)**_
