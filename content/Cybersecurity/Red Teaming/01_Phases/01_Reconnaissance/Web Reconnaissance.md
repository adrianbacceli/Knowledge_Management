---
title: Web Reconnaissance
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---
# 🕸️ What is Spidering?

**Spidering** (also called **web crawling**) is the process of **automatically browsing a website** to discover and map its structure, content, and links. It’s a foundational technique in both **ethical hacking** and **search engine indexing**.

---

## 🔍 How Spidering Works

A **spider** (or crawler) starts at a given URL and:

1. **Downloads the page**
2. **Extracts all links** (internal and sometimes external)
3. **Follows those links** to new pages
4. Repeats the process recursively

This builds a **map of the site**, including:

- Pages
- Forms
- Parameters
- Scripts
- Hidden or unlinked content

---

## 🧰 Spidering in Ethical Hacking

|**Purpose**|**Example**|
|---|---|
|**Reconnaissance**|Discover hidden pages or admin panels|
|**Attack Surface Mapping**|Identify all reachable endpoints|
|**Parameter Discovery**|Find GET/POST parameters for fuzzing or injection|
|**Session/Token Analysis**|Observe how cookies and tokens are used|
|**Form Enumeration**|Detect login, search, or upload forms|

---

## 🛠️ Tools That Perform Spidering

- **Burp Suite Spider**: Interactive and passive crawling with session handling
- **OWASP ZAP Spider**: Open-source alternative with automation support
- **Nikto**: Includes basic spidering for vulnerability scanning
- **Custom Scripts**: Python (e.g., `requests + BeautifulSoup`), Go, etc.

---

## 🧠 Spidering vs. Brute-Forcing

|Spidering|Brute-Forcing|
|---|---|
|Follows real links|Guesses paths using wordlists|
|Passive or semi-passive|Active and noisy|
|Maps known content|Finds hidden/unlinked content|

##### 🚫Limitations of Spidering

- **JavaScript-heavy sites** may hide content from basic spiders.
- **Authentication walls** can block access to deeper pages.
- **Rate-limiting or WAFs** may detect and block spiders.
- **Robots.txt** may restrict crawling (though not enforced in hacking contexts).





---
# 🧩 What is "Burping"?

**Burping** is a slang term used by penetration testers to describe the process of:

1. **Intercepting web traffic** using [[Burpsuite|Burp Suite]]’s proxy.
2. **Inspecting and modifying requests/responses**.
3. **Spidering the application** to discover endpoints.
4. **Testing for vulnerabilities** like SQL injection, XSS, CSRF, etc.

---

## 🧰 What You Do When You “Burp” a Site

|Step|Action|
|---|---|
|**1. Configure Proxy**|Set your browser to route traffic through Burp (usually `127.0.0.1:8080`)|
|**2. Intercept Requests**|Use the **Proxy** tab to view and modify HTTP/S requests|
|**3. Spider the Site**|Automatically crawl the site to discover pages and parameters|
|**4. Send to Repeater/Intruder**|Manually test or automate attacks on specific requests|
|**5. Analyze Responses**|Look for anomalies, errors, or signs of vulnerabilities|

---

## 🔍 Why Burping is Useful

- Helps you understand how the application works behind the scenes.
- Reveals hidden parameters, cookies, headers, and tokens.
- Allows you to test how the app handles malformed or malicious input.

> 🧠 **In short**: “Burping a site” means **analyzing and manipulating its traffic using Burp Suite** to uncover vulnerabilities or hidden behavior.




---
# 🛠️ What is Brute-Force Enumeration?

**Brute-force enumeration** is a technique used in ethical hacking to **systematically guess or test values** (like usernames, directories, subdomains, or passwords) by trying many possibilities from a predefined list — often called a **wordlist**.

It’s called “brute-force” because it doesn’t rely on logic or discovery — it simply **tries everything** until something works.

---

## 🔍 Common Types of Brute-Force Enumeration

| **Type**                   | **Target**                                 | **Example Tool**                      |
| -------------------------- | ------------------------------------------ | ------------------------------------- |
| **Directory Enumeration**  | Hidden folders/files on a web server       | `Gobuster`, `ffuf`, `dirsearch`       |
| **Subdomain Enumeration**  | Hidden subdomains of a domain              | `Gobuster dns`, `Amass`, `Sublist3r`  |
| **Username Enumeration**   | Valid usernames on a login page or service | `Hydra`, `Medusa`, `Burp Intruder`    |
| **Password Brute-Forcing** | Passwords for known usernames              | `Hydra`, `John the Ripper`, `Hashcat` |
| **VHost Enumeration**      | Virtual hosts on a shared IP               | `Gobuster vhost`, `ffuf`              |

---

## 🧠 How It Works

1. **Choose a target** (e.g., a login form or web server).
2. **Select a wordlist** (e.g., common passwords, directory names).
3. **Run the tool** to test each word in the list.
4. **Analyze the responses** to identify valid entries (e.g., 200 OK, login success, etc.).

---

## ⚠️ Considerations

- **Noisy**: Brute-force attacks generate a lot of traffic and can trigger alarms.
- **Rate-limited**: Many systems throttle or block repeated requests.
- **Ethical use only**: Always have permission before performing brute-force enumeration.

---
# Other steps to check ==**(Work In Progress)**==
# 🔍 **1. HTTP/HTTPS Inspection**

- **Inspect headers** for server info, cookies, security headers.
- Tools: `curl`, `httpie`, Burp, OWASP ZAP

# 🧪 **2. Input Field Testing (Manual or Automated)**

- Check how forms handle input (e.g., login, search, contact).
- Tools: Burp Repeater, ZAP, `wfuzz`, `ffuf`

# 🧬 **3. JavaScript & Client-Side Recon**

- Analyze JS files for hidden endpoints, API keys, logic.
- Tools: `LinkFinder`, `JSParser`, browser dev tools

# 🔐 **4. Authentication & Session Handling**

- Test login/logout, session fixation, token reuse, cookie flags.
- Tools: Burp Suite, Postman

# 📡 **5. WebSocket & API Enumeration**

- Discover and interact with WebSocket or REST/GraphQL APIs.
- Tools: Burp WebSocket history, Postman, GraphQL Voyager

# 🧭 **6. CORS & CSP Testing**

- Look for misconfigurations in CORS or Content Security Policy.
- Tools: `Corsy`, Burp extensions

# 🧱 **7. WAF/Rate Limiting Detection**

- Identify protections that may block or throttle your scans.
- Tools: `wafw00f`, manual testing with delays

# 🧰 **8. CMS/Framework-Specific Recon**

- Target known CMS like WordPress, Joomla, etc.
- Tools: `wpscan`, `droopescan`, `joomscan`

# 🧪 **9. Active Vulnerability Scanning**

- Scan for known CVEs or misconfigurations.
- Tools: `Nikto`, `Nuclei`, `OpenVAS`, `Burp Scanner` (Pro)

# 🧠 **10. Logic & Workflow Testing**

- Test how the app behaves in edge cases (e.g., bypassing steps, skipping tokens).
- Tools: Manual + Burp Suite

---

# 🧩 Optional Advanced Additions

- **Fuzzing**: Discover unexpected behavior by sending malformed input (`wfuzz`, `ffuf`, Burp Intruder).
- **Timing Attacks**: Detect blind SQLi or logic flaws via response delays.
- **Error Message Analysis**: Trigger and analyze stack traces or debug info.

---
