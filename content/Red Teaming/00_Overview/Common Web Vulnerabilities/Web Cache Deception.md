---
title: Web Cache Deception
draft: false
tags:
  - Web-Cache-Deception
  - Vulnerability
  - web
  - offensive-security
NeedsReview: true
---
# 🛡️ Web Cache Deception

> [!info] What is Web Cache Deception?
> Web cache deception is a vulnerability that allows an attacker to trick a caching server into storing sensitive, user-specific content. This can lead to unauthorized access to private data.

## 🧠 How It Works

Web cache deception exploits inconsistencies between how the **cache server** and the **origin server** interpret requests. An attacker crafts a URL that appears to reference a static resource, but actually returns dynamic, user-specific content.

### 💬 Example Scenario

1. A victim is tricked into visiting a malicious URL like:
```

https://vulnerable-website.com/account/secret.css

```
2. The origin server treats this as a request for dynamic content (e.g., account details), but the cache server sees it as a static resource and stores the response.

3. The attacker then visits the same URL and receives the cached response, which may contain the victim’s sensitive data.

> [!danger] Key Risk
> The attacker gains access to private information that was cached due to a misinterpretation of the request.

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Avoid caching sensitive content  
> - Use cache-control headers (`Cache-Control: no-store`) for dynamic pages  
> - Validate and normalize URLs consistently across cache and origin servers  
> - Avoid serving dynamic content from URLs that resemble static resources (e.g., ending in `.css`, `.js`)

## 🔗 Resources

- 🌐 PortSwigger: [Web Cache Deception](https://portswigger.net/web-security/web-cache-deception)
