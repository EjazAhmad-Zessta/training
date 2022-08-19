var butEl = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function createList(){
    var div = document.createElement("div");
    var li = document.createElement("li");
    var delEl = document.createElement("button");
    div.classList.add("wrap");
    ul.appendChild(div);
    div.append(li, delEl);
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    delEl.classList.add("delClass");
    delEl.innerHTML = 'Del';
}
function addAfterClick(){
    if(input.value.length > 0){
        createList();
    }
}
function addAfterEnter(event){
    if(input.value.length > 0 && event.keyCode === 13){
        createList();
    }
}
function taskDone(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("done");
    }
}
function deleteList(event){
    if(event.target.tagName === "BUTTON"){
        event.target.parentElement.remove();
    }
}
function ulClick(event){
    taskDone(event);
    deleteList(event);
}
ul.addEventListener("click", ulClick);
butEl.addEventListener("click",addAfterClick);
    
input.addEventListener("keypress",addAfterEnter);