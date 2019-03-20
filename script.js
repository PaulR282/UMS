var x2 = ["test"];
function display_toggle(container) {
    var x = document.getElementById(container);
    if (container.style.display === "none") {
        container.style.display = "block";
    } else if (container.style.display === "block") {
        container.style.display = "none";
    }
    var name=container.getAttribute("id");
    let len = x2.push(name);
    if (len > 2) {
   	x2[1].style.display ==="none"
    };
}

function laenge2() {
    var a1 = document.getElementById('input1').value;
    var a6= a1.replace(/,/, ".");
    var oper = document.getElementById('select_laenge').value;
    if (isNaN(a6)) {
        alert(a6 + ' ist keine Zahl!');
    }
    if (oper === "μm")
        var a11 = a6;
    if (oper === "mm")
        var a11 = a6 * 1000;
    if (oper === "cm")
        var a11 = a6 * 10000;
    if (oper === "dm")
        var a11 = a6 * 100000;
    if (oper === "m")
        var a11 = a6 * 1000000;
    if (oper === "km")
        var a11 = a6 * 1000000000;
    if (oper === "Yards")
        var a11 = a6 * 1000000000 / 1093.613;
    if (oper === "Zoll")
        var a11 = a6 * 1000000 / 39.37;
    if (oper === "Meilen")
        var a11 = a6 * 1000000000 * 1.609;
    if (oper === "Seemeilen")
        var a11 = a6 * 1000000000 * 1.852;
    if (oper === "Fuß")
        var a11 = a6 * 304800;
    var a20 = document.getElementById('μm').value = a11;
    var a21 = document.getElementById('mm').value = a11 / 1000;
    var a22 = document.getElementById('cm').value = a11 / 10000;
    var a23 = document.getElementById('dm').value = a11 / 100000;
    var a24 = document.getElementById('m').value = a11 / 1000000;
    var a25 = document.getElementById('km').value = a11 / 1000000000;
    var a26 = document.getElementById('Yards').value = a11 / 1000000000 * 1093.613;
    var a27 = document.getElementById('Zoll').value = a11 / 1000000 * 39.37;
    var a28 = document.getElementById('Meilen').value = a11 / 1000000000 / 1.609;
    var a29 = document.getElementById('Seemeilen').value = a11 / 1000000000 / 1.852;
    var a30 = document.getElementById('Fuß').value = a11 / 304800;
}

function flaeche2() {
    var b1 = document.getElementById('input2').value;
    var b2 = document.getElementById('input3').value;
    var b6 = b1.replace(/,/, ".");
    var b7 = b2.replace(/,/, ".");
    if (isNaN(b6) || isNaN(b7)) {

        alert(b6 + ' und ' + b7 + ' sind keine Zahlen!');
    }

    var oper = document.getElementById('select_flaeche').value;
	if (oper==="mm")
		var b11 = b6*b7;
	if (oper==="cm") 
		var b11 =b6*b7*100;
	if (oper==="dm") 
		var b11 =b6*b7*10000;
	if (oper ==="m")
		var b11 = b6*b7*1000000;
	if (oper ==="km")
		var b11 = b6*b7*100000000000;
	if (oper ==="Zoll")
		var b11 = b6*b7*645.16;
	if (oper ==="Fuß")
		var b11 = b6*b7*92303.04;
	if (oper === "Yard")
		var b11 = b6*b7*836127.36;
	if (oper === "Meile")
		var b11 = b6*b7*2590000;
	var b20 = document.getElementById('mm²').value = b11;
	var b21 = document.getElementById('cm²').value = b11/100;
	var b22 = document.getElementById('dm²').value = b11/10000;
	var b23 = document.getElementById('m²').value = b11/1000000;
	var b24 = document.getElementById('ar').value = b11/100000000;
	var b25 = document.getElementById('ha').value = b11/1000000000;
	var b26 = document.getElementById('km²').value = b11/100000000000;
	var b27 = document.getElementById('Zoll²').value = b11/645.16;
	var b28 = document.getElementById('Fuß²').value = b11/92303.04;
	var b29 = document.getElementById('Yard²').value = b11/836127.36;
	var b30 = document.getElementById('Meile²').value = b11/259000;
}




