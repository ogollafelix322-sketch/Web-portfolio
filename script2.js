function append(value){
    document.getElementById("display").value+=value;
}
function clearDisplay(){
    document.getElementById("display").value="";
}
function deleteLast(){
    let current=document.getElementById("display").value;
    document.getElementById("display").value=current.slice(0.-1);
}
function calculate(){
    let expression=document.getElementById("display").value;

    try{
        document.getElementById("display").value=eval(expression);
    }catch{
        document.getElementById("display").value="Error";
    }
}
document.addEventListener("keydown",function(event){
    let key=event.key;
    //numbers
    if(!isNaN(key)){
        append(key);
    }
    //operators
    if(key==="+"||key==="*"||key==="/"){
        append(key);
    }
    //backspace
    if(key==="Backspace"){
        deleteLast();
    }
    //clear
    if(key==="Escape"){
        clearDisplay();
    }
    //decimal
    if(key==="."){
        append(".");
    }
});

let names=["Felix","John","Mary"];
console.log(names[0]);
names.push("Peter");
console.log(names);
names.pop();
console.log(names,length);

let numbers=[10,20,30]
numbers.push(40);
alert(numbers[3]);

for(let i=1;i<=10;i++){
    console.log(i);
}
let number=[5,10,15];
for(let i=0;i<number.length;i++){
    alert(number[i]);
}

let name=["Felix","John","Mary"];
for(let i=0;i<name.length;i++){
    console.log(name[i]);
}

let student={
    name:"Felix",
    age:25,
    course:"Javascript"
}
console.log(student.name);
student.age=26;
console.log(student.age);
student.country="Kenya";
console.log(student);

let phone={
    brand:"Samsung",
    price:20000
};
phone.price=25000;
console.log(phone["price"]);

let user={
    name:"Felix",
    age:25
};
localStorage.setItem("user",JSON.stringify(user));
let storedUser=JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);

let fruits=["apple","banana"];
localStorage.setItem("fruits",JSON.stringify(fruits));
let result=JSON.parse(localStorage.getItem("fruits"));
console.log(result[1]);

