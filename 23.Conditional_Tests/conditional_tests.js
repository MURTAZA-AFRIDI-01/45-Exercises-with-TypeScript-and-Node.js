"use strict";
// = hum kisi value ko set kar rahe hain.
//  == hum kisi value ko check ker raha hain.
//  === hum kisi value ko uski datatype  ke sath check ker raha hain.
// != NOT
// 2 === 2 EQUAL
// 2 !=== 2 NOT EQUAL
// Write a series of conditional tests.
// creating car variable
let car = 'subaru';
// Test No 1
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test No 2
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test No 3
console.log("Is car != 'BMW'? I predict True.");
console.log(car != 'BMW');
// Test No 4
console.log("Is car !== 'Audi'? I predict True.");
console.log(car !== 'Audi');
// Test No 5
console.log("Is car.uppercase == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
// Test No 6
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');
// Test No 7
console.log("Is car === 'SUBARU'? I predict False.");
console.log(car === 'SUBARU');
// Test No 8
console.log("Is car === 'Ferrari'? I predict False.");
console.log(car === 'Ferrari');
// Test No 9
console.log("Is car === 'bus'? I predict False.");
console.log(car === 'bus');
// Test No 10
console.log("Is car.lowerCase == 'SUBARU'? I predict False.");
console.log(car.toLowerCase() == 'SUBARU');
