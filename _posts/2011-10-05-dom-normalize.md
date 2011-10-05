---
title: DOM style normalization
layout: post
author: James
authorurl: http://padolsey.net
---

I think this DOM "hack" epitomises the idea of "beauty in function" quite well:

{% highlight javascript %}
// `props` is a hash of animate'able CSS props,
// like "width", "padding", "borderLeftWidth", "color" etc.

function normalize(style){
    var css, rules = {}, i = props.length, v;
    parseEl.innerHTML = '<div style="'+style+'"></div>';
    css = parseEl.childNodes[0].style;
    while(i--) if(v = css[props[i]]) rules[props[i]] = parse(v);
    return rules;
} 
{% endhighlight %}

It's not *pretty* code, but what it does is quite clever. It takes a style string, such as `border:1px solid #f00;width:200px;` and noramlizes it into its more specific properties, but only those properties that can be animated. For `border` this would be `borderLeftWidth`, `borderLeftColor`, `borderTopWidth` etc.

Doing this *without* taking advantage of the inherent normalization that occurs within the DOM would require more code and be more liable to break or have inconsistencies between itself and the actual DOM. 

The above code is from Thomas Fuchs' [emile.js](https://github.com/madrobby/emile/blob/master/emile.js). If you're looking for a tiny and swift animation helper then *emile* works well. I will also put a word in for a respectable fork, which exposes a slightly better API and more readable source: [ded/emile](https://github.com/ded/emile).