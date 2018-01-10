// Back end logic

var add = function (num1, num2) {
	return num1 + num2;
};
var subtract = function (num1, num2) {
	return num1 - num2;
};

var divide = function (num1, num2) {
	return num1 / num2;
};

var multiply = function (num1, num2) {
	return num1 * num2;
};

var modulo = function (num1, num2) {
	return num1 % num2;
};

// front end logic
$(document).ready(function() {

	$("form#add").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#add1").val());
		var num2 = parseInt($("#add2").val());
		var result = add(num1, num2);
		$("#output").text(result);
	});

	$("form#divide").submit(function(event){
		event.preventDefault();
		var num1 = parseInt($("#divide1").val());
		var num2 = parseInt($("#divide2").val());
		var result = divide(num1, num2);
		$("#output").text(result);
	});

	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#mult1").val());
		var num2 = parseInt($("#mult2").val());
		var result = multiply(num1, num2);
		$("#output").text(result);
	});
});



//
// var BMI = function (){
//   weight = parseFloat(prompt("What is your weight?"));
//   height = parseFloat(prompt("What is your height?"));
//   var weight_mod = weight * .45;
//   var height_mod = height * 0.025;
//   var height_modsq = height_mod * height_mod;
//   var answer = weight_mod / height_modsq;
//
//   alert(answer);
// }
//
// BMI()
//
//
//
//
// var conversion = function () {
//   temperature = parseFloat(prompt("What is the temperature in farenheit?"));
//   var subtract = temperature - 32;
//   var celsius = subtract / 1.8;
//
//   alert(celsius);
// }
