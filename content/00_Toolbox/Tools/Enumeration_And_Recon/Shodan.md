---
title: Shodan
draft: false
tags:
  - Shodan
  - passive
  - enumeration
  - scan
  - reconnaissance
NeedsReview: false
---
# 🌐 What is Shodan?

**Shodan** is a **search engine for internet-connected devices**. Unlike Google, which indexes websites, Shodan indexes **devices and services** exposed to the internet — routers, webcams, servers, industrial control systems (ICS), smart TVs, databases, and more.

It’s often called the "**Google for hackers**" because of how it reveals the **attack surface** of the internet.

---

## 🔍 What Can You Find with Shodan?

- Open ports and services (e.g., FTP, SSH, RDP, HTTP, MSSQL)
- Banner information (software versions, server headers)
- Vulnerable devices (based on CVEs)
- Misconfigured databases (e.g., MongoDB, Elasticsearch)
- IoT devices (cameras, printers, smart homes)
- Industrial systems (SCADA, ICS, PLCs)

---

## 🧰 Use Cases in Ethical Hacking

|**Phase**|**Use**|
|---|---|
|**Reconnaissance**|Identify targets, open ports, and exposed services|
|**Resource Development**|Find vulnerable infrastructure for red team simulations|
|**Exploitation**|Locate devices running outdated or vulnerable software|
|**Impact**|Demonstrate real-world risk of exposed critical systems|

---

## 🛠️ How to Use Shodan

### 1. **Web Interface**

- Go to https://www.shodan.io
- Use search filters like:
    - `port:22` — find SSH servers
    - `product:Apache` — find Apache servers
    - `org:"Company Name"` — find assets owned by a company
    - `country:"PA"` — find devices in Panama

### 2. **Shodan CLI**

```bash
shodan init YOUR_API_KEY
shodan search apache country:PA
```

### 3. **Python API**

```python
import shodan
api = shodan.Shodan("YOUR_API_KEY")
results = api.search("nginx country:PA")
```

### 4. **Shodan Browser Plugin**

The **Shodan browser extension** is a powerful tool that integrates Shodan’s intelligence directly into your web browsing experience. It provides **real-time insights** about the websites and IPs you visit.

#### 🔍 Key Features

- Displays **open ports**, **services**, and **vulnerabilities** for the current site.
- Shows **geolocation**, **ISP**, and **hostnames**.
- Highlights if the IP is listed in **Shodan’s database**.
- Works with **Chrome**, **Firefox**, and **Edge**.

#### 🧰 Use Cases

- Quickly assess the **exposure** of a target during reconnaissance.
- Identify **misconfigured services** or outdated software.
- Great for **bug bounty** and **red team** recon workflows.

---

## 🧠 Bonus Tip

You can use Shodan to **track CVEs**: `shodan vuln:CVE-2021-26855` This will show devices vulnerable to **ProxyLogon**, for example.