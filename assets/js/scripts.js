// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.
jQuery(document).ready(function($) {

  $('.cx-header__links li a').each(function(index, el) {
    $(this).addClass('type-navigation')
  });

  $('.cx-header__mobile-menu__primary-links li').each(function(index, el) {
    var i = index + 1;
    var classer = 'cx-header__mobile-menu__item cx-header__mobile-menu__item--' + i;
    $(this).addClass(classer)
  });

  $('.cx-header__mobile-menu__primary-links li a').each(function(index, el) {
    $(this).addClass('type-headline-m')
  });

  $('.cx-categories li').each(function(index, el) {
    $(this).addClass('type-label')
  });
  $('.cx-footer__links__navigation li').each(function(index, el) {
    $(this).addClass('type-navigation')
  });
  $('.cx-header__mobile-menu__secondary-links li a').each(function(index, el) {
    $(this).addClass('type-navigation')
  });

});

var position = $(window).scrollTop(); // should start at 0

$(window).scroll(function() {
  console.log(position)
  var scroll = $(window).scrollTop();
  if (scroll > position) {
    console.log("scrolling downwards");
  } else {
    console.log("scrolling upwards");
  }

  if (position > 40) {
    $('.cx-header').addClass('off-top')
  } else {
    $('.cx-header').removeClass('off-top')
  }
  position = scroll;
});
