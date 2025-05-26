---
title: Terraform
draft: false
tags:
  - terraform
  - devsecops
  - infrastructure-as-code
NeedsReview: false
---
> [!summary] Core Concept  
Terraform is a cloud-agnostic Infrastructure as Code (IaC) tool that automates the provisioning and management of cloud infrastructure using declarative configuration files.

# 🔧 What is Terraform?
Terraform allows developers and cloud security professionals to define infrastructure (VMs, VPCs, networks, etc.) using code. It's:
- **Cloud-agnostic** (supports multiple providers)
- **Version-controlled**
- **Consistent** (reduces config drift)
- **Auditable and reusable**

### 📦 Core Components
Terraform config files are written in **HCL** (HashiCorp Configuration Language) and include:

- **Resource**: What to create (e.g., VM, network)
- **Variable**: The name for the resource instance
- **Location**: Region and zone where resources are deployed

> [!example] Example Blocks  
```hcl
# First Resource Block: Network
resource "google_compute_network" "vpc_network" {
  name                    = "my-custom-mode-network"
  auto_create_subnetworks = false
  mtu                     = 1460
}

# Second Resource Block: Subnetwork
resource "google_compute_subnetwork" "default" {
  name          = "my-custom-subnet"
  ip_cidr_range = "10.0.1.0/24"
  region        = "us-west1"
  network       = google_compute_network.vpc_network.id
}

# Third Resource Block: VM Instance
resource "google_compute_instance" "default" {
  name         = "flask-vm"
  machine_type = "f1_micro"
  zone         = "us-west1-a"
  tags         = ["ssh"]
}
