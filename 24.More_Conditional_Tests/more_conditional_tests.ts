// Equality and Inequality Test1
console.log("Equalit test with strings: ", "Apple" === "Apple");
// Equality and Inequality Test2
console.log("Inequalit test with strings: ", ("Apple" as string) != "orange");
// Tests using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality,
console.log("Equalit test with numbers: ", 26 === 26);
// Numerical tests involving  inequality,
console.log("Inequalit test with number :", (26 as number) != 35);
//  greater than and less than
console.log("Greater than test", 10 > 5);
console.log("Less than test", 5 < 10);
//  greater than or equal to
console.log("Greater than or equal to test: ", 10 >= 10);
//  and less than or equal to
console.log("less than or equal to  test: " , 5 <= 10);
// Tests using "and" operators
console.log("And operator test: ", 5===5 && 10 > 5);
// Tests using  "or" operators
console.log("or operator test: ", 5===5 || false);
// Test whether an item is in a array
const fruits :string[]=['Banana','Pineapple','Apricot'];
console.log('Test "Pineapple" in the array :', fruits.includes("Pineapple"));
// Test whether an item is not in a array
console.log('Test "apple" is not in array :' , !fruits.includes('apple') );