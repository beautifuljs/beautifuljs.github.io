---
title: Backbone events definition
layout: post
author: James
authorurl: http://padolsey.net
---

[Backbone.js](https://github.com/documentcloud/backbone) allows you to define delegated-events for your views in a neat little hash in which you specify the event name, the selector (the context being the view itself) and a method-name to call on the view instance:

{% highlight javascript %}
var FooView = Backbone.View.extend({

	events: {
	    "dblclick"                : "open",
	    "click .icon.doc"         : "select",
	    "contextmenu .icon.doc"   : "showMenu",
	    "click .show_notes"       : "toggleNotes",
	    "click .title .lock"      : "editAccessLevel",
	    "mouseover .title .date"  : "showTooltip"
	},

	//...

});
{% endhighlight %}

See [the documentation for Backbone's delegateEvents](http://documentcloud.github.com/backbone/#View-delegateEvents).