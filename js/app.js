$(document).ready(function () {
    // WA FORM - Rio Ilham Hadi - Rhinokage Rio (about.idblanter.com)
    $(document).on('click', '.send_form', function () {
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

        if ("" != input_blanter.value) {

            /* Call Input Form */
            var input_name1 = $("#wa_name").val(),
                input_email1 = $("#wa_email").val(),
                input_number1 = $("#wa_number").val(),
                input_url1 = $("#wa_url").val(),
                input_budget1 = $("#budget").val(),
                input_textarea1 = $("#wa_textarea").val();

            /* Final Whatsapp URL */
            var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
                '*Name* : ' + input_name1 + '%0A' +
                '*Email* : ' + input_email1 + '%0A' +
                '*Phone number* : ' + input_number1 + '%0A' +
                '*Website* : ' + input_url1 + '%0A' +
                '*Budget* : ' + input_budget1 + '%0A' +
                '*Message* : ' + input_textarea1 + '%0A';

            /* Whatsapp Window Open */
            window.open(blanter_whatsapp, '_blank');
            document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + '</span>';
        } else {
            document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + '</span>';
        }
    });

    // LENIS SMOOTH SCROLL
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // GSAP
    // MOUSE CURSOR
    var $circle = $('.circle'),
        $follow = $('.circle-follow');

    function moveCircle(e) {
        TweenLite.to($circle, 0.3, {
            x: e.clientX,
            y: e.clientY
        });
        TweenLite.to($follow, 0.7, {
            x: e.clientX,
            y: e.clientY
        });
    }

    function hoverFunc(e) {
        TweenLite.to($circle, 0.3, {
            opacity: 1,
            scale: 0
        });
        TweenLite.to($follow, 0.3, {
            scale: 3
        });
    }

    function unhoverFunc(e) {
        TweenLite.to($circle, 0.3, {
            opacity: 1,
            scale: 1
        });
        TweenLite.to($follow, 0.3, {
            scale: 1
        });
    }
    $(window).on('mousemove', moveCircle);
    
    // ANCHOR LINK
    $("a").hover(hoverFunc, unhoverFunc);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
