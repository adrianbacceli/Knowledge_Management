---
title: DNS
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---
> [!Note]
> Extracted from Hack The Box [Network Foundations](https://academy.hackthebox.com/module/289/section/3244)

# Domain Names vs. IP Addresses

|**Address**|**Description**|
|---|---|
|`Domain Name`|A readable address like `www.example.com` that people can easily remember.|
|`IP Address`|A numerical label (e.g., `93.184.216.34`|

DNS bridges the gap between these two, so we can just type `www.google.com` without needing to remember the underlying IP address.

#### DNS Hierarchy

DNS is organized like a tree, starting from the root and branching out into different layers.

| **Layer**                  | **Description**                                                                   |
| -------------------------- | --------------------------------------------------------------------------------- |
| `Root Servers`             | The top of the DNS hierarchy.                                                     |
| `Top-Level Domains (TLDs)` | Such as `.com`, `.org`, `.net`, or country codes like `.uk`, `.de`.               |
| `Second-Level Domains`     | For example, `example` in `example.com`.                                          |
| `Subdomains or Hostname`   | For instance, `www` in `www.example.com`, or `accounts` in `accounts.google.com`. |

![](https://academy.hackthebox.com/storage/modules/289/DNS/DNS_Query_Process-2.png)

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
