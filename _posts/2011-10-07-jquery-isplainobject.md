---
title: jQuery's isPlainObject
layout: post
author: James
authorurl: http://padolsey.net
---

jQuery's [`isPlainObject`](http://api.jquery.com/jQuery.isPlainObject) returns true if the argument is a regular object, i.e. one created via the `Object` constructor or object literal (`{...}`).

{% highlight javascript %}
//...
isPlainObject: function( obj ) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
        return false;
    }

    try {
        // Not own constructor property must be Object
        if ( obj.constructor &&
            !hasOwn.call(obj, "constructor") &&
            !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
            return false;
        }
    } catch ( e ) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.

    var key;
    for ( key in obj ) {}

    return key === undefined || hasOwn.call( obj, key );
}, //...
{% endhighlight %}

This is nice to know too:

{% highlight javascript %}
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
{% endhighlight %}