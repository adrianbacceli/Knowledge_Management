---
title: Terraform Lab
draft: false
tags:
  - tag1
  - tag2
NeedsReview: false
---
Terraform:
1- You clone the terraform repo
2- You create the .tf file with declarative language
3- You init terraform
...


###############
LAB details
Task 1. Clone the Terraform repo
In this task, you'll clone the Terraform example repository using the Cloud Shell terminal. The Terraform example contains the configuration file, which you'll use to provision the firewall rules.

In the Google Cloud console, click the Activate Cloud Shell Activate Cloud Shell icon
Click Continue.
It should only take a few moments to provision and connect to the Cloud Shell environment.

Copy the following command into the Cloud Shell terminal:
cloudshell_open --repo_url "https://github.com/terraform-google-modules/docs-examples.git" --print_file "./motd" --dir "firewall_basic" --page "editor" --tutorial "./tutorial.md" --open_in_editor "main.tf" --force_new_clone
Copied!
This command clones the Terraform example directory.

Press ENTER.
This command performs the following actions:

Clones the terraform-google-modules.
Prints the motd file name.
Switches to the firewall_basic directory.
Checks the cloned files, for example tutorial.md.
Opens main.tf in Cloud Shell Editor.
Once the cloning is complete, you’ll be at the ~/cloudshell_open/docs-examples/firewall_basic location in the terminal. Your Cloud Shell prompt should display similar output to the following example:

student_01_c2e095df84e2@cloudshell:~/cloudshell_open/docs-examples/firewall_basic (qwiklabs-gcp-04-fde36f013e65)$
Copy the following command into the Cloud Shell terminal to list the contents of the directory:
ls
Copied!
You should notice that several files in the directory have been downloaded: backing_file.tf, main.tf, motd, and tutorial.md.

Copy the following command into the Cloud Shell terminal to analyze the configuration of the firewall rule:
cat main.tf
Copied!
Press ENTER.
The main.tf file is the configuration file that defines the resources that Terraform will create. Two resources will be created: a firewall rule google_compute_firewall named test-firewall-${local.name_suffix} with rules to allow ICMP and TCP traffic from ports 80, 8080, and 1000-2000 and a VPC network google_compute_network named test-network-${local.name_suffix}. The variable ${local.name_suffix} is a local variable that automatically generates unique names for resources.


Which one of the following protocols are being modified (allow/deny) on the firewall using the Terraform main.tf file in Cloud Shell Editor?
web, test-network
icmp, web
check
icmp, tcp
test-firewall, test-network

Task 2. Deploy the VPC network and firewall
In this task, you'll deploy a new VPC network and a new firewall rule. This task provides hands-on experience with building a VPC network and subnets.

Note: Run the following commands in sequence in the Cloud Shell terminal.
Copy the following command into the Cloud Shell terminal.
export GOOGLE_CLOUD_PROJECT=qwiklabs-gcp-00-5c80462cb130
Copied!
This command sets the project ID.

Press ENTER.

Copy the following command into the Cloud Shell terminal:

terraform init
Copied!
This command initializes the Terraform script.

Press ENTER.
The output should return a message stating that the Terraform has been successfully initialized. Take a moment to examine the output. You'll notice that Terraform will create a new firewall and VPC network:

The output message after successfully initializing Terraform.

Once the initialization is complete, copy the following command into the Cloud Shell terminal:
terraform apply
Copied!
This command applies the changes and deploys the Terraform script.

Press ENTER.
Note: If an Authorize Cloud Shell dialog box appears, click Authorize to grant permission to use your credentials for the gcloud command.
The command prompt will prompt you to Enter a value. Type "yes", and press ENTER.
This will start creating the VPC network and firewall rules.

Once it’s completed, the output should return the following message:

Apply complete! Resources: 3 added, 0 changed, 0 destroyed.
This means that the VPC and firewall have been successfully deployed.

Click Check my progress to verify that you have completed this task correctly.
You have successfully completed this task.
Check my progress
You have successfully completed this task.

Task 3. Verify the deployment of the resources
In this task, you'll verify that the newly created VPC and firewall rules have been successfully deployed.

