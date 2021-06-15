// Unit Testing Example from https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/

// FOR EACH TESTS //
console.log("/// forEach vs myEach ///")
const arr1 = [1, 2, , 3];
const myEach = require("./index");

// Test 1: Even
console.log("/1/ Test 1: Even /1/")

const isEven = number => console.log(number % 2 === 0);

console.log("forEach: ")
arr1.forEach(isEven);

console.log("myEach: ")
arr1.myEach(isEven);

console.log("/1/ Test 1: Even /1/")

// Test 2: Print Elements
console.log("/2/ Test 2: Print Elements /2/")

// func found on the MDN Web Docs page for forEach
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element)
}

console.log("forEach: ")
arr1.forEach(logArrayElements);

console.log("myEach: ")
arr1.myEach(logArrayElements);

console.log("/2/ Test 2: Print Elements /2/")
console.log("/// forEach vs myEach ///")

// MAP TESTS //

// FILTER TESTS //

// SOME TESTS //

// EVERY TESTS //

// REDUCE TESTS //

// INCLUDES TESTS //

// INDEXOF TESTS //

// PUSH TESTS //
console.log("/// push vs myPush ///");

const myPush = require("./index");

// Test 1: Add Elements
console.log("/1/ Test 1: Add Elements /1/");

const arr2 = [1, 2, , 3];
const arr2b = [1, 2, , 3];

console.log("push: ");
const count1 = arr2.push(4, 5, 6);
console.log("length:", count1, "// arr:", arr2);

console.log("myPush: ");
const count1b = arr2b.myPush(4, 5, 6);
console.log("length:", count1b, "// arr:", arr2b);

console.log("/1/ Test 1: Add Elements /1/");

// Test 2: Merge Arrays
console.log("/2/ Test 2: Merge Arrays /2/");

console.log("push: ");
let vegetables1 = ['parsnip', 'potato'];
let moreVegs1 = ['celery', 'beetroot'];
Array.prototype.push.apply(vegetables1, moreVegs1);
console.log(vegetables1);

console.log("myPush: ");
let vegetables1b = ['parsnip', 'potato'];
let moreVegs1b = ['celery', 'beetroot'];
Array.prototype.myPush.apply(vegetables1b, moreVegs1b);
console.log(vegetables1b);

console.log("/2/ Test 2: Merge Arrays /2/");
console.log("/// push vs myPush ///");

// LASTINDEXOF TESTS //

// KEYS TESTS //

// VALUES TESTS //
