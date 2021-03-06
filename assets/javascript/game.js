$( document ).ready(function(){

	var totalScore; 
	var wins = 0;
	var losses = 0;
	var randomTotal;
	var crystalArray; 

	// runs reset function to start the game which sets all of the variables.
	reset()

	// reset function.  reandomly selects new crystal values and randomTotal goal, and resets the totalScore to 0. 
	function reset () {
		totalScore = 0;
		$(".totalScore").html(totalScore);
		crystalArray = []
		for(var i = 0; i < 4; i++) {
			crystalArray.push(Math.floor(Math.random() * 12) + 1);
		}
		randomTotal = Math.floor(Math.random() * 102) + 19;
		$("#targetScore").html(randomTotal);
	}

	// jquery html change commands.
	$("#targetScore").html(randomTotal);

	// click function
	$(".crystalImage").on("click", function() {
		var index = $(this).attr("value");   // sets the variable 'index' to connect with the values inside the html images.
		totalScore = totalScore + crystalArray[index - 1];  // take the previous totalScore and adds the value now associated with the button clicked.  "index - 1" to associate with the first member of the crystalArray.
	    $(".totalScore").html(totalScore); // updates the totalScore on the page
	    if(totalScore == randomTotal){  // sets the winning condition which would call the winner function.
	        winner();
	    }
	    else if(totalScore > randomTotal){  // sets the losing condition with calls the loser function.
	        loser();
	    }   
	})

	// sets my winner function.  adds a win, alerts a win, and runs reset function.
	function winner () {
		wins++;
		$("#wins").text(wins);
		alert("You're a winner!");
		reset();
	}

	// sets my loser function.  adds a win, alerts a loss, and runs reset function.
	function loser () {
		losses++;
		$("#losses").text(losses);
		alert("You lose!");
		reset();
	}

});