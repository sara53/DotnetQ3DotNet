/**
 * Agenda
 * ----------
 *  -- functions
 *        -- built in functions
 *        -- user defined functions
 *              -- function statement
 *              -- function expression
 *                  (callback function)
 *                  (ANONYMOUS FUNCTION)
 *                  (IIFE)
 *
 *
 *  -- Hoisting
    -- How js engine Works ?

    -- Array
    -- String Object
    -- Math Object
 *
 */
// var a = 3;

// var b = 4;

// var sum = a + b;

// console.log(a + b);
// /** -------------------  20 line------  */
// var a = 10;

// var b = 5;

// var sum = a + b;

// console.log(a + b);

// function add(x, y) {
// 	console.log("x :", x);
// 	console.log("y :", y);
// 	console.log(x + y);
// }

// add();
// add(2);
// add(2, 3, 4);

// add(10, 3);
// console.log("------------");

// add(4, 5);

// function sayHello() {
// 	console.log("Welcome Dot net");
// }

// sayHello("PHP");

// user defined -- function Statement
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	return x + y;
// }

// var result = add(1, 3);
// console.log(result);
// var result = add("mona", "ali");
// console.log(result);
// var result = add(true, true);
// console.log(result);

// var result = parseInt("123");
// console.log(result);

// function sayHello() {
// 	console.log("ITI");
// 	// return undefined;
// }

// var result = sayHello();
// console.log(result);

// function expression
// var add = function (x, y) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log(x + y);
// 	console.log("adham");
// 	return "ITI";
// };

// var result = add(10, 2);

// function add() {
// 	console.log("x");
// }
// function add(x, y) {
// 	console.log("y");
// }

// console.log(add);
// var x;
// console.log(x);
// x = "Mona";
// console.log(x);

// var x;
// console.log(x);
// x = "mona";
// console.log(x);

// var add = function () {
// 	console.log("1");
// };

// add = function (x, y) {
// 	console.log("2");
// };

// console.log(add);
// add(4, 5);

// function add(x, y) {
// 	console.log(x + y);
// }
// add(4, 5);
// console.log(add);
// var add = function (x, y) {
// 	console.log(x + y);
// };
console.log("======================");

// var trackName = function () {
// 	console.log("1");
// 	console.log("1");
// 	console.log("1");
// 	console.log("1");
// 	console.log("1");
// };

// var dotnet = function (insName) {
// 	console.log("hello dot net your inst is :", insName);
// };
// function mearn(insName) {
// 	console.log("mearn track Your inst is :", insName);
// }

// greet(mearn, "Mona Ali");
// console.log("------------------");
// greet(dotnet, "ahmed mohamed");

// greet(function () {
// 	console.log("Welcome inner function");
// });
// console.log("-----------");
// greet(function () {
// 	console.log("Welcome inner function");
// });

// function greet(myFun1, myFun2) {
// 	myFun1(function () {
// 		console.log("inner");
// 	});
// 	myFun2("ali");
// 	console.log("Welcome From ITI");
// }

// greet(
// 	function (x) {
// 		x();
// 		console.log("CB1");
// 	},
// 	function (y) {
// 		console.log(y);
// 		console.log("CB2");
// 	}
// );

// greet(function (instName) {
// 	console.log("Dot net , " + instName);
// }, "mona ali");

// console.log("---------");
// greet(function (instName) {
// 	console.log("mearn, " + instName);
// }, "ahmed ali");

// var test = "hello";
// // sayHello("flower");
// // console.log("--------------");
// sayHello(test);
