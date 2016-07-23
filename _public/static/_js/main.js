// SLICK - STORIES

// $(document).ready(function(){
//   $('.blocks-slide').slick({
//     infinite: false,
//     dots: true,
//     speed: 100,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   })
// })

// ================================================================================

// STICKY NAV - DEFAULT

// $(window).on('scroll', function() {
//   scrollPosition = $(this).scrollTop()
//   if (scrollPosition >= $('#hero').height()) {
//     $("#nav").addClass("nav-fixed").removeClass("nav-static")
//   } else {
//     $("#nav").addClass("nav-static").removeClass("nav-fixed")
//   }
// })

// ================================================================================

// HOME - MOBILE NAV EXPANDED

// $(document).ready(function(){
//   $("#mobile-nav-button").click(function(){
//     $("#navigation-home").toggleClass("mobile-nav-expanded")
//     if ($("#icon-nav-mobile").hasClass("icon-nav-hide")) {
//       $(this).addClass("icon-nav-hide")
//       $("#icon-nav-mobile-close").removeClass("icon-nav-hide")
//     } else {
//       $(this).removeClass("icon-nav-hide")
//       $("#icon-nav-mobile-close").addClass("icon-nav-hide")
//     }
//   })
// })

// DEFAULT - MOBILE NAV EXPANDED

// $(document).ready(function(){
//   $("#mobile-nav-button").click(function(){
//     $("#navigation-default").toggleClass("mobile-nav-expanded")
//     $("#icon-nav-mobile").toggleClass("icon-nav-hide")
//     $("#icon-nav-mobile-close").toggleClass("icon-nav-hide")
//   })
// })

// ================================================================================

// INTERACTIVE BACKGROUND

// http://www.onextrapixel.com/2014/04/09/create-an-interactive-moving-backgroundobject-that-reacts-to-viewers-cursor/
// $(".bg").interactive_bg({
//    strength: 25,
//    scale: 1.05,
//    animationSpeed: "100ms",
//    contain: true,
//    wrapContent: false
//  });

// http://codepen.io/chrisboon27/pen/rEDIC
$(document).ready(function() {
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$(".theme-feature").mousemove(function(e){
	          var pageX = e.pageX - ($(".theme-feature").width() / 2);
	          var pageY = e.pageY - ($(".theme-feature").height() / 2);
	          var newvalueX = width * pageX * -1;
	          var newvalueY = height * pageY * -1;
	          $('.theme-feature').css("background-position", newvalueX+"px "+newvalueY+"px");
	});
});

// MAX

// var bg = document.querySelector('.theme-feature')
// bg.style.backgroundSize = "200%";
// var containerWidth = bg.offsetWidth
// var containerHeight = bg.offsetHeight
// window.addEventListener('mousemove', function(e) {
//     var amountX = (e.pageX / 500)
//     var amountY = (e.pageY / 250)
//     bg.style.backgroundPosition = amountX + '% ' + amountY + '%'
// })


