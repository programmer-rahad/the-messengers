// jQuery
$(document).ready(function () {


    if ($('.de-sliders').length) {
        $('.de-sliders').owlCarousel({
            items: 1,
            loop: 1,
            nav: true,
            dots: false,
            margin: 28,
            stagePadding: 0,
            responsive: {
                0: {
                },
                1200: {

                    stagePadding: 270
                }
            },
            navText: ["<img src='assets/images/icons/angle-left.svg' />", "<img src='assets/images/icons/angle-right.svg' />"],
        });
        function somthing() {
            if (window.innerWidth < 1200) return;
            const owlItems = document.querySelectorAll('.discover-expertise .owl-item');
            setTimeout(function () {
                for (var i = 0; i < owlItems.length; i++) {
                    var content = owlItems[i].querySelector('.common-block-content');
                    if (!owlItems[i].classList.contains('active')) {
                        content.style.marginLeft = '250px';
                    } else {
                        content.style.marginLeft = 0;
                    }
                }
            }, 100)
        }
        somthing();
        $('.de-sliders').on('changed.owl.carousel', somthing);
    }

    if ($('.oc-sliders').length) {
        $('.oc-sliders').owlCarousel({
            items: 2,
            loop: true,
            autoplay: true,
            stagePadding: 50,
            dots: 0,
            responsive: {
                430: {
                    stagePadding: 75
                },
                576: {
                    items: 3,
                    stagePadding: 0
                },
                768: {
                    items: 4,
                    stagePadding: 0
                },
                1100: {
                    items: 5,
                    stagePadding: 0
                },
            }
        })
    }

    if ($('.achievements-sliders').length) {
        $('.achievements-sliders').owlCarousel({
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 30,
                },
                576: {
                    items: 1,
                    stagePadding: 42
                },
                768: {
                    items: 2,
                    stagePadding: 0
                },
                992: {
                    items: 3,
                    stagePadding: 0
                },
                1200: {
                    items: 4,
                    stagePadding: 0
                },
            }
        });
    }
    !function () {
        var slideItems = document.querySelectorAll('.achievement-slider > div');
        for (let i = 0; i < slideItems.length; i++) {
            slideItems[i].addEventListener('mouseenter', function () {
                if (window.innerWidth < 1200) return;
                for (let i = 0; i < slideItems.length; i++) {
                    slideItems[i].classList.remove('active');
                }
                this.classList.add('active');
            })
            slideItems[i].addEventListener('mouseleave', function () {
                // setTimeout(function () {
                console.log('Rhaad');
                for (var i = 0; i < slideItems.length; i++) {
                    slideItems[i].classList.remove('active');
                }
                // this.classList.add('active');
                // }.bind(this), 500)
            })
        }
    }();
    if ($('.dn-mobile-content').length) {
        $('.dn-mobile-content').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            // margin: 10,
            nav: true,
            navText: ["<img src='assets/images/icons/angle-left.svg' />", "<img src='assets/images/icons/angle-right.svg' />"],
            responsive: {
                // 0: {
                //     items: 1,
                //     stagePadding: 30,
                // },
                // 576: {
                //     items: 1,
                //     stagePadding: 42
                // },
                // 768: {
                //     items: 2,
                //     stagePadding: 0
                // },
                // 992: {
                //     items: 3,
                //     stagePadding: 0
                // },
                // 1200: {
                //     items: 4,
                //     stagePadding: 0
                // },
            }
        });
    }

    if ($('.discover-story .ds-sliders').length) {
        $('.discover-story .ds-sliders').owlCarousel({
            items: 1,
            loop: true,
            // dots: false,
            margin: 10,
            nav: true,
            navText: ["<img src='assets/images/icons/angle-left-black.svg' />", "<img src='assets/images/icons/angle-right-black.svg' />"],
            responsive: {
                0: {
                    stagePadding: 40,
                },
                576: {
                    stagePadding: 70
                },
                768: {
                    stagePadding: 100
                },
                992: {
                    stagePadding: 180,
                },
                // 1200: {
                //     items: 4,
                //     stagePadding: 0
                // },
            }
        });
    }

    if ($('.testimonial-sliders').length) {
        $('.testimonial-sliders').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            // margin: 10,
            nav: true,
            // stagePadding: 350,
            navText: ["<img src='assets/images/icons/angle-left.svg' />", "<img src='assets/images/icons/angle-right.svg' />"],
            responsive: {
                // 0: {
                //     items: 1,
                //     stagePadding: 30,
                // },
                // 576: {
                //     items: 1,
                //     stagePadding: 42
                // },
                // 768: {
                //     items: 2,
                //     stagePadding: 0
                // },
                // 992: {
                //     items: 3,
                //     stagePadding: 0
                // },
                // 1200: {
                //     items: 4,
                //     stagePadding: 0
                // },
            }
        });
    }
    
    if ($('.video-play-button').length) {
        $('.video-play-button').magnificPopup({
            type: 'iframe'
        });
    }

});
// Javascript
document.addEventListener('DOMContentLoaded', function () {
    // Header
    function CustomHeader(header = document.querySelector('header'), maxWidth = 991) {
        this.eventListeners = function () {
            var headerBrand = header.querySelector('.header__brand');
            var menuIcon = header.querySelector('.header__menu__icon');
            var nav = header.querySelector('.header__nav');
            menuIcon.addEventListener('click', function () {
                header.classList.toggle('header--active');
                nav.classList.toggle('header__nav--active');
                this.classList.toggle('header__menu__icon--active');
                if (nav.classList.contains('header__nav--active')) {
                    nav.style.setProperty('--nav-height', 'calc(100vh - ' + (headerBrand.offsetHeight) + 'px)')
                }
            });
        }
        this.init = function () {
            this.eventListeners();
        }
        this.init();
    };
    new CustomHeader(document.querySelector('header'));

    // Discover Expertise 
    function DiscoverExpertise() {
        this.container = document.querySelector('.discover-expertise');
        if (!this.container) return;
        this.owlItems = this.container.querySelectorAll('.owl-item');

        this.getActiveItem = function () {
            for (var i = 0; i < this.owlItems.length; i++) {
                var item = this.owlItems[i].classList;
                if (item.contains('active')) {
                    this.activeItem = item;
                }
            }
            console.log(this.activeItem);
        }
        this.init = function () {
            // this.getActiveItem();
            for (var i = 0; i < this.owlItems.length; i++) {
                var content = this.owlItems[i].querySelector('.common-block-content');
                if (!this.owlItems[i].classList.contains('active')) {
                    content.style.marginLeft = '250px';
                } else {
                    content.style.marginLeft = '0';
                }
            }
        }
        this.init();
    }
    new DiscoverExpertise();
})

