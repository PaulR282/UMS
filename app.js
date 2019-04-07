angular.module('ngUMS', ['ui.bootstrap']);
var app = angular.module("ngUMS", []);
app.controller("ngCtrl", function($scope) {
	$scope.laenge=[
"μm","mm","cm","dm","m","km","Yards","Zoll","Meilen","Seemeilen","Fuß",]

$scope.volumen=[
"ml","dl","l","mm³","cm³","dm³","m³","Gallonen(US)","Zoll³","Fuß³","Yard³",]
$scope.volumen2=[
"mm","cm","dm","m","Zoll","Fuß","Yard",]
$scope.masse=[
"kg","g","mg","t","Pfund(lb)","Unze(oz)",]

$scope.flaeche=[
"mm","cm","dm","m","km","Zoll","Fuß","Yard","Meile",]
$scope.flaeche2=[
"mm²","cm²","dm²","m²","ar","ha","km²","Zoll²","Fuß²","Yard²","Meile²",]

$scope.zeit=[
"ns","ms","s","min","Stunden","Tage","Wochen","Jahre",]

$scope.winkel=[
"Grad","Radiant",]

$scope.temperatur=[
"°C","K","°F",]

$scope.geschwindigkeit=[
"m/s","Fuß/s","km/h","Meilen/h","Knoten",]

$scope.druck=[
"Pa","Bar","Torr","PhA","lbf/in²",]
$scope.kraft=[
"N","kN", "kgf", "lbf"]

$scope.arbeit=[
"J","kJ","cal","kcal","Wh","kWh",]

$scope.leistung=[
"W","kW","mW","kcal/s","kcal/h","ps","hp",]

$scope.kochen=[
"ml","teaspoon","cup(US)","cup(GB)","cup(metrisch)","Gramm","Unzen(US)","Unzen(GB)",]

$scope.daten=[
"bite","kb","mb","gb","tb"]
$scope.waehrung=[
"€", "$"]
});

