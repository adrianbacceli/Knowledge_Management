---
title: Google Cloud Backup and DR
draft: true
tags:
  - tag1
  - tag2
NeedsReview: true
---
Google Cloud Backup and Disaster Recovery (DR)
Google Cloud Backup and DR is a BCDR tool that you can use to back up, recover, and test
data on Google Cloud. Google Cloud Backup and DR offers a variety of features that can help
your security team implement BCDR plans, including the ability to:
● Centralize backup management for various Google Cloud and hybrid workloads.
● Create application-aware backups, which capture the state of an application and its
data at a specific point in time.
● Restore using point-in-time recovery, which allows security teams to restore
applications and data to any point in time.
● Automate data replication to multiple regions, which can help protect data using
regional disaster recovery strategies, like failover and failback, and be used to improve
application performance and availability.
● Create immutable backups, which are protected from deletion. This can help prevent
data from being accidentally deleted or corrupted.
● Create testing and development (test / dev) clones of backups, which can be used to
test new software or applications without affecting production data.
● Provide reporting and analytics, which can help security teams identify and
troubleshoot backup and recovery issues.
Here’s one common scenario of how BCDR tools can be used in Google Cloud: A company’s
security team uses a cloud services provider to host its customer database. To ensure BC, the
company uses a BCDR tool—like Google Cloud Backup and DR—to implement a high
availability solution for a database.
First, the security team initiates a plan to create database backups on a regular basis on cloud
storage. Unfortunately, a disruptive event occurs, and the primary database server fails.
Fortunately, the data team is able to use the backup and recovery tool to restore the database
to a secondary server. And, the business is able to continue operating with the secondary
database until the primary database server is restored and tested to function properly.





--------------
Google Cloud Backup and DR is a backup and disaster recovery solution that enables
organizations to quickly recover data, so they can return to running critical business
operations.
As a cloud data professional, you can use Cloud Backup and DR is your managed backup and
disaster recovery service for a centralized way to protect your data and workloads running on
Google Cloud and on-premises. You can use Cloud Backup and DR to create and manage
backups of your Compute Engine disks, Cloud SQL databases, and Cloud Storage buckets. You
can also use it to restore your backups to Google Cloud, or to an on-premises environment.
Management console and appliances
In the forthcoming lab, you'll access Google Cloud Backup and DR by logging into the
management console using the login information provided in the Lab Details panel. The
Management console is where you can configure and manage your backup and restore
activities and access backup / recovery appliances. A backup / recovery appliance is a data
mover that captures, moves, and manages the lifecycle of your backup data. Appliances
perform the actual work of coordinating backup data. Before you start backing up VMs, you'll
need to create a backup plan template and apply a backup plan template.
Backup plan template
Backup plans are the rules that the management console uses to define how data is backed
up, how often it is backed up, how long it is retained, and where and how to replicate the
application's data backups. In the corresponding lab, you'll create a backup template and
configure a set of policies in the template that defines the management console rules.
There are different backup policy types but you'll focus on creating a production to snapshot
backup policy in the lab for this course. Production to snapshot policies define how to capture
application production data as a snapshot. As a reminder, a snapshot captures the state of a
VM at a specific moment in time.
1
Note: In the lab, you'll back up a Compute Engine instance that can only contain production to
snapshot policies.
Create a backup template
To create a backup template, complete the following steps:
1. In the Backup and DR management console, click Backup Plans > Templates.
2. Click + Create Template.
3. In the Template and Description fields, provide a name and description for the
template.
4. In the Policies box, next to Snapshot, click + Add to add a production to snapshot
backup policy.
5. In the Policy Name field, provide a name for the policy.
6. For the Scheduling option, select Continuous, and specify 2 hour(s). A continuous
snapshot backup schedule sets scheduling for the backup at the specified time
interval.
7. Click Create Policy.
8. Click Save Template.
Backup a VM
After you've created a backup policy, you'll need to select the cloud resource that you'll apply
the backup template to—which is lab-vm, a VM that's been pre-configured for the lab. To
apply a backup plan to the VM, you need to search for and apply a backup plan template to it.
Complete the following steps to apply a backup plan template to a VM:
9. In the Backup and DR management console, click Back Up & Recover > Back Up.
10. Select Compute Engine.
11. Select the service account that should back up the VM, and click Next.
12. Select a filter search for the lab-vm Compute Engine instance for backup, and click
Next.
13. Select lab-vm and from the Action drop-down, select Apply a backup template.
14. From the Backup template drop-down, select vm-backup and click OK.
15. Click Finish.
The status will update to confirm whether the policy template successfully attached to the VM.
2
Recover a VM
After you've applied a backup plan template to the VM you want to recover, you can now
recover the VM.
Complete the following steps to apply a backup plan template to a VM:
16. In the Backup and DR management console, click Back Up & Recover > Recover.
17. Select the VM you want to recover, and click Next.
18. Click Table and select the image you want, and click Mount.
19. Select Mount as new GCE instance, and update the configuration options according
to the lab instructions.
20. Click Mount.
Allow time for the job to finish. Once it's complete, you can go to the Compute Instance page
to see the new recovered VM.

