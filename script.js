function display_toggle(container) {
	var x = document.getElementById(container);
	if (container.style.display === "none") {
		container.style.display = "block";
	} else if (container.style.display === "block") {
		container.style.display = "none";
	}
	
}
function leange() {
	var e = document.getElementById('input1').value;
	var oper = document.getElementById('exampleFormControlSelect1').value;
	/*alert(oper)
	alert(n1)*/
	if (oper==="μm") {
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
	if (oper==="mm") {
		var b1 = document.getElementById('μm').value = e*1000;
		var b2 = document.getElementById('mm').value = e;
		var b3 = document.getElementById('cm').value = e/10;
		var b4 = document.getElementById('dm').value = e/100;
		var b5 = document.getElementById('m').value = e/1000;
		var b6 = document.getElementById('km').value = e/1000000;
	};
	if (oper==="cm") {
		var c1 =document.getElementById('μm').value = e*10000;
		var c2 =document.getElementById('mm').value = e*10;
		var c3 =document.getElementById('cm').value = e;
		var c4 =document.getElementById('dm').value = e/10;
		var c5 =document.getElementById('m').value = e/100;
		var c6 =document.getElementById('km').value = e/100000;
	};
};

