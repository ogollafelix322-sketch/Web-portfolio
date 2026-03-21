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