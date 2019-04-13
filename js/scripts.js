// Where Business Logic Starts
//utility function for generating roll dice score
var throwdice = function () {
  return Math.floor(6 * Math.random()) + 1;
}
// Create a player constructor
function Player() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
}

// checking if roll value is one
Player.prototype.rollone = function () {
  if (this.roll === 1) {
    this.tempscore = 0;
  } else {
    this.tempscore += this.roll;
  }
}

// player selects to hold 
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
}

//check who has won
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    return 1;

  }
}
//clear the all totals for new game
Player.prototype.newGame = function() {
  this.totalscore = 0;
  this.tempscore = 0;
}
// End of  business logic

// User Interface
$(document).ready(function () {

//create player objects
  player1 = new Player();
  player2 = new Player();
//set player to start the game
  $("#player1-panel").show();
  $("#player2-panel").hide();
  $(".messages").text("player1 begins the game.");


  $("button#player1-roll").click(function (event) {
    player1.roll = throwdice();
    $("#roll-score-player1").text(player1.roll);
    player1.rollone();
    if (player1.tempscore === 0) {
      $(".messages").show()
      $(".messages").text("Sorry , Player1, you rolled a 1! Your turn is over!");
      $("#player1-panel").hide();
      $("#player2-panel").show();
    }
    $("#roll-totals-player1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function (event) {
    player2.roll = throwdice();
    $("#roll-score-player2").text(player2.roll);
    player2.rollone();
    if (player2.tempscore === 0) {
      $(".messages").show();
      $(".messages").text("Sorry ,Player2, you rolled a 1!Your turn is over!");
      $("#player2-panel").hide();
      $("#player1-panel").show();
    }
    $("#roll-totals-player2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function (event) {
    player1.hold();
    $(".messages").show();
    $(".messages").text("Player1's, Roll scores moved to Total scores!");
    $("#final-totals-player1").text(player1.totalscore);
    $("#roll-score-player1").empty();
    $("#roll-totals-player1").empty();
    $("#player1-panel").hide();
    $("#player2-panel").show();

    player1.winnerCheck();
    if (player1.totalscore >= 100) {
      $(".messages").show();
      $(".messages").text("Player 1, Winner !!! " + player1.totalscore);
      $("#final-totals-player2").empty();
      $("#final-totals-player1").empty();
    player1.newGame();
    player2.newGame();

    }
  });

  $("button#player2-hold").click(function (event) {
    player2.hold();
    $("#final-totals-player2").text(player2.totalscore);
    $(".messages").show();
    $(".messages").text("Player2's, Roll scores moved to Total scores!");
    $("#roll-score-player2").empty();
    $("#roll-totals-player2").empty();
    $("#player2-panel").hide();
    $("#player1-panel").show();
    player2.winnerCheck();
    if (player2.totalscore >= 100) {
      $(".messages").show();
      $(".messages").text("Player 2, Winner !!! Score " + player2.totalscore);
      $("#final-totals-player2").empty();
      $("#final-totals-player1").empty();
      player2.newGame();
      player1.newGame();
    }
  });

});