In the Google Cloud console, from the Navigation menu (Navigation menu icon), select VPC network > VPC networks. The VPC networks page opens.
You should notice two VPC networks, default and the newest one you just created, test-network. Click test-network to access the VPC network details.
Click Firewalls. Use the expand arrow to expand vpc-firewall-rules. Under Protocols and ports and Action you should notice the firewall rules are the same rules as defined in the configuration file: Allow and tcp:80, 1000-2000, 8080 icmp.
Note: To ensure that resource names are unique, both the test-network and test-firewall names will be dynamically appended with a unique identifier. For example, test-network-curly-penguin. This unique identifier is generated automatically by the ${local.name_suffix} local variable, which is defined in the configuration file. This helps prevent resource naming conflicts and ensures the proper organization of infrastructure components.
Conclusion
Great work!

You've successfully built a VPC network and subnet using Terraform and the Cloud Shell. This lab provides the foundation to developing advanced automated solutions that can be given to system administrators to use with Terraform.

By creating the VPC network and firewall, you have gained a better understanding of how it enables you to automate the process of provisioning and modifying firewall rules. This helps establish consistency across various environments, while also helping reduce the chance of human error.

End your lab


#################
Terminal output
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

Welcome to Cloud Shell! Type "help" to get started.
Your Cloud Platform project in this session is set to qwiklabs-gcp-00-5c80462cb130.
Use `gcloud config set project [PROJECT_ID]` to change to a different project.
student_01_75a01b9dbbfd@cloudshell:~ (qwiklabs-gcp-00-5c80462cb130)$ cloudshell_open --repo_url "https://github.com/terraform-google-modules/docs-examples.git" --print_file "./motd" --dir "firewall_basic" --page "editor" --tutorial "./tutorial.md" --open_in_editor "main.tf" --force_new_clone
2025/06/17 22:39:52 Cloning https://github.com/terraform-google-modules/docs-examples.git into /home/student_01_75a01b9dbbfd/cloudshell_open/docs-examples
Cloning into '/home/student_01_75a01b9dbbfd/cloudshell_open/docs-examples'...
remote: Enumerating objects: 7532, done.
remote: Counting objects: 100% (62/62), done.
remote: Compressing objects: 100% (34/34), done.
remote: Total 7532 (delta 49), reused 28 (delta 28), pack-reused 7470 (from 3)
Receiving objects: 100% (7532/7532), 2.05 MiB | 15.41 MiB/s, done.
Resolving deltas: 100% (5758/5758), done.
2025/06/17 22:39:53 ===

These examples use real resources that will be billed to the
Google Cloud Platform project you use - so make sure that you
run "terraform destroy" before quitting!

===
student_01_75a01b9dbbfd@cloudshell:~/cloudshell_open/docs-examples/firewall_basic (qwiklabs-gcp-00-5c80462cb130)$ ls
backing_file.tf  main.tf  motd  tutorial.md
student_01_75a01b9dbbfd@cloudshell:~/cloudshell_open/docs-examples/firewall_basic (qwiklabs-gcp-00-5c80462cb130)$ cat main.tf 
resource "google_compute_firewall" "default" {
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
student_01_75a01b9dbbfd@cloudshell:~/cloudshell_open/docs-examples/firewall_basic (qwiklabs-gcp-00-5c80462cb130)$ export GOOGLE_CLOUD_PROJECT=qwiklabs-gcp-00-5c80462cb130
student_01_75a01b9dbbfd@cloudshell:~/cloudshell_open/docs-examples/firewall_basic (qwiklabs-gcp-00-5c80462cb130)$ terraform init

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

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
student_01_75a01b9dbbfd@cloudshell:~/cloudshell_open/docs-examples/firewall_basic (qwiklabs-gcp-00-5c80462cb130)$ terraform apply

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
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

Apply complete! Resources: 3 added, 0 changed, 0 destroyed.
student_01_75a01b9dbbfd@cloudshell:~/cloudshell_open/docs-examples/firewall_basic (qwiklabs-gcp-00-5c80462cb130)$ 
---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
