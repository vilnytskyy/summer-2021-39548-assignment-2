// Load index.js
require("./index");

// // FOR EACH TESTS //
// console.log("/// forEach vs myEach ///")
// const arr1 = [1, 2, , 3];

// // Test 1: Even
// console.log("/1/ Test 1: Even /1/")

// const isEven = number => console.log(number % 2 === 0);

// console.log("forEach: ")
// arr1.forEach(isEven);

// console.log("myEach: ")
// arr1.myEach(isEven);

// console.log("/1/ Test 1: Even /1/")

// // Test 2: Print Elements
// console.log("/2/ Test 2: Print Elements /2/")

// // func found on the MDN Web Docs page for forEach
// function logArrayElements(element, index, array) {
//     console.log('a[' + index + '] = ' + element)
// }

// console.log("forEach: ")
// arr1.forEach(logArrayElements);

// console.log("myEach: ")
// arr1.myEach(logArrayElements);

// console.log("/2/ Test 2: Print Elements /2/")
// console.log("/// forEach vs myEach ///")



// // // MAP TESTS //
// console.log("/// map vs myMap ///")
// const arr3 = [1, 4, 9, , 16];

// // Test 1: X2
// console.log("/1/ Test 1: X2 /1/")

// const times2 = x => x * 2;

// console.log("map: ")
// console.log(arr3.map(times2));

// console.log("myMap: ")
// console.log(arr3.myMap(times2));

// console.log("/1/ Test 1: X2 /1/")

// // Test 2: Reformat Array
// console.log("/2/ Test 2: Reformat Array /2/")

// let kvArray = [{ key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 }]

// // func found on the MDN Web Docs page for map
// const reformatArray = (obj => {
//     let rObj = {}
//     rObj[obj.key] = obj.value
//     return rObj
// })

// console.log("map: ")
// console.log(kvArray.map(reformatArray));

// console.log("myMap: ")
// console.log(kvArray.myMap(reformatArray));

// console.log("/2/ Test 2: Reformat Array /2/")
// console.log("/// map vs myMap ///")



// // FILTER TESTS //
// console.log("/// filter vs myFilter ///")

// // Test 1: Word Limit
// console.log("/1/ Test 1: Word Limit /1/")

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const limit = word => word.length > 6;

// console.log("filter: ")
// console.log(words.filter(limit));

// console.log("myFilter: ")
// console.log(words.myFilter(limit));

// console.log("/1/ Test 1: Word Limit /1/")

// // Test 2: Prime Numbers
// console.log("/2/ Test 2: Prime Numbers /2/")

// const arr4 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// // func found on the MDN Web Docs page for filter
// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }

// console.log("filter: ")
// console.log(arr4.filter(isPrime));

// console.log("myFilter: ")
// console.log(arr4.myFilter(isPrime));

// console.log("/2/ Test 2: Prime Numbers /2/")
// console.log("/// filter vs myFilter ///")



// SOME TESTS //
// console.log("/// some vs mySome ///")

// // Test 1: Even
// console.log("/1/ Test 1: Even /1/")

// const arr5 = [1, 2, 3, 4, 5];

// const even = (element) => element % 2 === 0;

// console.log("some: ")
// console.log(arr5.some(even));

// console.log("mySome: ")
// console.log(arr5.mySome(even));

// console.log("/1/ Test 1: Even /1/")

// // Test 2: Even 2
// console.log("/2/ Test 2: Even 2 /2/")

// const arr5b = [1, 5, 7, 3, 9, 13];

// console.log("some: ")
// console.log(arr5b.some(even));

// console.log("mySome: ")
// console.log(arr5b.mySome(even));

// console.log("/2/ Test 2: Even 2 /2/")

// console.log("/// some vs mySome ///")



// EVERY TESTS //
// console.log("/// every vs myEvery ///")

// // Test 1: Threshold
// console.log("/1/ Test 1: Threshold /1/")

// const arr6 = [1, 30, 39, 29, 10, 13];

// const isBelowThreshold = (currentValue) => currentValue < 40;

// console.log("every: ")
// console.log(arr6.every(isBelowThreshold));

// console.log("myEvery: ")
// console.log(arr6.myEvery(isBelowThreshold));

// console.log("/1/ Test 1: Threshold /1/")

// // Test 2: Threshold 2
// console.log("/2/ Test 2: Threshold 2 /2/")

// const arr6b = [1, 30, 40, 29, 10, 13];

// console.log("every: ")
// console.log(arr6b.every(isBelowThreshold));

// console.log("myEvery: ")
// console.log(arr6b.myEvery(isBelowThreshold));

// console.log("/2/ Test 2: Threshold 2 /2/")

// console.log("/// every vs myEvery ///")



// REDUCE TESTS //
console.log("/// reduce vs myReduce ///")

// Test 1: Reducer
console.log("/1/ Test 1: Reducer /1/")

const arr7 = [, 2, , 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log("reduce: ")
console.log(arr7.reduce(reducer));

console.log("myReduce: ")
console.log(arr7.myReduce(reducer));

console.log("/1/ Test 1: Reducer /1/")

// Test 2: InitialVal
console.log("/2/ Test 2: InitialVal /2/")

console.log("reduce: ")
console.log(arr7.reduce(reducer, 5));

console.log("myReduce: ")
console.log(arr7.myReduce(reducer, 5));


console.log("/2/ Test 2: InitialVal /2/")

// Test 3: Error
console.log("/3/ Test 3: Error /3/")

const arr7b = [];

console.log("reduce: ")
try {
    arr7b.reduce(reducer);
} catch (error) {
    console.log("Caught Error!");
}

console.log("myReduce: ")
try {
    arr7b.myReduce(reducer);
} catch (error) {
    console.log("Caught Error!");
}

console.log("/3/ Test 3: Error /3/")

// Test 4: Empty Arr w/ IntialVal
console.log("/4/ Test 4: Empty Arr w/ IntialVal /4/")

console.log("reduce: ")
console.log(arr7b.reduce(reducer, 5));

console.log("myReduce: ")
console.log(arr7b.myReduce(reducer, 5));

console.log("/4/ Test 4: Empty Arr w/ IntialVal /4/")


console.log("/// reduce vs myReduce ///")



// INCLUDES TESTS //



// INDEXOF TESTS //



// // PUSH TESTS //
// console.log("/// push vs myPush ///");

// // Test 1: Add Elements
// console.log("/1/ Test 1: Add Elements /1/");

// const arr2 = [1, 2, , 3];
// const arr2b = [1, 2, , 3];

// console.log("push: ");
// const count1 = arr2.push(4, 5, 6);
// console.log("length:", count1, "// arr:", arr2);

// console.log("myPush: ");
// const count1b = arr2b.myPush(4, 5, 6);
// console.log("length:", count1b, "// arr:", arr2b);

// console.log("/1/ Test 1: Add Elements /1/");

// // Test 2: Merge Arrays
// console.log("/2/ Test 2: Merge Arrays /2/");

// console.log("push: ");
// let vegetables1 = ['parsnip', 'potato'];
// let moreVegs1 = ['celery', 'beetroot'];
// Array.prototype.push.apply(vegetables1, moreVegs1);
// console.log(vegetables1);

// console.log("myPush: ");
// let vegetables1b = ['parsnip', 'potato'];
// let moreVegs1b = ['celery', 'beetroot'];
// Array.prototype.myPush.apply(vegetables1b, moreVegs1b);
// console.log(vegetables1b);

// console.log("/2/ Test 2: Merge Arrays /2/");
// console.log("/// push vs myPush ///");



// LASTINDEXOF TESTS //



// KEYS TESTS //



// VALUES TESTS //


