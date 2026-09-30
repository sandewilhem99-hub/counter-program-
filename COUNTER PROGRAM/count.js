const countlabel = document.getElementById("countlabel");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
let count = 0;

decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count=0;
    countlabel.textContent = count;
}