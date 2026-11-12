console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log((5 > 3) && (3 < 1));
console.log((5 > 3) && (3 > 1));
console.log((5 < 3) && (3 > 1));
console.log((5 < 3) && (3 < 1));

//logical operators - and
let marks = 90;

if(marks >= 33 && marks >= 80){
    console.log("Pass");
    console.log("A+");
}

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//logical operators - or
let marks1 = 90;

if(marks1 >= 33 || marks1 >= 80){
    console.log("Pass");
    console.log("A+");
}

console.log(!true);
console.log(!false);
console.log(!5<3);

//logical operators - logical not
let marks2 = 90;

if(!(marks2 < 33)){
    console.log("Pass");
    console.log("A+");
}

// Combining logical operators
let scores = 75;
if((marks > 33 && marks <= 80) || !false){
    console.log("pass");
}