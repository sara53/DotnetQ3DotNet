/**
 * == Agenda
 *  -- let -- var -- const
 *  -- destructuring
 *  -- Spread Operator
 *  -- default Values -- Rest Params
 *  -- string API
 *  -- Arrow functions
 *  -- Array API000
 */

/**
 * var
 * ------------------------
 * == reassign
 * == redeclaration
 * == Hoisting
 * == added to window object
 * == function scope
 *------------------------------
 == let 
        -- reassign
        -- can't redeclare
        -- can't be hoisted
        -- not added to window object
        -- block scope
 *------------------------------
 == const 
        -- can't reassign
        -- can't redeclare
        -- can't be hoisted
        -- not added to window object
        -- block scope
 */

// const arr = [1, "mona"];

// arr = [];
// // arr.push("ali");

// console.log(arr);

// const PI = 3.14;

// console.log(PI);

// console.log(fname);
// let fname = 10;

// let fname = "mona";
// console.log(window.fname);

// function showData() {
// 	let test = "ali";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(test);
// 	}
// 	console.log(test);
// 	// console.log("i outside Loop : ", i);
// }
// showData();

// let arr = [10, 20, 30, "mona"];

// function useArr(data) {
// 	return [
// 		data,
// 		function () {
// 			console.log("Welcome");
// 		},
// 		30,
// 		"mona",
// 	];
// }

// let [x, y] = useArr(true);

// console.log(x);
// console.log(y);

// let x = arr[0];
// let y = arr[1];

// let person = {
// 	fname: "ali",
// 	products: ["red", "green"],
// 	age: 20,
// 	color: "red",
// };

// let x = person.fname;

// let y = person.color;

// let { fname: fname, age: age } = person;
// let { fname, age, products } = person;

// console.log(fname);
// console.log(age);

// console.log(products);

// function getArr(x) {
// 	return [
// 		x,
// 		function () {
// 			console.log("Welcome");
// 		},
// 		"ali",
// 	];
// }

// let [x, y] = getArr(true);

// y();

// let a = 3;

// let b = a;

// a = 5;

// console.log(" a : ", a);
// console.log(" b : ", b);
//spread Operator
// let arr1 = [10, 20, "mona", "ali"];
// let arr2 = ["iti", "dotnet", ...arr1, 1, 2, 3];

// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);
// let person1 = { fname: "ali", age: 20 };

// let person2 = { ...person1, color: "red" };

// console.log(person1);
// console.log(person2);

// let arr = [10, 20, 30, 5, 60];

// console.log(Math.max(...arr));
/**================================ */
// function add() {
// 	console.log("Welcome");
// }
// function add() {
// 	console.log("Hello");
// }

// add();
// add(2, 5, "mona", "ali", 34);

// let [x, ...y] = [10, "mona", "ali", true];

// console.log(x);
// console.log(y);
/**---------
 * == startEnd
 * == endWith
 * == trim
 * == trimStart
 * == trimEnd
 * == include
 * == concat
 * ------- */

// let str = "        Hello from iti           ";

// console.log(`${str.trimEnd()}   Ali`);
// console.log(`Welcome dot net

// ${str}

// :(

// `);
/**
 * == function
 *      -- built in
 *      -- user defined
 *           -- statement
 *           -- expression
 *           -- anonymous
 *           -- callback
 *           -- IIFE
 *
 */

// statement
// function add1(x, y) {
// 	console.log(x + y);
// }

// // expression
// let add2 = function (x, y) {
// 	console.log(x + y);
// };
// arrow
// let add3 = (x = 0, y = 0) => {
// 	console.log(x + y);
// };

// add3();

// let sayHello = (x, y) => x + y;

// let result = sayHello(4, 6);
// console.log(result);
/**------------------ */

// this -- >window

// let person = {
// 	fname: "ali",
// 	display: function () {
// 		// this -- > person
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
// (function (i) {
// 	console.log("hello", i);
// })("mona");

/**
 * == find
 * == findIndex
 * == map
 * == every
 * == some
 * == filter
 * == foreach
 */
// let arr = [10, 20, 33, 5, 73];

// let result = arr.findIndex((item) => item > 25);

// console.log(result);

// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }
// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("--------------");
// }

// let itiTracks = ["sdotnet", "sphp", "sOS", "PD"];

// let result = itiTracks.some((track, index) => track.startsWith("s"));
// console.log(result);
// let result = itiTracks.map(function (value, index) {
// 	return {
// 		id: index + 1,
// 		name: `${value} `,
// 	};
// });
// let result = itiTracks.map(function (value, index) {
// 	return `<div><h1>${value}</h1></div>`;
// });

// for (let i = 0; i < result.length; i++) {
// 	document.writeln(result[i]);
// }

// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		cat: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "mouse",
// 		cat: "electronics",
// 	},
// 	{
// 		id: 4,
// 		name: "apple",
// 		cat: "fruits",
// 	},
// ];

// products.forEach((product, index) => {
// 	console.log(`${index} : ${product.name}`);
// });
// let result = products.filter((product) => product.id != 1);

// console.log(result);
/**--------------------- */
// var fname = "ali";
// var age = 20;
// var myKey = "new key";

// let person = {
// 	[myKey]: "red",
// };

// console.log(person);

// person.display();

// let person = {
// 	fname,
// 	age,
// 	display() {
// 		console.log(this.fname);
// 	},
// };
