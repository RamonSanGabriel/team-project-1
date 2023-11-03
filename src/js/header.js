document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.link');

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                menuLinks.forEach(function(menuLink) {
                    menuLink.classList.remove('active');
                });

                var targetId = entry.target.getAttribute('id');
                var correspondingLink = document.querySelector('a[href="#' + targetId + '"]');
                correspondingLink.classList.add('active');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
    });

    menuLinks.forEach(function(link) {
        var targetId = link.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            observer.observe(targetSection);
        }

        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetPosition = targetSection.offsetTop - 90;

            var scrollOptions = {
                top: targetPosition,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);
        });
    });

    var headerObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                menuLinks.forEach(function(menuLink) {
                    menuLink.classList.remove('active');
                });
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
    });

    var header = document.getElementById('header');
    if (header) {
        headerObserver.observe(header);
    };
});

const body = document.getElementById('home');
const scrollThreshold = 200; 

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});
