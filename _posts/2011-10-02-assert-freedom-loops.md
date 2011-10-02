---
title: Looping with freedom
layout: post
author: James
authorurl: http://padolsey.net
---

Loops don't have to look like this:

{% highlight javascript %}
for (var i = 0; i < array.length; i++) {}
{% endhighlight %}

... that's how boring people write loops. "But", you say, "That's convention and therefore is the most readable format".

True, but let's be honest: variations of the above aren't exactly challenging to grasp, and once you know a truthy expression from a falsey one, and the difference between prefix (`++i`) and postfix (`i++`) incrementers, there really is no point in holding back.

Assert your creative freedom with your loops!

{% highlight javascript %}
for (var i = 0, l = a.length; i < l; i++); // cached length
for (var i = -1, l = a.length; ++i < l;); // bundled condition (increment+test)
for (var i = a.length; i--;); // reverse loop 

while (node.firstChild) {
	node.removeChild(node.firstChild);
}

// Do something with node and its following siblings
do { } while (node = node.nextSibling);
{% endhighlight %}

The body is expendable. You can get by with just the expression in `while(...)`:

{% highlight javascript %}
while (
    div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
    all[0]
);
// From: https://gist.github.com/527683
{% endhighlight %}

