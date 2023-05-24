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
                input_textarea1 = $("#wa_textarea").val();

            /* Final Whatsapp URL */
            var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
                '*Nama* : ' + input_name1 + '%0A' +
                '*Email* : ' + input_email1 + '%0A' +
                '*HP/WA* : ' + input_number1 + '%0A' +
                '*Website* : ' + input_url1 + '%0A' +
                '*Pesan* : ' + input_textarea1 + '%0A';

            /* Whatsapp Window Open */
            window.open(blanter_whatsapp, '_blank');
            document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + '</span>';
        } else {
            document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + '</span>';
        }
    });

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
    $("a").hover(hoverFunc, unhoverFunc);


    // HERO TEXT
    const childSplit = new SplitText(".hero-text h1", {
        type: "lines",
        linesClass: "split-child"
    });
    const parentSplit = new SplitText(".hero-text h1", {
        // type: "lines",
        linesClass: "split-parent"
    });

    gsap.from(childSplit.lines, {
        duration: 1,
        yPercent: 100,
        ease: "power4.easeOut",
        stagger: 0.1
    });


    // ANCHOR LINK
    // Detect if a link's href goes to the current page
    function getSamePageAnchor(link) {
        if (
            link.protocol !== window.location.protocol ||
            link.host !== window.location.host ||
            link.pathname !== window.location.pathname ||
            link.search !== window.location.search
        ) {
            return false;
        }
        return link.hash;
    }
    // Scroll to a given hash, preventing the event given if there is one
    function scrollToHash(hash, e) {
        const elem = hash ? document.querySelector(hash) : false;
        if (elem) {
            if (e) e.preventDefault();
            gsap.to(window, {
                scrollTo: elem
            });
        }
    }
    // If a link's href is within the current page, scroll to it instead
    document.querySelectorAll('a[href]').forEach(a => {
        a.addEventListener('click', e => {
            scrollToHash(getSamePageAnchor(a), e);
        });
    });
    // Scroll to the element in the URL's hash on load
    scrollToHash(window.location.hash);


    // REVEAL ELEMENTS
    TweenMax.to(".animate-satu", 1.6, {
        delay: 0.4,
        y: -100,
        autoAlpha: 1,
        ease: Power4.easeOut
    });
    TweenMax.to(".animate-dua", 1.5, {
        delay: 0.7,
        y: -100,
        autoAlpha: 1,
        ease: Power4.easeOut
    });
    TweenMax.to(".animate-tiga", 1.5, {
        delay: 0.9,
        y: -100,
        autoAlpha: 1,
        ease: Power4.easeOut
    });
    TweenMax.to("#thumbnails", 2.2, {
        delay: 1.5,
        y: -100,
        autoAlpha: 1,
        ease: Power4.easeOut
    });
    gsap.set(".lines", {
        xPercent: 0
    });
    ScrollTrigger.batch(".lines", {
        interval: 0.5, // time window (in seconds) for batching to occur. 
        onEnter: batch => gsap.to(batch, {
            duration: 1.5,
            x: 100,
            autoAlpha: 1,
            ease: Power4.easeOut,
            toggleActions: "play none none reverse"
        })
    })


    // TEXT REVEAL
    const splitLines = new SplitText(".split-me p, .split-me h1, .split-me h2, .split-me span", {
        type: "lines",
        linesClass: "line line++"
    });
    jQuery(".split-me .line").wrap('<div class="line-wrapper">');
    gsap.set(".line", {
        yPercent: 200
    });
    ScrollTrigger.batch(".line", {
        start: "top 90%",
        onEnter: batch => gsap.to(batch, {
            yPercent: 0,
            duration: 1,
            ease: "power4",
            stagger: 0.15,
            overwrite: true,
            toggleActions: "play none none reverse"
        })
    })

    // HOVER 
    gsap.set('.nama-klien img.swipeimage', {
        yPercent: -50,
        xPercent: -50
    });
    let activeImage;
    gsap.utils.toArray(".nama-klien").forEach((el) => {
        let image = el.querySelector('img.swipeimage'),
            setX, setY,
            align = e => {
                setX(e.pageX);
                setY(e.pageY);
            },
            startFollow = () => document.addEventListener("mousemove", align),
            stopFollow = () => document.removeEventListener("mousemove", align),
            fade = gsap.to(image, {
                autoAlpha: 1,
                ease: "none",
                paused: true,
                onReverseComplete: stopFollow
            });
        el.addEventListener('mouseenter', (e) => {
            fade.play();
            startFollow();
            if (activeImage) { // if there's an actively-animating one, we should match its position here
                gsap.set(image, {
                    x: gsap.getProperty(activeImage, "x"),
                    y: gsap.getProperty(activeImage, "y")
                });
            }
            activeImage = image;
            setX = gsap.quickTo(image, "x", {
                    duration: 0.6,
                    ease: "power3"
                }),
                setY = gsap.quickTo(image, "y", {
                    duration: 0.6,
                    ease: "power3"
                })
            align(e);
        });
        el.addEventListener('mouseleave', () => fade.reverse());
    });


});
