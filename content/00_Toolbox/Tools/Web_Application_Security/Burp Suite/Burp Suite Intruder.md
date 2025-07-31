---
title: Burp Intruder
draft: false
tags:
  - burp
  - WebSecurity
  - web-app-testing
  - pentesting
  - bugbounty
  - tools
  - proxy
  - intruder
NeedsReview: false
---
# 🎯 Intruder

**Purpose:** Automate payload injection at marked positions in requests.

- Supports four attack types (Sniper, Battering Ram, Pitchfork, Cluster Bomb)
- Slowed in Community Edition

**Example:** Brute-force a login form with username wordlist and password variations.

### 🔁 Alternatives Replacement:

|Tool|Use Case|
|---|---|
|`ffuf`|Directory brute-forcing|
|`feroxbuster`|Recursive URL fuzzing|
|`crackmapexec`|Auth testing on internal networks|
|`nuclei`|Template-based mass scanning|
### Use case

> 🔐 **Brute-forcing a login form with a username and password list**

## ✅ 🎯 Burp Intruder – Brute Force Login

### 📌 Target:

```
POST /login HTTP/1.1
Host: vulnerable.site
Content-Type: application/x-www-form-urlencoded

username=§admin§&password=§1234§
```

### 🔧 Configuration:

1. **Capture the request** in Proxy.
2. **Send to Intruder**.
3. Set attack type: **Cluster Bomb** (since we have 2 payload positions).
4. Define payload positions:
    - `§admin§` → `usernames.txt`
    - `§1234§` → `passwords.txt`
5. Start attack.
6. Sort responses by **length**, **status**, or **response body** to identify a valid login.

### 🐌 Drawbacks (Community Edition):

- Rate-limited (~1 req/sec)
- No concurrent threads
- Limited automation/scripting

---

## 🚀 ffuf – Brute Force Login (2025 CLI Approach)

### 🔧 Equivalent Attack Using `ffuf`:

We simulate the same behavior using **`ffuf` with POST fuzzing and two wordlists**.

```bash
ffuf -w usernames.txt:USER -w passwords.txt:PASS \
-X POST -d 'username=USER&password=PASS' \
-H "Content-Type: application/x-www-form-urlencoded" \
-u https://vulnerable.site/login \
-t 50 -mc 200,302
```

### 🔍 Explanation:

|Flag|Meaning|
|---|---|
|`-w usernames.txt:USER`|First wordlist (USER placeholder)|
|`-w passwords.txt:PASS`|Second wordlist (PASS placeholder)|
|`-d`|POST data|
|`-u`|URL to send to|
|`-t 50`|50 threads (parallel execution)|
|`-mc`|Match status codes (200, 302 = potential success)|

### ✅ Advantages:

- Very fast (multi-threaded)
- Easily scriptable
- Works with POST, JSON, headers, etc.
- CLI output, JSON exportable

---

## 🔍 Comparison Summary

|Feature|**Burp Intruder (Free)**|**ffuf (2025 CLI)**|
|---|---|---|
|Speed|❌ Slow (rate-limited)|✅ Fast (multi-threaded)|
|UX|✅ Visual UI|⚠️ CLI only|
|Input Control|✅ Precise|✅ Flexible|
|Scripting|⚠️ Manual export|✅ Fully scriptable|
|Response Filtering|✅ Built-in|✅ via status/length/body filters|
|Best For|Quick manual testing in Burp|Automated brute-force in CLI workflows|


## 💣 Burp Intruder Attack Types Explained

|Attack Type|Description|Use Case|
|---|---|---|
|**Sniper**|Iterate over a **single** payload position, one payload at a time|Test one input field (e.g., XSS, SQLi)|
|**Battering Ram**|Use the **same payload** in **multiple positions**, all at once|Token reuse, bypassing checks|
|**Pitchfork**|Use **multiple payload sets** in **parallel**, one per position|Login brute-force where usernames and passwords line up 1:1|
|**Cluster Bomb**|Use **multiple payload sets**, but test **all combinations** (nested/fuzzing matrix)|Full brute-force, all combinations (Cartesian product)|


## 🔄 Visual Example

Let’s assume two payload lists:

- `usernames.txt`: `admin`, `user`
- `passwords.txt`: `1234`, `password`

### 🔸 1. **Sniper**

- Single position (`§username§`)
- Burp tries:
    - `admin`
    - `user`

🧠 **Used for:** Single injection point (e.g., test XSS on one field)

---

### 🔸 2. **Battering Ram**

- Same payload list used at all marked positions

```http
username=§admin§&password=§admin§
```

Burp sends:
- `username=admin&password=admin`
- `username=user&password=user`

🧠 **Used for:** Reused tokens, identical input fields

---

### 🔸 3. **Pitchfork**
- 2 positions, 2 lists used **in parallel** (1:1 match)

```http
username=§admin§&password=§1234§
```

Burp sends:
1. `admin : 1234`
2. `user : password`

🧠 **Used for:** Paired inputs (e.g., leaked credential sets)

---

### 🔸 4. **Cluster Bomb** 💣 (The one you asked about)

- **Two or more payload positions**
- **Each list is tested against every item in the other list** → All combinations
```http
username=§admin§&password=§1234§
```

With:
- `usernames.txt`: `admin`, `user`
- `passwords.txt`: `1234`, `password`

Burp sends:
1. `admin : 1234`
2. `admin : password`
3. `user : 1234`
4. `user : password`

🧠 **Used for:** **Brute-force login**, full permutation fuzzing, exhaustive attacks

---

## 🔐 Which Should You Use?

|Scenario|Best Attack Type|
|---|---|
|Test XSS in one field|Sniper|
|Same value in multiple fields|Battering Ram|
|1:1 paired input values (e.g., combo list)|Pitchfork|
|All combinations of usernames and passwords|Cluster Bomb|

---

## 🧠 Tip for Cluster Bomb:

In **Cluster Bomb**, Payload Set 1 drives the outer loop, Payload Set 2 drives the inner loop. That means:

```plaintext
for payload1 in set1:
    for payload2 in set2:
        send_request(payload1, payload2)
```

This is **more resource-intensive**, but also **more thorough**.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
