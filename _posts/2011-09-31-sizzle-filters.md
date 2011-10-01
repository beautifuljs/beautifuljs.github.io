---
title: Sizzle's filters
layout: post
author: James
authorurl: http://padolsey.net
---

{% highlight javascript %}
//...

radio: function( elem ) {
	return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
},

checkbox: function( elem ) {
	return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
},

file: function( elem ) {
	return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
},

password: function( elem ) {
	return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
},

image: function( elem ) {
	return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
},

//...
{% endhighlight %}

These methods are formatted in such a way that the string tested against in the second portion of the expression (e.g. `"password"`) is aligned consistently in all methods, meaning more readable code!

The less beautiful alternative would be `... && elem.type === "password"` which would mean "password", "file" and "radio" would be on different columns in the code.

Tiny considerations like this matter!

See [these filters on github](https://github.com/jquery/sizzle/blob/master/sizzle.js#L671).