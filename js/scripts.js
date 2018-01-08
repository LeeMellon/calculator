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

var num1 = parseInt(prompt("Give me a number:"));
var num2 = parseInt(prompt("Give me another number:"));

alert(divide(num1,num2));
