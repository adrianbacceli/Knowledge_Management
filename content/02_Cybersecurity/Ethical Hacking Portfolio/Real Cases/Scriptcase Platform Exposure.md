---
title: Scriptcase Platform Exposure - Discovery
draft: false
tags:
  - discovery
  - misconfiguration
  - scriptcase
NeedsReview: false
---
> [!summary] Core Concept  
An exposed instance of **Scriptcase** on a local transportation government website reveals severe misconfigurations, including publicly accessible admin panels, default credentials, and sensitive directory exposure. These issues pose critical security risks and open the door for further exploitation.

## 🔍 Identified Vulnerabilities

### 1. Exposed Apache Default Page
- **URL Example:** `http://192.0.2.10/`
- **Local Path:** `/var/www/html/index.html`
- **Risk:** Reveals server version and stack; suggests incomplete or insecure deployment.

### 2. Publicly Accessible Scriptcase Admin Interface
- **Admin Login:** `http://192.0.2.10:8091/scriptcase9/devel/iface/login.php`
- **Exposed Applications:**
  - `/scriptcase9/app/SampleApp/`
  - `/scriptcase9/app/SearchModule/`, `/scriptcase9/app/FullSearch/`
- **Risk:** Admin and app endpoints are open to the public; may be exploited via brute-force or injection attacks.

### 3. Default Credentials in Production Panel
- **Production Panel:** `http://192.0.2.10:8091/scriptcase9/prod/lib/php/?login`
- **Active Default Password:** `scriptcase`
- **Critical Risk:** Grants full administrative access to the Scriptcase production environment.

### 4. Internal Error Messaging Leaks Email Addresses
- **Observation:** Crafted requests trigger verbose error messages that reveal internal admin emails.
- **Risk:** Aids in phishing, credential stuffing, or social engineering campaigns.

### 5. JavaScript Password Recovery Logic Disclosure
- **Insight:** JS code shows how user inputs are processed during password recovery.
- **Risk:** May be abused for username enumeration attacks.

### 6. Sensitive Directories Exposed Without Authentication
- **Exposed Paths:**
  - `/scriptcase9/conf/`
  - `/scriptcase9/file/doc/`
  - `/scriptcase9/tmp/`
  - `/scriptcase9/file/img/`
  - `/scriptcase9/app/`
  - `/scriptcase9/prod/`
- **Risk:** Direct access to configs, temporary files, and app data can lead to further exploitation.

### 7. Internal Services and IP Disclosure
- **Example Message Found:** `curl http://10.10.8.7:8280/services/prodInformacionPortalProxy.wsdl`
- **Risk:** Reveals internal IP addresses and services; may enable SSRF or lateral movement.

## ⚠️ Risk Summary

| Risk Type                    | Severity   | Description                                                      |
|-----------------------------|------------|------------------------------------------------------------------|
| Default Credentials          | 🔴 Critical | Grants full control of production environment                    |
| Exposed Admin Interfaces     | 🔶 High     | Brute-force and direct access vectors                            |
| Public App & Directory Access| 🔶 High     | Data leakage and potential RCE/information disclosure            |
| Internal IP Info Leaked      | 🔶 High     | Possible SSRF or pivoting within internal network                |
| Weak Access Controls         | ⚠️ Medium   | Username enumeration via front-end logic                         |

> [!tip]  
> Use tools like `dirsearch`, `nuclei`, `whatweb`, and `BurpSuite` to scan for exposed directories and admin panels efficiently.

> [!warning]  
> Do **not** perform scans or exploit attempts on unauthorized systems. Always work within legal and ethical boundaries.
