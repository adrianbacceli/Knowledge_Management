---
title: 
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---
## Activity overview

A **Virtual Private Cloud** (VPC) network is a private cloud hosted within a public cloud, enabling organizations to use the public cloud’s resources while being completely isolated from other cloud users.

A VPC provides networking functionality to Compute Engine virtual machine (VM) instances, Kubernetes Engine containers, and other Google Cloud services. Each Google Cloud project by default has a default VPC network, which provides each region with an automatically-created subnet network.

In this lab, you’ll learn how to use Cloud Shell to create a custom VPC network with subnets.

## Scenario

You have recently joined the Cymbal Bank as a junior cloud security analyst where you work alongside a team of dedicated security professionals to secure the organization's data, applications, and systems. After completing a thorough assessment of its existing on-premises infrastructure, Cymbal Bank has finalized its planned migration to a hybrid cloud environment. Part of the plan involves extending its on-premises data center infrastructure to connect into Google Cloud. The new cloud network infrastructure has been successfully architected and is ready to be deployed. Before it can be deployed, the security team wants to explore assessing the security of the new cloud network infrastructure. Your team lead, Chloe, has assigned you the task of conducting research to explore the security of the configuration settings of the new cloud network setup. In order to do this, you'll need to perform your testing on a new test environment that replicates the newly architected cloud network. You'll begin by using Cloud Shell to create a test VPC and subnets.

Here’s how you'll do this task: **First**, you’ll create a network. **Next**, you’ll create a subnet within the network. **Then**, you’ll view the created networks. **Finally**, you’ll list all subnets created within the networks.

## Setup

### Before you click Start Lab

Read these instructions. Labs are timed and you cannot pause them. The timer, which starts when you click **Start Lab**, shows how long Google Cloud resources will be made available to you.

This practical lab lets you do the activities yourself in a real cloud environment, not in a simulation or demo environment. It does so by giving you new, temporary credentials that you use to sign in and access Google Cloud for the duration of the lab.

To complete this lab, you need:

- Access to a standard internet browser (Chrome browser recommended).

_**Note:** Use an Incognito or private browser window to run this lab. This prevents any conflicts between your personal account and the Student account, which may cause extra charges incurred to your personal account._

- Time to complete the lab---remember, once you start, you cannot pause a lab.

_**Note:** If you already have your own personal Google Cloud account or project, do not use it for this lab to avoid extra charges to your account._

### How to start your lab and sign in to the Google Cloud console

1. Click the **Start Lab** button. On the left is the **Lab Details** panel with the following:
    
    - Time remaining
    - The **Open Google Cloud console** button
    - The temporary credentials that you must use for this lab
    - Other information, if needed, to step through this lab
    
    _**Note:** If you need to pay for the lab, a pop-up opens for you to select your payment method._
    
2. Click **Open Google Cloud console** (or right-click and select **Open Link in Incognito Window**) if you are running the Chrome browser. The **Sign in** page opens in a new browser tab.
    
    **_Tip:_** You can arrange the tabs in separate, side-by-side windows to easily switch between them.
    
    _**Note:** If the **Choose an account** dialog displays, click **Use Another Account**_.
    
3. If necessary, copy the **Google Cloud username** below and paste it into the **Sign in** dialog. Click **Next**.
    

 "Google Cloud username"

Copied!

content_copy

You can also find the **Google Cloud username** in the **Lab Details** panel.

4. Copy the **Google Cloud password** below and paste it into the **Welcome** dialog. Click **Next**.

 "Google Cloud password"

Copied!

content_copy

You can also find the **Google Cloud password** in the **Lab Details** panel.

_**Important:** You must use the credentials the lab provides you. Do not use your Google Cloud account credentials._

_**Note:** Using your own Google Cloud account for this lab may incur extra charges._

5. Click through the subsequent pages:
    - Accept the terms and conditions
    - Do not add recovery options or two-factor authentication (because this is a temporary account)
    - Do not sign up for free trials

After a few moments, the Console opens in this tab.

_**Note:** You can view the menu with a list of Google Cloud Products and Services by clicking the **Navigation menu** at the top-left._

### Activate Cloud Shell

Cloud Shell is an online development and operations environment accessible anywhere with your browser. Cloud Shell provides command-line access to your Google Cloud resources.

