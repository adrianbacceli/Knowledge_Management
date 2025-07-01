---
title: Unified Kill Chain (UKC)
draft: false
tags:
  - cybersecurity
  - red-teaming
  - unified-kill-chain
  - mitre-attack
  - attack-lifecycle
NeedsReview: false
---

> [!summary] Core Concept  
> The **Unified Kill Chain (UKC)** is a comprehensive framework combining the **Cyber Kill Chain (CKC)** and **[[Threat Hunting & Incident Response#MITRE ATT&CK TTPs for Threat Hunting|MITRE ATT&CK]]**. It models modern attacks—malware and non-malware, targeted or opportunistic—across 18 tactical stages that describe how adversaries get **in**, move **through**, and act **out** of networks to achieve strategic objectives.

---

## 🔐 Overview of the Unified Kill Chain Phases

The attack flow is organized into three macro stages:

### 🔹 In — Gaining Initial Foothold  
- *Reconnaissance*  
- *Resource Development*  
- *Delivery*  
- *Social Engineering*  
- *Exploitation*  
- *Persistence*  
- *Defense Evasion*  
- *Command & Control*

### 🔸 Through — Navigating Internals  
- *Pivoting*  
- *Discovery*  
- *Privilege Escalation*  
- *Execution*  
- *Credential Access*  
- *Lateral Movement*

### 🔻 Out — Acting on Objectives  
- *Collection*  
- *Exfiltration*  
- *Impact*  
- *Objectives*

---

## 🔹 In: Getting Into the Network

### 1. **Reconnaissance**
> Identifying and profiling targets using OSINT, scanning, and enumeration.
- Active/passive scanning, social media scraping, DNS brute-force, etc.

### 2. **Resource Development**
> Setting up infrastructure to support the attack.
- Buy domains, spin up servers, develop malware payloads, create spoofed identities.

### 3. **Delivery**
> Transmitting a weaponized object to the target.
- Email attachments, malicious links, USB drops, poisoned updates.

### 4. **Social Engineering**
> Manipulating users to execute unsafe actions.
- Phishing, pretexting, baiting, impersonation (digital and physical).

### 5. **Exploitation**
> Exploiting a vulnerability to gain access or execute code.
- Buffer overflows, XSS, deserialization bugs, privilege flaws.

### 6. **Persistence**
> Establishing a long-term foothold.
- Registry/run key injection, scheduled tasks, cron jobs, cloud backdoors.

### 7. **Defense Evasion**
> Evading detection by security systems or analysts.
- Obfuscation, timestomping, process hollowing, polymorphism.

### 8. **Command & Control**
> Maintaining communication with the compromised system.
- HTTP/S, DNS, custom protocols, covert channels.

---

## 🔸 Through: Moving Across the Environment

### 9. **Pivoting**
> Using a compromised system as a jump point to access internal systems.
- Port forwarding, tunneling, proxychains, VPNs, cloud IAM assumption.

### 10. **Discovery**
> Learning about the internal network, hosts, users, roles, and privileges.
- Network scanning, AD enumeration, host inventory.

### 11. **Privilege Escalation**
> Gaining higher-level permissions.
- Kernel exploits, token impersonation, SUDO misconfigurations.

### 12. **Execution**
> Running attacker-controlled code.
- PowerShell, scripts, scheduled tasks, exploitation of interpreters.

### 13. **Credential Access**
> Dumping or stealing credentials to expand access.
- LSASS dump, keylogging, credential harvesting via phishing kits.

### 14. **Lateral Movement**
> Expanding control to other systems.
- SMB, RDP, PSExec, WinRM, cloud cross-account access.

---

## 🔻 Out: Achieving Adversarial Goals

### 15. **Collection**
> Gathering sensitive data for exfiltration or manipulation.
- File harvesting, screenshots, clipboard theft, database dumps.

### 16. **Exfiltration**
> Stealthily transferring collected data outside the network.
- DNS tunneling, encrypted C2, cloud sync (rclone, Dropbox, Mega).

### 17. **Impact**
> Damaging or disrupting the target's systems or data.
- Wipers, ransomware, defacement, denial of service.

### 18. **Objectives**
> Achieving the strategic goal behind the attack.
- Espionage, extortion, reputational harm, sabotage, financial theft.


---

> 💡 Pro Tip: Combine UKC with MITRE D3FEND for a complete offensive/defensive playbook.  
> 🛡️ Best Defense Focus: Harden against **Initial Access**, **Credential Access**, and **Pivoting**.