---
layout: post
title: How to Choose Your First Linux Distribution
permalink: /2021/05/26/how-to-choose-your-first-linux-distribution/
date: 2021-05-26 06:41:00 +0000
categories: blog tutorial
tags: linux
---
Some time around 2008 or so I needed a laptop to replace my recently-obsoleted PowerBook G4. (Apple made the switch from PowerPC to Intel in 2006 IIRC.) I had been required to buy the PowerBook --- the university I was attending required it, ugh --- otherwise I would never have bought such a machine. It cost damn near three grand, a fortune for a kid who only made around $200 per week. I was lucky to have a generous benefactor, unknown to me, pay for the better part of it.

My next laptop was the polar opposite of the Apple in most ways. I ended up getting an Asus eeepc 1000HE at Walmart for probably about $300. Little did I know at the time, that laptop would change my computing world forever.

I had been cursorily familiar with Linux at that point, having tried it on the PowerBook and live installs on flash drives, but the eeepc was my first daily-driving experience. It came preinstalled with Windows XP (in 2008!) that was serviceable, but very outdated. Windows 7 would barely run. A relative newcomer to the Linux distro world was my answer.

Arch Linux was my first daily driver Linux distro. In case you aren't familiar, Arch is a barebones semi-DIY distro that you have to install very manually. Not as manual as Gentoo or Slackware, but close. No package compilation, but a completely command line install.

I don't recommend this route unless you either have a lot of spare time to dedicate to your new hobby (like I did) or are a masochist. You'll have lots of do-overs after fucking up and you'll run into problems you are not prepared to Google yet.

These days, I sort of long term distro hop. My current daily driver is Manjaro, an Arch-based distro. I highly recommend it for an intermediate.

Prior to that, I had been using Fedora for almost 6 months. Fedora is the testing distro that eventually becomes Red Hat Enterprise Linux, so it is very mature and easy to use. I highly recommend it for a beginner.

At this point, I've tried almost every mainstream distro and many niche distros, too. There are things I've loved about them all, but not enough to stick around. I do always seem to come back to Arch eventually, though. There's just something satisfying about really **owning** your OS. Plus, you can say "I use arch, btw." I would absolutely recommend Arch for a motivated beginner. The supplemental materials at the Arch website are invaluable, whether or not you are using Arch.

If you're reading this article, you may be overwhelmed at the astonishing number of **mainstream** distros. Debian, Ubuntu, Manjaro, Fedora, openSUSE, Mint. The list of popular distros is insanity, and the community is ambivalent about all of them. How do you pick a distro when each one has pros and cons you don't fully understand? Each one has a laundry list of superlatives extolling the virtues of its package manager or desktop environment, and just as many negatives. That's what my goal is here, to give you the base vocabulary and knowledge to make that decision **for yourself**.

[](https://github.com/jechasteen/jechasteen.com/blob/master/posts/how-to-choose-your-first-linux-distribution.md#what-do-the-distros-have-in-common)What Do the Distros Have in Common?
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Despite the fractured appearance, Linux is actually a homogenized ecosystem in terms of functionality. That is, every distro has **categories** of software in common. In addition, many of the programs you use on Windows or MacOS either have releases for Linux or open source (or closed source, in some cases) replacements.

[](https://github.com/jechasteen/jechasteen.com/blob/master/posts/how-to-choose-your-first-linux-distribution.md#considerations)Considerations
----------------------------------------------------------------------------------------------------------------------------------------------

### [](https://github.com/jechasteen/jechasteen.com/blob/master/posts/how-to-choose-your-first-linux-distribution.md#desktop-environment-de)Desktop Environment (DE)

For someone coming from Windows or Mac, the idea of a desktop environment is not separate from the OS itself. When you think of Windows, you think of the desktop, the start menu, explorer. For Mac, it's menu bar, the desktop, and finder. It's exactly the same idea on Linux, except each component can vary from distro to distro.

 I listed this "component first" because I think it's the most important. It's the stuff you look at and interact with on a daily basis. If you can't get around, you're going to be less productive. My advice is to skip the live USB rigamarole. It is a very time consuming and, honestly, frustrating process.

Check out YouTube (I may have some demos soon, stay tuned, subscribe!) for videos demonstrating different DEs. Pick one that you think you can get along with and make a note of it then move on to the next item in my list.

Some will use the terms desktop environment and window manager (WM) interchangably. They are actually different, but related, things. The WM is one of the components of the DE, the one that decides how to draw windows. It often will provide the taskbar and desktop, too. Don't be too concerned with the distinction, most of the time people are talking about the DE, not the WM, even if they are saying WM.

### [](https://github.com/jechasteen/jechasteen.com/blob/master/posts/how-to-choose-your-first-linux-distribution.md#package-managers-and-software-centers)Package Managers and Software Centers

I'm lumping the two together here because, under the hood, they are very closely related. A software center (by any name) is a GUI application that allows you to discover and search for new programs, but it uses the package manager to do the actual installing.

I'm really only mentioning this because, as a newbie, you want to steer clear of **rolling release** distributions. That, in brief, means that update packages are available as they are released. Most distros don't use this method. Most release security updates relatively frequently, but the "upgrade" is very infrequent, typically twice a year or so. Rolling release distros are more prone to breakage, especially if you're not good about updating frequently. The problem is, the more packages that get updated, the harder it is to pinpoint the problem package if it borks your system.

### [](https://github.com/jechasteen/jechasteen.com/blob/master/posts/how-to-choose-your-first-linux-distribution.md#shells-and-the-terminal-emulator)Shells and the Terminal Emulator

The terminal emulator is the text-based interface that you're probably dreading if you've done any Linux consideration or testing. Many of the solutions you'll find around the web are going to give you dense commands that will magically fix your system. **Be very careful** with these commands, they are capable of doing more harm than good. In addition, copy-pasting commands from the internet is extremely dangerous before you are able to read and understand them.

If you're just starting out, make sure that the distro that you choose uses the **bash** **shell**. It is the most common by far, but there are popular distros that use others. You don't really need to know what bash means at this point. It is sufficient to know that if you copy a command from StackOverflow or try to run a **shell script**, it may not work unless you are using bash.

[](https://github.com/jechasteen/jechasteen.com/blob/master/posts/how-to-choose-your-first-linux-distribution.md#conclusion)Conclusion
--------------------------------------------------------------------------------------------------------------------------------------

I hope that this info helps you to pick, and I hope that you have a great time learning Linux. Most of the information out there about distros is dense and hard to read, especially for a newb. I also think that people tend toward piety when it comes to their distro (or distros) of choice. Don't be that person. Embrace the variety, spread out in the wide open space. This is your journey.

The Linux world is an excitingly varied one, an endless rabbit hole of discovery. It can be frustrating at first, but stick with it. It is very rewarding having complete control over your machine.

If you have any questions, please leave them below. I'll try to answer them, perhaps in another blog post.
