---
title: Firewall
draft: false
tags:
  - network
  - Foundations
  - Security
  - Firewall
  - Packet-Filter
  - Stateful
  - NGFW
  - Application-Layer
  - HTB
  - Hack-The-Box
NeedsReview: true
---
> [!Note]
> Extracted from Hack The Box [Network Foundations](https://academy.hackthebox.com/module/289/section/3244)
# Firewalls

A `Firewall` is a network security device, either hardware, software, or a combination of both, that monitors incoming and outgoing network traffic. Firewalls enforce a set of rules (known as `firewall policies` or `access control lists`) to determine whether to `allow` or `block` specific traffic. We can imagine a firewall as a security guard at the entrance of a building, checking who is allowed in or out based on a list of rules. If a visitor doesn’t meet the criteria (e.g., not on the guest list), they are denied entry.

_**The open source router/firewall [pfSense](https://www.pfsense.org/). It's large number of plugins (known as "Packages") give it a range of capabilities.**_ ![GIF showcasing the firewall rule creation in pfSense.](https://academy.hackthebox.com/storage/modules/289/Internet_Security/pfsense.gif)

Firewalls operate by analyzing packets of data according to predefined rules and policies, commonly focusing on factors such as IP addresses, port numbers, and protocols. This process, known as traffic filtering, is defined by system administrators as permitting or denying traffic based on specific conditions, ensuring that only authorized connections are allowed. Additionally, firewalls can log traffic events and generate alerts about any suspicious activity. Below are some of the different types of firewalls.

#### 1. Packet Filtering Firewall

|**Description**|
|---|
|Operates at Layer 3 (Network) and Layer 4 (Transport) of the OSI model.|
|Examines source/destination IP, source/destination port, and protocol type.|
|`Example`: A simple router ACL that only allows HTTP (port 80) and HTTPS (port 443) while blocking other ports.|

#### 2. Stateful Inspection Firewall

|**Description**|
|---|
|Tracks the state of network connections.|
|More intelligent than packet filters because they understand the entire conversation.|
|`Example`: Only allows inbound data that matches an already established outbound request.|

#### 3. Application Layer Firewall (Proxy Firewall)

|**Description**|
|---|
|Operates up to Layer 7 (Application) of the OSI model.|
|Can inspect the actual content of traffic (e.g., HTTP requests) and block malicious requests.|
|`Example`: A web proxy that filters out malicious HTTP requests containing suspicious patterns.|

#### 4. Next-Generation Firewall (NGFW)

| **Description**                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Combines stateful inspection with advanced features like deep packet inspection, intrusion detection/prevention, and application control.                   |
| `Example`: A modern firewall that can block known malicious IP addresses, inspect encrypted traffic for threats, and enforce application-specific policies. |

Firewalls stand between the internet and the internal network, examining traffic before letting it through. In a home environment, our router/modem often has a built-in firewall (software-based). In that case, it’s all in one device, and the firewall function is `inside` the router. In larger networks (e.g., business environments), the firewall is often a separate device placed after the modem/router and before the internal network, ensuring all traffic must pass through it.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
