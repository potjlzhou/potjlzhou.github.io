var longArray = [78, 12, 5, 6, 19, 67, 1, -56, 10];

longArray[2] = 100;
//third value=longArray[2]
longArray[6] = 1000;

console.log(longArray);
//product是乘積
/*
var test1 = longArray[0] * longArray[1] * longArray[6];

console.log(test1);

var test2 = longArray[8] / longArray[0] / longArray[1] / longArray[2];

console.log(test2);
*/

console.log(longArray[0] * longArray[1] * longArray[6]);

console.log(longArray[8] / longArray[0] / longArray[1] / longArray[2]);