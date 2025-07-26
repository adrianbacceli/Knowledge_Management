---
title: YAML
draft: false
tags:
  - YAML
  - configuration
  - serialization
  - DevOps
NeedsReview: false
---
> [!info] What is YAML?
> YAML stands for "YAML Ain't Markup Language". It's a data [[Serialization & Deserialization]] format often used for configuration files, data exchange, and pipeline scripting.

## Basics

YAML uses indentation (spaces, **not tabs**) to define structure. It’s intuitive and often preferred over [[JSON]] or XML for its readability.

```yaml
name: Penguin
likes:
  - Fish
  - Ice
  - Tux
is_cool: true
````

## Key Features

> [!tip] Why use YAML?  
> YAML is clean, expressive, and supports complex data structures like lists, maps, and scalars.

- **Scalars**: Strings, numbers, booleans
- **Sequences (lists)**:
    ```yaml
    colors:
      - red
      - green
      - blue
    ```

- **Mappings (dictionaries)**:
    ```yaml
    environment:
      os: Linux
      shell: bash
    ```

## Comments

```yaml
# This is a comment
key: value  # Inline comment
```

## Common Use Cases

- [[Developing Methodologies#What is CI/CD?|CI/CD]] configuration (e.g., GitHub Actions, GitLab CI)
- [[Docker]] Compose files
- [[Kubernetes]] manifests
- Static site generator settings (e.g., Hugo)

> [!example] Example: GitHub Actions Workflow

```yaml
name: Build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run build
        run: make build
```

## Warnings

> [!warning] Be careful!  
> YAML is sensitive to indentation and whitespace. Always use **spaces**, not tabs. Incorrect indentation leads to parsing errors.

## Tools

- YAML linters: [`yamllint`](https://yamllint.readthedocs.io/)
- Online validators: [yamlchecker.com](https://yamlchecker.com/)

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)