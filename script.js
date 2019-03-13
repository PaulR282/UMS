function display_toggle(container) {
	var x = document.getElementById(container);
	if (container.style.display === "none") {
		container.style.display = "block";
	} else if (container.style.display === "block") {
		container.style.display = "none";
	}
	
}
function leange() {
	var b0 = document.getElementById('input1').value;
	var b = b0.replace(/,/, ".");
	var oper = document.getElementById('exampleFormControlSelect1').value;
	if (isNaN(b)) {
        alert(b + ' ist keine Zahl!');
      }
	if (oper==="μm")
		var e = b;
	if (oper==="mm") 
		var e =b*1000;
	if (oper==="cm") 
		var e =b*10000;
	if (oper ==="dm")
		var e = b*100000;
	if (oper ==="m")
		var e = b*1000000;
	if (oper ==="km")
		var e = b*1000000000;
	if (oper ==="Yards")
		var e = b*1000000000/1093.613;
	if (oper ==="Zoll")
		var e = b*1000000/39.37;
	if (oper ==="Meilen")
		var e = b*1000000000*1.609;
	if (oper === "Seemeilen")
		var e = b*1000000000*1.852;
	if (oper === "Fuß")
		var e = b*304800;
	var a1 = document.getElementById('μm').value = e;
	var a2 = document.getElementById('mm').value = e/1000;
	var a3 = document.getElementById('cm').value = e/10000;
	var a4 = document.getElementById('dm').value = e/100000;
	var a5 = document.getElementById('m').value = e/1000000;
	var a6 = document.getElementById('km').value = e/1000000000;
	var a7 = document.getElementById('Yards').value = e/1000000000*1093.613;
	var a8 = document.getElementById('Zoll').value = e/1000000*39.37;
	var a9 = document.getElementById('Meilen').value = e/1000000000/1.609;
	var a10 = document.getElementById('Seemeilen').value = e/1000000000/1.852;
	var a11 = document.getElementById('Fuß').value = e/304800;
}

