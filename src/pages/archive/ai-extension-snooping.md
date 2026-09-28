---
layout: ../../layouts/Issue.astro
title: "When "Free" Browser Tools Read Your AI Chats"
description: A popular VPN extension quietly watched millions of conversations with AI tools.
date: 2025-12-19
image: /ai-extension-snooping.jpg
---

**TLDR**: Several widely used Chrome extensions were caught intercepting private AI chats and selling them for marketing purposes - if you installed them, remove them now and rethink what “free” software really costs.

## Patch Radar
- [Windows](https://www.bleepingcomputer.com/news/microsoft/new-windows-rasman-zero-day-flaw-gets-free-unofficial-patches/): Researchers found a new way to exploit a Windows flaw that was previously thought to be fixed. This loophole allows attackers who already have a foothold on a PC to gain full administrative control. An unofficial patch is available, but this highlights the need to stay on top of Windows updates.
- [Apple](https://www.bleepingcomputer.com/news/security/apple-fixes-two-zero-day-flaws-exploited-in-sophisticated-attacks/): Apple patched two zero-day vulnerabilities that were actively used in targeted spyware attacks. These flaws could allow attackers to take over devices without warning.

___

![A Windows blue-screen-of-death](../../../public/ai-extension-snooping.jpg)  

## Browser Extensions Caught Spying on AI Conversations
Several Chrome browser extensions advertised as free VPNs and privacy tools were caught secretly intercepting conversations between users and AI services. These extensions routed AI chats through their own servers, letting them see both what users asked and what the AI replied - then shared that data with a parent company that sells marketing and brand intelligence.

What made this worse is that these extensions were **featured** in the Chrome Web Store and had around **8 million downloads**, giving users a false sense of trust.

The extensions involved were **1ClickVPN Proxy, Urban Browser Guard, Urban Ad Blocker, and Urban VPN Proxy**. While they’ve been removed from the store, they are **not automatically removed** from users’ browsers.

___

### What to Know
- The extensions could see everything typed into AI tools, including private or sensitive questions.
- Data was **not anonymized** before being shared for advertising and marketing analysis.
- Being “featured” in the Chrome store **does not guarantee** privacy or safety.
- The extensions are removed from the Chrome store but not the Microsoft Edge store, and existing installs may still work unless you delete them.
- A good rule of thumb applies here: **if a digital product is free, you are often the product**.

### What to Do Now
- Check your Chrome extensions immediately and remove:
  - 1ClickVPN Proxy
  - Urban Browser Guard
  - Urban Ad Blocker
  - Urban VPN Proxy
- Review permissions for all remaining extensions - especially those that can read web traffic.
- Avoid free VPNs and “privacy” tools unless you fully understand how they make money.
- Be cautious using AI tools for sensitive topics, especially when browser extensions are installed.


[TheHackerNews - "Extension Caught Intercepting Millions of Users' AI Chats"](https://thehackernews.com/2025/12/featured-chrome-browser-extension.html)   
___
   
This incident is a reminder that privacy risks don’t always come from hackers; sometimes they come from tools designed to look helpful. Browser extensions sit close to everything you do online, which makes choosing them carefully more important than ever.

Stay safe,  
Jaiden
