var hamburger = document.querySelector(".nav-toggle");
var body = document.body;
var page = document.documentElement;

function doToggle(){
   body .classList.toggle('menu-open');
   page .classList.toggle('noscroll');
}
hamburger .addEventListener('click',doToggle);


window.onload = () => {
   window.addEventListener("scroll", () => {
       let hauteur = document.documentElement.scrollHeight - window.innerHeight

       let position = window.scrollY

       let largeur = document.documentElement.clientWidth

       let barre = position / hauteur * largeur

       document.getElementById("progress").style.width = barre+"px"
   })
}

AOS.init({
   duration: 1200,
 })


 $(document).ready(function() {

   $(window).on("load scroll", function() {
     var parallaxElement = $(".parallax_scroll"),
       parallaxQuantity = parallaxElement.length;
     window.requestAnimationFrame(function() {
       for (var i = 0; i < parallaxQuantity; i++) {
         var currentElement = parallaxElement.eq(i),
           windowTop = $(window).scrollTop(),
           elementTop = currentElement.offset().top,
           elementHeight = currentElement.height(),
           viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
           scrolled = windowTop - elementTop + viewPortHeight;
         currentElement.css({
           transform: "translate3d(0," + scrolled * 0.1 + "px, 0)"
         });
       }
     });
   });
 });

 $(document).ready(function() {

   $(window).on("load scroll", function() {
     var parallaxElement = $(".parallax_scroll1"),
       parallaxQuantity = parallaxElement.length;
     window.requestAnimationFrame(function() {
       for (var i = 0; i < parallaxQuantity; i++) {
         var currentElement = parallaxElement.eq(i),
           windowTop = $(window).scrollTop(),
           elementTop = currentElement.offset().top,
           elementHeight = currentElement.height(),
           viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
           scrolled = windowTop - elementTop + viewPortHeight;
         currentElement.css({
           transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
         });
       }
     });
   });
 });

 
 $(document).ready(function() {

  $(window).on("load scroll", function() {
    var parallaxElement = $("#color1"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * 0.05 + "px, 0)"
        });
      }
    });
  });
});

$(document).ready(function() {

  $(window).on("load scroll", function() {
    var parallaxElement = $("#color2"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.05 + "px, 0)"
        });
      }
    });
  });
});
 
$(document).ready(function() {

  $(window).on("load scroll", function() {
    var parallaxElement = $("#color3"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * 0.05 + "px, 0)"
        });
      }
    });
  });
});

$(document).ready(function() {

  $(window).on("load scroll", function() {
    var parallaxElement = $(".cc1b"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * 0.2 + "px, 0)"
        });
      }
    });
  });
});

$(document).ready(function() {

  $(window).on("load scroll", function() {
    var parallaxElement = $(".cc1bb"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.1 + "px, 0)"
        });
      }
    });
  });
});






 





