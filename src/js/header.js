document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.link');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            var targetId = link.getAttribute('href').substring(1); 
            var targetSection = document.getElementById(targetId);
            var targetPosition = targetSection.offsetTop;

            var scrollOptions = {
                top: targetPosition,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);
        });
    });
});
