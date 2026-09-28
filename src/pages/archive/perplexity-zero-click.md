---
layout: ../../layouts/Issue.astro
title: "AI Browsers Open a New Attack Path"
description: A harmless-looking email can now trick an AI-powered browser into deleting your files.
date: 2025-12-12
image: /perplexity-zero-click.jpg
---

**TLDR**: A new “zero-click” attack shows how agentic AI browsers can be manipulated into harming users without them doing anything wrong, raising serious concerns about automation, safety, and the future of AI-driven browsing.

## Patch Radar
- [Windows](https://thehackernews.com/2025/12/microsoft-issues-security-fixes-for-56.html): Microsoft fixed 56 vulnerabilities this month - 3 critical, 53 severe. One flaw is already being used in real attacks and allows hackers already on your PC to gain full administrative control.
- [Chrome](https://thehackernews.com/2025/12/chrome-targeted-by-active-in-wild.html): Google patched 3 vulnerabilities, including one severe zero-day actively abused in the wild. It can cause program crashes and allow code execution.
- [Android](https://www.bleepingcomputer.com/news/security/google-fixes-two-android-zero-days-exploited-in-attacks-107-flaws/): Google released fixes for 107 flaws, including 2 high-severity zero-days already exploited in attacks. Details are limited, but researchers believe these are similar to those used by commercial spyware or nation-state groups.

___

![The waitlist page of Perplexity Comet](../../../public/perplexity-zero-click.jpg)

## The First “Agentic AI Browser Attack” Is Here

AI-powered browsers that can do tasks for you - like opening tabs, filling forms, shopping, and managing email - sound convenient. But a new demonstration shows how easily these automated tools can be turned against you. The attack targets **Perplexity’s Comet browser**, which includes agentic AI features designed to act on user behalf.

Researchers found that by simply **sending a crafted email**, attackers can trick the browser’s AI agent into deleting everything in a victim’s Google Drive. The user doesn’t have to click anything. They don’t even have to open the email themselves. The AI does the harm automatically.

This is the first clear example of what happens when full-autonomy AI meets everyday browsing, and it raises big questions about safety.

___

### What to Know
- Perplexity’s Comet browser has agentic AI capable of taking real actions in the browser: opening and closing tabs, filling forms, interacting with sites, and managing email.
- A single crafted email can instruct the AI to “clean up” Google Drive, causing it to move all files into the trash without user input.
- This is a zero-click attack. **The user doesn’t make a mistake - the AI does.** That makes it fundamentally different from phishing, malware, and other familiar scams.
- Attackers can also **embed malicious instructions in website URLs**, meaning simply visiting a page could trigger an unwanted action from the AI agent.
- This attack highlights a major blind spot: **AI agents can be socially engineered**, just like humans.

### What to Do Now
- If you use AI-powered browsers (like Comet), turn off automated task features until vendors add strong guardrails.
- **Be careful linking AI tools to sensitive accounts** (Google Drive, banking, email). Only enable permissions you absolutely need.
- Monitor your cloud storage and email for unexpected activity. Deleted files or unusual inbox behavior may be a sign that the agent acted on a malicious prompt.
- Consider holding off on agentic browsing tools for now; they’re promising, but the safety controls aren’t mature yet.
   

[TheHackerNews - "Zero-Click Agentic Browser Attack..."](https://thehackernews.com/2025/12/zero-click-agentic-browser-attack-can.html)   

___
   
As browsers start taking actions on our behalf, attackers are learning to target the AI instead of the user. Losing control of your files because of a polite request hidden in an email shows how quickly this technology changes the threat landscape. Stay cautious with any AI that can act without asking.

Stay safe,  
Jaiden
