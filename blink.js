(function($) {
  $.fn.blink = function (options) {

    return this.each(function () {
     var settings = $.extend({
          speed: 1000 // default speed
      }, options );

      var element = $(this);
      setInterval(function () {
        element.fadeOut();
        element.fadeIn();
      }, settings.speed);
    })
  };
}(jQuery))

$(document).ready(function () {
  jQuery('p.blink').blink();
  jQuery('a').blink();
  jQuery('p.blink-fast').blink({speed: 100})
});