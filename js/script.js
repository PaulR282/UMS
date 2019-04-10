

var open = [];
var pi = Math.PI;
var a50 = 0;
var b50 = 0;
var c50 = 0;
var d50 = 0;
var e50 = 0;
var f50 = 0;
var g50 = 0;
var h50 = 0;
var i50 = 0;
var j50 = 0;
var k50 = 0;
var l50 = 0;
var m50 = 0;
var n50 = 0;
var o50 = 0;
var p50 = 0;
var q50 = 0;

function display_toggle(container) {
    var current = document.getElementById(container);
    if (container.style.display === "none") {

        container.style.display = "block";
        var name = container.getAttribute("id");
        let len = open.push(name);
        if (open.length > 1) {
            var close = document.getElementById(open[0])
            close.style.display = "none";
            open.shift();
        }
    } else if (container.style.display === "block") {
        var close = document.getElementById(open[0])
        close.style.display = "none";
        open.shift();
    }

}

function laenge2() {
    a50 = a50 + 1;
    if (a50 > 1) {
        var a1 = document.getElementById('input1').value;
        var a6 = a1.replace(/,/, ".");
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
}

function zeit2() {
    e50 = e50 + 1;
    if (e50 > 1) {
        var e1 = document.getElementById('input8').value;
        var e6 = e1.replace(/,/, ".");
        if (isNaN(e6)) {

            alert(e6 + ' ist keine Zahl!');
        }
        var oper = document.getElementById('select_zeit').value;
        if (oper === "ns")
            var e11 = e6 / 1000000;
        if (oper === "ms")
            var e11 = e6;
        if (oper === "s")
            var e11 = e6 * 1000;
        if (oper === "min")
            var e11 = e6 * 60000;
        if (oper === "Stunden")
            var e11 = e6 * 3600000;
        if (oper === "Tage")
            var e11 = e6 * 86400000;
        if (oper === "Wochen")
            var e11 = e6 * 604800000;
        if (oper === "Jahre")
            var e11 = e6 * 31540000000;
        var e20 = document.getElementById('ns').value = e11 * 1000000;
        var e21 = document.getElementById('ms').value = e11;
        var e22 = document.getElementById('s').value = e11 / 1000;
        var e23 = document.getElementById('min').value = e11 / 60000;
        var e24 = document.getElementById('Stunden').value = e11 / 3600000;
        var e25 = document.getElementById('Tage').value = e11 / 86400000;
        var e26 = document.getElementById('Wochen').value = e11 / 604800000;
        var e27 = document.getElementById('Jahre').value = e11 / 31540000000;
    }
}

function masse2() {
    d50 = d50 + 1;
    if (d50 > 1) {
        var d1 = document.getElementById('input7').value;
        var d7 = d1.replace(/,/, ".");
        if (isNaN(d7)) {

            alert(d7 + ' ist keine Zahl!');
        }

        var oper = document.getElementById('select_masse').value;
        if (oper === "mg")
            var d11 = d7;
        if (oper === "g")
            var d11 = d7 * 1000;
        if (oper === "kg")
            var d11 = d7 * 1000000;
        if (oper === "t")
            var d11 = d7 * 1000000000;
        if (oper === "Pfund(lb)")
            var d11 = d7 * 453592.37;
        if (oper === "Unze(oz")
            var d11 = d7 * 28349.523;

        var d20 = document.getElementById('mg').value = d11;
        var d21 = document.getElementById('g').value = d11 / 1000;
        var d22 = document.getElementById('kg').value = d11 / 1000000;
        var d23 = document.getElementById('t').value = d11 / 1000000000;
        var d24 = document.getElementById('Pfund(lb)').value = d11 / 453592.37;
        var d25 = document.getElementById('Unze(oz)').value = d11 / 28349.523;
    }
}

function flaeche2(statefl) {
    if (statefl == 1) {
        b50 = b50 + 1;
        if (b50 > 2) {
            var b1 = document.getElementById('input2').value;
            var b2 = document.getElementById('input3').value;
            var b6 = b1.replace(/,/, ".");
            var b7 = b2.replace(/,/, ".");
            if (isNaN(b6) || isNaN(b7)) {

                alert(b6 + ' und ' + b7 + ' sind keine Zahl!');
            }

            var oper = document.getElementById('select_flaeche').value;
            if (oper === "mm")
                var b11 = b6 * b7;
            if (oper === "cm")
                var b11 = b6 * b7 * 10;
            if (oper === "dm")
                var b11 = b6 * b7 * 100;
            if (oper === "m")
                var b11 = b6 * b7 * 1000;
            if (oper === "km")
                var b11 = b6 * b7 * 1000000;
            if (oper === "Zoll")
                var b11 = b6 * b7 * 25.4;
            if (oper === "Fuß")
                var b11 = b6 * b7 * 3;
            if (oper === "Yard")
                var b11 = b6 * 914.4;
            if (oper === "Meile")
                var b11 = b6 * b7 * 1.609000000;
            var b20 = document.getElementById('mm²').value = b11;
            var b21 = document.getElementById('cm²').value = b11 / 100;
            var b22 = document.getElementById('dm²').value = b11 / 10000;
            var b23 = document.getElementById('m²').value = b11 / 1e+6;
            var b24 = document.getElementById('ar').value = b11 / 1e+8;
            var b25 = document.getElementById('ha').value = b11 / 1e+10;
            var b26 = document.getElementById('km²').value = b11 / 1e+12;
            var b27 = document.getElementById('Zoll²').value = b11 / 645.16;
            var b28 = document.getElementById('Fuß²').value = b11 / 92303.04;
            var b29 = document.getElementById('Yard²').value = b11 / 836127.36;
            var b30 = document.getElementById('Meile²').value = b11 / 2.59e+12;
        }
    } else if (statefl == 2) {
        f50 = f50 + 1;
        if (f50 > 1) {
            var f1 = document.getElementById('input9').value;
            var f6 = f1.replace(/,/, ".");
            if (isNaN(f6)) {

                alert(f6 + ' ist keine Zahl!');
            }

            var oper = document.getElementById('select_flaeche2').value;
            if (oper === "mm²")
                var f11 = f6;
            if (oper === "cm²")
                var f11 = f6 * 100;
            if (oper === "dm²")
                var f11 = f6 * 10000;
            if (oper === "m²")
                var f11 = f6 * 1000000;
            if (oper === "ar")
                var f11 = f6 * 100000000;
            if (oper === "ha")
                var f11 = f6 * 1e+10;
            if (oper === "km²")
                var f11 = f6 * 1e+12;
            if (oper === "Zoll²")
                var f11 = f6 * 645.16;
            if (oper === "Fuß²")
                var f11 = f6 * 92303.04;
            if (oper === "Yard²")
                var f11 = f6 * 836127.36;
            if (oper === "Meile²")
                var f11 = f6 * 2.59e+12;
            var f20 = document.getElementById('mm²').value = f11;
            var f21 = document.getElementById('cm²').value = f11 / 100;
            var f22 = document.getElementById('dm²').value = f11 / 10000;
            var f23 = document.getElementById('m²').value = f11 / 1e+6;
            var f24 = document.getElementById('ar').value = f11 / 1e+8;
            var f25 = document.getElementById('ha').value = f11 / 1e+10;
            var f26 = document.getElementById('km²').value = f11 / 1e+12;
            var f27 = document.getElementById('Zoll²').value = f11 / 645.16;
            var f28 = document.getElementById('Fuß²').value = f11 / 92303.04;
            var f29 = document.getElementById('Yard²').value = f11 / 836127.36;
            var f30 = document.getElementById('Meile²').value = f11 / 2.59e+12;
        }
    }

}

function winkel2() {
    g50 = g50 + 1;
    if (g50 > 1) {
        var g1 = document.getElementById('input10').value;
        var g7 = g1.replace(/,/, ".");
        if (isNaN(g7)) {

            alert(g7 + ' ist keine Zahl!');
        }
        var oper = document.getElementById('select_winkel').value;
        if (oper === "Grad")
            var g11 = g7;
        if (oper === "Radiant")
            var g11 = g7 * (180 / pi);

        var g20 = document.getElementById('Grad').value = g11;
        var g21 = document.getElementById('Radiant').value = g11 * (pi / 180);
    }
}

function geschwindigkeit2() {
    i50 = i50 + 1;
    if (i50 > 1) {
        var i1 = document.getElementById('input12').value;
        var i6 = i1.replace(/,/, ".");
        if (isNaN(i6)) {

            alert(i6 + 'Ist keine Zahl!');
        }

        var oper = document.getElementById('select_geschwindigkeit').value;
        if (oper === "m/s")
            var i11 = i6;
        if (oper === "Fuß/s")
            var i11 = i6 / 3.281;
        if (oper === "km/h")
            var i11 = i6 / 3.6;
        if (oper === "Meilen/h")
            var i11 = i6 / 2.237;
        if (oper === "Knoten")
            var i11 = i6 / 1.944;
        var i20 = document.getElementById('m/s').value = i11;
        var i21 = document.getElementById('Fuß/s').value = i11 * 3.281;
        var i22 = document.getElementById('km/h').value = i11 * 3.6;
        var i23 = document.getElementById('Meilen/h').value = i11 * 2.237;
        var i24 = document.getElementById('Knoten').value = i11 * 1.944;
    }
}

function volumen2(statev) {
    if (statev == 1) {
        c50 = c50 + 1;
        if (c50 > 3) {
            var c1 = document.getElementById('input4').value;
            var c2 = document.getElementById('input5').value;
            var c3 = document.getElementById('input6').value;
            var c6 = c1.replace(/,/, ".");
            var c7 = c2.replace(/,/, ".");
            var c8 = c3.replace(/,/, ".");
            if (isNaN(c6) || isNaN(c7) || isNaN(c8)) {

                alert(c6 + ' und' + c7 + ' und' + c8 + ' sind keine Zahl!');
            }
            var oper = document.getElementById('select_volumen').value;

            if (oper === "mm")
                var c11 = c6 * c7 * c8;
            if (oper === "cm")
                var c11 = c6 * c7 * c8 * 1000;
            if (oper === "dm")
                var c11 = c6 * c7 * c8 * 1e+6;
            if (oper === "m")
                var c11 = c6 * c7 * c8 * 1e+9;
            if (oper === "Zoll")
                var c11 = c6 * c7 * c8 * 16387.064;
            if (oper === "Fuß")
                var c11 = c6 * c7 * c8 * 2.832e+7;
            if (oper === "Yard")
                var c11 = c6 * c7 * c8 * 7.645549e+8;
            var c23 = document.getElementById('ml').value = c11;
            var c24 = document.getElementById('dl').value = c11 / 100;
            var c25 = document.getElementById('l').value = c11 / 1000;
            var c26 = document.getElementById('mm³').value = c11 * 1000;
            var c27 = document.getElementById('cm³').value = c11;
            var c28 = document.getElementById('dm³').value = c11 / 1000;
            var c33 = document.getElementById('m³').value = c11 / 1000000;
            var c29 = document.getElementById('Gallonen(US)').value = c11 / 3785;
            var c30 = document.getElementById('Zoll³').value = c11 / 16.387076;
            var c31 = document.getElementById('Fuß³').value = c11 / 28316.846592;
            var c32 = document.getElementById('Yard³').value = c11 / 764554.9;
        }
    } else if (statev == 2) {
        q50 = q50 + 1;
        if (q50 > 1) {
            var q1 = document.getElementById('input20').value;
            var q6 = q1.replace(/,/, ".");
            if (isNaN(q6)) {

                alert(q6 + ' ist keine Zahl!');
            }
            var oper = document.getElementById('select_volumen2').value;
            if (oper === "ml")
                var q11 = q6;
            if (oper === "dl")
                var q11 = q6 * 100;
            if (oper === "l")
                var q11 = q6 * 1000;
            if (oper === "mm³")
                var q11 = q6 / 1000;
            if (oper === "cm³")
                var q11 = q6;
            if (oper === "dm³")
                var q11 = q6 * 1000;
            if (oper === "m³")
                var q11 = q6 * 1000000;
            if (oper === "Gallonen(US)")
                var q11 = q6 * 3785;
            if (oper === "Zoll³")
                var q11 = q6 * 16.387076;
            if (oper === "Fuß³")
                var q11 = q6 * 28316.846592;
            if (oper === "Yard³")
                var q11 = q6 * 764554.9;


            var q23 = document.getElementById('ml').value = q11;
            var q24 = document.getElementById('dl').value = q11 / 100;
            var q25 = document.getElementById('l').value = q11 / 1000;
            var q26 = document.getElementById('mm³').value = q11 * 1000;
            var q27 = document.getElementById('cm³').value = q11;
            var q28 = document.getElementById('dm³').value = q11 / 1000;
            var q33 = document.getElementById('m³').value = q11 / 1000000;
            var q29 = document.getElementById('Gallonen(US)').value = q11 / 3785;
            var q30 = document.getElementById('Zoll³').value = q11 / 16.387076;
            var q31 = document.getElementById('Fuß³').value = q11 / 28316.846592;
            var q32 = document.getElementById('Yard³').value = q11 / 764554.9;
        }
    }

}

function druck2() {
    j50 = j50 + 1;
    if (j50 > 1) {
        var j1 = document.getElementById('input13').value;
        var j6 = j1.replace(/,/, ".");

        if (isNaN(j6)) {

            alert(j6 + 'ist keine Zahl!');
        }

        var oper = document.getElementById('select_druck').value;
        if (oper === "Pa")
            var j11 = j6;
        if (oper === "Bar")
            var j11 = j6 * 100000;
        if (oper === "Torr")
            var j11 = j6 * 133.322;
        if (oper === "PhA")
            var j11 = j6 * 101325;
        if (oper === "lbf/in²")
            var j11 = j6 * 6894.757;

        var j20 = document.getElementById('Pa').value = j11;
        var j21 = document.getElementById('Bar').value = j11 / 100000;
        var j22 = document.getElementById('Torr').value = j11 / 133.322;
        var j23 = document.getElementById('PhA').value = j11 / 101325;
        var j24 = document.getElementById('lbf/in²').value = j11 / 6894.757;
    }
}

function arbeit2() {
    l50 = l50 + 1;
    if (l50 > 1) {
        var l1 = document.getElementById('input15').value;
        var l6 = l1.replace(/,/, ".");
        if (isNaN(l6)) {

            alert(l6 + 'ist keine Zahl!');
        }
        var oper = document.getElementById('select_arbeit').value;
        if (oper === "J")
            var l11 = l6;
        if (oper === "kJ")
            var l11 = l6 * 1000;
        if (oper === "cal")
            var l11 = l6 * 4.184;
        if (oper === "kcal")
            var l11 = l6 * 4184;
        if (oper === "Wh")
            var l11 = l6 * 3600;
        if (oper === "kWh")
            var l11 = l6 * 3600000;
        var l20 = document.getElementById('J').value = l11;
        var l21 = document.getElementById('kJ').value = l11 / 1000;
        var l22 = document.getElementById('cal').value = l11 / 4.184;
        var l23 = document.getElementById('kcal').value = l11 / 4184;
        var l24 = document.getElementById('Wh').value = l11 / 3600;
        var l25 = document.getElementById('kWh').value = l11 / 3600000;
    }
}

function kraft2() {
    k50 = k50 + 1;
    if (k50 > 1) {
        var k1 = document.getElementById('input14').value;
        var k6 = k1.replace(/,/, ".");
        if (isNaN(k6)) {

            alert(k6 + 'Ist keine Zahl!');
        }

        var oper = document.getElementById('select_kraft').value;
        if (oper === "N")
            var k11 = k6;
        if (oper === "kN")
            var k11 = k6 * 1000;
        if (oper === "kgf")
            var k11 = k6 * 9.807;
        if (oper === "lbf")
            var k11 = k6 * 4.448;
        var k20 = document.getElementById('N').value = k11;
        var k21 = document.getElementById('kN').value = k11 / 1000;
        var k22 = document.getElementById('kgf').value = k11 / 9.807;
        var k23 = document.getElementById('lbf').value = k11 / 4.448;
    }
}

function temperatur2() {
    h50 = h50 + 1;
    if (h50 > 1) {
        var h1 = document.getElementById('input11').value;
        var h6 = h1.replace(/,/, ".");
        if (isNaN(h6)) {

            alert(h6 + 'ist keine Zahl!');
        }
        var oper = document.getElementById('select_temperatur').value;
        if (oper === "°C")
            var h11 = h6;
        if (oper === "K")
            var h11 = h6 - 273.15;
        if (oper === "°F")
            var h11 = (h6 - 32) / 1.8;
        var h20 = document.getElementById('°C').value = h11;
        var h21 = document.getElementById('K').value = h11 - (-273.15);
        var h22 = document.getElementById('°F').value = h11 * 1.8 + 32;
    }
}

function daten2() {
    p50 = p50 + 1
    if (p50 > 1) {
        var p1 = document.getElementById('input19').value;
        var p6 = p1.replace(/,/, ".");
        if (isNaN(p6)) {

            alert(p6 + 'ist keine Zahl!');
        }
        var oper = document.getElementById('select_daten').value;
        if (oper === "b")
            var p11 = p6;
        if (oper === "kb")
            var p11 = p6 * 1000;
        if (oper === "mb")
            var p11 = p6 * 1000000;
        if (oper === "gb")
            var p11 = p6 * 1000000000;
        if (oper === "tb")
            var p11 = p6 * 1000000000000;
        var p20 = document.getElementById('b').value = p11;
        var p21 = document.getElementById('kb').value = p11 / 1000;
        var p22 = document.getElementById('mb').value = p11 / 1000000;
        var p23 = document.getElementById('gb').value = p11 / 1000000000;
        var p24 = document.getElementById('tb').value = p11 / 1000000000000;
    }
}

function leistung2() {
    n50 = n50 + 1;
    if (n50 > 1) {
        var n1 = document.getElementById('input16').value;
        var n6 = n1.replace(/,/, ".");
        if (isNaN(n6)) {

            alert(n6 + 'Ist keine Zahl!');
        }

        var oper = document.getElementById('select_leistung').value;
        if (oper === "W")
            var n11 = n6;
        if (oper === "kW")
            var n11 = n6 * 1000;
        if (oper === "mW")
            var n11 = n6 * 1e+6;
        if (oper === "kcal/s")
            var n11 = n6 * 4184;
        if (oper === "kcal/h")
            var n11 = n6 * 1.16222;
        if (oper === "PS")
            var n11 = n6 * 735.499;
        var n20 = document.getElementById('W').value = n11;
        var n21 = document.getElementById('kW').value = n11 / 1000;
        var n22 = document.getElementById('mW').value = n11 / 1e+6;
        var n23 = document.getElementById('kcal/s').value = n11 / 4184;
        var n24 = document.getElementById('kcal/h').value = n11 / 1.16222;
        var n25 = document.getElementById('PS').value = n11 / 735.499;
    }
}

function kochen2() {
    o50 = o50 + 1
    if (o50 > 1) {
        var o1 = document.getElementById('input18').value;
        var o6 = o1.replace(/,/, ".");
        if (isNaN(o6)) {

            alert(o6 + 'ist keine Zahl!');
        }
        var oper = document.getElementById('select_kochen').value;
        if (oper === "ml(cc)")
            var o11 = o6;
        if (oper === "teaspoon(GB)")
            var o11 = o6 * 5.919;
        if (oper === "teaspoon(US)")
            var o11 = o6 * 4.929;
        if (oper === "cup(US)")
            var o11 = o6 * 240;
        if (oper === "cup(GB)")
            var o11 = o6 * 284.131;
        if (oper === "Unzen(US)")
            var o11 = o6 * 29.574;
        if (oper === "Unzen(GB)")
            var o11 = o6 * 28.413;
        var o20 = document.getElementById('ml(cc)').value = o11;
        var o21 = document.getElementById('teaspoon(GB)').value = o11 / 5.919;
        var o22 = document.getElementById('teaspoon(US)').value = o11 / 4.929;
        var o23 = document.getElementById('cup(US)').value = o11 / 240;
        var o24 = document.getElementById('cup(GB)').value = o11 / 284.131;
        var o26 = document.getElementById('Unzen(US)').value = o11 / 29.574;
        var o26 = document.getElementById('Unzen(GB)').value = o11 / 28.413;
    }
}
// done ^


function waehrung2() {
    m50 = m50 + 1;
    if (m50 > 1) {
        //var euriusd = 1.124;
        /*var euriusd = document.getElementsByClassName('hiddenOne')[0].id;
        alert(euriusd)
        var test = euriusd[0].value;
        console.log(test, euriusd)*/
        const test = document.querySelectorAll('.left');
        test2 =test.getAttribute('main-value');
        alert(test2);
        var m1 = document.getElementById('input17').value;
        var m6 = m1.replace(/,/, ".");
        if (isNaN(m6)) {

            alert(m6 + ' ist keine Zahl!');
        }
        var oper = document.getElementById('select_waehrung').value;
        if (oper === "€") {
            var m72 = m6 * euriusd;
            var m62 = m6;
        }
        if (oper === "$") {
            var m72 = m6;
            var m62 = m72 * (1 / euriusd);
        }
        var m20 = document.getElementById('€').value = m62;
        var m21 = document.getElementById('$').value = m72;
    }
}
//naja
function test() {

}