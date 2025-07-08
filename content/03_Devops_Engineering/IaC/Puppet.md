---
title: Puppet
draft: false
tags:
  - Puppet
  - IaC
  - DevSecOps
  - infrastructure-as-code
NeedsReview: false
---
## 🐾 **What Is Puppet?**

**Puppet** is a **declarative configuration management tool** used to automate the provisioning, configuration, and management of servers. It’s especially popular in large-scale enterprise environments.

---

### 🧠 **How Puppet Works**

- You define the **desired state** of your infrastructure using **Puppet manifests** (written in Puppet DSL, a Ruby-like language).
- Puppet ensures that the actual system state matches the desired state.
- It uses a **client-server model** (Puppet Master and Puppet Agent), though it also supports **agentless** operation via Bolt.

---

### 🧾 **Example Puppet Manifest**

```puppet
package { 'nginx':
  ensure => installed,
}

service { 'nginx':
  ensure => running,
  enable => true,
}
```

This tells Puppet:

- Make sure Nginx is installed
- Ensure the service is running and enabled on boot

---

### 🧩 **Puppet vs Ansible vs Terraform**

|Feature|Puppet|Ansible|Terraform|
|---|---|---|---|
|Language|Puppet DSL|[[YAML]]|HCL|
|Approach|Declarative|Imperative (mostly)|Declarative|
|State Tracking|Yes (resource catalog)|No|Yes (state file)|
|Agent Required|Yes (default)|No|No|
|Use Case|Configuration management|Configuration & orchestration|Infrastructure provisioning|

---

### 🔐 **Security & Compliance**

Puppet is often used in environments where **compliance and auditability** are critical. It supports:

- Role-based access control
- Node classification
- Reporting and auditing

---

### 🚀 **When to Use Puppet**

- Large-scale environments with many servers
- Strict compliance and audit requirements
- Long-lived infrastructure with complex configurations

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)