var myName = "Varma"
var age = 46
var isStudent = false

console.log("Welcome to " + myName)
age = "Fourty Six"

age = null;

var x;

var myNumbers = ["one", "two", "three"];

var person = {
    name: "Varma",
    age: 46,
    isStudent: false,
    "college name": "BVRIT",
    1: "one"
}

//Conditional Statements

var color="black";

if(color=="red"){
    console.log("Color is red")
}
else if(color=="black"){
    console.log("Color is black")
}
else if(color=="green"){
    console.log("Color is Green")
}
else {
    console.log("Color is unknown")
}

var a=1;

if(a){
    console.log("yes")
}
else
{
    console.log("no")
}

//ternary operator
((color=="red")) ? console.log("red") : console.log("Unknown")

//switch
switch(color){
    case "red":
        console.log("color is red");
        break;
    case "black":
        console.log("color is black");
        break;
    default:
        console.log("color is unknown")
}

//Logical operators

// &&
// ||
// !

//Loops

// while
// do..while
// for

var i=0;

while(i<=10){
    
    if(i==5) break;
    //if(i==9) continue;
    console.log(i)
    i++;
}

var j=0

do {
    console.log(j);
    j++;
}
while(j<=10)

//for
for(var k=0;k<=10;k++){
    console.log(k)
}

for(var l=10;l>=0;l--){
    console.log(l)
}

// break or continue

//Math 

/*
    round
    floor
    ceil
    random

*/

console.log(add(1,2))

//function declaration 
function add(a,b){
    return a+b;
}

//function expression
var sum=function(a,b){
    return a+b;
}

console.log(sum(1,2))

//JavaScript Hoisting