/*
 * jQuery UI Effects Pulsate 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */

(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=2*(a.options.times||5)-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;isVisible||(b.css("opacity",0).show(),animateTo=1);("hide"==c&&isVisible||"show"==c&&!isVisible)&&times--;for(c=0;c<times;c++)b.animate({opacity:animateTo},duration,a.options.easing),animateTo=(animateTo+1)%2;b.animate({opacity:animateTo},duration,
a.options.easing,function(){0==animateTo&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
