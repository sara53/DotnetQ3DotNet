/**
 * Agenda
 * --  Function execution in memory
 * -- shadwing
 * -- local scope , Global Scope
 * -- Object (access--read/write)
 *    -- dot notation
 *    -- subscript notation
 *
 *-- Dom Tree
  -- Dom Object
  -- how to fire event in js
		-- add attribute
      -- How to access Element From Dom
      -- how to change Content From Dom

      -- how to change style from Dom

      Date Object (self study)
 */

// function add(x, y) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	return x + y;
// }

// var result = add(5, 6);
// console.log(result);

// var fname = "mona";
// function display() {
// 	fname = "ahmed";
// 	console.log(fname);
// 	return "ITI";
// }

// var result = display();

// console.log(fname);
// console.log(result);

// function sayHello(trackName) {
// 	console.log("Welcome ", trackName);
// 	return "ITI";
// }
// function greet(trackName) {
// 	var result = sayHello(trackName);
// 	console.log("Greet Fun Called");

// 	return result;
// }

// var result = greet("Dot Net");
// console.log(result);
/**=====================
 * Props --> key: value(any datatype)
 *
 * ===================== */
// var person = {
// 	fname: "ali",
// 	age: 20,
// 	address: {
// 		city: "Cairo",
// 		street: "Mohamed ali st",
// 		code: 123,
// 	},

// 	colors: ["red", "green"],
// 	display: function (trackName) {
// 		console.log(person.fname);
// 	},
// };

// person.display();
// person.display();

// console.log(person.display());
// set

// person["fname"] = "ahmed";
// person.fname = "ahmed";
// person.gender = "male";
// console.log(person);
// console.log(person.address.city);
// console.log(person["address"]["city"]);
// console.log(person["address"].city);
// console.log(person.address["city"]);
//get

// console.log(person["gender"]);
// console.log(person.fname);
// console.log(person.gender);

// var fname = "hello from iti";

// console.log(fname.length);

// var result = fname.charAt(0);
// console.log(result);
// var result = person.display("dotnet");
// console.log(result);
// var fname = "ali";
// console.log("welcome" + fname + " " + " PEt");
// console.log(`welcome ${fname} :)`);

// var person = {
// 	{}: "Ali",
// };

// console.log(person);
/** Dom
 * How to Select Element From Dom
 * --------------------------------
 * == getElementById --> element | null
 * == querySelector --> element | null
 * == getElementsByTagName --> collection
 * == getElementsByClassName --> collection
 * == getElementsByName --> collection
 * == querySelectorAll --> NodeList
 * ----------------------------------------------
 * == document.body
 * == document.images
 * == document.links
 * == document.forms
 * == document.firstChild
 * == document.firstElementChild
 * == document.lastChild
 * == document.children
 * == document.childNodes
 * -------------------How to change content----------------
 *  == innerText
 *  == innerHtml
 *  == textContent (search)
 * -------------------How to change Style----------------
 * == style.propName
 * == className
 * == classList
 *    -- add
 *    -- remove
 *    -- TOGGLE
 *
 */

// var div = document.getElementById("parentDiv");
// console.log(div.children);
// console.log(div.childNodes);
// console.log(document.links);
// var h1 = document.getElementById("btn");
// var elements = document.getElementsByTagName("h1");
// var element = document.querySelector(".content");
// console.log(element);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }

// function display() {
// 	console.log("btn clicked");
// }
// var p = document.getElementsByClassName("content")[0];
// function changeContent() {
// 	// p.innerText = "<h1>Welcome Dot net</h1>";
// 	// p.innerHTML = "<h1>Welcome Dot net</h1>";
// 	//get
// 	// console.log(p.innerText);
// }

// var input = document.getElementsByTagName("input")[0];
// var p = document.getElementById("output");

// var inputs = document.getElementsByName("choose");
// function showAnswer() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			console.log(inputs[i].value);
// 		}
// 	}
// 	// p.innerHTML = input.value;
// }

var p = document.getElementById("first");

var changeStyle = function () {
	// p.style.background = "#b7b2d0";
	// p.style.padding = "30px";
	// p.style.fontSize = "30px";
	// p.style.display = "none";
	// console.log(p.className);
	// p.className += " jsClass";
	// console.log(p.classList);
	// p.classList.add("jsClass");
	// p.classList.remove("content");
	p.classList.toggle("jsClass");
};
