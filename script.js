var x2 = [];
var pi = Math.PI;
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
function masse2() {
                                                       
	var d1 = document.getElementById('input7').value;
          var d7 = d1.replace(/,/, ".");
        if (isNaN(d7)) {
     
        alert(d7 +' ist keine Zahl!');
      }

	var oper = document.getElementById('select_masse').value;
	if (oper==="mg")
		var d11 = d7;
	if (oper==="g") 
		var d11 =d7*1000;
	if (oper==="kg") 
		var d11 =d7*1000000;
	if (oper ==="t")
		var d11 = d7*1000000000;
	if (oper ==="Pfund(lb)")
		var d11 = d7*453592.37;
	if (oper ==="Unze(oz")
		var d11 = d7*28349.523;

	var d20 = document.getElementById('mg').value = d11;
	var d21 = document.getElementById('g').value = d11/1000;
	var d22 = document.getElementById('kg').value = d11/1000000;
	var d23 = document.getElementById('t').value = d11/1000000000;
	var d24 = document.getElementById('Pfund(lb)').value = d11/453592.37;
	var d25 = document.getElementById('Unze(oz)').value = d11/28349.523;
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
		var b11 =b6*b7*10;
	if (oper==="dm") 
		var b11 =b6*b7*100;
	if (oper ==="m")
		var b11 = b6*b7*1000;
	if (oper ==="km")
		var b11 = b6*b7*1000000;
	if (oper ==="Zoll")
		var b11 = b6*b7*25.4;
	if (oper ==="Fuß")
		var b11 = b6*b7*3;
	if (oper === "Yard")
		var b11 = b6*914.4;
	if (oper === "Meile")
		var b11 = b6*b7*1.609000000;
	var b20 = document.getElementById('mm²').value = b11;
	var b21 = document.getElementById('cm²').value = b11/100;
	var b22 = document.getElementById('dm²').value = b11/10000;
	var b23 = document.getElementById('m²').value = b11/1e+6;
	var b24 = document.getElementById('ar').value = b11/1e+8;
	var b25 = document.getElementById('ha').value = b11/1e+10;
	var b26 = document.getElementById('km²').value = b11/1e+12;
	var b27 = document.getElementById('Zoll²').value = b11/645.16;
	var b28 = document.getElementById('Fuß²').value = b11/92303.04;
	var b29 = document.getElementById('Yard²').value = b11/836127.36;
	var b30 = document.getElementById('Meile²').value = b11/2.59e+12;
}
function winkel2() {

	var g1 = document.getElementById('input10').value;
        var g7  = g1.replace(/,/, ".");
        if (isNaN(g7))  {
     
        alert(g7+ ' ist keine Zahl!');
      }
	var oper = document.getElementById('select_winkel').value;
	if (oper==="Grad")
		var g11 = g7;
	if (oper==="Radiant") 
		var g11 = g7*(180/pi);
	
	var g20 = document.getElementById('Grad').value = g11;
	var g21 = document.getElementById('Radiant').value = g11 * (pi/180);
}
function geschwindigkeit2() {
    var i1 = document.getElementById('input12').value;
    var i6 = i1.replace(/,/, ".");
    if (isNaN(i6)) 
 {

        alert(i6 + 'Ist keine Zahl!');
    }

    var oper = document.getElementById('select_geschwindigkeit').value;
	if (oper==="m/s")
		var i11 = i6;
	if (oper==="Fuß/s") 
		var i11 =i6/3.281;
	if (oper==="km/h") 
		var i11 =i6/3.6;
	if (oper ==="Meilen/h")
		var i11 = i6/2.237;
	if (oper ==="Knoten")
		var i11 = i6/1.944;
	var i20 = document.getElementById('m/s').value = i11;
	var i21 = document.getElementById('Fuß/s').value = i11*3.281;
	var i22 = document.getElementById('km/h').value = i11*3.6;
	var i23 = document.getElementById('Meilen/h').value = i11*2.237;
	var i24 = document.getElementById('Knoten').value = i11*1.944;
}
function volumen2() {

	var c1 = document.getElementById('input4').value;
	var c2 = document.getElementById('input5').value;
	var c3 = document.getElementById('input6').value;
        var c6 = c1.replace(/,/, ".");
        var c7 = c2.replace(/,/, ".");
        var c8 = c3.replace(/,/, ".");
        if (isNaN(c6)|| isNaN(c7)||isNaN(c8)) {
     
        alert(c6 +' und' +c7+ ' und' +c8+ ' sind keine Zahl!');
      }
	var oper = document.getElementById('select_volumen').value;
	
	if (oper ==="mm")
		var c11 =  c6*c7*c8;
	if (oper ==="cm")
		var c11 =  c6*c7*c8*1000;
	if (oper ==="dm")
		var c11 =  c6*c7*c8*1e+6;
	if (oper ==="m")
		var c11 =  c6*c7*c8*1e+9;
	if (oper ==="Zoll")
		var c11 =  c6*c7*c8*16387.064;
	if (oper ==="Fuß")
		var c11 =  c6*c7*c8*2.832e+7;
	if (oper === "Yard")
		var c11 =  c6*c7*c8*7.645549e+8;
	var c23 = document.getElementById('ml').value = c11;
	var c24 = document.getElementById('dl').value = c11/100;
	var c25 = document.getElementById('L').value = c11/1000;
	var c26 = document.getElementById('mm³').value = c11;
	var c27 = document.getElementById('cm³').value = c11/1000;
	var c28 = document.getElementById('dm³').value = c11/1000000;
	var c33 = document.getElementById('m³').value = c11/1000000000;
	var c29 = document.getElementById('Gallonen').value = c11/3785000;
	var c30 = document.getElementById('Zoll³').value = c11/16387.076;
	var c31 = document.getElementById('Fuß³').value = c11/28316846.592;
	var c32 = document.getElementById('Yard³').value = c11/764554900;
}
function druck2() {
    var j1 = document.getElementById('input13').value;
    var j6 = j1.replace(/,/, ".");
 
    if (isNaN(j6)) 
	{

        alert(j6 + 'ist keine Zahl!');
    }

    var oper = document.getElementById('select_druck').value;
	if (oper==="Pa")
		var j11 =j6;
	if (oper==="Bar") 
		var j11 =j6*100000;
	if (oper==="Torr") 
		var j11 =j6*133.322;
	if (oper ==="PhA")
		var j11 = j6*101325;
	if (oper ==="lbf/in²")
		var j11 = j6*6894.757;

	var j20 = document.getElementById('Pa').value = j11;
	var j21 = document.getElementById('Bar').value = j11/100000;
	var j22 = document.getElementById('Torr').value = j11/133.322;
	var j23 = document.getElementById('PhA').value = j11/101325;
	var j24 = document.getElementById('lbf/in²').value = j11/6894.757;
}
// done ^

