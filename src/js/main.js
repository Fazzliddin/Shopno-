window.onload = function() {
	var btnOpen = document.querySelector('.header__burger');
	var btnClose = document.querySelector('.header__burger-close');
	var menu = document.querySelector('.header__nav');

	btnOpen.onclick = function() {
		// alert(1);
		menu.classList.toggle('show');
		// anim.classList.toggle('anim');
	};

	btnClose.onclick = function() {
		// alert(1);
		menu.classList.toggle('show');
		// anim.classList.toggle('anim');
	};

	//parallax
	
};