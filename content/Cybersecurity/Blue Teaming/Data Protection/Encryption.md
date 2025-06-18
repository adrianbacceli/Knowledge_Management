---
title: Encryption
draft: false
tags:
  - encryption
  - cloud-security
  - data-protection
  - AES
  - TLS
  - confidenciality
  - symmetric-encryption
  - asymmetric-encryption
  - RSA
  - data-security
NeedsReview: false
---
# 🔐 Data Encryption Overview

> [!info]
> **Purpose:** This note explains how encryption protects data in three distinct states: at rest, in transit, and in use. It covers encryption mechanisms, standards like AES and TLS, and introduces confidential computing using Trusted Execution Environments (TEE).


Data encryption transforms readable information into an encoded format to prevent unauthorized access. This protects data across its lifecycle: at rest, in transit, and in use.

---

## 📥 Data at Rest

Data at rest refers to data stored on a disk or other persistent storage and not actively being used.

> [!note]
> **Encryption Standard:** The **Advanced Encryption Standard (AES)** is commonly used for encrypting data at rest.

### How It Works

- **AES** converts plaintext into unintelligible cybertext and vice versa using a key.
- Encryption uses **Data Encryption Keys (DEKs)** to protect data.
- **Chunking Strategy:** Data can be broken into chunks, each with a unique DEK.
  - Each time a chunk is modified, it receives a new encryption key.
  - This rotation reduces the risk of key compromise.

> [!tip]
> Even if storage is compromised, encrypted data is unreadable without the correct keys.

---

## 🌐 Data in Transit

Data in transit refers to information actively moving between systems, like over the internet or within internal networks.

> [!info]
> **Encryption Protocol:** **Transport Layer Security (TLS)** encrypts data between communicating applications.

### How TLS Helps

- TLS ensures secure communication by encrypting data in motion.
- Often used for web traffic, such as when using mobile banking or submitting passwords.

> [!example]
> **Example:** When using a banking app to transfer money, TLS encrypts your account information as it's sent over the internet.

---

## 🧠 Data in Use

Data in use is actively processed by applications, typically residing in system memory.

> [!important]
> **Confidential Computing** leverages **Trusted Execution Environments (TEEs)** to encrypt data during use.

### Trusted Execution Environments (TEE)

- TEEs are secure, isolated environments enabled by hardware.
- Only authorized code can access embedded encryption keys within the TEE.
- Prevents tampering or unauthorized access during runtime.

---

## ✅ Comparisson

| State      | Encryption Method        | Key Technologies              |
| ---------- | ------------------------ | ----------------------------- |
| At Rest    | AES, DEKs, Chunking      | AES, Key Rotation             |
| In Transit | Transport Layer Security | TLS                           |
| In Use     | Confidential Computing   | TEE, Hardware-based isolation |

> [!warning]
> **Security Reminder:** Always implement layered encryption strategies to cover all states of data for comprehensive cloud security.

---

> [!info]
> **Purpose:** This note describes the principles, strengths, and applications of symmetric and asymmetric encryption. It also demonstrates how both are combined in secure data exchange scenarios.

# 🔑 Symmetric Encryption

Symmetric encryption uses a **single shared key** for both encryption and decryption.

### Key Characteristics

- Also known as **private key** or **shared key** encryption.
- Efficient for **high data throughput** and **lower computational overhead**.
- Commonly used in **banking systems** and **mobile apps** processing millions of transactions.

> [!example]
> **Example:** A banking app uses symmetric encryption to handle millions of transactions per day efficiently.

### Challenges

> [!warning]
> **Key Exchange Risk:** If a shared key is intercepted or accessed by an unauthorized party, all encrypted data becomes vulnerable.

To mitigate this, the symmetric key is often exchanged securely using **asymmetric encryption**.

### Common Model

- **Advanced Encryption Standard (AES)** is the most widely adopted symmetric encryption algorithm.
  - Known for **speed**, **security**, and **broad adoption**.

---

# 🔐 Asymmetric Encryption

Asymmetric encryption uses a **key pair**: one public and one private.

### Key Characteristics

- **Public key** encrypts data.
- **Private key** decrypts data.
- Enables **digital signatures** for verifying authenticity and integrity.

> [!example]
> **Analogy:** A public key is like a bank account number — it can be shared. A private key is like a PIN — it must be kept secret.

### Common Model

- **Rivest-Shamir-Adleman (RSA)** is a foundational asymmetric algorithm.
  - Based on **prime factorization**.
  - Key sizes often range from **2,048 to 4,096 bits**.
  - More secure but **computationally intensive**, making it less suitable for encrypting large data volumes.

> [!note]
> **Use Case:** Best for encrypting small payloads like symmetric keys or digital signatures.

---

## 🔁 Combined Use in Practice

Symmetric and asymmetric encryption are often used together to balance **efficiency** and **security**.

### Example Scenario

1. A bank provides a mobile app for secure payments.
2. The app uses **symmetric encryption** for bulk data protection.
3. For **secure key exchange**:
   - The app generates a **symmetric key**.
   - Encrypts the symmetric key with the **bank’s public key**.
   - The bank decrypts it using its **private key**.
4. Now both parties share a symmetric key and can exchange data securely.

> [!tip]
> This combination leverages **asymmetric encryption for secure key exchange**, and **symmetric encryption for data transfer** efficiency.

---

## ✅ Summary

| Feature            | Symmetric Encryption          | Asymmetric Encryption                     |
| ------------------ | ----------------------------- | ----------------------------------------- |
| Key Usage          | Same key for encrypt/decrypt  | Public key to encrypt, private to decrypt |
| Speed & Efficiency | Fast, low computational cost  | Slower, higher resource use               |
| [[Key Management]] | Challenging (secure exchange) | Easier for sharing public key             |
| Common Algorithms  | AES                           | RSA                                       |
| Typical Use Case   | Bulk data encryption          | Secure key exchange, signatures           |
|                    |                               |                                           |

> [!important]
> Choosing the right encryption depends on **data volume**, **performance needs**, and **security requirements**.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
