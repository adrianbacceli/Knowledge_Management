---
title: Real Case - WhatsApp Customer Service Data Leak - Discovery
draft: false
tags:
  - discovery
  - pii-disclosure
  - whatsapp
NeedsReview: false
---
> [!summary] Core Concept  
An automated customer support system on WhatsApp for a local Banking company exposes **personally identifiable information (PII)** without authentication, allowing identity enumeration and violating local data protection laws.

## 🕵️ Description of the Vulnerability

A financial institution's WhatsApp-based customer service channel in Panama exposes personal client data as follows:

- When a user sends a **national ID number (cédula)** through the chat, the system returns the **full name** of the corresponding account holder — if they are a client.
- This occurs **without verifying** the sender's identity or ownership of the ID number.
- This vulnerability allows anyone to:
  - Confirm if a specific person is a client.
  - Retrieve first and last names by submitting random or targeted ID numbers.

> [!danger]  
> This represents an **unauthorized information disclosure**, enabling systematic **identity enumeration**.

---

## ⚖️ Violation of Panama's Law 81 (2019) – Data Protection

| Requirement                        | Violation Description                                                  |
|-----------------------------------|------------------------------------------------------------------------|
| **Consent for Data Use**          | Data is returned without the data owner's knowledge or approval       |
| **Purpose Limitation**            | Information is shared without validating the need or context          |
| **Secure Processing & Access**    | No validation of requestor identity before disclosing personal data   |

---

## ⚠️ Risk Summary

| Risk Type                  | Level     | Description                                                         |
|---------------------------|-----------|---------------------------------------------------------------------|
| PII Disclosure             | 🔶 High   | Full names are leaked via ID input                                  |
| Client Relationship Leak  | 🔶 High   | Confirms if someone is a client of the institution                  |
| No Access Control          | 🔴 Critical | No authentication or authorization checks in place                |
| Legal Non-Compliance       | 🔴 Critical | Breach of national data protection regulations                     |
| Social Engineering Vector | 🔶 High   | Enables targeting of known clients for fraud or phishing attacks    |

---

## ✅ Recommendations

1. **Immediately disable** auto-responses that return personal information based solely on ID input.
2. Implement **authentication and validation** mechanisms to confirm ownership before any data is shared.
3. Apply **purpose limitation**: ensure all personal data processing has clear, legitimate justification.
4. Conduct an **audit of all automated messaging systems**, especially via informal channels like WhatsApp.
5. If applicable, **notify affected users** and evaluate the need for reporting under Law 81.

---

## 📝 Regulatory Follow-Up

> A formal complaint was submitted to the **National Authority for Transparency and Access to Information (ANTAI)** regarding the breach.

🔗 [ANTAI - Personal Data Protection](https://www.antai.gob.pa/proteccion-de-datos-personales-2/)

> [!warning]  
> Mishandling PII through informal support systems poses both reputational and legal risks. Always ensure compliance with local privacy laws.
