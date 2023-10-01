/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        // if (this.hash !== "") {

        //       event.preventDefault();

        //       var hash = this.hash;
        //       var scrollOffset = ($(hash).offset().top);
        //       $('html, body').animate({
        //           scrollTop: scrollOffset,
        //       }, 700, function(){
        //           window.location.hash = hash;
        //       });
        // }

        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          var targetElement = document.querySelector(hash);
          targetElement.scrollIntoView({ behavior: "smooth" });
        
          // Adjust the scroll position after scrolling is complete
          setTimeout(function() {
            var scrollOffset = window.scrollY; // Subtract 30 pixels from the current scroll position
            window.scrollTo({ top: scrollOffset, behavior: "smooth" });
          }, 700); // Adjust the timeout duration if needed
        }
    });

    $(".portfolio-item").on('click', function() {
      let src = $(this).find('img').attr('src');
      window.open(src);
    });

    $(".card2__button").on('click', function() {
        let link = $(this).attr('link');
        if(link){
            window.open(link);
        }
    });
    
    $(".nav-link").on('click', () => {
        $('.navbar-toggler').addClass('collabsed');
        $('.navbar-toggler').attr('aria-expanded', 'false');
        $('#navbarSupportedContent').removeClass('show');
    })
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});
