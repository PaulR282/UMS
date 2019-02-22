function chat_display() {
	var x = document.getElementById("chat");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else if (x.style.display === "block") {
		x.style.display = "none";
	}
	
}

