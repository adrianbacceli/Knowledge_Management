---
title: Incident response
draft: false
tags:
  - tag1
  - tag2
NeedsReview: true
---

The NIST Incident Response Cycle:



Incident handlers: Investigation and Recovery

- Discover the initial 'patient zero' victim and create an (ongoing if still active) incident timeline
- Determine what tools and malware the adversary used
- Document the compromised systems and what the adversary has done
# Prerequisites

- Skilled incident handling team members (incident handling team members can be outsourced, but a basic capability and understanding of incident handling are necessary in-house regardless)
- Trained workforce (as much as possible, through security awareness activities or other means of training)
- Clear policies and documentation.
- Tools (software and hardware).


### Clear Policies and Documentations

Some of the written policies and documentation should contain an up-to-date version of the following information:

- **Contact information** and roles of the incident handling team members
- **Contact information** for the legal and compliance department, management team, IT support, communications and media relations department, law enforcement, internet service providers, facility management, and external incident response team
- Incident response **policy, plan, and procedures**
- Incident **information sharing policy and procedures**
- **Baselines** of systems and networks, out of a golden image and a clean state environment
- **Network diagrams**
- Organization-wide **asset management database**
- **User accounts with excessive privileges** that can be used **on-demand** by the team when necessary
    - Also to business-critical systems, which are handled with the skills needed to administer that specific system.
    - These user accounts are normally enabled when an incident is confirmed during the initial investigation and then disabled once it is over.
    - A mandatory password reset is also performed when disabling the users.
- Ability to acquire hardware, software, or an external resource without a complete procurement process (**urgent purchase** of up to a certain amount).
    - The last thing you need during an incident is to wait for weeks for the approval of a $500 tool.
- Forensic/Investigative **cheat sheets**

### **In summary:**

1. Contact Information
2. Policies
3. Plans
4. Procedures
5. Baselines
6. Network Topology
7. Assets DB
8. Superusers
9. Urgency Budget
10. Cheat Sheets



# 1. Jumpbag

Tools (Software & Hardware)

1. Additional laptop or a forensic workstation for each incident handling team member to preserve disk images and log files, perform data analysis, and investigate without any restrictions
    - We know malware will be tested here, so tools such as antivirus should be disabled
    - These devices should be handled appropriately and not in a way that introduces risks to the organization.
2. Digital forensic image acquisition and analysis tools
3. Memory capture and analysis tools
4. Live response capture and analysis
5. Log analysis tools
6. Network capture and analysis tools
7. Network cables and switches
8. Write blockers
9. Hard drives for forensic imaging
10. Power cables
11. Screwdrivers, tweezers, and other relevant tools to repair or disassemble hardware devices if needed
12. Indicator of Compromise (IOC) creator and the ability to search for IOCs across the organization
13. Chain of custody forms
14. Encryption software
15. Ticket tracking system
16. Secure facility for storage and investigation
17. Incident handling system independent of your organization's infrastructure

