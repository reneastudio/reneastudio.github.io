$(document).ready(function () {
    // WA FORM - Rio Ilham Hadi - Rhinokage Rio (about.idblanter.com)
    $(document).on('click', '.send_form', function () {
        var input_blanter = document.getElementById('wa_email');

        /* Whatsapp Settings */
        var walink = 'https://web.whatsapp.com/send',
            phone = '6285963954968',
            walink2 = 'Halo Ari @ReneaStudio, ',
            text_yes = 'Terkirim.',
            text_no = 'Isi semua formulir sebelum mengirim';

        /* Smartphone Support */
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var walink = 'whatsapp://send';
        }

        if ("" != input_blanter.value) {

            /* Call Input Form */
            var input_name1 = $("#wa_name").val(),
                input_email1 = $("#wa_email").val(),
                input_textarea1 = $("#wa_textarea").val();

            /* Final Whatsapp URL */
            var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
                '*Name* : ' + input_name1 + '%0A' +
                '*Email* : ' + input_email1 + '%0A' +
                '*Message* : ' + input_textarea1 + '%0A';

            /* Whatsapp Window Open */
            window.open(blanter_whatsapp, '_blank');
            document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + '</span>';
        } else {
            document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + '</span>';
        }
    });

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header-container").addClass("active");
    } else {
        $(".header-container").removeClass("active");
    }
});
});
  


(function Accordion() {
  const triggers = document.querySelectorAll('[data-toggle="collapse"]');
  let activeToggle;

  triggers &&
  triggers.forEach(trigger => {
    trigger.collapseTarget = document.querySelector(
    trigger.hash || trigger.dataset.target);


    trigger.collapseTarget.dataset.parent &&
    trigger.collapseTarget.classList.contains("is-active") && (
    activeToggle = trigger);

    trigger.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      toggle(trigger);
    });

    // Remove height when end open transition
    trigger.collapseTarget.addEventListener("transitionend", ({ target }) => {
      if (!target.classList.contains("is-active")) return;

      target.style.height = null;
    });
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
    duration: 1.45,
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