---
title: Indicators of Compromise (IOCs) and Frameworks
draft: false
tags:
  - cybersecurity
  - threat-intelligence
  - IoC
  - STIX
  - MISP
  - Sigma
  - OpenIOC
  - YARA
NeedsReview: false
---
## 🧊 What Are IOCs?

IOCs, or **Indicators of Compromise**, are **artifacts or data points** that indicate a system may have been **breached or compromised**. Think of them as digital footprints left behind by attackers.

---

## 🔍 Common Types of IOCs

- **Network-based IOCs**:
  - IP addresses
  - Domain names
  - URLs used for Command and Control (C2)
- **Host-based IOCs**:
  - File hashes (MD5, SHA-1, SHA-256)
  - Filenames or paths
  - Registry keys
  - Suspicious processes or services
- **Email-based IOCs**:
  - Malicious attachments
  - Phishing email headers or subjects
- **Behavioral IOCs**:
  - Unusual logins
  - Unexpected data exfiltration
  - Privilege escalation

> [!example]+ IOC Example
> A detected SHA256 hash of a known ransomware executable or an IP address linked to a botnet C2 server are both valid IOCs.

---

## 🧰 IOC Usage and Lifecycle

1. **Detection**: Tools monitor systems and network traffic for IOCs.
2. **Analysis**: Analysts validate and contextualize IOCs with threat intelligence.
3. **Response**: IOCs guide containment, eradication, and recovery actions.
4. **Sharing**: Teams share IOCs through platforms like MISP or STIX/TAXII for broader awareness.

---

## 🌍 Global IOC Detection Platforms

There isn't a single **global IOC detector**, but there are **collaborative systems and platforms** that share and aggregate IOC data:

- **MISP (Malware Information Sharing Platform)**: Open-source threat intel sharing.
- **VirusTotal**: Aggregates files/URLs; detects and distributes IOCs.
- **AlienVault OTX**: Community-driven threat sharing.
- **IBM X-Force Exchange**, **Anomali ThreatStream**, **Recorded Future**: Enterprise platforms.
- **STIX/TAXII**: Structured formats and protocols for threat sharing.

> [!tip]
> These platforms aggregate and distribute IOCs, but detection is handled by tools like SIEMs, IDS/IPS, and EDR platforms.

---

## 📦 IOC Frameworks & Standards

### 1. **STIX (Structured Threat Information Expression)**
- **Format**: JSON
- **Purpose**: Standard to represent threat intelligence and IOCs.
- **Usage**: Expresses indicators, relationships, TTPs, and more.

> [!tip]
> Integrates seamlessly with TAXII for intel distribution.

---

### 2. **OpenIOC**
- **Created by**: Mandiant
- **Format**: XML
- **Purpose**: Describes IOCs in a structured but simpler form.
- **Strength**: Human-readable and tool-friendly.

---

### 3. **MISP Format**
- **Format**: JSON
- **Used in**: MISP platform
- **Strength**: Contextual metadata, correlation, tagging, and bulk IOC sharing.

---

### 4. **YARA Rules**
- **Format**: Text
- **Use Case**: Describes patterns in files for malware identification.
- **Strength**: Strong for binary analysis, malware hunting.

> [!example]
> A YARA rule might detect a specific malware family by matching unique strings in the binary.
> **YARA rules are written in a domain-specific language called [[Data Aggregation, Correlation, Normalization, and Querying#🔎 What is YARA-L?|YARA-L]] (YARA Language)**.

---

### 5. **Sigma**
- **Format**: [[YAML]]
- **Use Case**: Describes detection rules for SIEM systems.
- **Strength**: Works like YARA but for log data and events.

---

## 🧰 Summary Table

| Framework | Format   | Use Case                    | Integration              |
| --------- | -------- | --------------------------- | ------------------------ |
| STIX      | JSON     | Structured threat intel     | High (TAXII, MISP, etc.) |
| OpenIOC   | XML      | IOC sharing (legacy)        | Moderate                 |
| MISP      | JSON     | Collaborative intel sharing | High (MISP, APIs)        |
| YARA      | Text     | Malware file detection      | High (AV tools, IR)      |
| Sigma     | [[YAML]] | Log-based detection         | Medium (SIEMs)           |

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
