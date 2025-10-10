---
title: Python CLI Apps – Opinionated Whitepaper & Runbook
draft: false
tags:
  - programming
  - runbook
NeedsReview: false
---
**Author:** You • **Version:** 1.0 • **Applies to:** Python 3.11+

Choose the language
- Python
- Java
- Javascript
- C/C++
- Bash/Shell
- Go
- PHP
- HTML/CSS
- Typescript

Establish the template for your project (*Folders*)
- [[Cookiecutter]]

Decide on the Repository
* GitHub
* GitLab

Diagram / Workflow
- Miro

Set up VS Code
* VS Code plugins

Repository Settings
* Branches 

CI/CD
- SAST/DAST

---
## **Abstract**

Most CLI tools die from ad‑hoc decisions: config scattered, logging inconsistent, errors handled everywhere, tests missing. This document standardizes **how we build Python CLI apps** so every tool shares the same shape and behavior. It defines core principles, a reference architecture, a ready‑to‑reuse helper set, and a step‑by‑step “gold path” you can follow for every new project.

---

## **Audience & Outcomes**

**Audience:** developers building command‑line utilities and small services.

**After reading, you can:**

- Scaffold a CLI with consistent **config, logging, error policy, retries, and tests**.
- Know **where logic belongs** (CLI vs orchestration vs helpers).
- Avoid re‑implementing boilerplate; reuse the same helpers across apps.

---

## **Guiding Principles**

1. **Single entry/exit.** The CLI layer parses flags, sets logging, constructs configuration, and is the _only_ place that calls sys.exit().
2. **Raise, don’t exit.** Deeper code raises typed exceptions (ConfigError, ApiError, CliError). The CLI maps exceptions → user messages → exit codes.
3. **Configuration is data.** Centralize config in a typed Settings object (env + optional .env). No global constants sprinkled around.
4. **Deterministic I/O.** HTTP, files, and prompts are behind helpers so they’re testable and replaceable.
5. **Observability by default.** Colorized console logs in dev; structured logs available for automation. A --debug flag exists in every app.
6. **Small, composable functions.** Prefer functions + dataclasses. Use classes for stateful components (e.g., API clients).
7. **Convention over invention.** Every app shares the same folder layout, helper names, and error policy.

---

## **Reference Architecture**

┌───────────────────────────────────────────────────────────────────────┐
│ CLI (Typer/Click)                                                     │
│ - parse flags (e.g., --debug, subcommands)                            │
│ - setup logging                                                       │
│ - create Settings (env/.env)                                          │
│ - call orchestrator                                                   │
│ - catch errors → message + exit code                                  │
└───────────────▲───────────────────────────────────────────────────────┘
                │
┌───────────────┴───────────────────────────────────────────────────────┐
│ Orchestrator (main.py)                                               │
│ - coordinates steps using helpers (no sys.exit, minimal prints)       │
└───────────────▲───────────────────────────────────────────────────────┘
                │
┌───────────────┴───────────────┬───────────────┬───────────────┬───────┐
│ settings.py (config)          │ logging.py    │ http.py       │ errors│
│ - pydantic-settings           │ - Rich/JSON   │ - httpx+retry │ - types│
│ - validation & defaults       │ - levels      │ - timeouts     │ - codes│
└───────────────────────────────┴───────────────┴───────────────┴───────┘
                │
          domain modules (e.g., flows/, client.py, console.py)
          
---

## **Project Layout (Template)**
project-root/
  pyproject.toml
  README.md
  .env.example
  .pre-commit-config.yaml
  src/your_app/

    __init__.py
    cli.py           # entry point (Typer)
    main.py          # orchestration
    settings.py      # env/.env -> Settings
    logging.py       # setup_logging(debug/json)
    errors.py        # ConfigError, CliError, ApiError, ExitCode
    http.py          # httpx client + tenacity retries
    console.py       # Rich helpers (status, tables, prompts)
    domain/          # your actual feature code (e.g., flows/, client.py)
  tests/
    test_cli.py
    test_settings.py
    test_main.py

---

## **Helper Modules (Design Contract)**

### **1) settings.py — Configuration**

**Goal:** one source of truth for configuration, pulled from environment (and optionally .env).

- Use a Settings class (via pydantic‑settings). It documents every variable, enforces types, and provides defaults.
- Precedence: **CLI flags > env vars > .env > defaults**.
- Keep secrets in env; support OS keyring optionally.

**Responsibilities**

- Parse env/.env (e.g., TENABLE_BASE_URL, TENABLE_IO_ACCESS_KEY, TENABLE_IO_SECRET_KEY).
- Validate minimal presence of required values.
- Provide a Settings() instance to the CLI and orchestrator.

**Anti‑patterns**

- Global module constants for config.
- Exiting on read errors (raise ConfigError instead; the CLI decides how to exit).

---

### **2) logging.py — Logging & Tracebacks**

**Goal:** consistent, pretty logs locally; optional structured logs for automation.

- Use stdlib logging with **Rich**’s RichHandler for colorized output and rich tracebacks in dev.
- Provide setup_logging(debug: bool, json: bool=False) -> None that is idempotent.
- In --debug mode: level DEBUG, include exception tracebacks.
- In non‑debug: level INFO, concise errors.

**Option:** If you need structured logs, add **structlog** (or switch handlers based on a --json flag).

---

### **3) errors.py — Error Policy**

**Goal:** a tiny taxonomy of exceptions and a single mapping to exit codes.

- Define class ConfigError(RuntimeError), ApiError, CliError.
- Optionally define an Enum ExitCode (e.g., OK=0, USAGE=2, API=3, UNKNOWN=1).
- The CLI catches these and calls sys.exit(code).
- Deeper modules **never** call sys.exit.

