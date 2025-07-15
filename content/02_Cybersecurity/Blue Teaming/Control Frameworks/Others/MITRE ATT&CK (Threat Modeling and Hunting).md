---
title: MITRE ATT&CK (Threat Hunting)
draft: false
tags:
  - cybersecurity
  - TTPs
  - IoC
  - mitre-attack
  - Threat-Hunting
  - Proactive-Defense
  - IR
  - incident-response
NeedsReview: false
---
# Threat Modeling

* Threat Modeling using [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## Threat Modeling Methodologies


### 🔐 **1. STRIDE**

- **Focus**: Categorizing threats
- **Categories**: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
- **Best for**: Identifying threats in software systems, especially during design.

---

### 🧠 **2. PASTA (Process for Attack Simulation and Threat Analysis)**

- **Focus**: Risk-centric and attacker-focused
- **Stages**: 7 stages from defining business objectives to threat analysis and risk mitigation
- **Best for**: Organizations needing a comprehensive, risk-based approach.

---

### 🧱 **3. LINDDUN**

- **Focus**: Privacy threat modeling
- **Categories**: Linkability, Identifiability, Non-repudiation, Detectability, Disclosure of information, Unawareness, Non-compliance
- **Best for**: Systems where privacy is a key concern (e.g., healthcare, finance).

---

### 🧮 **4. Trike**

- **Focus**: Risk management and security auditing
- **Approach**: Builds a requirements model and threat model, then assesses risk
- **Best for**: Teams that want to integrate threat modeling with risk assessment.

---

### 🧰 **5. VAST (Visual, Agile, and Simple Threat Modeling)**

- **Focus**: Scalability and integration with Agile/DevOps
- **Approach**: Uses automated tools and visual models
- **Best for**: Large organizations with complex systems and fast development cycles.


---


## Different Approaches based on Common Scenarios:

|Scenario|Recommended Approach|
|---|---|
|**You’re building general-purpose apps and want a simple, structured method**|**STRIDE**|
|**You need to model privacy threats (e.g., GDPR, HIPAA)**|**LINDDUN**|
|**You want a risk-based, attacker-focused model**|**PASTA**|
|**You’re in a fast-paced Agile/DevOps environment**|**VAST**|
|**You want to integrate threat modeling with risk management**|**Trike**|

---
### 🔍 Key Questions:

1. **What type of systems are you building?**
    - Web apps, mobile apps, embedded systems, cloud infrastructure, etc.

2. **What’s your primary concern?** 
    - Security, privacy, compliance, risk management, scalability?

3. **How mature is your security process?**
    - Just starting, moderately mature, or well-established?

4. **What’s your team’s workflow like?**    
    - Agile, DevOps, Waterfall, etc.

5. **How large is your team and how technical are they?**    
    - Are they mostly developers, security engineers, or a mix?


---

> [!info]
> Threat hunting is a **proactive** cybersecurity process aimed at identifying Indicators of Compromise (IOCs) and uncovering gaps in Tactics, Techniques, and Procedures ([[TTPs]]) before they are exploited.

# MITRE ATT&CK [[TTPs]] for Threat Hunting

The MITRE ATT&CK framework is central to modern threat hunting and categorizes adversary behavior into:

- **Tactics**: The adversary's **goal** or **objective** (e.g., Initial Access, Execution, Persistence).
- **Techniques**: The **method** used to achieve a tactic (e.g., Spearphishing Attachment, Credential Dumping).
- **Sub-techniques**: More granular descriptions that provide detail under each technique (e.g., LSASS Memory for Credential Dumping).
- **Procedures**: The **specific implementation** of a technique, such as using a particular malware or exploiting a known vulnerability.


> [!tip]  
> Map your security controls to MITRE ATT&CK to systematically identify and close coverage **gaps** across tactics and techniques.

### ATT&CK in Practice

- **Initial Access**: Techniques like Phishing (T1566), Drive-by Compromise (T1189), and Valid Accounts (T1078).
- **Persistence**: Techniques such as Scheduled Task/Job (T1053), Boot or Logon Autostart Execution (T1547).
- **Privilege Escalation**: Includes Exploitation for Privilege Escalation (T1068), and Bypass User Account Control (T1548).
- **Defense Evasion**: Techniques such as Obfuscated Files or Information (T1027), and Indicator Removal on Host (T1070).


> [!example]  
> If your SIEM lacks rules to detect Scheduled Task creation (T1053), this represents a detection gap under **Persistence**.

### MITRE ATT&CK Tactic Overview Table

|**Tactic (Why)**|**# Techniques**|**Examples (linked)**|
|---|---|---|
|Reconnaissance|10|[T1595 Active Scanning](https://attack.mitre.org/techniques/T1595/), [T1598 Phishing for Info](https://attack.mitre.org/techniques/T1598/)|
|Resource Development|8|[T1583 Acquire Infrastructure](https://attack.mitre.org/techniques/T1583/), [T1590 Gather Network Info](https://attack.mitre.org/techniques/T1590/)|
|Initial Access|10|[T1566 Phishing](https://attack.mitre.org/techniques/T1566/), [T1078 Valid Accounts](https://attack.mitre.org/techniques/T1078/)|
|Execution|14|[T1059 Command & Scripting Interpreter](https://attack.mitre.org/techniques/T1059/), [T1204 User Execution](https://attack.mitre.org/techniques/T1204/)|
|Persistence|20|[T1053 Scheduled Task/Job](https://attack.mitre.org/techniques/T1053/), [T1547 Autostart Execution](https://attack.mitre.org/techniques/T1547/)|
|Privilege Escalation|14|[T1068 Exploitation for Privilege Escalation](https://attack.mitre.org/techniques/T1068/), [T1548 Bypass UAC](https://attack.mitre.org/techniques/T1548/)|
|Defense Evasion|43|[T1027 Obfuscated Files/Info](https://attack.mitre.org/techniques/T1027/), [T1070 Indicator Removal on Host](https://attack.mitre.org/techniques/T1070/)|
|Credential Access|17|[T1003 OS Credential Dumping](https://attack.mitre.org/techniques/T1003/), [T1555 Credentials from Password Stores](https://attack.mitre.org/techniques/T1555/)|
|Discovery|32|[T1082 System Information Discovery](https://attack.mitre.org/techniques/T1082/), [T1046 Network Service Discovery](https://attack.mitre.org/techniques/T1046/)|
|Lateral Movement|9|[T1021 Remote Services](https://attack.mitre.org/techniques/T1021/), [T1563 Remote Service](https://attack.mitre.org/techniques/T1563/)|
|Collection|17|[T1005 Data from Local System](https://attack.mitre.org/techniques/T1005/), [T1056 Input Capture](https://attack.mitre.org/techniques/T1056/)|
|Command & Control|17|[T1071 Application Layer Protocol](https://attack.mitre.org/techniques/T1071/), [T1090 Proxy](https://attack.mitre.org/techniques/T1090/)|
|Exfiltration|9|[T1041 Exfiltration Over C2](https://attack.mitre.org/techniques/T1041/), [T1567 Exfiltration Over Web Service](https://attack.mitre.org/techniques/T1567/)|
|Impact|14|[T1486 Data Encrypted for Impact](https://attack.mitre.org/techniques/T1486/), [T1490 Inhibit System Recovery](https://attack.mitre.org/techniques/T1490/)|

> [!info]  
> Full framework and interactive matrix available at: [MITRE ATT&CK Enterprise Matrix](https://attack.mitre.org/matrices/enterprise/)

### Tools & Resources

- **ATT&CK Navigator**: Visual tool for mapping and overlaying ATT&CK data.
- **Atomic Red Team**: Provides tests to simulate ATT&CK techniques.
- **Sigma Rules**: Community-driven detection rule format that maps to ATT&CK techniques.
## Summary

- Use ATT&CK to guide threat hunting investigations.
- Focus on detecting IOCs tied to known and emerging [[TTPs]].
- Continuously validate your detection capabilities against mapped techniques.
- Integrate ATT&CK resources to enhance detection engineering and red team operations.

> [!note]  
> Consider using ATT&CK Navigator or similar visualization tools to overlay detection rules and red/blue team findings for enhanced coverage insight.

---
# Incident Response

View the [[NIST SP 800-61 R2 (Incident Response)|NIST Incident Response Framework]] for more details.

---

# Mitigation and Avoidance

Refer to:
- [[Vulnerability Assessment & Hardening#SANS Institute and the SWAT Checklist|SANS Institute and the SWAT Checklist]]
- [[Vulnerability Assessment & Hardening#Introduction to CWE and MITRE|Introduction to CWE and MITRE]]

---
Stay sharp and hunt on, Penguin! 🐧