import $ from 'jquery'
import bird from '../images/bird.jpg'
import squirrel from '../images/squirrel.jpg'
import '../css/style.css'
import '../css/normalize.css'


$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});

$('#image_bird').attr("src", bird);
$('#image_spuirrel').attr("src", squirrel);