---
title: 13_Credential_Access
draft: false
tags:
  - Kerberoasting
  - credential-access
NeedsReview: false
---
# Kerberoasting

Is a post-exploitation technique used by attackers to extract service account credentials from a Windows Active Directory (AD) environment. It targets **Kerberos**, the authentication protocol used in AD, and is particularly effective against accounts with **Service Principal Names (SPNs)**.

---
## 🧪 How Kerberoasting Works

1. **Attacker Gains Access to AD**  
    The attacker must have a valid domain user account (even a low-privileged one).
    
2. **Enumerate SPNs**  
    The attacker queries the domain for accounts with SPNs (these are typically service accounts).
    
3. **Request Service Tickets (TGS)**  
    The attacker requests a **Ticket Granting Service (TGS)** ticket for each SPN. These tickets are encrypted with the service account's NTLM hash.
    
4. **Extract and Crack the Ticket Offline**  
    The attacker extracts the TGS ticket and attempts to crack it offline using tools like **Hashcat** or **John the Ripper** to recover the plaintext password.
    

---

## 🛠️ Tools Commonly Used

- Rubeus (C# tool for Kerberos abuse)
- [[Impacket]] (`GetUserSPNs.py`)
- PowerView (PowerShell tool for AD enumeration)
- Kerberoast (PowerShell script)
- [[Hashcat]] (for cracking the ticket)

---

## 🔐 Why It’s Effective

- No need for elevated privileges to request TGS tickets.
- Offline cracking avoids detection by security monitoring tools.
- Many service accounts have weak or non-expiring passwords.

---

## 🛡️ Mitigations

- Use **strong, complex passwords** for service accounts.
- Rotate service account passwords regularly.
- Monitor for **unusual TGS requests**.
- Use **Managed Service Accounts (MSAs)** or **Group Managed Service Accounts (gMSAs)**.
- Enable **AES encryption** for Kerberos tickets (harder to crack than RC4).