function temperatur2() {
    var h1 = document.getElementById('input11').value;
    var h6 = h1.replace(/,/, ".");
    if (isNaN(h6)) {

        alert(h6+'ist keine Zahl!');
    }
    var oper = document.getElementById('select_temperatur').value;
	if (oper==="C")
		var h11 = h6;
	if (oper==="K") 
		var h11 = h6+273.15;
	if (oper==="F") 
		var h11 = (h6/1.8)-32;
	var h20 = document.getElementById('°C').value = h6;
	var h21 = document.getElementById('K').value = h6-273.15;
	var h22 = document.getElementById('°F').value = h6*1.8+32;
}																
function waehrung2() {
	var euriusd = 1.124;
	var usdieur = 0.89;
	var m1 = document.getElementById('input17').value;
        var m6  = m1.replace(/,/, ".");
        if (isNaN(m6))  {
     
        alert(m6+ ' ist keine Zahl!');
      }
	var oper = document.getElementById('select_waehrung').value;
	if (oper==="€") {
		var m11 = m6;
		var m7 = m6*1.124;
	}
	if (oper==="$")  {
		var m11 = m7;
		var m6 = m7*0.89;
		alert(oper + m11 + m7+ m6)
	}
	var m20 = document.getElementById('€').value = m6;
	var m21 = document.getElementById('$').value = m7;
}

