/**
 * == Ajax -->
 * == cookies
 * == Error Handling
 * -------------------------
 * ==This Pattern
 */

// var tbody = document.getElementsByTagName("tbody")[0];

// function getAllUsers() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var result = JSON.parse(xhr.response);
// 				tbody.innerHTML = `
//             <tr>
//                     <td>${result.id}</td>
//                     <td>${result.name}</td>
//                     <td>${result.username}</td>
//                     <td>${result.email}</td>
//                     <td>
//                     <button>Remove</button>
//                     <button>View User Data</button>
//                     </td>

//             </tr>
//             `;
// 			}
// 		}
// 	};
// }

// set

/**  */

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + expireData;
// }
// function getAllCookies(key, value) {
// 	return document.cookie;
// }

// function deleteCookie(key) {
// 	var expireData = new Date();

// 	expireData.setDate(expireData.getDate() - 1);

// 	document.cookie = key + "=dfj;expires=" + expireData;
// }

// function hasCookie() {}
// function getCookie() {}

// console.log(expireData);
// // session
// document.cookie = "username=ali;expires=" + expireData;
// document.cookie = "username=mona;expires=" + expireData;
// document.cookie = "email=ali@gmail.com;expires=" + expireData;

// // get

// console.log(document.cookie);

/**
 *
 * request --> success
 *          -- fail
 *
 *
 *
 */

// try {
// 	document.writeln(" Loading");
// 	throw "my Error";
// } catch (error) {
// 	// log
// 	console.log(error);
// 	document.writeln("<h1 style='color:red'>Please Try Again</h1>");
// } finally {
// 	console.log("Must be shown");
// }

// function add(x, y) {
// 	if (arguments.length != 2) {
// 		throw "Must pass two args";
// 	} else {
// 		console.log(x + y);
// 	}
// }

// add(10, 20);
/**=================== */
// var fname = "mona";
// function sayHello(trackName, emoji) {
// 	console.log(this.fname);
// 	console.log("sayHello Called", trackName, emoji);
// }

// // sayHello("PHP");
// sayHello.call(window, "PHP", ":)");
// sayHello.apply( window, [ "PHP", ":)" ] );

// added to window object [optional]
// this -->> special var --> caller

// this--> window
// var fname = "mona";

// function getName() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "ali",
// 	display: function () {
// 		getName.call(this);
// 	},
// };

// person.display();

// mona
// ali

// window.getName();
// getName(); // caller window

// window.getName(); // caller window

// person.display(); // person

// var person1 = {
// 	fname: "ali",
// 	lname: "Ahmed",
// 	display: function (emoji1, emoji2) {
// 		console.log(this.fname + " " + this.lname, emoji1 + " " + emoji2);
// 	},
// };
// var person2 = {
// 	fname: "Mona",
// 	lname: "Mostafa",
// };

// var result = person1.display.bind(person2);

// result(":)", ":(");

// person1.display("q", "r");

// person1.display.call(person2, [":)", ":("]);
// person1.display.apply(person2, [":)", ":("]);

// person1.display(":)", ":(");

// add( 1, 2, 4 ) // 7
// add( 10, 20, 40, 60, 70, 60 ) //260

// add() // error
// add("mona",'ff')//error

/**======        ====== */
// 1- ajax task get all users -- view user -- delete user
// add( 1, 3, 6, 8, 65 ) // 65,8,6,3,1
// add("mona","ali",123) // 123,ali,mona
/**======        ====== */
