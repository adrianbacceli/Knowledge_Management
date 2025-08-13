---
title: Burp Suite Sequencer
draft: false
tags:
  - burp
  - WebSecurity
  - web-app-testing
  - pentesting
  - bugbounty
  - tools
  - proxy
  - Sequencer
NeedsReview: false
---
# 🧪 What Is Burp **Sequencer**?

> [!info] 
> **Sequencer analyzes the randomness (entropy) of session tokens, CSRF tokens, password reset links, etc.** to determine if they're predictable or weak — a critical issue in web security.

### 🎯 Why This Matters:

- Tokens like session IDs or CSRF tokens are often the **keys to access control**.
- If an attacker can **predict** or **reproduce** these, they can:
    - Hijack sessions
    - Bypass login
    - Reuse CSRF tokens
    - Abuse insecure password reset workflows

---

## 🔄 Real-World Use Case: Predictable Session ID

### Scenario:

A web app issues this cookie after login:

```http
Set-Cookie: session=abc123xyz789
```

You suspect it's **not random enough** and could be guessed.

---

## 🔧 How To Use Sequencer

### Step-by-Step:

1. Intercept a request that causes the server to issue a token (e.g., `Set-Cookie`, CSRF, etc.)
2. **Send to Sequencer** (right-click > Send to Sequencer)
3. Burp will **extract the token** from the response
4. Set the **token location** (header, JSON field, query param)
5. Click **Start Live Capture**
6. Burp requests hundreds or thousands of tokens from the server
7. When done, Burp performs **statistical analysis**

---

## 📊 What Sequencer Analyzes

|Metric|Meaning|
|---|---|
|**Shannon Entropy**|Measures unpredictability of characters|
|**Chi-Square Tests**|Distribution of values vs expected randomness|
|**Bit-level Tests**|Patterns at the binary level (0s/1s)|
|**Character-level Tests**|Detect repeated digits, hex patterns, etc.|
|**FIPS tests**|Check against cryptographic standards|
|**Graphical Visualization**|View entropy heatmaps or byte scatterplots|

---

## 🧠 What to Look For

|Result|Meaning|
|---|---|
|✅ **High Entropy** (8+ bits/char)|Strong randomness, good token generation|
|⚠️ **Moderate Entropy**|Needs review — may be vulnerable under load|
|❌ **Low Entropy** (e.g., 4-6 bits/char)|Predictable token — very dangerous|
|❌ **Repeating values or positions**|Indicates poor randomness or weak PRNG|

---

## 🛡️ What to Do If It's Predictable

- Report as **"Insecure Token Generation"**
- Include entropy charts + samples
- Recommend using secure PRNG (e.g., `crypto.randomBytes` in Node.js, `secrets` in Python, `SecureRandom` in Java)
- Rotate tokens frequently and **bind them to user agents/IPs**

---


## 🔐 Common Token Types to Analyze

- `Set-Cookie` (session IDs)
- `access_token` / `Authorization` headers
- `X-CSRF-Token` in POST forms
- `reset_token` in password recovery links
- API keys delivered in response bodies

---

## 💡 TL;DR

| Feature    | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| Purpose    | Analyze token randomness                                           |
| Best For   | Session IDs, CSRF tokens, auth tokens                              |
| Output     | Entropy scores, graphs, PRNG quality                               |
| Importance | Prevent session hijacking & token prediction                       |

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)