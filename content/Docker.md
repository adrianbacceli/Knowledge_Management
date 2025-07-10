---
title: Docker
draft: false
tags:
  - Docker
  - Containers
  - DevOps
  - toolchain
NeedsReview: false
---
> [!abstract]  
> Docker is a platform for building, running, and managing containerized applications. It streamlines development and deployment workflows across environments.

---
# 🐳 Docker Overview

Docker provides tools to **build** container images and **run** containers using the Docker Engine.

- **Build**: Create container images from code using a `Dockerfile`.
- **Run**: Launch containers via the Docker Engine CLI or API.
- Ideal for **local development**, **testing**, and **lightweight deployments**.

> [!tip]  
> Docker containers ensure consistency across environments by packaging dependencies with the app code.

---

## ⚙️ Installing Docker

1. Go to [https://docs.docker.com/get-docker](https://docs.docker.com/get-docker).
2. Download Docker Desktop (for macOS/Windows) or use your distro’s package manager (for Linux).
3. Verify installation:

```bash
docker --version
````

---

## 🏗️ Building a Container Image

1. Create a `Dockerfile`:

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
```

2. Build the image:

```bash
docker build -t my-node-app .
```

> [!tip]  
> Use `.dockerignore` to exclude files like `node_modules` and `.git`.

---

## 🚀 Running Containers

Start a container:

```bash
docker run -p 3000:3000 my-node-app
```

- `-p 3000:3000`: Maps local port 3000 to the container's port.
- `my-node-app`: Image name.

> [!note]  
> Use `-d` to run containers in detached mode.

---

## 📦 Managing Docker

- **List containers**: `docker ps -a`
- **Stop a container**: `docker stop <container-id>`
- **Remove a container**: `docker rm <container-id>`
- **Remove an image**: `docker rmi <image-name>`

---

## 🔁 Docker Workflow Summary

1. Write your app and a `Dockerfile`.
2. Build the image.
3. Run a container from the image.
4. Push the image to DockerHub (optional for sharing).

---

## 🧪 Example Use Case

A Flask API is a lightweight web service that handles HTTP requests to perform backend logic—like serving data, adding tasks, or triggering processes—often used in web apps, internal tools, or microservices. 

Docker helps run this API in a containerized environment, ensuring consistency across machines without needing to install Python or Flask manually. 

For example, a basic Flask API might power a to-do list app with `GET` and `POST` endpoints; Docker lets you package it with its dependencies, build it with `docker build -t flask-api .`, and run it using `docker run -p 5000:5000 flask-api`, exposing it on `localhost:5000` for testing, development, or integration. 

```bash
docker build -t flask-api .
docker run -d -p 5000:5000 flask-api
```

> [!example]  
> Containerized a Flask API for consistent deployment in development and staging environments.

This setup is ideal for reproducible development, CI pipelines, and lightweight deployments.
Using Docker for your Flask API means you don't have to manually patch or redeploy the app on every server or environment whenever there's a change. Instead, you simply rebuild and push an updated container image (e.g., with bug fixes or new features), and any services that rely on the API can pull and run that updated container. 

This decouples your deployment from the host system, ensures version consistency, and makes rollbacks or upgrades as easy as replacing a container. Whether it’s running in local dev, staging, or production, everything points to the live container image—no more fragile manual updates or mismatched environments.

---
# ⚙️ Docker Engine

The Docker Engine is the core runtime that executes containerized applications. It includes:

- A server (`dockerd`) that manages images and containers.
- A REST API for remote interaction.
- A CLI (`docker`) to interact with the engine.

> [!note]  
> Docker Engine runs on Linux and supports Windows/macOS via virtualization.

---

# ☁️ DockerHub

DockerHub is Docker’s default public registry for container images.

- **Push**: Upload your images for reuse or sharing.
- **Pull**: Download official or community-maintained images.
- **Tags**: Identify versions (e.g., `nginx:1.23`).

> [!example]  
> ```bash
> docker pull nginx:latest
> docker push youruser/myapp:1.0
> ```

---

# 🔧 Docker Pipeline Plugin

Used in CI/CD tools (like Jenkins) to define Docker stages in pipelines.

- Enables image build, tag, push, and run operations.
- Often used with scripted or declarative Jenkins pipelines.

---

# 🧱 Docker Commons Plugin

Supports shared functionality across Docker-related Jenkins plugins.

- Handles credential storage for DockerHub.
- Manages environment configuration and logging helpers.

> [!warning]  
> The Commons Plugin doesn’t work independently—used internally by other plugins.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
