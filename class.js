var myName = "Varma"
var age = 46
var isStudent = false

console.log("Welcome to " + myName)
age = "Fourty Six"

age = null;

var x;


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

var myNumbers = ["one", "two", "three"];

myNumbers.push("four");
myNumbers.unshift("zero")

myNumbers.pop();
myNumbers.shift();

var myLetters=["a","b","c"]

myLetters.forEach(function(value,position){
    console.log(value + " at " + position)
})

var movies=[
    {
        id:1,
        title:"Bahubali",
        actor:"Prabhas",
        revenue:300,
        theaters:["A","B"]
    },
    {
        id:2,
        title:"Adhurs",
        actor:"NTR",
        revenue:15,
        theaters:["B","C"]
    },
    {
        id:3,
        title:"Kushi",
        actor:"Pavan",
        revenue:75,
        theaters:["C","D"]
    }
]

//every, some, filter, map, reduce

/*
    1. Is all movies crossed 100Cr revenue?
*/

var isAll100Cr=movies.every(function(movie){
    return movie.revue>100;
})

console.log(isAll100Cr);


/*
 2. Is any movie crossed 50cr revenue?
*/

var isAny50=movies.some(function(movie){
    return movie.revenue>50;
})

console.log(isAny50)

/*
3. I want list of actor names of all movies

["Prabhas","NTR","Pavan"]
*/

var actors=movies.map(function(movie){
    return movie.actor;
})

console.log(actors)


/*
    4. I want total revenue of all movies
*/

var totalRevenue=movies.reduce(function(total,movie){
    return total + movie.revenue;
},0)

console.log(totalRevenue)

/*
    5. I want list of titles in comma seperated string

    "Bahubali,NTR,Kushi"
*/

var titles=movies.reduce(function(titles,movie){
    if(titles=="") { return movie.title };
    return titles+","+movie.title;
},'')

console.log(titles)

/*
    6. I want a single object like this

    {
        "Bahubali":"Prabhas",
        "Adhurs":"NTR",
        "Kushi":"Pavan"
    }

*/


/*
    7. I want list of all theaters of all movies

    ["A","B","C","D"]

*/

var theaters=movies.reduce(function(theaters,movie){
    movie.theaters.forEach(function(theater){
        if(theaters.indexOf(theater)==-1)
        {
            theaters.push(theater)
        }
    })

    return theaters;
},[])

console.log(JSON.stringify(theaters))

movies.sort(function(a,b){
    if(a.revenue>b.revenue) return 1;
    if(a.revenue<b.revenue) return -1;
    return 0;
})

console.log(movies)



