---
title: Real Case - Client-Side Authorization Bypass via HTML Manipulation - Discovery
draft: false
tags:
  - discovery
  - client-side
  - auth-bypass
  - insecure-design
NeedsReview: false
---
> [!summary] Core Concept  
A web application exposes a sensitive business function (voucher release) through a disabled HTML button. This restriction is enforced only client-side, allowing attackers to bypass the authorization process by manipulating the DOM directly in the browser.

## 🕵️ Vulnerability Description

On a training or voucher management platform, users encounter a disabled **"Request Voucher"** button that is intended to be activated **only after financial analyst review**. However:

- The button’s state is enforced **only via HTML attributes** (e.g., `disabled`) or CSS classes.
- By removing these controls in browser developer tools, the user can **manually enable the button** and trigger voucher release.

> [!danger]  
> This is a **client-side authorization bypass** that allows the attacker to skip business logic validations and access restricted actions.

---

## ⚙️ Steps to Reproduce (PoC)

1. Navigate to a page with voucher issuance functionality.
2. Locate the disabled HTML button.
3. Open browser dev tools (`F12`), inspect the element.
4. Remove the `disabled` attribute or class.
5. Click the now-enabled button.
6. The system **issues a voucher immediately**, with **no server-side validation**.

---

## 🎯 Impact Summary

| Category                    | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| Authorization Bypass       | Critical approval logic is enforced only in the front end                  |
| Sensitive Asset Exposure   | Vouchers (with monetary or training value) are released without validation |
| Business Logic Abuse       | Anyone with basic web knowledge can exploit this flaw                      |
| Compliance Risk            | Bypasses policy controls; may violate internal or third-party requirements |

---

## 🔐 Security Recommendations

1. **Enforce all business logic server-side**. Never rely on front-end controls for access decisions.
2. Ensure **server-side validation** before performing sensitive actions like releasing vouchers.
3. Implement **CSRF tokens** and **session checks** for all state-changing requests.
4. **Audit past voucher releases** to identify unauthorized activity.
5. Use logging and alerting on voucher-related endpoints for anomaly detection.

> [!warning]  
> Client-side controls (e.g., disabled buttons, hidden fields) should never be used as security mechanisms.
