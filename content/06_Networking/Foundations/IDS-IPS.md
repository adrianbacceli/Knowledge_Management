---
title: IDS-IPS
draft: true
tags:
  - IDS
  - IPS
  - Intrusion
  - Detection
  - Prevention
  - System
  - Hack-The-Box
  - HTB
  - Foundations
  - Security
NeedsReview: true
---
> [!Note]
> Extracted from Hack The Box [Network Foundations](https://academy.hackthebox.com/module/289/section/3244)

# Intrusion Detection and Prevention Systems (IDS/IPS)

Intrusion Detection and Prevention Systems (IDS/IPS) are security solutions designed to monitor and respond to suspicious network or system activity. An Intrusion Detection System (IDS) observes traffic or system events to identify malicious behavior or policy violations, generating alerts but not blocking the suspicious traffic. In contrast, an Intrusion Prevention System (IPS) operates similarly to an IDS but takes an additional step by preventing or rejecting malicious traffic in real time. The key difference lies in their actions: an IDS detects and alerts, while an IPS detects and prevents.

_**The widely used [Suricata](https://suricata.io/) software can function as both an IDS and an IPS. Here, we see the user enable a detection rule, then begin inline monitoring.**_ ![GIF showcasing the rule enablement in Suricata.](https://academy.hackthebox.com/storage/modules/289/Internet_Security/suricata-2.gif)

Both IDS and IPS solutions analyze network packets and compare them to known attack signatures or typical traffic patterns. This process involves:

|**Techniques**|**Description**|
|---|---|
|`Signature-based detection`|Matches traffic against a database of known exploits.|
|`Anomaly-based detection`|Detects anything unusual compared to normal activity.|

When suspicious or malicious behavior is identified, an IDS will generate an alert for further investigation, while an IPS goes one step further by blocking or rejecting the malicious traffic in real time.

_**Suricata in IDS mode.**_ ![GIF showcasing Suricata in IDS mode.](https://academy.hackthebox.com/storage/modules/289/Internet_Security/suricata-3.gif)

Below are some of the different types of firewalls IDS/IPS.

#### 1. Network-Based IDS/IPS (NIDS/NIPS)

|**Description**|
|---|
|Hardware device or software solution placed at strategic points in the network to inspect all passing traffic.|
|`Example`: A sensor connected to the core switch that monitors traffic within a data center.|

#### 2. Host-Based IDS/IPS (HIDS/HIPS)

|**Description**|
|---|
|Runs on individual hosts or devices, monitoring inbound/outbound traffic and system logs for suspicious behavior on that specific machine.|
|`Example`: An antivirus or endpoint security agent installed on a server.|

IDS/IPS can be placed at several strategic locations in a network. One option is to position them behind the firewall, where the firewall filters obvious threats, and the IDS/IPS inspects any remaining traffic. Another common placement is in the DMZ (Demilitarized Zone), a separate network segment within the larger network directly exposed to the internet, where they monitor traffic moving in and out of publicly accessible servers. Finally, IDS/IPS solutions can also run directly on endpoint devices, such as servers or workstations, to detect suspicious activity at the host level. The following diagram shows an IDS/IPS positioned after the firewall.

![Network diagram: Internet connects to Firewall, then IPS/IDS, Router/Modem, linking to Laptop, PC, Smartphone.](https://academy.hackthebox.com/storage/modules/289/Internet_Security/IPS_IDS-1.png)

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
