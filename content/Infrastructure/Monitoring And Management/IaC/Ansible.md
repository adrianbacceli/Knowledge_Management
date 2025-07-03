---
title: Ansible
draft: false
tags:
  - Ansible
  - Playbook
  - Automation
  - IaC
NeedsReview: false
---
### 🧰 What Is Ansible?

Ansible is another powerful tool in the DevOps toolbox! While Terraform is great for **provisioning infrastructure**, Ansible shines when it comes to **configuration management**, **application deployment**, and **orchestration**.

Ansible is an **agentless automation tool** that uses **SSH** (or WinRM for Windows) to connect to remote machines and execute tasks. It uses **YAML-based playbooks** to define what to do.
Ansible is an Imperative language, which means it defines **how** to configure infrastructure step-by-step.

---
### 🔧 Real-Life Example: Setting Up a Web Server

Let’s say you have a freshly provisioned Ubuntu server (maybe created with Terraform!) and you want to:

- Install Nginx
- Start the service
- Ensure it’s enabled on boot

#### ✅ Ansible Playbook Example

```yaml
---
- name: Configure web server
  hosts: webservers
  become: yes

  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Start Nginx
      service:
        name: nginx
        state: started
        enabled: yes
```

You’d run this with:

```bash
ansible-playbook -i inventory.ini webserver.yml
```

Where `inventory.ini` might look like:

```ini
[webservers]
192.168.1.10 ansible_user=ubuntu
```

---

### 🔄 Terraform vs Ansible

|Feature|Terraform|Ansible|
|---|---|---|
|Purpose|Infrastructure provisioning|Configuration management|
|Language|HCL|YAML|
|Agentless|✅|✅|
|Idempotent|✅|✅|
|State tracking|Yes (state file)|No (relies on idempotent tasks)|
|Use case|Create servers, networks, databases|Install software, configure services|

---
# 🧩 1. **Ansible Roles** – _Organized, Reusable Automation_

Roles are a way to **organize playbooks** into reusable components. Instead of writing one big playbook, you split tasks, handlers, variables, and templates into a structured directory.

### 🔧 Example Structure:

```
roles/
  webserver/
    tasks/
      main.yml
    handlers/
      main.yml
    templates/
      nginx.conf.j2
    vars/
      main.yml
    defaults/
      main.yml
    meta/
      main.yml
```

### ✅ Benefits:

- Clean separation of concerns
- Reusability across projects
- Easier collaboration in teams

You can then use a role in a playbook like this:

```yaml
- hosts: webservers
  roles:
    - webserver
```

---

# 🔐 2. **Ansible Vault** – _Secure Secrets Management_

Ansible Vault allows you to **encrypt sensitive data** like passwords, API keys, or private variables.

## 🔐 Encrypt a file:

```bash
ansible-vault encrypt secrets.yml
```

## 🔓 Decrypt a file:

```bash
ansible-vault decrypt secrets.yml
```

## 🔄 Edit an encrypted file:

```bash
ansible-vault edit secrets.yml
```

## 🔐 Use in a playbook:

```yaml
vars_files:
  - secrets.yml
```

You’ll be prompted for a password when running the playbook, or you can use `--vault-password-file`.

---

# 🌐 3. **Dynamic Inventory** – _Real-Time Infrastructure Awareness_

By default, Ansible uses a static `inventory.ini` file. But in dynamic environments (like AWS, Azure, GCP, Kubernetes), you want Ansible to **discover hosts automatically**.

## 🌐 **Dynamic Inventory with GCP**

Ansible can dynamically fetch GCP instances using the **`gcp_compute` inventory plugin**, which queries the GCP API for live instance data.

---

### ✅ **Prerequisites**

1. **Google Cloud SDK installed**
2. A **GCP service account** with the right permissions (e.g., `compute.viewer`)
3. A **JSON key file** for that service account
4. Enable the **Compute Engine API** in your GCP project
5. Install required Python packages:

```bash
   pip install google-auth google-auth-httplib2 google-api-python-client
```

---

### 📁 **Directory Structure**

```
ansible/
├── inventory/
│   └── gcp.yml
├── playbook.yml
└── credentials/
    └── service-account.json
```

---

### 🧾 **Step 1: Create `gcp.yml` Inventory File**

```yaml
plugin: gcp_compute
projects:
  - your-gcp-project-id
zones:
  - us-central1-a
auth_kind: serviceaccount
service_account_file: ../credentials/service-account.json
groups:
  webservers: "'web' in (labels|list)"
hostnames:
  - name
```

This will group all instances with the label `web` under the group `webservers`.

---

### 🧪 **Step 2: Test the Inventory**

```bash
ansible-inventory -i inventory/gcp.yml --list
```

This should return a JSON list of your GCP instances grouped by labels.

---

### 🚀 **Step 3: Use in a Playbook**

```yaml
- name: Configure GCP web servers
  hosts: webservers
  become: yes
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
        update_cache: yes
```

Run it with:

```bash
ansible-playbook -i inventory/gcp.yml playbook.yml
```

---

Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)