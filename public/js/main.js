
// TILES

// http://www.grasmash.com/article/jquery-wrap-each-word-element-unique-span-tag
$('.tile-words').each(function(){
var text = $(this).text().split(' ');
  for( var i = 0, len = text.length; i < len; i++ ) {
    text[i] = '<span class="tile word-' + i + '">' + text[i] + '</span>';
  }
  $(this).html(text.join(' '));
  });

// Maxime Caly
// $('.tile-words').each(function(){
// var text = $(this).text().split(' ')
// var html = ''
//   text.forEach(function(el){
//    html += '<span class="tile word-' + el + '">' + el + '</span>'
//   })
//   $(this).html(html)
// })

// SORTABLE JQUERY UI

$( function() {
  $( ".tile-words" ).sortable({
    placeholder: "tile-highlight",
    delay: 0
  });
  $( ".tile-words" ).disableSelection();
} );


// INTERACTIVE THEME BG

// http://codepen.io/chrisboon27/pen/rEDIC
// $(document).ready(function() {
// 	var movementStrength = 25;
// 	var height = movementStrength / $(window).height();
// 	var width = movementStrength / $(window).width();
// 	$(".theme-feature-bg").mousemove(function(e){
// 	          var pageX = e.pageX - ($(".theme-feature-bg").width() / 2);
// 	          var pageY = e.pageY - ($(".theme-feature-bg").height() / 2);
// 	          var newvalueX = width * pageX * -1;
// 	          var newvalueY = height * pageY * -1;
// 	          $('.theme-feature-bg').css("background-position", newvalueX+"px "+newvalueY+"px");
// 	});
// });
