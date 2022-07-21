// changing nav state
window.addEventListener('scroll', () => {
	// when we scroll down or in the y axis we change the color of the nav
	document
		.querySelector('nav')
		.classList.toggle('window-scroll', window.scrollY > 200);
});
