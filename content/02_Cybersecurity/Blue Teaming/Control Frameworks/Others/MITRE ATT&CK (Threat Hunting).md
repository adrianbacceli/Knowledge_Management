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
# Threat Hunting

* Thread Modeling using [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

---

> [!info]
> Threat hunting is a **proactive** cybersecurity process aimed at identifying Indicators of Compromise (IOCs) and uncovering gaps in Tactics, Techniques, and Procedures (TTPs) before they are exploited.

## MITRE ATT&CK TTPs for Threat Hunting

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
- Focus on detecting IOCs tied to known and emerging TTPs.
- Continuously validate your detection capabilities against mapped techniques.
- Integrate ATT&CK resources to enhance detection engineering and red team operations.

> [!note]  
> Consider using ATT&CK Navigator or similar visualization tools to overlay detection rules and red/blue team findings for enhanced coverage insight.

---
# Incident Response

View the [[NIST SP 800-61 R2 (Incident Response)|NIST Incident Response Framework]] for more details.

---
Stay sharp and hunt on, Penguin! 🐧