1. Click **Activate Cloud Shell** (![Activate Cloud Shell icon](https://cdn.qwiklabs.com/ep8HmqYGdD%2FkUncAAYpV47OYoHwC8%2Bg0WK%2F8sidHquE%3D "Activate Cloud Shell icon")) at the top right of the Google Cloud console. You may be asked to click **Continue**.

After Cloud Shell starts up, you'll see a message displaying your Google Cloud Project ID for this session:

Your Cloud Platform project in this session is set to YOUR_PROJECT_ID

The command-line tool for Google Cloud, gcloud,comes pre-installed on Cloud Shell and supports tab-completion. In order to access Google Cloud, you'll have to first authorize gcloud.

2. List the active account name with this command:

gcloud auth list

Copied!

content_copy

3. A pop-up will appear asking you to **Authorize Cloud Shell**. Click **Authorize**.
    
4. Your output should now look like this:
    

**Output:**

ACTIVE: *
ACCOUNT: student-01-xxxxxxxxxxxx@qwiklabs.net
To set the active account, run:
   $ gcloud config set account `ACCOUNT`

5. List the project ID with this command:

gcloud config list project

Copied!

content_copy

**Example output:**

[core]
project = qwiklabs-gcp-44776a13dea667a6

**Note:** For full documentation of gcloud, in Google Cloud, refer to the [gcloud CLI overview guide](https://cloud.google.com/sdk/gcloud).

## Task 1. Create a network

A network forms the basis of communication between devices. You'll need to first create a network for your test environment before you can begin testing security functionality, experimenting with configurations, or building a proof-of-concept for security tools in your role at Cymbal Bank. Here, you'll use software-defined networking to easily set up a network in Google Cloud.

There are two types of VPC networks you can choose to create depending on your subnet requirements. You can choose to create an `auto` mode or a `custom` mode VPC network. An auto mode VPC automatically creates a subnet in each region for you while a custom mode VPC provides you with the control to manually create subnets. Each new network that you create must have a unique name within the same project. You can create up to four additional networks in a project.

In this task, you'll create an initial custom mode VPC network.

1. Copy the following command into the Cloud Shell terminal:

_**Note:** When copying the command and placing it in the Cloud Shell terminal, be sure to note that each command option beginning with "--" needs to be on its own line, and that entering the information incorrectly will result in having to fix the network._

gcloud compute networks create labnet --subnet-mode=custom

Copied!

content_copy

This command creates a custom mode network called `labnet`.

2. Press **ENTER**.

Although you don't need to memorize this command, the following breaks it down to help you better understand the syntax:

- `gcloud` invokes the Cloud SDK `gcloud` command line tool.
- `compute` is one of the groups available in gcloud. It lets you create and configure Compute Engine resources and forms part of a nested hierarchy of command groups.
- `networks` is a subgroup of `compute` with its own specialized commands. It lets you list, create, and delete Compute Engine networks.
- `create` is the action to be executed on this group.
- `labnet` is the name of the network you're creating.
- `--subnet-mode=custom` is the flag that specifies the type of VPC you are creating, in this instance `custom`.

The output should list the `labnet` network you created:

NAME: labnet
SUBNET_MODE: CUSTOM
BGP_ROUTING_MODE: REGIONAL
IPV4_RANGE: 
GATEWAY_IPV4:

Click **Check my progress** to verify that you have completed this task correctly.

Create a network

Check my progress

## Task 2. Create a subnet

In this task, you'll create a subnet within the newly created custom mode VPC network. Configuring subnets is a network management best practice. For test environments, subnets allow you to split your VPC into logical segments to improve the organization of cloud resources, to improve network performance, and to improve security.

When you create a subnet, its name must be unique in that project for that region, even across networks. The same name can appear twice in a project as long as each one is in a different region. Additionally, each subnet must have a primary IP address range, which must be unique within the same region in a project.

1. Copy the following command into the Cloud Shell terminal:

gcloud compute networks subnets create labnet-sub \
   --network labnet \
   --region "REGION" \
   --range 10.0.0.0/28

Copied!

content_copy

This command creates a sub-network called `labnet-sub`.

2. Press **ENTER**.

Click **Check my progress** to verify that you have completed this task correctly.

Create a subnet

Check my progress

## Task 3. View networks

In this task, you'll list the available networks to ensure that you have successfully created them.

1. Copy the following command into the Cloud Shell terminal:

gcloud compute networks list

Copied!

content_copy

This command lists the networks in your project.

2. Press **ENTER**.

The output should list the `default` and `labnet` networks.

The `default` network was created when the project was created. The `labnet` network was created by the `gcloud` command you ran earlier.

What is the subnet mode of the labnet network you created?

Auto

None of these options

Custom

Default

Submit

## Task 4. List subnets

In this task, you'll list all subnets within the networks of your project.

You can either list all subnets in all networks in your project, or you can show only the subnets for a particular network or region. Auditing subnets ensures that the network is properly secured, and helps identify any misconfigurations or potential security vulnerabilities in your VPCs, such as subnets that might be unintentionally exposed to the public internet.

1. Copy the following command into the Cloud Shell terminal:

gcloud compute networks subnets list --network=labnet

Copied!

content_copy

This command lists the subnets in the `labnet` network.

2. Press **ENTER**.

What is the name of the subnet in the labnet network?

labnet-sub

None of these options

default

labnet

Submit

## Conclusion

Great work! By completing this lab activity, you now have hands-on experience in setting up a test VPC network and subnet. This is the first step of creating a test environment which will help you to eventually secure the production environment that will need to protect company data. Thereafter, you were able to confirm the network and subnet's successful creation.

Through observing the network and its subnetworks in the testing environment, you can gather significant data for research. This data is highly beneficial when configuring and creating security plans for the production environment.

## End your lab

Before you **end the lab**, make sure you’re satisfied that you’ve completed all the tasks. When you're ready, click **End Lab** and then click **Submit**.

Ending the lab will remove your access to the lab environment, and you won’t be able to access the work you've completed in it again.

Copyright 2024 Google LLC All rights reserved. Google and the Google logo are trademarks of Google LLC. All other company and product names may be trademarks of