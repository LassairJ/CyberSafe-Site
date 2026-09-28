---
layout: ../../layouts/Issue.astro
title: "Android Malware Now Uses Generative AI"
description: A new Android threat is the first known to use an AI model in real time to help it survive on infected devices.
date: 2026-02-20
image: /promptspy.jpg
---

**TLDR**: Researchers discovered Android malware that connects to Google’s Gemini AI to figure out how to stay running on a victim’s phone. It’s limited for now, but it signals where mobile threats are heading.

## Patch Radar
- [Google Chrome](https://chromereleases.googleblog.com/2026/02/stable-channel-update-for-desktop_13.html): Google released an update fixing flaws that allowed attackers to run code on your machine simply by getting you to visit a malicious webpage.
- [Apple (iOS, iPadOS, macOS)](https://thehackernews.com/2026/02/apple-fixes-exploited-zero-day.html): Apple patched a zero-day that was actively exploited in attacks that allowed for device takeover.
- [Microsoft (Windows & Word)](https://thehackernews.com/2026/02/microsoft-patches-59-vulnerabilities.html): Microsoft fixed 59 vulnerabilities, including security bypasses and privilege escalation.

___

![Two robotic figures typing on Apple Mac laptops](../../../public/promptspy.jpg)

## Generative AI Used in First Android Malware
Researchers have identified the first known Android malware that uses generative AI while it’s running. The malware, dubbed “PromptSpy”, interacts directly with Google’s Gemini AI model after it infects a device.

Here’s how it works:
1. Once installed, the malware opens a hidden chat session with Gemini.
2. It sends XML (extensible markup language) data describing what’s currently visible on the infected phone’s screen.
3. Gemini responds with instructions on how to “pin” the malicious app to the device’s Recent Apps list.
4. The malware follows those instructions and repeats the process until the AI confirms the app is successfully pinned.

Why does that matter? Pinning the app to Recent Apps makes it less likely to be closed during memory cleanup. In other words, it helps the malware stay alive - establishing persistence without hardcoding device-specific instructions.
___

### What to Know
- This malware uses AI dynamically rather than relying solely on prewritten instructions.
- It adapts to the specific device by asking the AI what steps to take.
- Distribution appears limited for now.
- The AI component is small, but symbolic. It shows how attackers can use generative AI to make malware more flexible and harder to detect.

This isn’t mass exploitation yet. But it’s a proof of concept that criminals can use AI models as operational tools inside malware.

### What to Do Now
- Only install apps from trusted sources, and review permissions carefully.
- Keep Android updated with the latest security patches.
- Be cautious of apps requesting accessibility or system-level permissions.
- If your phone behaves oddly (apps reappearing, unusual persistence), consider a security scan or factory reset.
   

[BleepingComputer - "...First Known Android Malware to Use Generative AI..."](https://www.bleepingcomputer.com/news/security/promptspy-is-the-first-known-android-malware-to-use-generative-ai-at-runtime/)   

___
   
AI isn’t just changing productivity tools; it’s beginning to reshape malware. Today it’s limited and experimental. Tomorrow, it could power more adaptive, automated attacks that respond to defenses in real time. Staying updated and cautious matters more than ever.

Stay safe,  
Jaiden
