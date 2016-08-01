
// TILES

var words = $('.tile-words').text().split(' ');
$('p.tile-words').empty();
$.each(words, function (i, v) {
	$('.tile-words').append($('<span class="tile">').text(v));
});

// INTERACTIVE THEME BG

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