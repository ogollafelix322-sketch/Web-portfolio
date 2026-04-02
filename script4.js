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