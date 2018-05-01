var squares = [];
var EMPTY = '\xA0'
var score;
var moves;
var turn = 'X';

var wins = [7, 56, 448, 73, 146, 292, 273, 84];

var startNewGame = function() {
    turn = 'X';
    score = {'X': 0, 'O': 0};
    moves = 0;
    for(var i = 0; i < squares.length; i+=1){
	squares[i].firstChild.nodeValue = EMPTY;
    }
};

var win = function(score){
    for(var i = 0; i < wins.length; i++){
	if((wins[i] & score) === wins[i]){
	    return true;
	}
    }
    return false;
};

var set = function(){
    if(this.firstChild.nodeValue !== EMPTY){
	return;
    }
    this.firstChild.nodeValue = turn;
    moves += 1;
    score[turn] += this.indicator;
    if(win(score[turn])){
	alert(turn + "wins!");
	startNewGame();
    } else if(moves === 9){
	alert("Cat\u2019s game!");
	startNewGame();
    } else{
	turn = turn === 'X' ? 'O' : 'X';
    }
};

onload = function(){
    var indicator = 1;
    for(var i = 0; i < 3; i++){
	for(var j = 0; j < 3; j++){
	    var cell = document.getElementById("cell" + i + j);
	    cell.indicator = indicator;
	    cell.onclick = set;
	    cell.appendChild(document.createTextNode(''));
	    squares.push(cell);
	    indicator += indicator;
	}
    }
    startNewGame();
};

