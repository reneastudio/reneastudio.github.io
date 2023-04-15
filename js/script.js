$(document).ready(function () {
    // ANIMASI COUNTER
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('.counter').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 4000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
            a = 1;
        }
    });

    // LAST HOVER STATE
    $(".feat:first").addClass("hover");
    $(".feat").one("mouseover", function () {
        $(".feat:first").removeClass("hover");
    });

    var lastHovered;

    $('.feat').mouseenter(function () {
        if (lastHovered) {
            lastHovered.removeClass('hover');
        }
        $(this).addClass('hover');
        lastHovered = $(this);
    });

    // TAGS INFINITE SCROLL
  if ($("div.scroll").length > 0) {
    $("div.scroll").each(function() {
      var scrollWrapper = $(this);
      var scrollWidth = scrollWrapper[0].scrollWidth;
      var spans = scrollWrapper.find("span");
      var totalSpanWidth = 0;
      spans.each(function () {
          totalSpanWidth += $(this).outerWidth(true);
      });
      var scrollPosition = 0;

      // Clone the span content to create the infinite scroll effect
      scrollWrapper.append(spans.clone());

      function scrollContent() {
          scrollPosition += 1;
          if (scrollPosition > totalSpanWidth) {
              scrollPosition = 0;
          }
          scrollWrapper.scrollLeft(scrollPosition);
      }

      // Call the scrollContent function every 50 milliseconds
      setInterval(scrollContent, 50);
    });
  }

      if ($("div.scroll-rtl").length > 0) {
    $("div.scroll-rtl").each(function() {
      var myScrollWrapper = $(this);
      var myscrollWidth = myScrollWrapper[0].myscrollWidth;
      var myspans = myScrollWrapper.find("span");
      var mytotalSpanWidth = 0;
      myspans.each(function () {
          mytotalSpanWidth += $(this).outerWidth(true);
      });
      var myScrollPosition = 0;

      // Clone the span content to create the infinite scroll effect
      myScrollWrapper.append(myspans.clone());

      function myscrollContent() {
          myScrollPosition -= 1;
          if (myScrollPosition < 0) {
              myScrollPosition = mytotalSpanWidth;
          }
          myScrollWrapper.scrollLeft(myScrollPosition);
      }

      // Call the scrollContent function every 50 milliseconds
      setInterval(myscrollContent, 50);
    });
  }


    // OWL CAROUSEL
    $('#loop').owlCarousel({
        center: true,
        items: 4,
        autoplay: true,
        autoplaySpeed: 4500,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 9
            }
        }
    });    
    $('.portfolio').owlCarousel({
        rtl:true,
        center: true,
        items: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        loop: true,
        margin: 30,
        responsive: {
            600: {
                items: 4
            }
        }
    }); 
    $('.testimonial').owlCarousel({
        center: true,
        items: 1,
        autoplay: true,
        loop: true
    });
    
});

// WA FORM - Rio Ilham Hadi - Rhinokage Rio (about.idblanter.com)
$(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_email');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '6285963954968',
    walink2 = 'Halo Ari @ReneaStudio, ',
    text_yes = 'Terkirim.',
    text_no = 'Isi semua formulir lalu klik Kirim.';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

/* Call Input Form */
var input_name1 = $("#wa_name").val(),
    input_email1 = $("#wa_email").val(),
    input_number1 = $("#wa_number").val(),
    input_url1 = $("#wa_url").val(),
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    '*Nama* : ' + input_name1 + '%0A' +
    '*Email* : ' + input_email1 + '%0A' +
    '*HP/WA* : ' + input_number1 + '%0A' +
    '*Website* : ' + input_url1 + '%0A' +
    '*Pesan* : ' + input_textarea1 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});
