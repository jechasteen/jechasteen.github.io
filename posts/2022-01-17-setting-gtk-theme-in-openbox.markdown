---
layout: post
title: Setting GTK Theme in Openbox
permalink: /2022/01/17/setting-gtk-theme-in-openbox/
date: 2022-01-17 03:41:00 +0000
categories: blog tutorial
tags: gtk linux openbox
---
> **TL,DR**: try `lxappearance` to set your GTK theme.

I'm not sure if I have an edge case, but I thought I would share my findings in case anyone else might be having the same issue. I'm running Fedora 35 with Gnome as the base desktop environment with Openbox as the window manager. In other words, I am running GDM and then selection Openbox as my default session. This comes with a few advantages: I get some of the niceties that come with Gnome, but the lightweight and customizable experience of openbox.

But of course there's a hitch. I was trying to get the [Dracula GTK theme](https://draculatheme.com/gtk) to work under Openbox with no success. I searched high and low on the internet for help, but a lot of it was outdated because of a relatively recent switch to systemd from gnome daemons. That means that the suggestions to run `gnome-settings-daemon` were right out. Of course, the first thing I had tried, the `gnome-tweaks` tool, didn't work either. Neither did changing settings via the command line. I was at the end of my rope.

Then I found out there's another tool out there for choosing GTK themes: `lxappearance`, which I never would have considered as I don't have LXDE installed. And you don't even need to install LXDE to use the tool. It worked immediately!

Hope this information is helpful!
