$(document).ready(function () {
  function showTime() {
    var options = {
      timeZone: 'Asia/Jakarta',
      hour12: false, // 24-hour format
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    
    var jakartaTime = new Date().toLocaleString('en-US', options);
    
    document.getElementById("jam").innerText = jakartaTime;
    document.getElementById("jam").textContent = jakartaTime;

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
      });

      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
          $(".menubar-container").addClass("active");
        } else {
          $(".menubar-container").removeClass("active");
        }
      });
    });

    // GOOGLE TRANSLATE BAR HIDE
    if(document.getElementsByClassName('.skiptranslate')[0] !== undefined) {
      document.getElementsByClassName('.skiptranslate')[0].style.display  = 'none';
      document.body.style.top = '0px';
    }

    // FAQs ACCORDION
    (function Accordion() {
      const triggers = document.querySelectorAll('[data-toggle="collapse"]');
      let activeToggle;

      triggers &&
        triggers.forEach((trigger) => {
          trigger.collapseTarget = document.querySelector(
            trigger.hash || trigger.dataset.target
          );

          trigger.collapseTarget.dataset.parent &&
            trigger.collapseTarget.classList.contains("is-active") &&
            (activeToggle = trigger);

          trigger.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            toggle(trigger);
          });

          // Remove height when end open transition
          trigger.collapseTarget.addEventListener(
            "transitionend",
            ({
              target
            }) => {
              if (!target.classList.contains("is-active")) return;

              target.style.height = null;
            }
          );
        });

      function toggle(trigger) {
        if (trigger.collapseTarget.classList.contains("is-active")) {
          close(trigger);
          activeToggle = null;
        } else {
          activeToggle &&
            activeToggle.collapseTarget.dataset.parent &&
            close(activeToggle);

          trigger.collapseTarget.dataset.parent && (activeToggle = trigger);

          open(trigger);
        }
      }

      function close(trigger) {
        setHeight(trigger.collapseTarget);

        trigger.parentElement.classList.remove("is-active");
        trigger.classList.remove("is-active");
        trigger.collapseTarget.classList.remove("is-active");

        setTimeout(() => {
          trigger.collapseTarget.style.height = null;
        }, 0);
      }

      function open(trigger) {
        trigger.classList.add("is-active");
        trigger.parentElement.classList.add("is-active");

        setTimeout(() => {
          setHeight(trigger.collapseTarget);
          trigger.collapseTarget.classList.add("is-active");
        }, 0);
      }

      function setHeight(target) {
        target.style.height = target.scrollHeight + "px";
      }
    })();

    // LENIS SMOOTH SCROLL
    const lenis = new Lenis({
      duration: 1.75,
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

    
    // WHATSAPP CHAT
    /* Whatsapp Chat Widget by www.idblanter.com */
    $(document).on("click", "#send-it", function () {
      var a = document.getElementById("chat-input");
      if ("" != a.value) {
          var b = $("#get-number").text(),
              c = document.getElementById("chat-input").value,
              d = "https://web.whatsapp.com/send",
              e = b,
              f = "&text=" + c;
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";
          var g = d + "?phone=" + e + f;
          window.open(g, '_blank')
      }
    }), $(document).on("click", ".informasi", function () {
      document.getElementById("get-number").innerHTML = $(this).children(".my-number").text(), $(".start-chat,.get-new").addClass("show").removeClass("hide"), $(".home-chat,.head-home").addClass("hide").removeClass("show"), document.getElementById("get-nama").innerHTML = $(this).children(".info-chat").children(".chat-nama").text(), document.getElementById("get-label").innerHTML = $(this).children(".info-chat").children(".chat-label").text()
    }), $(document).on("click", ".close-chat", function () {
      $("#whatsapp-chat").addClass("hide").removeClass("show")
    }), $(document).on("click", ".konsultasi, .blantershow-chat", function () {
      $("#whatsapp-chat").addClass("show").removeClass("hide")
    });