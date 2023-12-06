---
layout: page
title: Blog
permalink: "/blog/"
image: assets/img/blogbg.jpg
overlay: "opacity-75"
---

<!---FOR EVERYONE-->



<!---START Blog-->
<!---What is TOPS Title (Plain Text)-->
{% capture blog-posts-title %}
All Posts
{% endcapture %}

<!---Blog Description (Markdown)-->
{% capture blog-posts-description %}
Explore blog posts to discover compelling open science success stories and gain valuable insights into the evolving landscape of transparent and collaborative research. Engaging with these narratives provides a firsthand account of the positive impact open science can have on various fields, inspiring a deeper appreciation for its principles and potential benefits.
{% endcapture %}

<!---Blog Tell Your Story Button Text-->
{% capture blog-posts-story-text %}
Tell Your Story
{% endcapture %}

<!---Blog Tell Your Story Button Link-->
{% capture blog-posts-story-link %}
https://forms.gle/X4omhrAhhGZYMs6c7
{% endcapture %}
<!---END Blog-->





<!---FOR DEVELOPER ONLY (UNLESS YOU FEEL BRAVE)-->

{% include blog/posts.html %}