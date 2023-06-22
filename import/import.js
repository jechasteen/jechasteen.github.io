function padNum(n) {
    if (n < 10) {
        return "0" + n;
    }
    else {
        return n;
    }
}

function jekyllDate(d) {
    d = new Date(d);
    const year = d.getFullYear();
    const month = padNum(d.getMonth() + 1);
    const date = padNum(d.getDate());
    const hour = padNum(d.getHours());
    const minutes = padNum(d.getMinutes());
    const seconds = padNum(d.getSeconds());
    return `${year}-${month}-${date} ${hour}:${minutes}:${seconds} +0000`
}

function filenameDate(d) {
    d = new Date(d);
    const year = d.getFullYear();
    const month = padNum(d.getMonth() + 1);
    const date = padNum(d.getDate());
    return `${year}-${month}-${date}`
}

const template =
(data) => {
    return `---
layout: post
title: ${data.title}
permalink: ${data.permalink}
date: ${jekyllDate(data.date)}
categories: ${data.categories.join(" ")}
tags: ${data.tags.join(" ")}
---
${data.body}
`
}

const read = require("fs").readFileSync;
const write = require("fs").writeFileSync;
const TurndownService = require("turndown");
const turndown = new TurndownService();

const raw = read("json.txt", { encoding: "utf-8"});
const data = JSON.parse(raw);
const items = data.rss.channel.item;

for (i in items) {
    const item = items[i]
    if (item.post_type.__cdata == "post") {
        // Process tags and categories
        const categories = [];
        let tags = [];
        item.category.forEach(category => {
            if (category._domain == "category") {
                categories.push(category._nicename);
            }
            else if (category._domain == "post_tag") {
                tags = tags.concat(category._nicename.split(","))
            }
        });
        const data = {
            title: item.title,
            name: item.post_name.__cdata,
            date: Date.parse(item.pubDate),
            permalink: item.link,
            categories: categories,
            tags: tags,
            body: (() => {
                for (j in item.encoded) {
                    if (item.encoded[j].__prefix == "content") {
                        return turndown.turndown(item.encoded[j].__cdata)
                    }
                }
            })()
        }
        console.log(data.title);
        write(
            `../_posts/${filenameDate(data.date)}-${data.name}.markdown`,
            template(data),
            { encoding: "utf-8" }
        );
    }
}