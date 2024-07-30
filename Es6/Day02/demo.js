/**
 * == Object
 *      .keys
 *      .values
 *      .entries
 *      .assign
 *
 * == Asynchrouns Code execution in memory
 *
 * == Promises
 *      == then -- catch
 *      == async -- await
 * == fetch
 */

// let person1 = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// };

// let person2 = {
// 	address: "cairo",
// 	age: 40,
// };

// let result = Object.assign({}, person2, person1);
// console.log("Person1 : ", person1);
// console.log("Person2 : ", person2);
// console.log("Result : ", result);

// let result = Object.keys(person);
// let result = Object.values(person);
// let result = Object.entries(person);

// console.log(result);

// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "",
// 		age: 1,
// 		address: "alex",
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(`fname : ${defaultValues.fname} ,
//                     age : ${defaultValues.age}
//                     address : ${defaultValues.address}`);
// }

// showData({
// 	fname: "mona",
// });
/** */

// function first() {
// 	console.log("first");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("second");
// 	}, 2000);
// 	console.log("After setTimeOut");
// }

// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");
// console.log("End");

// var x;

// setTimeout(() => {
// 	x = 10;
// }, 1000);

// console.log(x);
// function greet(myFun) {
// 	myFun(
// 		function () {
// 			console.log("Cb1");
// 		},
// 		function () {
// 			console.log("Cb2");
// 		}
// 	);
// }

// greet(function (x, y) {
// 	x();
// 	y();
// });

/**------------------------ */

// var productsIds;

// setTimeout(() => {
// 	productsIds = [100, 200, 300];
// 	setTimeout(() => {
// 		var product = {
// 			id: productsIds[0],
// 			name: "Book",
// 			price: 300,
// 		};

// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);
/**------------------------ */

// var myPromise = new Promise(function (x, y) {
// 	x("mona");
// 	//y("Error Message");
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("Welcome then");
// 	})
// 	.catch(function (errorMsg) {
// 		console.log(errorMsg);
// 	});
/**
 * == Pending
 * == fulfilled
 * == rejected
 *
 *
 *  */

// function getAllProducts() {
// 	var myPromise = new Promise(function (x, y) {
// 		var productsIds;
// 		setTimeout(() => {
// 			productsIds = [100, 200, 300];
// 			if (productsIds) {
// 				x(productsIds);
// 			} else {
// 				y("Error on getting products List ids");
// 			}
// 		}, 2000);
// 	});

// 	return myPromise;
// }

// function getProductDetails(productId) {
// 	var myPromise = new Promise(function (resolve, reject) {
// 		var product;
// 		setTimeout(() => {
// 			product = {
// 				id: productId,
// 				name: "Book",
// 				price: 300,
// 			};

// 			product ? resolve(product) : reject("Error on getting product details");
// 		}, 1000);
// 	});

// 	return myPromise;
// }

// function getPrice(product) {
// 	return new Promise((resolve, reject) => {
// 		var price = product.price;
// 		price ? resolve(price) : reject("Error on getting price");
// 	});
// }

// async function execute() {
// 	try {
// 		let productsId = await getAllProducts();
// 		let product = await getProductDetails(productsId[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// let response = fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// getAllProducts()
// 	.then((productsId) => {
// 		return getProductDetails(productsId[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function fetchData() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// import * as all from "./main.js";

// function mult() {
// 	all.add(5, 8);
// 	all.square();
// 	all.default();
// 	console.log("er");
// }

// mult();

/** export naming
 * export default
 */
