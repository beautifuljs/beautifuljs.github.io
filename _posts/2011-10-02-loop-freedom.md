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

True, but let's be honest: variations of the above aren't exactly challenging to grasp, and once you know a truthy expression from a falsey one, and the difference between [prefix](http://bclary.com/2004/11/07/#a-11.4.4) (`++i`) and [postfix](http://bclary.com/2004/11/07/#a-11.3.1) (`i++`) incrementers, there really is no point in holding back.

You don't have to be entirely conventional.

{% highlight javascript %}
for (var i = 0, l = a.length; i < l; i++); // cached length
{% endhighlight %}
{% highlight javascript %}
for (var i = -1, l = a.length; ++i < l;); // bundled condition (increment+test)
{% endhighlight %}
{% highlight javascript %}
for (var i = a.length; i--;); // reverse loop 
{% endhighlight %}
{% highlight javascript %}
while (node.firstChild) {
	node.removeChild(node.firstChild);
}
{% endhighlight %}
{% highlight javascript %}
// Do something with node and its following siblings
do { } while (node = node.nextSibling);
{% endhighlight %}

A loop's body is expendable too:

{% highlight javascript %}
while (
    div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
    all[0]
);
{% endhighlight %}

That last one's from here: [https://gist.github.com/527683](https://gist.github.com/527683)

