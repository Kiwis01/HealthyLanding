function nav() {
	document.getElementById("menu-icon").classList.toggle("menu-icon-open");
	document.getElementById("close-icon").classList.toggle("close-icon-open");

	document.getElementById("nav").classList.toggle("open");
	
}

// Dark Mode Toggle Script
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
});