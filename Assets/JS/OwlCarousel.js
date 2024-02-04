$(document).ready(function () {
//   setTimeout(() => {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        smartSpeed: 900,
        dots: false,
        autoHeight: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
//   }, 1000);
});

$(document).ready(function () {
    $('.resl').slick();
})


$(document).ready(function () {
    setTimeout(() => {
        $('#slick-cs').attr("style", "display: block");
        $(document).ready(function () {
            $('.carousel').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1286,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 714,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });

        });

    }, 1000);
})




