var navLogo = document.getElementById('nav-logo');
var screenMaxWidth = window.matchMedia("(max-width: 575.98px)");

function logoChange(x) {
    if (x.matches) { // If media query matches
        navLogo.src="assets/logo-transparent2.png";
    } else {
        navLogo.src="assets/logo-transparent3.png"
    }
}

function adjustCarouselMargin(){
	var headerHeight = $("header").css("height");
	$("main").css("margin-top", headerHeight);
	$("header").css("top", 0);
}

logoChange(screenMaxWidth); // Call listener function at run time
screenMaxWidth.addListener(logoChange); // Attach listener function on state changes

adjustCarouselMargin()
window.onresize = function(){adjustCarouselMargin()};
