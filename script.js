var x2 = [];
function display_toggle(container) {
    var x = document.getElementById(container);
    if (container.style.display === "none") {
        container.style.display = "block";
    } else if (container.style.display === "block") {
        container.style.display = "none";
    }
    var name=container.getAttribute("id");
    let len = x2.push(name);
    if (len > 1) {
    	var close = document.getElementById(x2[0])
   	 	close.style.display ="none";
   	 	x2.shift();
  

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

        alert(b6 + ' und ' + b7 + ' sind keine Zahl!');
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
		var b11 = b6*b7*100000000;
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
	var b26 = document.getElementById('km²').value = b11/1000000000;
	var b27 = document.getElementById('Zoll²').value = b11/645.16;
	var b28 = document.getElementById('Fuß²').value = b11/92303.04;
	var b29 = document.getElementById('Yard²').value = b11/836127.36;
	var b30 = document.getElementById('Meile²').value = b11/259000;
}
function temperatur2() {
    var h1 = document.getElementById('input10').value;
    var h6 = h1.replace(/,/, ".");
    if (isNaN(h6)) {

        alert(h6+'ist keine Zahl!');
    }
    var oper = document.getElementById('select_temperatur').value;
	if (oper==="°C")
		var h11 = h6;
	if (oper==="K") 
		var h11 = h6-273.15;
	if (oper==="°F") 
		var h11 = h6*1.8+32;
	var h20 = document.getElementById('°C').value = h11;
	var h21 = document.getElementById('K').value = h11+273.15;
	var h22 = document.getElementById('°F').value = h11/1.8-32;
}		
function winkel2() {

	var g1 = document.getElementById('input9').value;
        var g7  = g1.replace(/,/, ".");
        if (isNaN(g7))  {
     
        alert(g7+ ' ist keine Zahl!');
      }
	var oper = document.getElementById('select_winkel').value;
	if (oper==="Grad")
		var g11 =  g7;
	if (oper==="Radiant") 
		var g11 = g7*1*$degree * Math.PI / 180;
	if (oper==="%") 
		var g11 = 360*g7/100;	
	var g20 = document.getElementById('Grad').value = g7;
	var g21 = document.getElementById('Radiant').value = g7/1/$degree / Math.PI * 180;
	var g22 = document.getElementById('%').value = 360/g7*100;

}
function zeit2() {

	var e1 = document.getElementById('input8').value;
        var e6  = e1.replace(/,/, ".");
        if (isNaN(e6))  {
     
        alert(e6+ ' ist keine Zahl!');
      }
	var oper = document.getElementById('select_zeit').value;
	if (oper==="ns")
		var e11 =  e6/1000000;
	if (oper==="ms")
		var e11 =  e6;
	if (oper==="s") 
		var e11 = e6*1000;
	if (oper==="min") 
		var e11 = e6*60000;
	if (oper ==="Stunden")
		var e11 =  e6*3600000;
	if (oper ==="Tage")
	        var e11 =  e6*86400000;
	if (oper ==="Wochen")
		var e11 =  e6*604800000;
	if (oper ==="Jahre")
		var e11 =  e6*31540000000;
	var e20 = document.getElementById('ns').value = e11*1000000;
	var e21 = document.getElementById('ms').value = e11;
	var e22 = document.getElementById('s').value = e11/1000;
	var e23 = document.getElementById('min').value = e11/60000;
	var e24 = document.getElementById('Stunden').value = e11/3600000;
	var e25 = document.getElementById('Tage').value = e11/86400000;
	var e26 = document.getElementById('Wochen').value = e11/604800000;
	var e27 = document.getElementById('Jahre').value = e11/31540000000;




}


function volumen2() {

	var c1 = document.getElementById('input4').value;
	var c2 = document.getElementById('input5').value;
	var c3 = document.getElementById('input6').value;
        var c6 = c1.replace(/,/, ".");
        var c7 = c2.replace(/,/, ".");
        var c8 = c3.replace(/,/, ".");
        if (isNaN(c6) || isNaN(c7)||isNaN(c8)) {
        alert(c6 +' und' +c7+ ' und' +c8+ ' sind keine Zahl!');
      }
	var oper = document.getElementById('select.volumen').value;
	if (oper==="ml")
		var c11 =  c*c2*c3;
	if (oper==="dl") 
		var c11 = c*c2*c3*10;
	if (oper==="L") 
		var c11 = c*c2*c3*1000;
	if (oper ==="mm³")
		var c11 =  c*c2*c3*100000;
	if (oper ==="cm³")
		var c11 =  c*c2*c3*10000000;
	if (oper ==="dm³")
		var c11 =  c*c2*c3*10000000000;
	if (oper ==="Gallonen")
		var c11 =  c*c2*c3/3785.412;
	if (oper ==="Zoll³")
		var c11 =  c*c2*c3/16.387;
	if (oper ==="Fuß³")
		var c11 =  c*c2*c3/28316.847;
	if (oper === "Yards³")
		var c11 =  c*c2*c3/1000000;
	var c20 = document.getElementById('ml').value = c11;
	var c21 = document.getElementById('dl').value = c11*10;
	var c22 = document.getElementById('L').value = c11*1000;
	var c23 = document.getElementById('mm³').value = c11;
	var c24 = document.getElementById('cm³').value = c11/1000000;
	var c25 = document.getElementById('dm³').value = c11/1000000000;
	var c26 = document.getElementById('Gallonen').value = c11/1000000000*1093.613;
	var c27 = document.getElementById('Zoll³').value = c11/1000000*39.37;
	var c28 = document.getElementById('Fuß³').value = c11/1000000000/1.609;
	var c29 = document.getElementById('Yards³').value = c11/1000000000/1.852;

}






