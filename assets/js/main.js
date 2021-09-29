$(document).ready(function() {

    $('#two').poptrox({
        popupCloserBackgroundColor: '#BBB59B',
        popupPadding: 0,
        overlayColor: '#2c2c2c',
        overlayOpacity: 0.85,
        popupCloserText: '×',
        popupLoaderText: '***',
        selector: 'a',
        usePopupCaption: false,
        usePopupEasyClose: false,
        usePopupNav: true,
        popupCloserTextColor: ' #3D3A33',
        popupCloserTextSize: '30px',
    });

    $('#one').poptrox({
        popupCloserBackgroundColor: '#BBB59B',
        popupPadding: 0,
        overlayColor: '#2c2c2c',
        overlayOpacity: 0.85,
        popupCloserText: '×',
        popupLoaderText: '***',
        selector: 'a',
        usePopupCaption: false,
        usePopupEasyClose: false,
        usePopupNav: true,
        popupCloserTextColor: ' #3D3A33',
        popupCloserTextSize: '30px',
    });

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    navBarScroll();



    const options = {
        root: null,
        threshold: 0.15,
        rootMargin: "-50% 0% 0% 0%"
    };

    const observerProjects = new IntersectionObserver(function(entrie) {
        let items = document.querySelectorAll(".contact-sites i");
        if (entrie[0].isIntersecting) {
            items.forEach(element => {
                element.style.color = "#BBB59B";
            });
            document.querySelector(".mail a").style.color = "#BBB59B";
            document.querySelectorAll(".side-shape").forEach(element => {
                element.style.backgroundColor = "#BBB59B";
            });
        } else {
            items.forEach(element => {
                element.style.color = "#3D3A33";
            });
            document.querySelector(".mail a").style.color = "#3D3A33";
            document.querySelectorAll(".side-shape").forEach(element => {
                element.style.backgroundColor = "#3D3A33";
            });
        }




    }, options)

    var target = document.querySelector('#projects');

    observerProjects.observe(target)

});

function navBarScroll() {
    el_autohide = document.querySelector("#navbar");

    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector("#navbar").offsetHeight;

    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            } else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
        // window.addEventListener
    }
}