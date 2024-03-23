$(document).ready(function () {
  // TICKER
  jQuery(function ($) {
    $(".tickerwrapper, .tickerwrapper-dua").each(function (ix, ex) {
      var $tickerWrapper = $(ex);
      var $list = $tickerWrapper.find("ul.list");
      var $clonedList = $list.clone();
      var listWidth = 30;

      $list.find("li").each(function (i) {
        listWidth += $(this, i).outerWidth(true);
      });

      var endPos = $tickerWrapper.width() - listWidth;

      $list.add($clonedList).css({
        "width": listWidth + "px"
      });

      $clonedList.addClass("cloned").appendTo($tickerWrapper);

      //TimelineMax
      var infinite = new TimelineMax({ repeat: -1, paused: true });
      var time = 60;

      infinite
        .fromTo($list, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
        .fromTo($clonedList, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
        .set($list, { force3D: true, rotation: 0.01, x: listWidth })
        .to($clonedList, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
        .to($list, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
        .progress(1).progress(0)
        .play();
    });
  });

  // JAM
  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m  + " " + session;
    document.getElementById("jam").innerText = time;
    document.getElementById("jam").textContent = time;

    setTimeout(showTime, 1000);
  }
  showTime();

  // OWL Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    nav: false,
    autoplaySpeed: '3000',
    autoplayTimeout: '7000'
  });

  // UBAH WARNA BACKGROUND KETIKA SCROLL
  $(window).scroll(function () {
    // selectors
    var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
      var $this = $(this);

      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });

        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });

  }).scroll();

  // OPACITY CHANGE
  setTimeout(function() {
      $('.content-container').animate({opacity: 1}, 1000);
  }, 2000);
});



  // LENIS SMOOTH SCROLL
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);