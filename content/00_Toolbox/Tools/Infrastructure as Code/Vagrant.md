---
title: Vagrant
draft: true
tags:
  - IaC
  - Virtual-machines
  - Vagrant
  - infrastructure-as-code
  - Provisioning
  - HashiCorp
  - VM
NeedsReview: true
---
# Vagrant

[Vagrant](https://www.vagrantup.com/) is a tool that can create, configure and manage virtual machines or virtual machine environments. The VMs are not created and configured manually but are described as code within a `Vagrantfile`. To better structure the program code, the Vagrant file can include additional code files. The code can then be processed using the Vagrant CLI. In this way, we can create, provision, and start our own VMs. Moreover, if the VMs are no longer needed, they can be destroyed just as quickly and easily. Out of the box, Vagrant offers providers for VMware and Docker.

Vagrant is an IaC tool built by HashiCorp. It is a declarative definition tool that can work with other IaC tools to enforce uniformity across systems. However, Vagrant focuses on quickly and easily creating development environments that use a small amount of virtual machines, instead of large cloud infrastructure environments that can span hundreds or thousands of servers across multiple cloud providers.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
