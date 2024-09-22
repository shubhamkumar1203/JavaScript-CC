const accountId = 4022651356
let accountEmail = "shubham@google.com"
var accountPassword = "123456"
accountCity = "Chandrapura"

// accountId = 456 - not allowed

accountEmail = "shubpk@gmail.com"
accountPassword = "987456"
accountCity = "Bokaro"
let accountState;

console.log(accountId);

/*
Prefer not to use var
bcz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
