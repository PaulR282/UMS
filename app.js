angular.module('ngUMS', ['ui.bootstrap']);
var app = angular.module("ngUMS", []);
app.controller("ngCtrl", function($scope) {
	$scope.laenge=[
"μm","mm","cm","dm","m","km","Yards","Zoll","Meilen","Seemeilen","Fuß",]

$scope.volumen=[
"ml","dl","L","mm³","cm³","dm³","Gallonen","Zoll³","Fuß³","yard³",]
$scope.volumen2=[
"mm","cm","dm","Zoll","Fuß","yard",]
$scope.masse=[
"kg","g","mg","T","Lbs","Unze","Newton",]

$scope.flaeche=[
"mm","cm","dm","m","km","Zoll","Fuß","Yard","Meile",]
$scope.flaeche2=[
"mm²","cm²","dm²","m²","ar","ha","km²","Zoll²","Fuß²","Yard²","Meile²",]

$scope.zeit=[
"ns","ms","s","min","Stunden","Tage","Wochen","Jahre",]

$scope.winkel=[
"Gradmaß","Bogenmaß","%",]

$scope.temperatur=[
"°C","K","°F",]

$scope.geschwindigkeit=[
"m/s","m/min","km/s","km/min","km/h","Meilen/h","Knoten",]

$scope.druck=[
"Pa","kPa","Bar","psi","ksi","psf",]

$scope.kraft=[
"N","kN"]

$scope.arbeit=[
"J","kJ","cal","kcal","kwh",]

$scope.leistung=[
"W","kW","mW","kcal/s","kcal/h","ps","hpower",]

$scope.kochen=[
"ml","teaspoon","cup(US)","cup(GB)","cup(metrisch)","Gramm","Unzen(US)","Unzen(GB)",]

$scope.daten=[
"bite","kb","mb","gb","tb"]
});

