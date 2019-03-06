function display_toggle(container) {
	var x = document.getElementById(container);
	if (container.style.display === "none") {
		container.style.display = "block";
		
	} else if (container.style.display === "block") {
		container.style.display = "none";
	}
	
}
function leange() {
	var n1 = document.getElementById('input1').value;
	var oper = document.getElementById('exampleFormControlSelect1').value;
	if (oper==="mm")
		var n1 = document.getElementById('mm').value = n1;
		var n1 = document.getElementById('cm').value = n1/10;
		var n1 = document.getElementById('m').value = n1/100;
		var n1 = document.getElementById('km').value = n1/1000;

}

