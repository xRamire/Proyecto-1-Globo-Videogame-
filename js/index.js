window.onload = () => {
    document.querySelector(".game-over").style.display = "none";

    document.querySelector(".start-button").onclick = () => {
        document.querySelector(".start").style.display = "none";
        startGame();
    };

    document.querySelector(".game-over-button").onclick = () => {
        document.querySelector(".game-over").style.display = "none";
        startGame();
    };

    function startGame() {
        game.init();
    }
};