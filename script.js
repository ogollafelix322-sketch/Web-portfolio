console.log("Javascript connected successfully");

alert("Welcome to Felix Web Development Page");

let country="Kenya";
alert(country);

let message="Learning Javascript";
console.log(message);

let age=30;
console.log(age);

let isDeveloper=true;
console.log(isDeveloper);

let name="Felix";
console.log(name);

let num1=20;
let num2=10;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

let apples=3;
let oranges=5;
let totalfruit=apples/oranges;
alert(totalfruit);

let score=75;
console.log(score>50);
console.log(score<50);
console.log(score==75);
console.log(score!=50);

let height=20;
alert(height>40);

let temperature=30;
if(temperature>25){
    alert("It is a hot day");
}

let number=10;
if(number<20){
    console.log("The number is less than 20");
}
let pen=30;
if(number>50){
    console.log("You Failed");
}

let marks=60;
if(marks>=70){
    alert("Grade A");
}
else if(marks>=50){
    alert("Grade B")
}
else{
    alert("Fail");
}

let ice=15;
if(ice>30){
    console.log("Hot");
}
else if(ice>20){
    console.log("Warm");
}
else{
    console.log("Cold");
}

function showMessage(){
    alert("Javascript is a fun");
}
showMessage()

function checkNumber(){
    let number=10;
    if (number>15){
        console.log("Number is greater than 15");
    }
    else if(number>12){
        console.log("Number is less than 12");
    }
    else{
        console.log("Number is neither greater than or less than 10");
    }
}
checkNumber()

function showAge(age){
    alert("You age is " +age);
}
showAge(30);

function multiply(a,b){
    console.log(a*b);
}
multiply(4,6);