---

### **4) http.py — HTTP Client & Retries**

**Goal:** safe, observable HTTP with retry/backoff in one place.

- Use **httpx** for requests (sync or async).
- Centralize timeouts, headers, and user agent.
- Add **tenacity** decorators (stop_after_attempt, wait_exponential_jitter), with retryable status codes (e.g., 429, 5xx).
- Wrap network exceptions into ApiError with helpful context.

---

### **5) console.py — UX Helpers (optional but handy)**

**Goal:** standardize how we print human‑readable info.

- Provide helpers like status("Uploading…"), print_table(rows), prompt_secret().
- Use Rich for spinners, tables, and syntax highlighting.

---

### **6) cli.py — Entry Point (Typer)**

**Goal:** single place for flags, logging, and error mapping.

- Parse flags (--debug, subcommands, etc.).
- Call setup_logging() and build Settings().
- Invoke orchestration (main.run()), not domain logic directly.
- try/except around the command to map exceptions → messages → exit codes.

---

### **7) main.py — Orchestration**

**Goal:** coordinate steps; minimal logic.

- Validate inputs (or rely on Settings where possible).
- Call domain functions in the right order.
- Return results to the CLI; do not print excessively.

---

## **Gold Path: Build a New CLI (Step‑by‑Step)**

### **Step 0 — Tooling**

- Install **Poetry** _or_ **Hatch** (choose one for all projects).
- Install **pre‑commit** globally (pipx install pre-commit).

### **Step 1 — Create the Project**

- With Cookiecutter (recommended): generate from your internal template.
- Or manually create the layout shown above.

### **Step 2 — Add Dependencies**

Runtime: `typer[all]`, pydantic-settings, rich, httpx, tenacity

Dev: pytest, pytest-cov, ruff, black, isort, mypy, pre-commit

### **Step 3 — Wire Entry Point**

- cli.py creates the Typer app, defines --debug, constructs Settings, calls main.run().
- Add a console script in pyproject.toml so your-app becomes an installable command.

### **Step 4 — Implement Helpers**

- settings.py: define required fields, defaults, and validation.
- logging.py: implement setup_logging() with Rich.
- errors.py: define exceptions and (optional) ExitCode.
- http.py: client factory + tenacity retry decorator.
- console.py: convenient printing/status.

### **Step 5 — Implement Domain Logic**

- Keep it in src/your_app/domain/ (e.g., flows/, client.py).
- Domain code should be testable and not depend on CLI specifics.

### **Step 6 — Tests & Quality Gates**

- Write a smoke test for the CLI and unit tests for settings/domain.
- Enable pre‑commit hooks for ruff/black/isort/mypy.

### **Step 7 — Run & Package**

- poetry run your-app --help (or python -m your_app).
- Install in editable mode for local use.

### **Step 8 — CI & Release**

- CI runs lint → type check → tests on each push.
- Use Conventional Commits and SemVer; generate changelogs optionally.

---

## **Patterns to Reuse (Copybook)**

### **Adding a new command**

- Put logic in main.py or a dedicated domain module; expose it via a new Typer command.
- Keep command functions small; pass in Settings and arguments explicitly.

### **Adding a new setting**

- Add a field to Settings with type/description and default.
- Document it in .env.example and README.

### **Adding a new HTTP integration**

- Add a client function/class in domain/ using http.py’s factory.
- Define retries/timeouts once; map errors to ApiError.

### **Handling secrets**

- Read from env or OS keyring; never log secrets.
- Mask sensitive values in console output.

### **Interactive prompts**

- Provide prompts only when TTY is present; otherwise rely on env/flags.

---

## **Operational Runbook**

### **Local run**

- Export required env vars or create a .env.
- your-app --debug subcommand ...

### **Smoke test**

- A test.py script can read test.cfg, export env, and call the real CLI.

### **Observability**

- --debug prints detailed tracebacks; normal mode prints concise errors.
- For automation, enable JSON logs and pipe to a log aggregator.

### **Security notes**

- Do not store secrets in VCS; use .env only for local dev.
- Avoid echoing secrets; scrub them from long‑lived objects after use.

---

## **Anti‑Patterns (What to Avoid)**

- Calling sys.exit() deep inside libraries or domain code.
- Spreading config reads across modules.
- Silent retries without logs or metrics.
- Mixing printing and logging haphazardly.
- Large God‑functions; prefer composable steps with clear inputs/outputs.

---

## **Glossary**

- **CLI**: Command‑line interface program.
- **Orchestrator**: The coordination layer that sequences operations.
- **Rich**: A Python library for beautiful terminal output.
- **Typer**: CLI framework leveraging type hints.
- **httpx**: HTTP client library (sync/async).
- **tenacity**: Retry utilities with backoff and jitter.

---

## **Further Reading (External References)**

- Twelve‑Factor App • Config & environment discipline
- Semantic Versioning • Release version policy
- Conventional Commits • Commit message standard
- Typer documentation • CLI development
- Pydantic & pydantic‑settings docs • Configuration management
- Rich documentation • Terminal output, tracebacks, tables
- httpx docs • HTTP client patterns
- tenacity docs • Retry/backoff patterns
- pytest docs • Testing best practices
- pre‑commit, ruff, black, isort, mypy • Quality tooling

> [!Tip]
> Turn this whitepaper into a **Cookiecutter template** so all new CLIs start with helpers, layout, and tooling pre‑wired. Keep the template in a repo; when you improve your helpers, update the template—not each individual project.
 

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
