---
title: Underscore's isNaN method
layout: post
author: James
authorurl: http://padolsey.net
---

{% highlight javascript %}
// Is the given value `NaN`? `NaN` happens to be the only value in JavaScript
// that does not equal itself.
_.isNaN = function(obj) {
    return obj !== obj;
};
{% endhighlight %}

See [`_.isNaN` on github](https://github.com/documentcloud/underscore/blob/master/underscore.js#L691).