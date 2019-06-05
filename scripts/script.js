let body = $("body");
let skillsTopOffset = $("#skills").offset().top;

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


let icons = $(".hobbyIcons").children();
let iconsText = $(".facts").children();
let length = iconsText.length;

for (let i = 0; i < length; i++) {
	$(icons[i]).click(function() {
		if (!$(iconsText[i]).hasClass("hide")) {
			$(iconsText[i]).addClass("hide");
		} else {
			$(iconsText).addClass("hide");
			$(iconsText[i]).removeClass("hide");
		}
		return false;
	});
}


let filters = $("#filters").children();
let trvGal = $("#travelGallery");
let prjGal = $("#projectGallery");
let pstGal = $("#pastGallery");

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