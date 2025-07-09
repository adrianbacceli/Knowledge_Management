---
title: Kubernetes and Docker
draft: false
tags:
  - Kubernetes
  - Cointainer
  - Docker
  - K8s
NeedsReview: true
---
### 🐳 **Docker**: Tool to _Build_ and _Run_ Containers

- **Builds** container images from code (`Dockerfile`)
- **Runs** containers using the Docker Engine
- Great for **local development**, testing, and small-scale deployments

---

### ☸️ **Kubernetes**: Tool to _Orchestrate_ Containers

- **Manages** and **scales** containers across clusters of machines
- Handles:
    - Load balancing
    - Auto-scaling
    - Rolling updates
    - Self-healing (restarts failed containers)
- Uses a **container runtime** (like Containerd) to run containers

---

### 🔄 How They Work Together

- You can **build containers with Docker**, push them to a registry (like Docker Hub), and then **deploy them with Kubernetes**.
- Kubernetes doesn’t need Docker Engine to run containers — it uses **Containerd** or **CRI-O**, which can still run Docker-built images.

---

### 🧠 Analogy

Think of it like this:

- **Docker** is the **chef** that prepares meals (containers).
- **Kubernetes** is the **restaurant manager** that decides when, where, and how many meals to serve, and replaces them if they go bad.

---

Would you like a visual diagram to illustrate this relationship?
---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
