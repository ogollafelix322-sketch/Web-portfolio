//Load notes from a local srorage
let notes=JSON.parse(localStorage.getItem("notes"))||[];
//Add note
function addNote(){
    let input=document.getElementById("noteInput").value;
    if(input===""){
        alert("Please write a note");
        return;
    }
    //Store as object
    let newNote={
        id:Date.now(),
        text:input
    };
    notes.push(newNote);
    //Save notes
    localStorage.setItem("notes",JSON.stringify(notes));
    //Clear input
    document.getElementById("noteInput").value="";
    //Update display
    displayNotes();
}
//Display Notes
function displayNotes(list=notes){
    let container=document.getElementById("notesContainer");

    container.innerHTML="";

    for(let i=0;i<list.length;i++){
        container.innerHTML+=`
        <div class="note">
        <span>${list[i].text}</span>
        </div>
        <button class="edit-btn" onclick="editNote(${list[i].id})">Edit</button>
        <button class="delete-btn" onclick="deleteNote(${list[i].id})">Delete</button>
        </div>
        </div>
        `;
    }
}
//Delete note
function deleteNote(id){
    notes=notes.filter(function(note){
        return note.id !==id;
    });
    //Save updated notes
    localStorage.setItem("notes",JSON.stringify(notes));
    displayNotes();
}
//Edit note
function editNote(id){
    let note=notes.find(function(n){
        return n.id===id;
    });
    let newText=prompt("Edit your note:",note.text);

    if(newText===null||newText===""){
        return;
    }
    notes.text=newText;
    localStorage.setItem("notes",JSON.stringify(notes));
    displayNotes();
}
//Search function
function searchNotes(){
    let searchValue=
    document.getElementById("searchInput").value.toLowerCase();
    let filtered=notes.filter(function(note){
        return note.text.toLowerCase().includes(searchValue);
    });
    displayNotes(filtered);
}
//Run when page loads
displayNotes(notes);

let numbers=[10,20,30,40];
//forEach
numbers.forEach(num=>console.log("Number:",num));
//map
let plusFive=numbers.map(num=>num+5);
console.log("Plus 5:",plusFive);
//find
let found=numbers.find(num=>num===20);
console.log("Found:",found);

let names=["Felix","John","Mary"];
//forEach
names.forEach(name=>console.log(name));
//map
let upper=names.map(name=>name.toUpperCase());
console.log(upper);
//find
let result=names.find(name=>name==="John");
console.log(result);

//Array Methods
let users=[
    {id:1,name:"Felix"},
    {id:2,name:"John"},
    {id:3,name:"Mary"}
];
//forEach
users.forEach(user=>console.log(user.name));
//map
let namesOnly=users.map(user=>user.name);
console.log(namesOnly);
//find
let oneUser=users.find(user=>user.id===2);
console.log(oneUser);

//Scope and hoisting
console.log(a);
var a=10;

//Arrow funtion
const square=num=>num*num;
console.log(square(5));

const addFour=(a,b,c,d)=>a+b+c+d;
console.log(addFour(2,3,4,5));

const multiply=(a,b)=>a*b;
console.log(multiply(6,7));

const isEven=num=>num%2===0;
console.log(isEven(4));
console.log(isEven(7));

const fullName=(first,last)=>first+ "" +last;
console.log(fullName("Felix","Ogolla"));

const toUpper=text=>text.toUpperCase();
console.log(toUpper("hello"));

const getLength=str=>str.length;
console.log(getLength("Javascript"));

const firstItem=arr=>arr[0];
console.log(firstItem([10,20,30]));

const apples=[1,2,3,4];
const doubled=apples.map(num=>num*2);
console.log(doubled);

const numo=[1,2,3,4,5];
const even=numo.filter(num=>num % 2==0);
console.log(even);

const createUser=(name,age)=>({
    name:name,
    age:age,
});
console.log(createUser("Felix,25"));

const checkAge=age=>age>=18?"Adult":"Minor";
console.log(checkAge(20));

const calculate=(a,b)=>{
    let sum=a+b;
    let product=a*b;
    return sum+product;
};
console.log(calculate(4,6));

function ProcessingInstruction(){
    const greet=name=>"Hello" + name;
    console.log(greet("Felix"));
}

const user=[
    {name:"Felix",age:25},
    {name:"John",age:30}
];
const name=user.map(user=>user.name);
console.log(name);

//Destructuring
const car={
    brand:"Toyota",
    model:"Corolla"
};
const {brand,model}=car;
console.log(brand);
console.log(model);

const person={
    name:"Felix",
    location:{
        city:"Nairobi"
    }
};
const {location:{city}}=person;
console.log(city);

const data={
    weather:{
        temp:30
    }
};
const {weather:{temp}}=data;
console.log(temp);

const pin=[5,10,15];
const [first,,third]=[5,10,15];
console.log(third);

//Spread and Rest
const nums=[1,2,3];
const newArr=[...nums,4,5];
console.log(newArr);

const y=[10,20];
const z=[30,40];
const merged=[...y,...z];
console.log(merged);

const pup={Name:"Felix"};
const newPup={
    ...pup,
    age:25
};
console.log(newPup);

const sum=(...numbers)=>{
    return numbers;
};


const pen=(...nums)=>{
    return nums.reduce((total,n)=>total+n,0);
    };
console.log(pen(1,2,3));

const arr=[1,2,3,4];
const [fourth,...rest]=arr;
console.log(fourth);
console.log(rest);