---
title: Underscore's pluck
layout: post
author: James
authorurl: http://padolsey.net
---

Underscore has taken a common use-case of the conventional `map` method and made it a method of its own, [`pluck`](http://documentcloud.github.com/underscore/#pluck):

{% highlight javascript %}
_.pluck = function(obj, key) {
  return _.map(obj, function(value){ return value[key]; });
};
{% endhighlight %}

It takes an array or object and plucks values out of its members:

{% highlight javascript %}
var a = document.getElementsByTagName('a');
_.pluck(a, 'href'); // get all `href` attributes as an array
{% endhighlight %}

It's dead simple, but proves how valuable it is to abstract based on common usage. 

*PS. Please check out the new [jsapi.info](http://jsapi.info), a site I created to explore the source of various libraries, via which I discovered `pluck`!*