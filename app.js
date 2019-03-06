angular.module('ngUMS', ['ui.bootstrap']);
var app = angular.module("ngUMS", []);
app.controller("ngCtrl", function($scope) {
	$scope.laenge=[
"μm","mm","cm","dm","m","km","Yards","Zoll","Meilen","Seemeilen","Fuß",]

$scope.volumen=[
"ml","dl","L","mm³","cm³","dm³","Gallonen","Zoll³","Fuß³","yard³",]

$scope.masse=[
"kg","g","mg","T","Lbs","Unze","Newton",]

$scope.flaeche=[
"mm²","cm²","dm²","m²","ar","ha","km²","Zoll²","Fuß²","Yard²","Meile²",]

$scope.zeit=[
"nanosec","ms","s","min","stunden","tage","wochen","Jahre",]

$scope.winkel=[
"gradmaß","bogenmaß","%",]

$scope.temperatur=[
"°C","K","°F",]

$scope.Geschwindigkeit=[
"m/s","m/min","km/s","km/min","km/h","Meilen/h","Knoten",]

$scope.Druck=[
"Pa","kPa","Bar","psi","ksi","psf",]

$scope.Kraft=[
"N","kN","daN",]

$scope.Arbeit=[
"J","kJ","cal","kcal","kwh",]

$scope.leistung=[
"W","kW","mW","kcal/s","kcal/h","ps","hpower",]

$scope.kochen=[
"ml","teaspoon","cup(US)","cup(GB)","cup(metrisch)","gramm","Unzen(US)","Unzen(GB)",]

$scope.Daten=[
"bite","kb","mb","gb","tb","kbit/s","mbit/s",]
});

