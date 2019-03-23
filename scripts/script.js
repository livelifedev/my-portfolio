var body = $("body");
var skillsTopOffset = $("#skills").offset().top;

$(window).on("resize", function() {
      skillsTopOffset = $("#skills").offset().top;
});

$(window).scroll(function() {
	if(window.pageYOffset > skillsTopOffset - 400) {
		body.addClass("loaded");
	} else {
		body.removeClass("loaded");
	}
});


var filters = $("#filters").children();
var trvGal = $("#travelGallery");
var prjGal = $("#projectGallery");
var pstGal = $("#pastGallery");

$(filters[0]).click(function() {
	trvGal.addClass("hide");
  prjGal.removeClass("hide");
	pstGal.addClass("hide");
  return false;
});

$(filters[1]).click(function() {
	trvGal.removeClass("hide");
  prjGal.addClass("hide");
	pstGal.addClass("hide");
  return false;
});

$(filters[2]).click(function() {
	trvGal.addClass("hide");
  prjGal.addClass("hide");
	pstGal.removeClass("hide");
  return false;
});


$('[data-fancybox="gallery1"], [data-fancybox="gallery2"], [data-fancybox="gallery3"]').fancybox({
  buttons: [
    "close"
  ]
});