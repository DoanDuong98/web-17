// console.log("Hello world!!!!!");

// // const || let var
// const constVariable = "ABC";
// // constVariable = "XYZ";

// let variable = "123456";
// console.log(typeof variable);
// variable = 5;
// console.log(typeof variable);
// variable = true;
// console.log(typeof variable);

// const obj = {
// 	name: "Huy",
// 	age: 18
// };
// console.log(typeof obj);
// console.log(obj);

// console.log(obj.name);
// console.log(obj["age"]);

// let lastName = "Huynh";

// obj.lastName = 'ABC ' + lastName;
// obj["firstName"] = "Huy";
// obj.age += 1;
// console.log(obj);
// console.log("Minh ten la " + obj.name);
// console.log(`Minh ten la ${obj.name}`);
// console.log(`let's 
// dsapod
// go`);

// let arr = [1, 3, 4, 82, 93, 10, "123a", "13433"];
// console.log(arr);
// for(let i = 0; i < arr.length; i++) {
// 	let item = arr[i];
// }

// // arr[arr.length+1] = 10;
// // console.log(arr);

// arr.forEach(function(item, index, array) {
// 	console.log(item, index, array);
// });

// console.log(arr.map(function(item) {
// 	return item*2;
// }));

// functionA("adsasd", 21312);

// function functionA(param1, param2) {
// 	console.log(param1);
// 	console.log(param2);
// }

// const functionB = function () {
// 	console.log("Hello BSS!");
// }

// functionB();

// const functionC = () => {
// 	console.log("Hello C!");
// }

// functionC();

// let now = new Date();

// function scope

// var a = 5;

// function print() {
// 	var b = 10;
// 	console.log(a); // 5
// 	console.log(b); // 10
// }

// print();

// console.log(a); // 5
// console.log(b); // undefined

// Block scope {}

// function print(num, waitTime) {
// 	setTimeout(function() {
// 		console.log(num);
// 	}, waitTime*1000);
// }

// function countDown(count) {
// 	// var i;
// 	for(var i = count; i >= 0; i--) {
// 		// i == -1
// 		console.log(i);
// 		print(i, count - i);
// 	}
// }

// countDown(5);

// 5 4 3 2 1 0

// function callback(result) {
// 	console.log(result);
// }

// function print(onWaitDone) {
// 	setTimeout(function() {
// 		let result = 1 + 1;
// 		onWaitDone(result);
// 	}, 1000);
// }

// console.log("Start");
// let result = print(callback);
// console.log(result);