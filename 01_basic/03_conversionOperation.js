let score = "Tohidujjaman";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN => not a number

// "33" => 33
// "33abc" => NaN (not a number)
// null => 0
// true => 1 // false => 0
// undefined => NaN
// "Tohidujjaman" => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; // 0 => false;
// "" => false
// "Tohidujjaman" => true


let someNumber = 9745;

let someNumberString = String(someNumber);

console.log(someNumberString);

// 33 => "33"
// true => "true"; // false => "false"