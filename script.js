function display_toggle(container) {
	var x = document.getElementById(container);
	if (container.style.display === "none") {
		container.style.display = "block";
		
	} else if (container.style.display === "block") {
		container.style.display = "none";
	}
	
}

