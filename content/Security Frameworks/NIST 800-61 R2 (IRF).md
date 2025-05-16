---
title: NIST 800-61 R2 (IRF)
draft: false
tags:
  - incident-response
  - NIST
  - blue-team
  - IRF
  - 800-61
  - R2
  - Framework
NeedsReview: false
---
> [!summary] Core Concept  
> The NIST Incident Response Framework provides a complete lifecycle for managing cybersecurity incidents, from preparation through recovery. This note captures detailed prerequisites, tools, techniques, and phases tailored to practical implementation.

---

## 🔁 Incident Response Lifecycle

```mermaid
flowchart LR
  A[ Preparation] --> B[ Detection & Analysis]
  B --> C[ Containment, Eradication & Recovery]
  C --> D[ Post-Incident Activity]
  D --> A
````

---

## 🔧 1. Preparation

### 🎯 Goals

- Establish response capability
- Prevent incidents via hardening and controls

### 🛠️ Essentials

- **Skilled incident handlers** (in-house or outsourced with internal awareness)
- **Trained workforce** (via awareness, training, and simulation)
- **Documented policies and response plans**
- **Hardware & software jumpbags**

---

### 📄 Must-Have Documentation

> [!info] Maintain Updated Copies  
> Store these securely and review regularly.

1. Contact lists (IR team, legal, IT, PR, law enforcement)
2. IR policy, plan, and procedures
3. Information sharing protocols
4. System/network baselines & clean states
5. Network topology diagrams
6. Asset inventory DB
7. On-demand privileged user accounts (with auto-disable and password reset)
8. Emergency procurement plan (no delay for tools)
9. Forensic cheat sheets

---

### 💼 Jumpbag Checklist

> [!tip] Helpful Tip  
> 💡 Each team member should have access to an independent workstation with admin rights and NO antivirus enabled for malware testing.


### 🖥️ **Hardware & General Tools**

- 🔹 Forensic laptop or dedicated workstation (per team member)
- 🔹 Network cables, write blockers, external drives, power cords
- 🔹 Toolkit (screwdrivers, tweezers, etc.)
- 🔹 Chain of custody forms
- 🔹 Disk transport bags
- 🔹 Secure storage for evidence

---

### 🔬 **Forensic & Analysis Software**

**📸 Imaging Tools**

- Tableau TD4
- Tableau TX1
- SuperImager kits

**🧠 Memory Forensics**

- Volatility
- Rekall
- Belkasoft RAM Capturer

**🧾 IOC Tools**

- YARA
- Mandiant IOC Editor

**🗃️ File Recovery & Image Tools**

- X-Ways
- FTK Imager
- CAINE

**📂 Case Management Platforms**

- Magnet Axiom
- Autopsy
- EnCase
- Forensic Explorer (FEX)

---

### 🧪 **Sandbox & Virtual Environments**

- AnyRun (interactive malware analysis)
- Windows Sandbox
- Hyper-V
- VMware ESXi

---

### 📱 **Mobile Device Forensics**

- Cellebrite UFED
- Oxygen Forensic Kit
- MOBILedit

---

### 💸 **Budget-Friendly Alternatives**

- CoolGear USB adapters
- Basic USB write blockers

> ⚠️ _Note:_ May not meet court-admissible standards.

---

**Resources**
- [SIFT Workstation](https://www.sans.org/tools/sift-workstation/)
- [Memory Forensics Tools](https://github.com/digitalisx/awesome-memory-forensics#tool)

---

## 🔍 2. Detection & Analysis

### 🔔 Alert Sources

1. Employee reporting
2. EDR, IDS, SIEM alerts
3. Threat hunting discovery
4. External notifications

---

### 🧠 Detection Layers

- **Perimeter**: Firewalls, DMZ, NIDS
- **Internal Network**: HIPS, local firewalls
- **Endpoint**: EDR, antivirus
- **Application**: Logs, service behaviors

---

### 🕵️ Initial Investigation

**Key Questions**

- Who, when, what, how?
- Systems affected and current status
- Malware type, spread, hash, IPs
- Create an attack timeline

**Severity Assessment**

- Exploit impact & requirements
- Business-critical involvement
- Live exploitation?
- Worm-like behavior?

> [!danger] Risk Zone  
> 🚨 High-severity incidents trigger escalated response & must be contained fast.

---

### 📊 Indicators of Compromise (IOC)

- Examples: hashes, filenames, IPs
- Tools: YARA, IOC Editor, WMI/PowerShell

> [!Warning] Be careful!  
> Avoid credential caching on remote systems!


---

### 🔦 IOC Hits & New Leads

- Validate and analyze hits
- Prioritize leads for forensic focus
- Eliminate false positives

---

### 🧪 Data Collection & Chain of Custody

**Options:**

- **Live capture** (preferred for full artifact scope)
- **Offline analysis** (less volatile, lose RAM)

---

## 🔐 3. Containment, Eradication & Recovery

### ⏱️ Short-Term Containment

- Quarantine via VLAN, unplug network, sinkhole DNS
- Forensic imaging begins here

> [!quote] Prompt Wisdom  
> "Contain first, analyze next. Don’t tip off the attacker too soon."

---

### 📉 Long-Term Containment

- Reset passwords, apply patches, HIDS, firewall rules
- Maintain communication with stakeholders

---

### 🧹 Eradication

- Remove malware
- Rebuild or restore systems
- Apply security hardening across environment

---

### ♻️ Recovery

- Reintroduce systems with heightened monitoring
- Watch for unusual logins, processes, registry changes
- Gradual phases: quick wins → long-term resilience

---

## 📚 4. Post-Incident Activity

### 🎯 Goal

- Document what happened, what worked, and what didn’t

### 📝 Final Report Checklist

1. What/when occurred
2. Team & business performance
3. Actions taken
4. Improvements for future
5. Tool readiness
6. Training & structure evaluation

> [!success] Well Done!  
> ✅ Use real incidents to train new members and update procedures/playbooks.

---

## 🔐 Security Controls & Prevention (Cross-Phase)

### 🔑 Identity Protection

- Use passphrases over complex passwords
- Apply **MFA** for all admin access

### 📧 Email Protection

- **SPF/DKIM/DMARC** setup
- [DMARC Reference](https://dmarcly.com/blog/how-to-implement-dmarc-dkim-spf-to-stop-email-spoofing-phishing-the-definitive-guide#what-is-dmarc)

---

### 🧱 Server & Endpoint Hardening

- Follow **CIS & Microsoft baselines**
- Disable LLMNR/NetBIOS
- LAPS deployment
- PowerShell ConstrainedLanguage mode
- ASR rules via Defender
- Whitelist or restrict execution folders
- Monitor LOLBins → [LOLBA Project](https://lolbas-project.github.io/)
- Block workstation-to-workstation traffic
- Deploy EDR with AMSI integration

---

### 🔐 Network Controls

- Network segmentation
- 802.1x authentication
- Conditional Access Policies
- IDS/IPS, SIEM, SOAR, WAF

---

### 🧪 Penetration Testing & Purple Teaming

- Use in-house or contracted red teams to challenge IR
- Map findings against detection, logs, and playbooks
- Continuously scan and patch critical vulnerabilities