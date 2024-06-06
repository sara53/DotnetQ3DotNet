/** Agenda
 * --------------------------
 * == Dom
 *      -- Deals With Attributes
 *      -- Create Elements From Js
 *
 * == Bom
 *      -- Window
 *      -- Screen // self study
 *      -- navigator
 *      -- history
 *      -- location
 *
 * ---------------------------------------
 * == Events
 *      -- Add attribute on element
 *      -- Attach function
 *      -- addEventListener
 *------------------------------------------
 */

/**
 * Attributes
 * --------------------
 *     -- getAttribute
 *     -- setAttribute
 *     -- hasAttribute
 *     -- removeAttribute
 * 	   --toggleAttribute()
 *
 *
 */
// var link1 = document.getElementById("link1");

// console.log(link1.getAttribute("class"));

// function execute() {
// 	if (link1.hasAttribute("class")) {
// 		link1.removeAttribute("class");
// 	} else {
// 		link1.setAttribute("class", "jsClass");
// 	}
// }

// var img = document.images[0];
// function execute() {
// 	img.setAttribute("src", "./Images/2.jpg");
// 	// console.log(img.getAttribute("src"));
// }

/**
 * <p></p>
 *<h1></h1>
 *
 */

/**
 * insertAdjusentElement
 *
 */

// var div = document.getElementById("result");
// var h1 = document.createElement("h1");
// var p = document.createElement("p");
// var span = document.getElementsByTagName("span")[0];
// var text = document.createTextNode("welcome dotnet track");
// h1.append(text);

// p.innerHTML = "Lorem Text here ...";

// function execute() {
// 	span.before(h1);
// 	console.log(span);
// 	console.log(h1);
// 	// div.appendChild(h1);
// 	// var result = div.append(h1, p);
// 	// var result = div.appendChild(h1);
// 	// console.log(result);
// }

// var div = {
// 	append: function (x) {
// 		console.log("Welcome append", x);

// 		return x;
// 	},
// };

// var result = div.append("ali");
// console.log(result);

// alert("alert");
// alert("sd");
// var myWin;
// function openNewWindow() {
// 	myWin = window.open("about.html", "", "width=300,height=300");
// }
// function closeWindow() {
// 	myWin.close();
// }
// function moveToWindow() {
// 	myWin.moveTo(400, 400);
// }
// function moveByWindow() {
// 	myWin.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWin.resizeTo(500, 500);
// }
// function resizeByWindow() {
// 	myWin.resizeBy(-100, -100);
// }
/**======================== */

// function pet() {
// 	open("about.html");
// }
// window.setTimeout(pet, 3000);

// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);

// var span = document.getElementById("message");
// function startDownload() {
// 	span.style.display = "block";
// 	setTimeout(function () {
// 		span.innerHTML = "<a href='#Home'> Here</a > ";
// 	}, 3000);
// }
function successCb(position) {
	console.log(position);
	console.log(" lat", position.coords.latitude);
	console.log(" lon", position.coords.longitude);
}

// function rejectCB() {
// 	console.log("Blocked");
// }

// navigator.geolocation.getCurrentPosition( successCb, rejectCB );

// function execute() {
// 	console.log(navigator);
// 	// console.log(history);
// 	// location.pathname = "./about.html";
// 	// console.log(location.pathname);
// 	// location.reload();
// 	// location.assign("https://www.google.com.eg/");
// 	// location.replace("https://www.google.com.eg/");
// }
// console.log("===================");
// var p = document.getElementById("content");
// var btn = document.getElementById("btn");
// function changeContent(e) {
// 	console.log(e.target);
// 	p.innerHTML = "Dotnet";
// }
// function changeStyle(e) {
// 	console.log(e.target);

// 	p.style.background = "red";
// }

// btn.onclick = changeStyle;

// btn.addEventListener("click", changeContent);
// btn.addEventListener("click", changeStyle);

// setTimeout( function () {
//     console.log("Removed")
// 	btn.removeEventListener("click", changeStyle);
// }, 3000);

// btn.onclick = function () {};

// btn.onclick = function () {
// 	changeContent();
// 	changeStyle();
// };

function first() {
	console.log("first");
}
function second(e) {
	e.stopPropagation();

	console.log("second");
}
function third(e) {
	e.stopPropagation();

	console.log("third");
}

var input = document.getElementById("input1");
var errorMsg = document.getElementById("errorMsg");

input.addEventListener("focus", function (e) {
	e.target.style.border = "2px solid blue";
});
input.addEventListener("blur", function (e) {
	e.target.style.border = "2px solid orange";
});
input.addEventListener("input", function (e) {
	if (e.target.value.length >= 3) {
		input.style.border = "2px solid green";
		errorMsg.style.display = "none";
	} else {
		errorMsg.style.display = "block";
		input.style.border = "2px solid red";
	}
});

function login(e) {
	e.preventDefault();
	console.log(input.value);
}
