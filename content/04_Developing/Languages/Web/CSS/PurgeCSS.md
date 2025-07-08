---
title: PurgeCSS
draft: false
tags:
  - CSS
  - Cleanup
  - workflow
  - CI/CD
  - Frameworks
  - analyzes
NeedsReview: false
---
# [About PurgeCSS](https://purgecss.com/introduction.html#about-purgecss)

PurgeCSS is a tool to remove unused CSS. It can be part of your development workflow. When you are building a website, you might decide to use a CSS framework like TailwindCSS, Bootstrap, MaterializeCSS, Foundation, etc... But you will only use a small set of the framework, and a lot of unused CSS styles will be included.

This is where PurgeCSS comes into play. PurgeCSS analyzes your content and your CSS files. Then it matches the selectors used in your files with the one in your content files. It removes unused selectors from your CSS, resulting in smaller CSS files
