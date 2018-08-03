window.onload = function() {
	var btnOpen = document.querySelector('.header__burger');
	var burgerRotate = document.querySelector('.burger__rotate');
	var btnClose = document.querySelector('.header__burger-close');
	var menu = document.querySelector('.header__nav');


	btnOpen.onclick = function() {
		menu.classList.toggle('show');
	};

	btnClose.onclick = function() {
		menu.classList.toggle('show');
	};

	
	//parallax
	
};