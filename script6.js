/*Introduction*/
alert("Welcome To Felix Webpage")
console.log("Hello World")

/*Variables*/
let message="Welcome to JS";
console.log(message);
let name="Felix Webpage";
alert(name);

/*Operators*/
let a=13;
let b=20;
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(b/a);
let price=4;
let quantity=5;
let total=price*quantity;
console.log(total);

/*Comparison Operators*/
let f=20;
let g=17;
console.log(f>g);
console.log(f<g);
console.log(f>=g);
console.log(f!=g);
/*If Statement,Else and Else If*/
let score=50;
if(score>60){
    console.log("You Passed");
}
else if(score>40){
    console.log("You Failed");
}
else{
    console.log("You Succeded");
}

/*Function and Parameters*/
function greet(answer){
    console.log("Welcome" + answer);
}
greet("Felix");
function multiply(a,b){
    console.log(a*b);
}
multiply(6,7);

/*Events*/
function showMessage(){
    alert("Welcome to JS");
}
function pageLoaded(){
    alert("Page has Loaded!");
}
function valueChaged(){
    alert("Text Chaged");
}
function removeMouse(){
    alert("Mouse is over the text");
}

/*Document Object Model*/
function changeHeading(){
    document.getElementById("Heading").innerHTML=
    "Table Content";
}
function changePara(){
    document.getElementById("para").innerHTML=
    "Text has been Updated.";
}
function changeBtn(){
    document.getElementById("btn").innerHTML=
    "Send";
}
function showDetails(){
    let el=document.getElementById("put");
    el.innerHTML="Click the Links below .";
    el.style.color="black";
    el.style.backgroundColor="lightGreen";
}
/*DOM with Displaying Input on Page*/
function showMsg(){
    let name=document.getElementById("name").value;
    document.getElementById("output").innerHTML=
    "Welcome " +name;
}
function addNumbers(){
    let n1=document.getElementById("num1").value;
    let n2=document.getElementById("num2").value;
    let sum=Number(n1)+Number(n2);
    document.getElementById("result").innerHTML=
    sum
}
function checkNumber(){
    let num=document.getElementById("number").value;
    if(num% 2==0){
        document.getElementById("display").innerHTML=
        "Even Number";
    }
    else{
        document.getElementById("display").innerHTML=
        "Odd Number";
    }
}
function checkPassword(){
    let pass=document.getElementById("password").value;
    if(pass=="7636"){
        document.getElementById("message").innerHTML=
        "Access granted";
    }
    else{
        document.getElementById("message").innerHTML=
        "Wrong password";
    }
}
function showColor(){
    let color=document.getElementById("color").value;
    document.getElementById("colorResult").innerHTML=
    color;
}
function add(){
    let n1=Number(document.getElementById("nu1").value);
    let n2=Number(document.getElementById("nu2").value);
    document.getElementById("final").innerHTML=
    n1+n2;
}