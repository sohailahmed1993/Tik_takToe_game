let gameContainer = document.getElementById("game-container");
let singContainer = document.getElementById("sign-container");
let buttonEl = document.getElementById("button-btn").addEventListener('click', function(){
    singContainer.style.display = "block";
    gameContainer.style.display = "none"
});

