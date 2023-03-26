// let gameContainer = document.getElementById("game-container");
// let singContainer = document.getElementById("sign-container");
// let choseContainer = document.getElementById("chose-container");
// let radio1EL = document.getElementById("radio1");
// let radio2EL = document.getElementById("radio2");
// let signBtn = document.getElementById("sign-btn");
// let friendBtn = document.getElementById("friend-btn");


// let buttonEl = document.getElementById("button-btn").addEventListener('click', function(){
//     singContainer.style.display = "block";
//     gameContainer.style.display = "none"
// });

// radio1EL.addEventListener("click", function(){
//     document.getElementById("player3").style.opacity = "1";
//     document.getElementById("player4").style.opacity = "0.5";

// })
// radio2EL.addEventListener("click", function(){
//     document.getElementById("player3").style.opacity = "0.5"
//     document.getElementById("player4").style.opacity = "1";
// })

// signBtn.addEventListener("click",function(){
//     singContainer.style.display = "none";
//     choseContainer.style.display = "block"
// })

// friendBtn.addEventListener("click" , function(){
//     document.getElementById("localPlayer-container").style.display = "block";
//     gameContainer.style.display = "none"  
// })

// document.getElementById("local-btn").addEventListener("click",function(){
//     choseContainer.style.display = "block";
//     document.getElementById("localPlayer-container").style.display = "none";
// })

// document.getElementById("chose-btn").addEventListener("click", function(){
//     document.querySelector(".main-container").style.display = "block";
//     choseContainer.style.display = "none";
// })

const boxEl = document.getElementById("box-container");
boxEl.addEventListener("click", handleClickEvent);



let currentPlayer = "X";
const playersPosition = [
    [],
    [],
    []
];
function handleClickEvent(event){
    if(event.target.nodeName !== "SPAN"){
        const currentNode = event.target.firstChild
        currentNode.innerHTML = currentPlayer;
        playersPosition[row][column] = currentPlayer
        currentPlayer = currentPlayer === "X" ? "O" : "X";
}
}





