---

DR patterns
Once you’ve considered the DRP design factors, you need to plan your responses to DR
patterns. DR patterns indicate how your system’s site environment can recover from a security
incident. There are three parts to the DR pattern: cold, warm, and hot. Here’s an explanation of
each, according to the National Institute of Standards and Technology (NIST):
1. A cold site is a backup facility that has the necessary electrical and physical
components of a computer facility, but doesn’t have the computer equipment in place.
The site is ready to receive the necessary replacement computer equipment in the
event that the user has to move from their main computing location to an alternate site.
2. A warm site is an environmentally conditioned work space that’s partially equipped
with information systems and telecommunications equipment to support relocated
operations in the event of a significant disruption.
3. A hot site is a fully operational offsite data processing facility equipped with hardware
and software, to be used in the event of an information system disruption.
These three pattern levels are comparable to how you might respond to an unexpected
weather cold front that moves in and turns the temperature outside to ice cold. Here’s an
example:
● Cold weather requires you to
take immediate action. Your
warm clothes are in a different
location than you are, so you
need to request their quick
delivery from their local storage
location. You also need time to
clean the clothes before you
wear them, since they haven’t
been used recently.
● Warm weather requires you to
take action soon. You have a set
of warm clothes at your
location, but you need time to
clean the clothes before you wear them, since they haven’t been used recently.
● Hot weather requires you to schedule action in the near future. You have two sets of
hot weather clothes at your location, and they’re both kept clean and ready to wear. So
if one set is damaged, you have a full, equal set of clothes that you can use right away.

-----
Connect DR patterns with RPO and RTO
Once you’ve chosen a site you’re ready to choose the appropriate Google Cloud services and
tools to implement your DRP. Here are some examples of how you can use Google Cloud
services and tools to design a DRP with different RPOs and RTOs:
● Low RPO and low RTO: Use the Cloud Backup and Data Recovery (DR) Continuous
Data Protection (CDP) feature, which provides continuous replication of data at the
block level, ensuring that the most recent data is immediately available for recovery in
the event of a disaster. You can also use the Replication to Multiple Regions feature,
which provides redundancy and disaster protection. This way, if there’s a disaster in
your primary region, you can quickly switch to the secondary region without losing any
data. These features are both hot DR, meaning they minimize data loss and help
achieve a low RPO and RTO.
● Medium RPO and medium RTO: Use Cloud Storage to store daily backups of your
data, as this is a warm DR that can tolerate a few hours of downtime. You can then
schedule regular backups and restore your data from the backups in the event of a
disaster.
● High RPO and high RTO: Use Cloud Storage to store weekly backups of your data to
make use of a cold DR site. A cold DR site is a replica of your production environment
that isn’t kept up to date with your production data. You can then restore your data to
the cold DR site in the event of a disaster and start your applications up.

---
Penguinified by [https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify](https://chatgpt.com/g/g-683f4d44a4b881919df0a7714238daae-penguinify)
