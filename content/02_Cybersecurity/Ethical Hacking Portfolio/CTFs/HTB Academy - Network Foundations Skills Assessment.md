---
title: HTB Academy - Network Foundations Skills Assessment
draft: false
tags:
  - Hack-The-Box
  - Academy
  - Networking
  - curl
  - header
NeedsReview: false
---
# Accessing Restricted IIS Site via User-Agent Header

**Context:**  
The IIS server is currently restricting access during development. Only requests with a specific `User-Agent` header are allowed.

---

## 🔐 Required Header

```http
User-Agent: Server Administrator
````

---

## 🛠️ Usage Examples

### cURL

```bash
curl -A "Server Administrator" http://example.com
```

### Python (requests)

```python
import requests

headers = {
    "User-Agent": "Server Administrator"
}

response = requests.get("http://example.com", headers=headers)
print(response.text)
```


---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
