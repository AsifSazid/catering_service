document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    var currentURL = window.location.pathname;

    // Get all nav links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each nav link
    navLinks.forEach(function (link) {
        // Get the href attribute of the link
        var href = link.getAttribute('href');
        // Extract the relative path from the href attribute
        var relativePath = href.substring(href.lastIndexOf('/') + 1);

        // Check if the current page URL matches the relative path
        if (currentURL.endsWith(relativePath)) {
            // Add the 'active' class to the parent list item
            link.parentElement.classList.add('active');
        }
    });
});