Biometric Collection Kit | [https://www.forensicstore.com/product/biometric-collection-kit/](https://www.forensicstore.com/product/biometric-collection-kit/)

Disk Transport Bags | [https://www.forensicstore.com/product/vector-black-hole-data-bag/](https://www.forensicstore.com/product/vector-black-hole-data-bag/)

Portable USB toolkit | [https://www.forensicstore.com/product/htci-operator-tool-kit/](https://www.forensicstore.com/product/htci-operator-tool-kit/)

Data eRazer | Drive eRazer Ultra [https://www.forensicstore.com/product/drive-erazer-ultra/](https://www.forensicstore.com/product/drive-erazer-ultra/)

## Sandbox Tools - Virtualization
1. Anyrun: [https://app.any.run/](https://app.any.run/) Interactive online malware analysis service for dynamic and static research of most types of threats using any environments. Replaces a set of tools for research. SEARCHER for individuals $109/mo
2. Windows Sandbox [https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview) Windows Pro Windows Enterprise Windows Pro Education/SE Windows Education
3. Hyper-V
4. ESXi

## Forensic Image tools
### **Data Collection:**

OpenText Tableau Forensic TD4 | [https://www.opentext.com/products/tableau-forensic-duplicators](https://www.opentext.com/products/tableau-forensic-duplicators)

Tableau TX1 Forensic Imager Kit | [https://www.forensicstore.com/product/tx1-forensic-imager-kit/](https://www.forensicstore.com/product/tx1-forensic-imager-kit/)

Media MASSter 102 Pro Portable Disk Duplicator – IT | [https://www.forensicstore.com/product/media-msster-102-pro-portable-disk-dplicator-it/](https://www.forensicstore.com/product/media-msster-102-pro-portable-disk-dplicator-it/)

SuperImager Plus 12” Portable Forensic Imaging Unit with Thunderbolt 3.0 Port | [https://www.forensicstore.com/product/superimager-plus-12-rugged-unit/](https://www.forensicstore.com/product/superimager-plus-12-rugged-unit/)

SuperImager Plus 8″ NVME + SATA Forensic Field Unit | [https://www.forensicstore.com/product/superimager-plus-8-nvme-sata-forensic-field-unit/](https://www.forensicstore.com/product/superimager-plus-8-nvme-sata-forensic-field-unit/)

SuperImager Plus 8″ T3 Forensic Field Unit | [https://www.forensicstore.com/product/superimager-plus-8-t3-forensic-field-unit/](https://www.forensicstore.com/product/superimager-plus-8-t3-forensic-field-unit/)

SuperImager Plus Complete Field Kit | [https://www.forensicstore.com/product/superimager-plus-complete-field-kit/](https://www.forensicstore.com/product/superimager-plus-complete-field-kit/)

SuperImager Plus Desktop XL Forensic Lab Unit | [https://www.forensicstore.com/product/superimager-field-unit/](https://www.forensicstore.com/product/superimager-field-unit/)

SuperCopier Desktop Gen-3 16 Drives | [https://www.forensicstore.com/product/supercopier-desktop-pro-gen-2-16-drives/](https://www.forensicstore.com/product/supercopier-desktop-pro-gen-2-16-drives/)

High-End Hard Drive Duplicator | [https://www.forensicstore.com/product/high-end-hard-drive-duplicator-3/](https://www.forensicstore.com/product/high-end-hard-drive-duplicator-3/)

### **Mobile devices collection:**

Oxygen Forensic Kit Rugged | [https://www.forensicstore.com/product/oxygen-forensic-kit-rugged/](https://www.forensicstore.com/product/oxygen-forensic-kit-rugged/)

UFED Touch3 Ruggedized Tablet | [https://cellebrite.com/en/ufed/](https://cellebrite.com/en/ufed/)

MOBILedit Forensic | [https://www.mobiledit.com/mobiledit-forensic](https://www.mobiledit.com/mobiledit-forensic)

Camera Ballistics | [https://www.mobiledit.com/camera-ballistics](https://www.mobiledit.com/camera-ballistics)

### **Write Blockers**

USB 3.1 WriteBlocker | [https://www.forensicstore.com/product/usb-3-1-writeblocker/](https://www.forensicstore.com/product/usb-3-1-writeblocker/)

TK7u Forensic PCIe Bridge Kit | [https://www.forensicstore.com/product/tk7u-forensic-pcie-bridge-kit/](https://www.forensicstore.com/product/tk7u-forensic-pcie-bridge-kit/)

Forensic UltraDock, model FUDv6 | [https://wiebetech.com/products/forensic-ultradock-fudv6-0/](https://wiebetech.com/products/forensic-ultradock-fudv6-0/)

### **Photo/Image Capture:**

[https://www.forensicstore.com/product/eclipse-3-pro-slr-kit/](https://www.forensicstore.com/product/eclipse-3-pro-slr-kit/)

### **RF Isolation Chamber**

Isolation Chamber with Digital DVR | [https://www.forensicstore.com/product/isolation-chamber-with-digital-dvr/](https://www.forensicstore.com/product/isolation-chamber-with-digital-dvr/)

### **File recovery**

Xways Forensic | Analyses Hex headers and Files

### **Budget Friendly solutions:**

Coolgear | [https://www.coolgear.com/product/usb-3-0-sataide-adapter-with-write-protection](https://www.coolgear.com/product/usb-3-0-sataide-adapter-with-write-protection)

** Be aware that budget friendly devices may be inconvinient in court

## Forensic Analysis of images
### **Phones, smartwatches and clouds**

MOBILedit Forensic | [https://www.mobiledit.com/mobiledit-forensic](https://www.mobiledit.com/mobiledit-forensic) | Allows extraction of Smartwatches, Phones and cloud devices information.

### **Read devices**

Caine Live CD | [https://www.caine-live.net/](https://www.caine-live.net/) In CAINE 8.0 mounter can unlock and lock block devices in Read-Only mode.

FTK® Imager | [https://www.exterro.com/ftk-imager](https://www.exterro.com/ftk-imager) | Allows to work with Images and create custom images at a software level

microforensics Evidence Mover |

### **Cases Manager (Enterprise):**

Bekasoft | [https://belkasoft.com/](https://belkasoft.com/)

Autopsy | [https://www.autopsy.com/](https://www.autopsy.com/)

FTK Forensic Toolkit (Paid) | [https://www.exterro.com/forensic-toolkit](https://www.exterro.com/forensic-toolkit) | Enterprise version

Magnet Axiom | Recover & Analyze Your Evidence in One Case | [https://www.magnetforensics.com/products/magnet-axiom](https://www.magnetforensics.com/products/magnet-axiom)

OpenText EnCase Forensic | [https://www.opentext.com/products/encase-forensic](https://www.opentext.com/products/encase-forensic)

Forensic Explorer (FEX)™ | [https://getdataforensics.com/product/forensic-explorer-fex/](https://getdataforensics.com/product/forensic-explorer-fex/)


## Memory Forensics
### **Resources**

[https://github.com/digitalisx/awesome-memory-forensics#tool](https://github.com/digitalisx/awesome-memory-forensics#tool)

### **SIFT**

**

### Workstation

**

[https://www.sans.org/tools/sift-workstation/](https://www.sans.org/tools/sift-workstation/) | Collection of free and open-source incident response and forensic tools

### **Free**

WinDbg

Varc

Rekall

FTK Imager

Volatility | [https://www.volatilityfoundation.org/](https://www.volatilityfoundation.org/)

Belkasoft Live RAM Capturer | [https://belkasoft.com/academic](https://belkasoft.com/academic)

### **Premium**

Cellebrite Inspector | [https://cellebrite.com/en/inspector/](https://cellebrite.com/en/inspector/)

How to analyze RAM through Kali Linux Forensics mode

[https://www.kali.org/docs/general-use/kali-linux-forensics-mode/](https://www.kali.org/docs/general-use/kali-linux-forensics-mode/)

[https://www.ifixit.com/Guide/How+to+analyze+RAM+through+Kali+Linux+Forensics+mode/150357](https://www.ifixit.com/Guide/How+to+analyze+RAM+through+Kali+Linux+Forensics+mode/150357)

## Live Response

[https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/live-response?view=o365-worldwide](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/live-response?view=o365-worldwide)


## Log Analysis 

## Network Analysis
	Wireshark
	
	NetworkMiner

## IOC

## Encryption Software
	AES Encrypt

# File analysis

	Fsum
	Stegbreak
	Stegdetect	
	Xsteg
	JPHS for Windows

# 2. Preparation
	Objectives
	
	- Establishment of incident handling capability within the Org.
	- Protect against and prevent IT security incidents by implementing appropriate protective measures.

## MFA
A weak but complex password is "Password1!". It contains an upper-case, lower-case, digit, and a special character, but regardless of that, it is easy to guess. It is recommended to teach employees to use pass phrases because they are harder to guess and difficult to brute force. An example of a password phrase that is easy to remember yet long and complex is "i LIK3 my coffeE warm". If one knows a second language, they can mix up words from multiple languages for additional protection.

Multi-factor authentication (MFA) is another identity-protecting solution that should be implemented at least for any type of administrative access to ALL applications and devices.


## DMARC
How DMARC works

On a high level, DMARC is based on SPF and DKIM. Together the SPF/DKIM/DMARC trio can stop the long-standing email address spoofing problem.

Here is how DMARC works: first you publish a DMARC record for your email domain in the DNS; whenever an email that claims to have originated from your domain is received, the email service provider fetches the DMARC record and checks the email message accordingly; depending on the outcome, the email is either delivered, quarantined, or rejected. Email delivery reports are sent to the email addresses specified in the DMARC record periodically, by email service providers.

There are two major aspects to DMARC:

DMARC implements identifier alignment to eliminate the discrepancy between envelope from/header from addresses in SPF, and that between d= value and header from address in DKIM;

DMARC adds reporting capabilities to enable email domain owners to gain visibility into email deliverability, and ultimately implement full email protection against email spoofing/phishing.

Take-away: DMARC enables you to publish a policy on your domain to dictate how you handle email messages that don't pass DMARC authentication: no action, send to spam, or reject.

Reference: [https://dmarcly.com/blog/how-to-implement-dmarc-dkim-spf-to-stop-email-spoofing-phishing-the-definitive-guide#what-is-dmarc](https://dmarcly.com/blog/how-to-implement-dmarc-dkim-spf-to-stop-email-spoofing-phishing-the-definitive-guide#what-is-dmarc)


## Server Hardening

## Network Protection
Network segmentation is a powerful technique to avoid having a breach spread across the entire organization. Business-critical systems must be isolated, and connections should be allowed only as the business requires. Internal resources should really not be facing the Internet directly (unless placed in a DMZ).

IDS/IPS systems.

only organization-approved devices can get on the network.

802.1x can be utilized to reduce the risk of bring your own device (BYOD) or malicious devices connecting to the corporate network.

Conditional Access policies

WAF
SIEM
SOAR

## Penetration Testing
We need to train incident handlers and keep them engaged. There is no question about that, and the best place to do it is inside an organization's own environment. Purple team exercises are essentially security assessments by a red team that either continuously or eventually inform the blue team about their actions, findings, any visibility/security shortcomings, etc. Such exercises will help in identifying vulnerabilities in an organization while testing the blue team's defensive capability in terms of logging, monitoring, detection, and responsiveness. If a threat goes unnoticed, there is an opportunity to improve. For those that are detected, the blue team can test any playbooks and incident handling procedures to ensure they are robust and the expected result has been achieved.

Active Directory has a few known and unique escalation paths/bugs. New ones are quite often discovered too. Active Directory security assessments are crucial for the security posture of the environment as a whole. Don't assume that your system administrators are aware of all discovered or published bugs, because in reality they probably aren't.

Perform continuous vulnerability scans of your environment and remediate at least the "high" and "critical" vulnerabilities that are discovered. While the scanning can be automated, the fixes usually require manual involvement. If you can't apply patches for some reason, definitely segment the systems that are vulnerable!

## Endpoint Hardening
There are a few widely recognized endpoint hardening standards by now, with CIS and Microsoft baselines being the most popular, and these should really be the building blocks for your organization's hardening baselines. Some highly important actions (that actually work) to note and do something about are:

1. Disable LLMNR/NetBIOS [https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/disable-netbios-tcp-ip-using-dhcp](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/disable-netbios-tcp-ip-using-dhcp)
2. Implement LAPS and remove administrative privileges from regular users [https://www.microsoft.com/en-us/download/details.aspx?id=46899](https://www.microsoft.com/en-us/download/details.aspx?id=46899)
3. Disable or configure PowerShell in "ConstrainedLanguage" mode [https://devblogs.microsoft.com/powershell/powershell-constrained-language-mode/](https://devblogs.microsoft.com/powershell/powershell-constrained-language-mode/)
4. Enable Attack Surface Reduction (ASR) rules if using Microsoft Defender [https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/attack-surface-reduction?view=o365-worldwide](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/attack-surface-reduction?view=o365-worldwide)
5. Implement whitelisting.
    1. We know this is nearly impossible to implement.
    2. Consider at least blocking execution from user-writable folders (Downloads, Desktop, AppData, etc.).
    3. These are the locations where exploits and malicious payloads will initially find themselves.
    4. Remember to also block script types such as .hta, .vbs, .cmd, .bat, .js, and similar.
    5. Please pay attention to LOLBin files while implementing whitelisting.
    6. Do not overlook them; they are really used in the wild as initial access to bypass whitelisting.
6. Utilize host-based firewalls. As a bare minimum, block workstation-to-workstation communication and block outbound traffic to LOLBins [https://lolbas-project.github.io/](https://lolbas-project.github.io/)
    1. [https://www.xf.is/2022/12/05/blocking-living-of-the-land-binaries-lolbins-with-windows-firewall/](https://www.xf.is/2022/12/05/blocking-living-of-the-land-binaries-lolbins-with-windows-firewall/)
7. Deploy an EDR product.
    1. At this point in time, AMSI provides great visibility into obfuscated scripts for antimalware products to inspect the content before it gets executed.
    2. It is highly recommended that you only choose products that integrate with AMSI.

## AD Tiering

# 3. Detection and Analysis
### **Alerts Sources**

1. An employee that notices abnormal behavior
2. An alert from one of our tools (EDR, IDS, Firewall, SIEM, etc.)
3. Threat hunting activities
4. A third-party notification informing us that they discovered signs of our organization being compromised

### **Network Detection Segmentation**

1. Detection at the network perimeter (using firewalls, internet-facing network intrusion detection/prevention systems, demilitarized zone, etc.)
2. Detection at the internal network level (using local firewalls, host intrusion detection/prevention systems, etc.)
3. Detection at the endpoint level (using antivirus systems, endpoint detection & response systems, etc.)
4. Detection at the application level (using application logs, service logs, etc.)

## **Initial Investigation**

### Business Impact:

- Date/Time when the incident was reported.
    - Additionally, who detected the incident and/or who reported it?
- How was the incident detected?
- What was the incident?
    - Phishing?
    - System unavailability?
    - etc.
- Assemble a list of impacted systems (if relevant)
- Document who has accessed the impacted systems and what actions have been taken.
    - Make a note of whether this is an ongoing incident or the suspicious activity has been stopped
- System information
    - Physical location
    - operating systems
    - IP addresses
    - hostnames
    - system owner
    - system's purpose
    - current state of the system

### If malware is involved

1. List of IP addresses
2. time and date of detection
3. type of malware
4. systems impacted
5. export of malicious files with forensic information on them (such as hashes, copies of the files, etc.)


### Timeline
As you can infer, the timeline focuses primarily on attacker behavior, so activities that are recorded depict when the attack occurred, when a network connection was established to access a system, when files were downloaded, etc.

It is important to ensure that you capture from where the activity was detected/discovered and the systems associated with it.

### Severity
When handling a security incident, we should also try to answer the following questions to get an idea of the incident's severity and exent:

1. What is the exploitation impact?
2. What are the exploitation requirements?
3. Can any business-critical systems be affected by the incident?
4. Are there any suggested remediation steps?
5. How many systems have been impacted?
6. Is the exploit being used in the wild?
7. Does the exploit have any worm-like capabilities?

- High-impact incidents will be handled promptly.
- Incidents with a high number of impacted systems will have to be escalated.


##  **Indicators of compromise (IOC)**
### Creation and usage of indicators of compromise (IOC)

An indicator of compromise is a sign that an incident has occurred. IOCs are documented in a structured manner, which represents the artifacts of the compromise.

- Examples of IOCs can be IP addresses, hash values of files, and file names.
- In fact, because IOCs are so important to an investigation, special languages such as OpenIOC have been developed to document them and share them in a standard manner.

Another widely used standard for IOCs is Yara.

- There are a number of free tools that can be utilized, such as Mandiant's IOC Editor, to create or edit IOCs.
- Using these languages, we can describe and use the artifacts that we uncover during an incident investigation.
- We may even obtain IOCs from third parties if the adversary or the attack is known.

To leverage IOCs, we will have to deploy an IOC-obtaining/IOC-searching tool (native or third party and possibly at scale).

A common approach is to utilize WMI or PowerShell for IOC-related operations in Windows environments.

A word of caution! During an investigation, we have to be extra careful to prevent the credentials of our highly privileged user(s) from being cached when connecting to (potentially) compromised systems (or any systems, really).

More specifically, we need to ensure that only connection protocols and tools that don't cache credentials upon a successful login are utilized (such as WinRM).

Windows logons with logon type 3 (Network Logon) typically don't cache credentials on the remote systems.

The best example of "know your tools" that comes to mind is "PsExec".

When "PsExec" is used with explicit credentials, those credentials are cached on the remote machine.

When "PsExec" is used without credentials through the session of the currently logged on user, the credentials are not cached on the remote machine.

This is a great example of demonstrating how the same tool leaves different tracks, so be aware.

## **Identification of New Leads and Impacted Systems**
After searching for IOCs, you expect to have some hits that reveal other systems with the same signs of compromise.

- These hits may not be directly associated with the incident we are investigating.
    - Our IOC could be, for example, too generic. We need to identify and eliminate false positives.

- We may also end up in a position where we come across a large number of hits.
    - In this case, we should prioritize the ones we will focus on, ideally those that can provide us with new leads after a potential forensic analysis.


## **Data Collection and Analysis**

 During the data collection process, you should keep track of the chain of custody
 If legal action is to be taken against an adversary, evidence should be court-admissible.

### **Data Collection**
Collect and preserve the state of those systems for further analysis in order to uncover new leads and/or answer investigative questions about the incident.

**Live response**
- Most common approach
- Rich in artifacts that may explain what happened to a system

**Shut down a system and then perform any analysis on it.**
- Much of the artifacts will die on the RAM

### **Data Analysis**
• Most time-consuming process during an incident.
- Malware analysis and disk forensics are the most common examination types.
- Any newly discovered and validated leads are added to the timeline, which is constantly updated.
- Memory forensics is a capability that is becoming more and more popular and is extremely relevant when dealing with advanced attacks.


# 4. Containment, Erradication & Recovery

## Short term containmnent
**Actions taken leave a minimal footprint on the systems on which they occur.**

1. Placing a system in a separate/isolated VLAN
2. Pulling the network cable out of the system(s)
3. Modifying the attacker's C2 DNS name to a system under our control or to a non-existing one.
4. Contain the damage and provide time to develop a more concrete remediation strategy.
5. Take forensic images and preserve evidence (backup substage of the containment stage).

If a short-term containment action requires shutting down a system, we have to ensure that this is communicated to the business and appropriate permissions are granted.

## Long Termn Containment
### **Persistent actions and changes.**

1. Changing user passwords,
2. Applying firewall rules
3. Inserting a host intrusion detection system
4. Applying a system patch
5. Shutting down systems.

While doing these activities, we should keep the business and the relevant stakeholders updated.

Bear in mind that just because a system is now patched does not mean that the incident is over.

Eradication, recovery, and post-incident activities are still pending.

## Erradication
Once the incident is contained, eradication is necessary to eliminate both the root cause of the incident and what is left of it to ensure that the adversary is out of the systems and network.

### **Main Activities**

- Removing the detected malware from systems
- Rebuilding some systems
- Restoring others from backup.

During the eradication stage, we may extend the previously performed containment activities by applying additional patches, which were not immediately required.

Additional system-hardening activities are often performed during the eradication stage (not only on the impacted system but across the network in some cases).

## Recovery (Verification)

In the recovery stage, we bring systems back to normal operation.

When everything is verified, these systems are brought into the production environment.

**All restored systems will be subject to heavy logging and monitoring after an incident, as compromised systems tend to be targets again if the adversary regains access to the environment in a short period of time.**

### **Typical suspicious events to monitor for are:**

1. Unusual logons (e.g. user or service accounts that have never logged in there before)
2. Unusual processes
3. Changes to the registry in locations that are usually modified by malware

The recovery stage in some large incidents may take months, since it is often approached in phases.

During the early phases, the focus is on increasing overall security to prevent future incidents through quick wins and the elimination of low-hanging fruits.

The later phases focus on permanent, long-term changes to keep the organization as secure as possible.


# 5. Post Incident
In this stage, our objective is to document the incident and improve our capabilities based on lessons learned from it.

This stage gives us an opportunity to reflect on the threat by understanding what occurred, what we did, and how our actions and activities worked out.

This information is best gathered and analyzed in a meeting with all stakeholders that were involved during the incident.

It generally takes place within a few days after the incident, when the incident report has been finalized.

Reporting

The final report is a crucial part of the entire process. A complete report will contain answers to questions such as:

1. What and when happened?
2. Performance of the team dealing with the incident in regard to plans, playbooks, policies, and procedures
3. Did the business provide the necessary information and respond promptly to aid in handling the incident in an efficient manner? What can be improved?
4. What actions have been implemented to contain and eradicate the incident?
5. What preventive measures should be put in place to prevent similar incidents in the future?
6. What tools and resources are needed to detect and analyze similar incidents in the future?

Results

Such reports can eventually provide us with measurable results.

Train new team members by showing them how the incident was handled by more experienced colleagues.

The team should also evaluate whether updating plans, playbooks, policies, and procedures is necessary.

During the post-incident activity state, it is important that we reevaluate the tools, training, and readiness of the team, as well as the overall team structure, and not focus only on the documentation and process front.