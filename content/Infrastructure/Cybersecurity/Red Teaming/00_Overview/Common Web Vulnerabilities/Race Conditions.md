---
title: Race Conditions
draft: false
tags:
  - Race-Condition
  - Vulnerability
  - web
  - offensive-security
NeedsReview: true
---
# 🛡️ Race Conditions

> [!info] What Are Race Conditions?
> Race conditions are a type of vulnerability related to business logic flaws. They occur when multiple threads or processes access shared data concurrently without proper synchronization, leading to unintended behavior.

## 🧠 How It Works

When a web application processes requests simultaneously, it may enter a temporary state where two or more operations interfere with each other. This "collision" can be exploited by attackers using carefully timed requests.

> [!abstract] Race Window
> The **race window** is the brief period during which a collision can occur — for example, between checking a condition and updating a database.

## 💬 Example: Reusing a One-Time Discount Code

An online store applies a discount code using these steps:

1. Check if the code has already been used.
2. Apply the discount.
3. Update the database to mark the code as used.

If two requests are made at nearly the same time, both may pass the initial check before the database is updated, allowing the discount to be applied multiple times.

### 🧪 Exploitable Scenarios

> [!danger] Common Exploits
> - Redeeming a gift card multiple times  
> - Rating a product repeatedly  
> - Withdrawing or transferring funds beyond account limits  
> - Reusing CAPTCHA solutions  
> - Bypassing rate limits or brute-force protections

## 🧬 TOCTOU Flaws

> [!tip] Time-of-Check to Time-of-Use (TOCTOU)
> These are a subtype of race conditions where a check is performed, but the state changes before the action is completed — leading to inconsistencies or bypasses.

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Use atomic operations or transactions
> - Implement locking mechanisms
> - Avoid relying solely on client-side validation
> - Design logic to be idempotent where possible
> - Monitor for unusual request patterns

## 🔗 Resources

- 🌐 PortSwigger: [Race Conditions](https://portswigger.net/web-security/race-conditions)