---
title: Hashcat
draft: false
tags:
  - brute-force
  - password
  - crack
  - dictionary
  - hashcat
  - encryption
NeedsReview: false
---
# Example of Hashcat Password Cracking

> [!abstract] Summary  
>`hashcat` is a tool that can be used to crack passwords:

---

# 🔐 Hashcat Brute-Force Attack Example

```bash
hashcat -m 1400 -i -a 3 -w 4 --increment-min=8 --increment-max=8 eca8e05d94c236e78c389e15e1cad71ff9326bdfa5e1d79d92766f38414e66e5 ?1?1?1?1?1?1?1?1 -1 ?l?d -v
````

## 🧩 Description

This `hashcat` command performs a **brute-force attack** on a given **SHA-256 hash** using custom character sets and a high workload configuration. It tries **all possible 8-character combinations** made from **lowercase letters and digits**.

---

## 🔍 Breakdown of Command Options

|Option|Meaning|
|---|---|
|`-m 1400`|Specifies **SHA-256** hash mode.|
|`-i`|Enables **incremental mode** (used with length range).|
|`-a 3`|Attack mode 3 = **brute-force/mask attack**.|
|`-w 4`|Use **highest workload profile** (fastest, most resource-intensive).|
|`--increment-min=8`|Minimum password length to try: **8 characters**.|
|`--increment-max=8`|Maximum password length to try: **8 characters** (fixed length).|
|`eca8...e66e5`|Target **SHA-256 hash** to be cracked.|
|`?1?1?1?1?1?1?1?1`|**Mask**: eight positions, each using custom charset `?1`.|
|`-1 ?l?d`|Custom charset `?1`: all **lowercase letters** (`?l`) and **digits** (`?d`).|
|`-v`|Enables **verbose output** to show detailed cracking status.|

---

## 🎯 What It Does

- Attempts every combination of **8-character** passwords.
- Characters used: **lowercase letters (a–z)** and **digits (0–9)**.
- Uses a **high-performance workload profile** to speed up cracking.
- Prints progress details in **verbose mode**.

---

## 💡 Example Use Case

You're given a suspected **SHA-256 hash** of an 8-character password known to consist of **letters and digits** (e.g., `abc123de`). You run this command to try all such combinations using your GPU.

---

> ✅ **Pro Tip:** Brute-force attacks on 8-character masks with mixed sets can take a long time depending on hardware. Use rainbow tables or dictionary attacks when possible to reduce time.



# 🔐 Hashcat Examples: Cracking NetNTLMv2 Hashes (Mode 5600)

## 📘 Hash Type
**NetNTLMv2** uses Hashcat mode: `5600`.

---

## 🔨 Example 1: Brute-Force Attack

```bash
hashcat -m 5600 -a 3 -o ~/Documents/NetNTMLv2_Cracked.txt --increment --increment-min=8 --increment-max=12 ?l?l?l?l?l?l?l?l?l?l?l?l
````

### 🔍 Explanation

|Option|Meaning|
|---|---|
|`-m 5600`|Selects hash mode for **NetNTLMv2**.|
|`-a 3`|Sets **attack mode to brute-force (mask)**.|
|`-o ~/Documents/...`|Outputs cracked hashes to this file.|
|`--increment`|Enables incremental length search.|
|`--increment-min=8`|Minimum length: 8 characters.|
|`--increment-max=12`|Maximum length: 12 characters.|
|`?l...`|Mask of lowercase letters (`?l`) for each position (up to 12).|

### ⏱️ Estimated Time

> **ETA: ~3 hours** (depends on system performance and GPU).

---

## 📚 Example 2: Dictionary Attack with Status Feedback

```bash
hashcat -m 5600 -a 0 -o ~/Documents/NetNTMLv2_Cracked.txt --status --status-timer 10 hash.txt ~/Desktop/rockyou.txt
```

### 🔍 Explanation

|Option|Meaning|
|---|---|
|`-m 5600`|NetNTLMv2 hash type.|
|`-a 0`|Attack mode 0 = **straight (dictionary)** attack.|
|`-o`|Save output to cracked file.|
|`--status`|Enable status updates during cracking.|
|`--status-timer 10`|Show status every 10 seconds.|
|`hash.txt`|File containing hashes to crack.|
|`rockyou.txt`|Dictionary wordlist for cracking.|

---

## ✅ Use Cases

- Use **Example 1** when the password length and charset are unknown but you're sure it's alphanumeric lowercase and within 8–12 characters.
- Use **Example 2** for **faster attacks** when you have a dictionary (like `rockyou.txt`) and believe the password is common.

> 💡 **Tip:** Always start with a dictionary attack before using brute-force—it's exponentially faster.
