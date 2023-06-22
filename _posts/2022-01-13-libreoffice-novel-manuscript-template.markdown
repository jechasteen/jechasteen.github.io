---
layout: post
title: LibreOffice Novel Manuscript Template
permalink: /2022/01/13/libreoffice-novel-manuscript-template/
date: 2022-01-13 03:39:00 +0000
categories: blog tutorial
tags: novel writing
---
If you just want to download the template and skip my rambling, click this link: [Novel Manuscript Template (.ott)](https://next.jechasteen.com/s/FXQw9EkjseSAoij)

This past November I participated in the NaNoWriMo, writing a sci-fi novel about a recent college graduate looking for adventure but finding a whole lot of trouble instead. I did all the planning, plotting, and writing in Scrivener. I won't be using Scrivener again.

This isn't a Scrivener review, really. But it sort of is, too.

Obviously, the fact that I will not be using Scrivener for future projects is a sort of review in and of itself. I know that a lot of people find Scrivener to be the perfect all-in-one solution, some even swear by it. "Jack of all trades, master of none." But that's all I'm going to say about Scrivener.

So now I'm working on my next project, dipping my toes into a few different tools to see what I might like to use for my next project. I have a [joplin](https://joplinapp.org/) instance running on a server already, set up to keep my notes up to date on my laptop and my phone. It's something I've been using for months now---for keeping all sorts of notes, not just fiction-related stuff---so that's where I'll be keeping notes and outlines. I've tried using [vim](https://www.vim.org/) for the actual writing, but it's cumbersome and honestly just doesn't have the right aesthetic. I dabbled a little with an app called novelWriter, an open-source all-in-one tool in the Scrivener vein. There are a few others, but I'm not even going to mention them.

So I've decided for this next project to use Joplin for note taking and outlining, and LibreOffice for writing. It's sort of jumping the gun to look for a manuscript template this early in the process---I should be _writing_!---but I needed to know that I can actually use the software for writing. And digging around in the "guts" of software really lets me put it through its paces and learn its capabilities. To that end, I have developed a template for fiction manuscripts, prepared by comparing advice from a number of blogs and websites. It may not fulfill every single publisher's requirements, but it should be a good starting point.

First of all, the title page is filled automatically using _metadata_, information filled into a form. You shouldn't need to type anything into the title page, even the word count is handled automatically, rounded to the nearest thousand words. This is done using a variable field known as an insert formula (Insert > Field > More fields ... > Variables > Insert Formula) with the formula

> `WORD DIV 1000 ROUND 0 MUL 1000`

with the format "-1,235"

![Title page preview](http://www-wordpress.jechasteen.com/wp-content/uploads/2022/09/titlepage.png)

Title Page Example

Most sources say that the title should come about 1/3 of the way down the title page. This was done by counting total lines and dividing by three. There may be a better way to do this---and if there is please [send a message](https://www.jechasteen.com/contact/) and let me know.

From what I could gather, manuscripts should really only have one heading type inside the body of the manuscript: Chapter Headings. By using the custom "Chapter Heading" style after a page break, the chapter heading will be placed on the page just under half way down. The setting that I think looked the best ended up being 3.33 inches from the top margin, or 4.33 inches from the top of the page. Sources say that the Chapter heading should come between 1/3 and 1/2 of the way down the page. I think that this setting strikes a good balance. It sets off the start of the chapter well, but leaves plenty of room to fit 13 lines of text. (this is approximately 1/2 the page in terms of line count)

![Chapter Page Example](http://www-wordpress.jechasteen.com/wp-content/uploads/2022/09/chapterpage.png)

Chapter Page Example

The text in the template is instructions on how to use the template, and a few instructions on manuscript formatting in general. I won't repeat them here. They'll make more sense once you've loaded up the template anyway.

[Download Novel Manuscript Template (.ott)](https://next.jechasteen.com/s/FXQw9EkjseSAoij)
