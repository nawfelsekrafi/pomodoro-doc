var slides = $(".iphone-pic"), // cache slides
  counter = 0; // global counter
  slides.eq(counter).addClass("show");

setInterval(function () {
  slides.removeClass("show"); // remove active class
  slides.eq(counter).addClass("show"); // add active class
  counter++;

  if (counter == slides.length) counter = 0; // reset counter after last slide
}, 3000);

var ipadSlides = $(".ipad-pic"), // cache slides
  ipadCounter = 0; // global counter
  ipadSlides.eq(ipadCounter).addClass("show");
setInterval(function () {
  ipadSlides.removeClass("show"); // remove active class
  ipadSlides.eq(ipadCounter).addClass("show"); // add active class
  ipadCounter++;

  if (ipadCounter == ipadSlides.length) ipadCounter = 0; // reset counter after last slide
}, 3000);
