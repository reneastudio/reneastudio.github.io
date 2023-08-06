$(document).ready(function () {
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

        var time = h + ":" + m + ":" + s + " " + session;
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
      });

      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
          $(".menubar-container").addClass("active");
        } else {
          $(".menubar-container").removeClass("active");
        }
      });
    });

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