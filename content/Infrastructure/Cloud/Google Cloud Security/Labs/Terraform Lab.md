---
title: Terraform Lab - Step-by-Step Command Line Explanation
draft: false
tags:
  - terraform
  - gcp
  - vpc
  - firewall
NeedsReview: false
---

> [!info]
> This note explains each command executed in the Terraform Cloud Shell lab, detailing their purpose and impact on infrastructure provisioning using Google Cloud and Terraform.

---

# 🔧 Task 1: Clone the Terraform Repository

```bash

cloudshell_open --repo_url "https://github.com/terraform-google-modules/docs-examples.git" \
--print_file "./motd" \
--dir "firewall_basic" \
--page "editor" \
--tutorial "./tutorial.md" \
--open_in_editor "main.tf" \
--force_new_clone

```

Output:
```bash

2025/06/17 22:39:52 Cloning https://github.com/terraform-google-modules/docs-examples.git into /home/student_01_75a01b9dbbfd/cloudshell_open/docs-examples
Cloning into '/home/student_01_75a01b9dbbfd/cloudshell_open/docs-examples'...
remote: Enumerating objects: 7532, done.
remote: Counting objects: 100% (62/62), done.Add commentMore actions
remote: Compressing objects: 100% (34/34), done.Add commentMore actions
remote: Total 7532 (delta 49), reused 28 (delta 28), pack-reused 7470 (from 3)
Receiving objects: 100% (7532/7532), 2.05 MiB | 15.41 MiB/s, done.
Resolving deltas: 100% (5758/5758), done.
2025/06/17 22:39:53 ===

```

Note:
```shell

These examples use real resources that will be billed to theAdd commentMore actions
Google Cloud Platform project you use - so make sure that you
run "terraform destroy" before quitting!

```

> [!tip]
> This command launches a Cloud Shell environment with an editor, clones a GitHub repo, and opens the main.tf file ready for editing.

What happens:
	•	Clones the Terraform examples repo into your Cloud Shell.
	•	Switches to the firewall_basic directory.
	•	Opens the Terraform configuration file (main.tf) in the editor.
	•	Ensures a fresh clone even if the repo exists locally.

---

```bash
ls
```

output:
```shell
backing_file.tf  main.tf  motd  tutorial.md
```

Lists all files in the current directory:
	•	main.tf: Terraform configuration
	•	backing_file.tf: supporting resources
	•	motd, tutorial.md: metadata/tutorial files

---

```bash
cat main.tf
```

output:
```shell

resource "google_compute_firewall" "default" {Add commentMore actions
  name    = "test-firewall-${local.name_suffix}"
  network = google_compute_network.default.name

  allow {
    protocol = "icmp"
  }

  allow {
    protocol = "tcp"
    ports    = ["80", "8080", "1000-2000"]
  }

  source_tags = ["web"]
}

resource "google_compute_network" "default" {
  name = "test-network-${local.name_suffix}"
}

```

Displays the contents of the Terraform config defining:
	•	A google_compute_firewall resource allowing ICMP + TCP ports 80, 8080, 1000–2000
	•	A google_compute_network resource

> [!question]
> Quiz: Which protocols are defined in the firewall rules?
Answer: icmp, tcp

---

# 🚀 Task 2: Deploy Infrastructure with Terraform

```bash
export GOOGLE_CLOUD_PROJECT=qwiklabs-gcp-00-5c80462cb130
```

Sets your working GCP project ID so Terraform applies configs in the right project.
```bash
terraform init
```

output
```shell

More actions
Initializing the backend...

Initializing provider plugins...
- Finding latest version of hashicorp/random...
- Finding latest version of hashicorp/google...
- Installing hashicorp/random v3.7.2...
- Installed hashicorp/random v3.7.2 (signed by HashiCorp)
- Installing hashicorp/google v6.40.0...
- Installed hashicorp/google v6.40.0 (signed by HashiCorp)

Terraform has created a lock file .terraform.lock.hcl to record the provider
selections it made above. Include this file in your version control repository
so that Terraform can guarantee to make the same selections by default when
you run "terraform init" in the future.
Add commentMore actions
Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.

```

