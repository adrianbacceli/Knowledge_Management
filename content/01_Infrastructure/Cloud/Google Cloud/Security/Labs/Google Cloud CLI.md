---
title: Google Cloud Shell - Resource Management
draft: false
tags:
  - cloud-shell
  - gcp
  - resource-management
NeedsReview: false
---
> [!summary] Core Concept  
Google Cloud Shell is a browser-accessible CLI environment with pre-installed tools, ideal for managing Google Cloud resources like VMs, storage, and VPCs from anywhere.

---

## 🔹 Features of Google Cloud Shell

- Web-based command-line interface to interact with Google Cloud resources.
- Temporary shell environment (auto-shuts down after inactivity).
- Comes with pre-installed utilities and the `gcloud CLI`.
- Great for:
  - Creating and managing virtual machines.
  - Running Terraform scripts.
  - Deploying apps, managing storage, accessing databases.
  - Creating and viewing VPCs and networks.

> [!info] Did You Know?  
> Cloud Shell is free to use, but files stored in its temporary disk are not permanent unless saved to Cloud Storage or Git repositories.

---

## 🛠 Example: Create VPC and Subnet

### Step 1: Open Cloud Shell  
Go to [https://cloud.google.com/cloud-console](https://cloud.google.com/cloud-console) and click the **"Activate Cloud Shell"** button.

### Step 2: Create a VPC Network
```bash
gcloud compute networks create labnet --subnet-mode=custom
````

### Step 3: Create a Custom Subnet

```bash
gcloud compute networks subnets create labnet-sub \
  --network=labnet \
  --range=10.10.0.0/28 \
  --region=us-east1
```

### Step 4: View Networks

```bash
gcloud compute networks list
```

### Step 5: View Subnets

```bash
gcloud compute networks subnets list --network=labnet
```

> [!tip] Helpful Tip  
> Always review default networks—deleting unused defaults enhances security.

---

## ✅ Key Takeaways

- **Cloud Shell** is ideal for lightweight resource management.
- Use `gcloud` command groups like `compute`, `networks`, and `subnets` for managing infrastructure.
- VPC and subnet creation is quick with the right commands.
- Useful for cloud security tasks, scripting, and quick infrastructure testing.

> [!success] Well Done!  
> ✅ You created a VPC and subnet using Cloud Shell—keep practicing to get faster and more efficient!

---
## 🖥️ My Environment

> [!info] Context  
> This section documents how to connect to a VM instance (`e2-micro`) in a Google Cloud project using an alias and the `gcloud compute ssh` command.

### 🔧 Project Setup

Your current project in Google Cloud is:

```
thematic-grove-458714-k0
```

You can verify your current project with:

```bash
gcloud config get-value project
```

---

### 🔗 Connecting to Your VM

You’ve created an alias to simplify SSH access into your virtual machine:

```bash
alias connect='gcloud compute ssh e2-micro'
```

This alias lets you connect to your VM with a single command:

```bash
connect
```

> When running `connect`, you may be prompted to confirm the zone.  
> In this case, the default used is:

```
us-east1-c
```

You might see:

```
Did you mean zone [us-east1-c] for instance: [e2-micro] (Y/n)?  
```

If you type **`n`**, it will still fall back to the default zone unless specified otherwise.

---

### 🧰 Upon Connection

Once connected to the instance, you’re greeted with a custom environment setup. Here are some useful commands pre-configured in your VM session:

|Command|Description|
|---|---|
|`drivesync`|Syncs `/extdata/rcloned_data/` to Google Drive|
|`drivemnt`|Mounts Google Drive to `/extdata/gdrive_mounted/`|
|`driveum`|Unmounts Google Drive|

These tools are set up via Rclone or similar file-syncing utilities.

---

### ✅ Final Shell Prompt

Once inside, your prompt should look like:

```
adrian_alberto_bacceli@e2-micro:~$
```

You’re now ready to manage your VM, deploy apps, configure firewalls, or test your security tooling.

---

Here’s the additional subsection for your **Obsidian Vault note**, expanding on the aliases defined in your Cloud Shell VM:

---

## 🧾 Custom Aliases

> [!info] Did You Know?  
> Aliases are shortcuts to frequently used commands. They're defined to save time and reduce typing errors. These aliases were stored in `~/.bash_aliases` and are automatically loaded by your shell (e.g., Bash) as sourced in `~/.bashrc`.

You’ve configured several helpful aliases in your VM environment to streamline operations with Google Drive and the file system.

#### 📁 Drive Management Aliases

|Alias|Actual Command|Description|
|---|---|---|
|`drivecd`|`cd /extdata/gdrive_mounted`|Navigate directly to the mounted Google Drive folder.|
|`drivemnt`|`rclone mount personal_gdrive:/ /extdata/gdrive_mounted/ &`|Mount Google Drive to a local directory using Rclone. Runs in background.|
|`drivesync`|`rclone sync /extdata/rcloned_data/ personal_gdrive:/rcloned_data`|Sync local folder to a specific path in Google Drive.|
|`driveum`|`umount -l /extdata/gdrive_mounted/`|Unmount the Google Drive folder. Uses lazy unmount.|

> [!tip] Helpful Tip  
> These aliases rely on **Rclone**. Make sure it's properly configured with a remote named `personal_gdrive`.


You can list all aliases by typing:

```bash
alias
```

> [!quote] Prompt Wisdom  
> “Shortcuts make you faster, but knowing what they do makes you powerful.”

---
### Rclone Drive Config

> [!note] Rclone Remote Config – `personal_gdrive`  
> This configuration shows the connection settings for your personal Google Drive, used by Rclone for syncing and mounting.
>
> ```ini
> [personal_gdrive]
> type = drive
> scope = drive
> token = {"access_token":"aa________________________________________________________________00","token_type":"Bearer","refresh_token":"05__________________________________________________________a","expiry":"2025-05-20T01:51:57.856751891Z"} 
> team_drive =
> ```
>
> - `type = drive`: Uses Google Drive as the remote backend.  
> - `scope = drive`: Grants access to your full Google Drive (not just app folder).  
> - `token`: Contains **access and refresh tokens** — sensitive and should be redacted before sharing.  
> - `team_drive =`: Empty, indicating this is **not** linked to a shared/team drive.

> [!warning] Caution Ahead  
> 🚨 The `token` field gives access to your Google Drive. Always keep it private.

---
### 🛡️ SSH Login Banner

> [!note] System Banner (`/etc/ssh/banner`)  
> This message is displayed **when connecting via SSH** to your VM. It's used for legal warnings and helpful usage instructions.

```text
**********************************************
*                                            *
*   WARNING                                  *
*   Unauthorized access is prohibited.       *
*   All activity is monitored and recorded.  *
*                                            *
**********************************************

-  Run 'drivesync' to sync folder "/extdata/rcloned_data/" to Google Drive.
-  Run 'drivemnt' to mount Google Drive to "/extdata/gdrive_mounted/".
-  Run 'driveum' to unmount Google Drive.

----------------------------------------------------------------------------
```

---
#### 🧾 Purpose of the Banner

**Legal Notice**: Warns unauthorized users that access is prohibited and monitored.
**User Guidance**: Provides quick commands for working with Rclone and Google Drive:
* `drivesync`: Sync local data to Google Drive.
- `drivemnt`: Mount Google Drive locally.
- `driveum`: Unmount the drive safely.

> [!tip] Helpful Tip  
> You can customize this banner by editing `/etc/ssh/banner`. To apply changes, ensure `Banner /etc/ssh/banner` is set in `/etc/ssh/sshd_config`.

---
### 📢 MOTD – Message of the Day

> [!info] Post-Login Message  
> The **MOTD** (`/etc/motd`) is shown **after successful SSH login**, often used for legal disclaimers or system announcements.

#### 🧾 Current MOTD

```text
WARNING: Unauthorized access will result in severe consequences, including substantial fines, 
lengthy federal imprisonment, and relentless prosecution to the fullest extent of the law

----------------------------------------------------------------------------
```

#### 📌 Purpose

- **Legal Deterrent**: Warns unauthorized users of consequences for accessing the system.
- **System Policy**: Reinforces that monitoring is active and access is restricted.
- **Displayed Automatically**: Shown every time a user logs in via SSH.

> [!tip] Helpful Tip  
> You can edit this message with:
> 
> ```bash
> sudo nano /etc/motd
> ```

---
