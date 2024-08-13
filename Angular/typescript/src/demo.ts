/**
 * Datatypes
 * --------------------
 * == string
 * == number
 * == boolean
 * == undefined
 * == null
 * == any
 */

// var fname: any = true;

// fname = false;

// fname = "mona";

// console.log(fname);
// var fname = prompt;
// var fname: number = 500;
// console.log(fname);
// console.log(fname);

// type stringOrNumber = string | number | boolean;

// var fname: stringOrNumber = "ali";
// var num: stringOrNumber = 10;
// fname = 10;
// fname = "amo";
// fname = true;

// console.log(fname);
// var arr: any[] = [40, 49];

// arr.push(10);
// arr.push("mona");
// arr.push(true);

// tuble
// var arr: [string, boolean] = ["mona", true];
// arr[0] = "moh";
// type stringOrNumber = string | number;

// var x: stringOrNumber;

// var person: { fname: stringOrNumber; age: number; address: string } = {
// 	fname: "ali",
// 	age: 10,
// 	address: "alex",
// };

// person.fname = 50;
// person.age = 30;
// person.color = "red";

// let products: {}[] = [];
// products.push("ali");

// function sum(x: number, y?: number) {}

// sum();

// sum("ali", "ahmed");

// let result: [string, number] = ["mona", 20];
// function showData(fname: string, age: number) {}

// showData(...result);

// class Person {
// 	private name: string;
// 	age: number;
// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	display(): void {
// 		console.log(`${this.name} : ${this.age}`);
// 	}

// 	set setName(value: string) {
// 		this.name = value;
// 	}

// 	get getName(): string {
// 		return this.name;
// 	}
// }
// class Person {
// 	constructor(public name: string, public age: number) {}
// 	display(): void {
// 		console.log(`${this.name} : ${this.age}`);
// 	}

// 	set setName(value: string) {
// 		this.name = value;
// 	}

// 	get getName(): string {
// 		return this.name;
// 	}
// }
// let person1 = new Person("mona", 20);
// person1.setName = "new Name";
// person1.getName;
// person1.setName("ali");
// console.log(person1.getName());

// class User extends Person {
// 	password: string;
// 	constructor(name: string, age: number, password: string) {
// 		super(name, age);
// 		this.password = this.password;
// 	}
// 	display(): void {
// 		console.log(`${this.name} : ${this.age}`);
// 	}
// }
// interface Iperson {
// 	name: string;
// 	age: number;
// 	sum: (x: number) => number;
// }
// class Person implements Iperson {
// 	constructor(public name: string, public age: number) {}
// 	sum(x: number): number {
// 		return 1;
// 	}
// }

// class User extends Person {
// 	constructor(name: string, age: number, password: string) {
// 		super(name, age);
// 	}
// }
// let person1 = new Person("mona", 20);

/** enum  */
interface IProduct {
	id: number;
	name: string;
	price: number;
	quantity: number;
	imgSrc?: string;
}

let products: IProduct[] = [
	{ id: 10, name: "Book", price: 200, quantity: 20 },
	{ id: 20, name: "Book", price: 200, quantity: 20 },
	{ id: 30, name: "Book", price: 200, quantity: 20 },
	{ id: 40, name: "Book", price: 200, quantity: 20 },
];

/**============================ */
/**
  == define [] with only numbers values
  == define [] with number type or string
  == create function that shows course information
    -- courseName --> string
    -- duration --> number
    -- insName --> string
    -- then call this function

  ==  create Imployee interface {id,name,age,address,salary,bouns function}
  == create class employee implement Imployee
  == create class manger extends from employee class


  create IEmployee[]
 */
