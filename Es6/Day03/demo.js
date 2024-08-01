/**
 * Agenda
 * -----------------------------
 *  == Symbol
 *  == generator & Iterator
 *  == OOP in Es6
 *
 */

/**
 * Primitive Datatype
 * -----------------------
 * == string
 * == number
 * == boolean
 * == undefined
 * == null
 * == Symbol
 */

// let fname = Symbol("fname");
// let x = Symbol("fname");

// console.log(fname == x);

// let myKey = "age";
// let x = Symbol();

// let person = {
// 	fname: "ali",
// 	[x]: function () {
// 		console.log("Welcome");
// 	},
// };

/**-------------- */

// let arr = ["mona", "ahmed", 123];

// arr[Symbol.iterator] = getEvenValues;

// let person = {
// 	fname: "ali",
// 	age: 20,
// };

// person[Symbol.iterator] = testEvenValues;

// function* testEvenValues() {
// 	for (let key in person) {
// 		yield `${key} : ${person[key]}`;
// 	}
// }

// for (let x of person) {
// 	console.log(x);
// }
// person[Symbol.iterator] = getEvenValues;

// function getEvenValues() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step > 10) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: step,
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }

// for (let x of person) {
// 	console.log(x);
// }

// let myKey = "display";
// let person = {
// 	fname: "ali",
// 	[myKey]: function () {
// 		return {
// 			next: function () {
// 				return {
// 					value: "mona",
// 					done: false,
// 				};
// 			},
// 		};
// 	},
// };

// person[ myKey ] = function () {
//     return
// };

// let iter = person[myKey]();
// console.log(iter.next());

/**
 * === function --> return {}
 *  {} ==> next --> function
 * function --  {values,done}
 *
 *
 */
// for (let x of person) {
// 	console.log(x);
// }

// for (let x in person) {
// 	console.log(person[x]); // key
// }
// for (let index in arr) {
// 	console.log(arr[index]);
// }

// for (let x of arr) {
// 	console.log(x);
// }

// let arr = ["mona", "ali", 123];

// arr[Symbol.iterator] = getValue;

// generator in lab
// function getValue() {
// 	let index = 0;

// 	return {
// 		next: () => {
// 			if (index == this.length) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: this[index++],
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }
// function getValue() {
// 	var temp = this;
// 	console.log(this);
// 	return {
// 		next: function () {
// 			if (temp.length > 0) {
// 				return {
// 					value: temp.shift(),
// 					done: false,
// 				};
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			}
// 		},
// 	};
// }

// for (let x of arr) {
// 	console.log(x);
// }
// var product1 = {
// 	id: 1,
// 	name: "Book",
// 	discount: () => {
// 		console.log("20%");
// 	},
// };
// var product2 = {
// 	id: 1,
// 	name: "Pen",
// 	price: 300,
// 	discount: () => {
// 		console.log("20%");
// 	},
// };
// var product3 = {
// 	id: 1,
// 	name: "Mouse",
// 	price: 60,
// 	cat: "electronics",
// 	discount: () => {
// 		console.log("20%");
// 	},
// };

// class Product {
// 	constructor(id, name, price = "", cat = "") {
// 		this.id = id;
// 		this.name = name;
// 		this.price = price;
// 		this.cat = cat;
// 	}

// 	discount(rate) {
// 		return this.price * rate;
// 	}
// }

// let product1 = new Product(1, "Book", 300, "school");
// console.log(product1.discount(0.5));
// document.writeln(`<h1>Product Name :${product1.name}</h1>`);
// document.writeln(`<p>Price :${product1.price}</p>`);
// document.writeln(`<p>cat :${product1.cat}</p>`);
// document.writeln(`<hr/>`);
// document.writeln(`<h1>Product Name :${product2.name}</h1>`);
// document.writeln(`<p>Price :${product2.price}</p>`);
// document.writeln(`<p>cat :${product2.cat}</p>`);

// parent Class -- super class
// class Person {
// 	#name;
// 	constructor(name, age, address) {
// 		this.#name = name;
// 		this.age = age;
// 		this.address = address;
// 	}

// 	display() {
// 		console.log(`${this.name} : ${this.age}`);
// 	}
// 	get getName() {
// 		return this.#name;
// 	}

// 	set setName(value) {
// 		this.#name = value;
// 	}
// }

// let person1 = new Person("ali", 30, "alex");

// person1.setName = "new Name";
// console.log(person1.getName);

// person1.setName("new Name"); // set
// console.log(person1.getName()); // get
// console.log(person1.#name);
// person1.#name = "New Name";
// inheritance
// child class - subClass
// class User extends Person {
// 	constructor(name, age, address, password) {
// 		super(name, age, address);
// 		this.password = password;
// 	}

// 	// override
// 	display() {
// 		super.display();
// 		console.log(`${this.address} : ${this.password}`);
// 	}

// 	generatePass() {
// 		return this.password.toUpperCase() + "@#3" + this.password;
// 	}
// }

// let myUser = new User("ahmed", 20, "banha", "ahmed123");

// myUser.display();

// let person1 = new Person("mona", 13);
// person1.display();

/**---------------- */

class Person {
	constructor(name, age) {
		if (this.constructor == Person) {
			throw "Can not take an object from abstract class";
		}
		this.name = name;
		this.age = age;
	}
	display() {
		throw "Method is not implemented";
	}
}

class User extends Person {
	constructor(name, age) {
		super(name, age);
	}
	display() {
		console.log(`${this.name}`);
	}
}

let myUser = new User("ali", 20);

myUser.display();
/**
 * == Observable
 * == singletone
 * == decorator
 * == DI
 */
