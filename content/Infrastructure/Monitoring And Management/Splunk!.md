---
title: Splunk >
draft: true
tags:
  - Splunk
NeedsReview: true
---


# Components of Splunk >

## Index

The Index contains data from sources

1. Data enters
2. Inspectors lable data with source type
3. Data is broken into single events
4. Timestamps are normalized to a consistent format
5. Data Is added to the index

## Search language

Query helps Search events across multiple data sources and run statistics on data using splunk search language

## Report and dashboard panels
Provides insight into data and powers dashboards


# Data Model
Data sets are called Data Model
Avoid creating reports and searches.

# Alerts
Triggers notifications as events occur

# Splunk! Web 

## Roles 
### Splunk > Enterprise

* Admin
* Power 
* User
### Splunk > Cloud
* sc_admin
* power
* user
* can_delete
* token_auth
* apps
## Splunk > Apps

* Search & Reporting
* Splunkbase: Market - Workspaces, set up by the administrator with apps

# Splunk > Search

# Search 
* Used to run searches
## Operators
* Wildcard
* AND / OR / NOT
* "Exact"
* \ Escape quotes

## Search Syntax

Sample: 
* index = network sourcetype=cisco_wsa_squid usage=Vi01ation | stats count (usage) as Visits   

| Element      | What it is                                              | Example from string                                       |
| ------------ | ------------------------------------------------------- | --------------------------------------------------------- |
| Search Terms | index, source, host, sourcetype                         | ndex = network sourcetype=cisco_wsa_squid usage=Vi01ation |
| Command      | What we want to do (Charts, statistics, formatting)     | stats                                                     |
| Functions    | Tell how we want to chart, compute and evaluate results | count                                                     |
| Arguments    | Variables to apply to a function                        | (usage)                                                   |
| Clauses      | Group or define of results                              | Visits                                                    |
# Knowledge Objects

## What they are
- Useful to share between users
- Can be reused by people and apps
- Can be used in searches.

## Goals:
- Oversee knowledge object creation   
- Normalize Event Data 
- Implement naming conventions   
- Create Data Models

## Types
### Data Interpretation   
• Fields   
• Field Extractions   
• Calculated Fields   

#### FIELDS   
a action   
a categorylD   
a clientip   
a product_name   

### Data Classification   
* Event Types
* Transactions   

### Data Enrichment   
* Lookups
* Workflow Actions   
### Data Normalization   
Labels for data:
• Tags   
• Field Aliases   

### Data Models
* Hierarchically structured  Datasets

---
# Reports

They help interpreting data based on a specific search criteria defined when the report is created

## Create reports

## Schedule Reports

Edit Schedule   
A Scheduling this report:   
• Causes its permissions to change from Run as User to Run as Owner.   
• Results in removal of the time range picker from the report display.   
x   
Report   
Schedule Report   
Schedule   
Time Range   
Schedule Window   
Trigger Actions   
Security_Report_FaiIedSshAttempts   
Learn More   
On   
Run every week •   
Monday at 6:00 •   
Last 24 hours   
No window   
+ Add Actions •Add actions to this report
+ Log Event   
- Send log event to Splunk receiver endpoint   
- Output results to lookup   
- Output the results of the search to a CSV lookup file   
- Output results to telemetry endpoint   
- Custom action to output results to telemetry endpoint   
- Run a script   
- Invoke a custom script   
- Send email   
- Send an email notification to specified recipients   
- Send to Splunk Mobile
---
# Dashboards
Any search that returns status, can be used to create a dashboard.

To create dashboards from search do a search, go to visualization, save as Existing dashnboard or new dashboard. 
 Then you can edit the dashboard
 
You can add panels and save to dashboard

---
# Dashboard studio
## Clone in Dashboard Studio   
Dashboard Title   
Description   
Permissions   
Select layout mode   
Absolute   
Full layout control   
BCG Logins - Dashboard Studio   
Optional   
a Private   
Grid   
Quick organization   
x   
Edit ID   
CZI   
O   
Some custom formatting and configurations to your dashboard may be   
lost during the cloning and conversion process. Your original dashboard   
will not be affected.   
Cancel   
Convert & Save

## Edit mode

Interactive dashboard editor

## Layouts

| Option                                  | Absolute   | Grid                                                                              |
| --------------------------------------- | ---------- | --------------------------------------------------------------------------------- |
| Charts                                  | Yes        | Yes                                                                               |
| Customizable Background Color           | Yes        | -                                                                                 |
| Customizable Canvas size                | Yes        | Customize row height and visualization widths only                                |
| Unlimited visualizations on a dashboard | Yes        | Number per row depends on the width of the visualizations - which can be modified |
| Shapes: rectangles, lines, and ellipses | Yes        | -                                                                                 |
| Icons: built-in and custom              | Yes        | -                                                                                 |
| Images                                  | up to 16MB | -                                                                                 |

