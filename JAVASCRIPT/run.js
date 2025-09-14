console.log("SRIT")

num=12;
str="hlo";
bol=true;
bigint=7474282346723862432;

undefined;
null1=null;

var name1="srit";
console.log(name1)
var name1="hi";
console.log(name1)

let course="cse";

let age=20;
console.log(age)
age=21;
console.log(age)

const givenname="srinivasa srit";
console.log(givenname)

//functions

function generateWelcomeMessage(name) {
    return "Welcome, " + name + "! Good Morning";
}

let welcome_message = generateWelcomeMessage(givenname)

console.log(welcome_message)


let addage=age+2;
let subage=age-2;
let mulage=age*2;
let divage=age/2;

console.log(addage)
console.log(subage)
console.log(mulage)
console.log(divage)

console.log("webpage")

let length=5
let width=3
area=length*width
console.log(area)

function factorial(n) {
 if (n < 0) {
    return "factorial is not defined for negative numbers."
 }
 let result = 1;
 for (let i = 2; i <= n; i++){
    result *= i;
 }
 return result;

} 

//examole usage:
const number = 5;
console.log(`factorial of ${number} is: ${factorial(number)}`);


function dist() {
  let speed = 30;
  let maxSpeed = 120;
  let time = 96;

  let distance = 0;

  while (time > 0) {
    let minutes = time;
    if (minutes > 10) {
      minutes = 10;
    }
    distance = distance + speed * minutes / 60;
    speed = speed * 2;
    if (speed > maxSpeed) {
      speed = maxSpeed;
    }
    time = time - minutes;
  }

  return distance.toFixed(2);
}

console.log(dist());  // 67.00



let speed = 30;
let distance = 0;
for(i=10;i<=90;i+=10){
    distance = distance+speed/6;
    if(speed<120){
        speed*=2;
    }
}
distance=distance+speed/10
console.log(distance);