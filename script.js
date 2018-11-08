let currentPlayer = "X"
let xScoreValue = 0
let oScoreValue = 0
let move = 0;
function startGame() {
    
    currentPlayer = "X";
    document.winner = null;
    setMessage(currentPlayer + " starts");
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}
function nextMove() {
    let currentSquare = $(this)
    if (document.winner != null){
        setMessage(currentPlayer + " Already won, You can stop now");
    } else if (currentSquare.text() == '') {
        currentSquare.html(currentPlayer);
        move++;
        if (checkForWinner(currentPlayer)) {
            alert("Congratulations " + currentPlayer + ",  You Won!");
            document.winner = currentPlayer;}
        switchTurn();
    } else {
        setMessage("Pick another square");
    }
}
function switchTurn() {
    if (checkForWinner(currentPlayer)) {
        setMessage("Congratulations " + currentPlayer + ",  You Won!");
        document.winner = currentPlayer;
        if(currentPlayer === "X"){
            xScoreValue ++
        }
        else{
            oScoreValue ++
        }
        updateScore()
    } else if (currentPlayer == "X") {
        currentPlayer = "O";
      
        setMessage("It's " + currentPlayer + " 's turn. ");
    } else {
        currentPlayer = "X";
     

    }
        setMessage("It's " + currentPlayer + "'s turn");
}
function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

        result = true;
    }

    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}
function getBox(number) {
    return document.getElementById("s" + number).innerText;
}
function clearBox(number){
   $(".Square").each(function(){
       $(this).html("")
   })
   startGame()
}
function updateScore(){
    $("#xScore").html(xScoreValue)
    $("#oScore").html(oScoreValue)
}

$( document ).ready(function() {
    $(".Square").on("click", nextMove)
    $("#restart").on("click",clearBox)
    updateScore()
 
});

function checkCat (){
    if(move===9) {
        alert("Cats..Press Start Over")
    }
    checkcat();
}
