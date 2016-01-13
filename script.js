$(function() {
  var $blinds = $("[id^=blind]"),
      delay = 1500,
      speed = 250;

  function startAnimation() {
    $blinds.each(function(i) {
      var $blind = $blinds.eq(i);
      $blind.delay(delay * i + speed).animate({
        top: "+=" + $blind.height(),
        height: 0
      }, speed);
    });
  }

  $("a").on("click", function(event) {
    event.preventDefault();
    $blinds.removeAttr("style");
    startAnimation();
  });
  startAnimation();
});
