const accountId = 4757597937;
let accountName = "Tohidujjaman Hoque";
let accountEmail = "tj@gmail.com"
var accountPassword = "742097"; 
accountCity = "Farakka"; // Prefer not to use
let accountState;

//accountId = 749274927 // not allowed because it is constant
accountName = "TJ";
accountEmail = "suvo@gmail.com"
accountPassword = "927492";
accountCity = "Murshidabad";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountName, accountEmail, accountPassword, accountCity, accountState]);