Initializes Terraform in the current directory:
	•	Downloads required providers (google, random)
	•	Prepares .terraform.lock.hcl for reproducibility

---

```shell
terraform apply
```

Output:
```shell

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:Add commentMore actions
  + create

Terraform will perform the following actions:

  # google_compute_firewall.default will be created
  + resource "google_compute_firewall" "default" {
      + creation_timestamp = (known after apply)
      + destination_ranges = (known after apply)
      + direction          = (known after apply)
      + enable_logging     = (known after apply)
      + id                 = (known after apply)
      + name               = (known after apply)
      + network            = (known after apply)
      + priority           = 1000
      + project            = "qwiklabs-gcp-00-5c80462cb130"
      + self_link          = (known after apply)
      + source_tags        = [
          + "web",
        ]

      + allow {
          + ports    = [
              + "80",
              + "8080",
              + "1000-2000",
            ]
          + protocol = "tcp"
        }
      + allow {
          + ports    = []
          + protocol = "icmp"
        }
    }

  # google_compute_network.default will be created
  + resource "google_compute_network" "default" {
      + auto_create_subnetworks                   = true
      + bgp_always_compare_med                    = (known after apply)
      + bgp_best_path_selection_mode              = (known after apply)
      + bgp_inter_region_cost                     = (known after apply)
      + delete_default_routes_on_create           = false
      + gateway_ipv4                              = (known after apply)
      + id                                        = (known after apply)
      + internal_ipv6_range                       = (known after apply)
      + mtu                                       = (known after apply)
      + name                                      = (known after apply)
      + network_firewall_policy_enforcement_order = "AFTER_CLASSIC_FIREWALL"
      + network_id                                = (known after apply)
      + numeric_id                                = (known after apply)
      + project                                   = "qwiklabs-gcp-00-5c80462cb130"
      + routing_mode                              = (known after apply)
      + self_link                                 = (known after apply)
    }

  # random_pet.suffix will be created
  + resource "random_pet" "suffix" {
      + id        = (known after apply)
      + length    = 2
      + separator = "-"
    }

Plan: 3 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value:
```

Input value 'yes'
```shell
  Enter a value: yes
random_pet.suffix: Creating...
random_pet.suffix: Creation complete after 0s [id=causal-insect]
google_compute_network.default: Creating...
google_compute_network.default: Still creating... [10s elapsed]
google_compute_network.default: Still creating... [20s elapsed]
google_compute_network.default: Still creating... [30s elapsed]
google_compute_network.default: Creation complete after 31s [id=projects/qwiklabs-gcp-00-5c80462cb130/global/networks/test-network-causal-insect]
google_compute_firewall.default: Creating...
google_compute_firewall.default: Still creating... [10s elapsed]
google_compute_firewall.default: Still creating... [20s elapsed]
google_compute_firewall.default: Creation complete after 22s [id=projects/qwiklabs-gcp-00-5c80462cb130/global/firewalls/test-firewall-causal-insect]
Add commentMore actions
Apply complete! Resources: 3 added, 0 changed, 0 destroyed.

```


What happens here
•	Shows an execution plan of resources to be created.
•	Prompts for confirmation.
•	On typing yes, applies the plan:
•	Creates a random suffix (random_pet)
•	Provisions `test-firewall-<suffix>` (Firewall Rule)
•	Provisions `test-network-<suffix>` (VPC)

> [!note]
> The suffix helps avoid naming conflicts in shared environments.


---

# 🧪 Task 3: Verify the Deployment
	1.	Go to VPC network > VPC networks in the GCP Console.
	2.	Locate the test-network-* VPC and click it.
	3.	Under Firewalls, inspect the rule:
	•	Action: Allow
	•	Protocols/Ports: icmp, tcp:80, 8080, 1000-2000

> [!example]
> Resource names like test-firewall-causal-insect are generated by ${local.name_suffix} for uniqueness.

---

✅ Conclusion
You successfully:
	•	Cloned a repo
	•	Examined and applied a Terraform config
	•	Provisioned a VPC and firewall
	•	Verified infrastructure deployment

> [!success]
> This hands-on lab taught the basics of infrastructure-as-code (IaC) using Terraform in GCP.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)