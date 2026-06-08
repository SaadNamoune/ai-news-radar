"""
blog.py — Daily Markdown generator
Author: Saad Namoune
"""

import os
from datetime import datetime
from dateutil import tz
from loguru import logger

current_directory = os.path.dirname(os.path.abspath(__file__))


class Blog:
    metadata: str
    guide: str
    categories: list

    def __init__(self, metadata, guide, categories):
        self.metadata = metadata
        self.guide = guide
        self.categories = categories

    def make_blog(self):
        return self.metadata + self.guide + "\n".join(self.categories)


def make_daily_markdown_with(articles, rss_list):
    tags = []
    article_titles = []

    category_list = []
    for rss in rss_list:
        if rss.config["category"] not in category_list:
            category_list.append(rss.config["category"])

    category_contents = []
    for category in category_list:
        for article in articles:
            if article.config["category"] != category:
                continue
            tags.extend(article.evaluate.get("tags", []))
            article_titles.append(article.evaluate["title"])

        category_contents.append(make_daily_category(category=category, articles=articles))

    md_path, meta_data, backup_md_path = make_meta_data(description="\n".join(article_titles), tags=tags)
    daily_guide = make_daily_guide(article_titles)
    if len(category_contents) == 0:
        logger.error("Category content is empty — no articles were generated.")
        return
    blog = Blog(metadata=meta_data, guide=daily_guide, categories=category_contents)
    logger.info(f"Daily digest generated: {meta_data}")
    if md_path:
        with open(md_path, "w", encoding="utf-8") as fp:
            fp.write(blog.make_blog())
            logger.info(f"Written to: {md_path}")
    if backup_md_path:
        with open(backup_md_path, "w", encoding="utf-8") as fp:
            fp.write(blog.make_blog())
            logger.debug(f"Backup written to: {backup_md_path}")


def make_meta_data(description, tags):
    time_zone = tz.gettz("Africa/Algiers")
    today_with_timezone = datetime.today().astimezone(time_zone)
    today_str = today_with_timezone.strftime("%Y-%m-%d")

    project_root = os.path.dirname(os.path.dirname(current_directory))
    news_folder = os.path.join(project_root, "src", "content", "blog")
    logger.info(f"News folder: {news_folder}")
    os.makedirs(news_folder, exist_ok=True)

    md_title = f"Daily AI Digest #{today_str}"
    tags_str = "".join([f'- "{str(tag).replace("/", "_")}"\n' for tag in set(tags)])
    data = f"""---
title: "{md_title}"
date: "{today_with_timezone.strftime("%Y-%m-%d %H:%M:%S")}"
description: "{description}"
tags:
{tags_str}
---
"""
    md_path = os.path.join(news_folder, f"dailyNews_{today_str}.md")
    backup_md_path = ""
    return md_path, data, backup_md_path


def make_daily_category(category, articles):
    if not articles:
        return ""
    content = ""
    for article in articles:
        if article.config["category"] != category:
            continue
        cover = f"![]({article.cover_url})" if article.cover_url else ""
        article_intro = f"""
### [{article.evaluate["title"]}]({article.link})

**Source:** {article.info["title"]}

**Published:** {article.date}
{cover}
{article.evaluate["summary"]}

"""
        content += article_intro
    if content:
        content = f"## {category}\n" + content
    return content


def make_daily_guide(titles):
    guide = "".join([f"> - {item}\n" for item in titles])
    return f"\n{guide}\n"
