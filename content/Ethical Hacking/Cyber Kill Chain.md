
---
title: Cyber Kill Chain and Tools
draft: false
tags:
  - cybersecurity
  - red-teaming
  - cyber-kill-chain
  - offensive-security
---

# 🛡️ Cyber Kill Chain and Tools

The **Cyber Kill Chain**, developed by Lockheed Martin, outlines the structured phases of a cyberattack—from reconnaissance to final execution. Understanding these steps empowers defenders to detect and disrupt attacks early.

---

## 1. Reconnaissance 🔍  
**Objective:** Identify targets and gather intelligence.

### Passive Reconnaissance  
_No interaction with the target._

- Instagram, LinkedIn  
- Company websites, job listings  
- WHOIS/DNS records  
- Partners and vendors

**Tools:** theHarvester, Maltego, Recon-ng, Google Dorking

### Active Reconnaissance  
_Direct interaction with the target system._

- Scanning and service enumeration  
- Network mapping

**Tools:** Nmap, Masscan, Shodan, Enum4linux

---

## 2. Weaponization 🧬  
**Objective:** Develop a payload and pair it with a delivery method.

- AV/EDR evasion intelligence  
- Lightweight, persistent malware with remote access  
- Support for additional payloads

**Tools:** MSFvenom, Cobalt Strike, Veil Framework, Msfconsole

---

## 3. Delivery ✉️  
**Objective:** Transmit the payload to the target.

### Common Vectors:

- Phishing emails (attachments/links)  
- Compromised websites (drive-by)  
- USB drops and physical access  
- Social engineering calls

**Tools:** Gophish, Evilginx2, SET Toolkit, BadUSB

---

## 4. Exploitation 💥  
**Objective:** Trigger execution of malicious code.

- Remote/local code execution  
- Vulnerability exploitation  
- Privilege escalation

**Tools:** Metasploit, ExploitDB, sqlmap

---

## 5. Installation 🧩  
**Objective:** Establish and maintain access.

- Droppers (payload installers)  
- Backdoors (persistent access)  
- Rootkits (stealth mechanisms)

**Tools:** Meterpreter, Pupy, Netcat, Ngrok

---

## 6. Command and Control (C2) 🛰️  
**Objective:** Remotely control compromised systems.

- Encrypted communication  
- Custom C2 channels (DNS, HTTPS)  
- Dynamic IP/DNS

**Tools:** Cobalt Strike, Sliver, Covenant, Mythic

---

## 7. Actions on Objectives 🎯  
**Objective:** Achieve the attacker's goal.

- Data exfiltration  
- Lateral movement  
- System sabotage or persistence

**Tools:** Mimikatz, BloodHound, PsExec, CrackMapExec

---

> 🔁 **Note:** After initial compromise, attackers often restart the kill chain on internal systems to pivot and move laterally.

---

## Summary Table

| Phase             | Goal                              | Tools                               |
|------------------|-----------------------------------|-------------------------------------|
| Reconnaissance    | Identify and research targets      | theHarvester, Nmap, Shodan          |
| Weaponization     | Craft and package payload          | MSFvenom, Veil, Cobalt Strike       |
| Delivery          | Transmit payload                   | SET Toolkit, Gophish, Evilginx2     |
| Exploitation      | Trigger payload execution          | Metasploit, ExploitDB, sqlmap       |
| Installation      | Gain and maintain access           | Meterpreter, Netcat, Pupy           |
| Command & Control | Remote control of victim system    | Sliver, Covenant, Mythic            |
| Action            | Complete attack goals              | Mimikatz, BloodHound, PsExec        |

---

> 🧠 **Tip for Defenders:** Interrupting even one phase of the chain can prevent a full compromise. Layered detection and response is key.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwMzcxNDkzNDcsMjI0NjgzODUyXX0=
-->
