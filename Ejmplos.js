//Este es un comentario de una linea
/*Comentario  multilinea
Comentario  multilinea
Comentario  multilinea
Comentario  multilinea
Comentario  multilinea*/


//Declaracion de variable
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML =
    "El valor de z es: " + z;
document.getElementById("demo").style.color = "#c82130"


//Tipos de datos
var x;
x = 5; // Now x is a Number
x = "John"; // Now x is a String

document.getElementById("demoTipos").innerHTML = x;

//conversion de datos
var x = 123;
document.getElementById("demoConver").innerHTML =
    String(x) + "<br>" +
    String(123) + "<br>" +
    String(100 + 23);

var x = 123;
document.getElementById("demoToString").innerHTML =
    x.toString() + "<br>" +
    (123).toString() + "<br>" +
    (100 + 23).toString();

document.getElementById("demoNumber").innerHTML =
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number("  10") + "<br>" +
    Number("10  ") + "<br>" +
    Number("10 6") + "<br>" +
    Number("John");

var x = new Date("2018-06-06");
document.getElementById("demoDateNumber").innerHTML = Number(x);

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demoArrays").innerHTML = cars;

var b1 = Boolean(100);
var b2 = Boolean(3.14);
var b3 = Boolean(-15);
var b4 = Boolean("Hello");
var b5 = Boolean('false');
var b6 = Boolean(1 + 7 + 3.14);

document.getElementById("demoBoolean").innerHTML =
"100 is " + b1 + "<br>" +
"3.14 is " + b2 + "<br>" +
"-15 is " + b3 + "<br>" +
"Any (not empty) string is " + b4 + "<br>" +
"Even the string 'false' is " + b5 + "<br>" +
"Any expression (except zero) is " + b6;

var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

document.getElementById("demoObjetoC").innerHTML =
person.firstName + " is " + person.age + " years old.";

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

document.getElementById("demoObjetoN").innerHTML =
person.firstName + " is " + person.age + " years old.";

// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("demoObjetoM").innerHTML = person.fullName();


function myFunction1() {
    var str = "Visit W3Schools!";
    var n = str.search("W3Schools");
    document.getElementById("demoRegExSearch").innerHTML = n;
}

function myFunction2() {
    var str = document.getElementById("demoReplace").innerHTML;
    var txt = str.replace(/microsoft/i,"W3Schools");
    document.getElementById("demoReplace").innerHTML = txt;
}

function myFunction3() {
    text = document.getElementById("p01").innerHTML;
    document.getElementById("demoTest").innerHTML = /e/.test(text);
}

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demoLength").innerHTML = txt.length;

var x = new String("John");  // x is an object
var y = new String("John");  // y is an object
document.getElementById("demoStringO").innerHTML = (x===y);

function myFunction4() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("demoIf").innerHTML = greeting;
}

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("demoSwitch").innerHTML = "Today is " + day;

function myFunction5() {
    var message, x;
    message = document.getElementById("resultado");
    message.innerHTML = "";
    x = document.getElementById("demoTry").value;
    try {
        if(x == "")  throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 10)   throw "is too high";
        if(x < 5)    throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demoTry").value = "";
    }
}

try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demoTryC").innerHTML = err.message;
}

var text = "";
var i;
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
document.getElementById("demoFor").innerHTML = text;

var txt = "";
var person = {fname:"John", lname:"Doe", age:25};
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("demoForIn").innerHTML = txt;

let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";
while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
}
document.getElementById("demoWhile").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demoContinue").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demoBreak").innerHTML = text;

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";
    break list;
    text += cars[3] + "<br>";
    text += cars[4] + "<br>";
    text += cars[5] + "<br>";
}

document.getElementById("demoLabel").innerHTML = text;

function myFunction6(p1, p2) {
    return p1 * p2;
}
document.getElementById("demoFunciones").innerHTML = myFunction(4, 3);

function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("demoSinParentesis").innerHTML = toCelsius;

txt1 = "What a very ";
txt1 += "nice day";
document.getElementById("demoOperadores").innerHTML = txt1;

var foo = ["a", "b", "c"];

// sin destructuración
var uno  = foo[0];
var dos  = foo[1];
var tres = foo[2]; // asignación en tres lineas

// con destructuración
var [uno, dos, tres] = foo; // asignación en una sola linea

document.getElementById("demoOWDestruc").innerHTML = uno+" "+ " "+dos+ " "+tres;


console.log(1 == 1);
// expected output: true

console.log("1" == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log("1" === 1);
// expected output: false

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
document.getElementById("demo2").innerHTML = fruits.pop();
document.getElementById("demo3").innerHTML = fruits;


var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

function myFunction10() {
    document.getElementById("demo5").innerHTML = fruits.push("Kiwi");
    document.getElementById("demo4").innerHTML = fruits;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo6").innerHTML = fruits;
document.getElementById("demo7").innerHTML = fruits.shift();
document.getElementById("demo8").innerHTML = fruits;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo9").innerHTML = fruits;
document.getElementById("demo10").innerHTML = fruits.unshift("Lemon");
document.getElementById("demo11").innerHTML = fruits;

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

document.getElementById("demoConcat").innerHTML = myChildren;

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
document.getElementById("demoSlice").innerHTML = fruits + "<br><br>" + citrus;


//Declaración de constante
 const pi = 3.1416;

// /* let permite asignar valor a nuestras variables con visibilidad / validez únicamente dentro del contexto léxico (llaves) en el que se ha definido*/
for ( let x = 0; x < 2; x++ )  {
  console.info( x ); // 0, 1
}
