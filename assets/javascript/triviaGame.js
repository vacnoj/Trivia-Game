$(document).ready(function() {

	var timerValue = 10;

	var correctAnswers = 0;

	var wrongAnswers = 0;

	var unanswered = 0;

	$("#start-button").click(function() {
		$("#start-screen").hide();
		$("#game-screen").show();

		var interval = setInterval(timer, 1000);

		function timer() {
			timerValue--;
			$("#timer").text(`Time remaining: ${timerValue}`);

			if(timerValue === 0) {
          		clearInterval(interval);
          		$("#game-screen").hide();
          		$("#gameOver-screen").show();
          		isRight();

        	}
		}
	}); 

	function isRight() {
		for (var i = 1; i < 4; i++) {

			var buttonValue = $(`input[name=a${i}]:checked`).val();
			if (buttonValue === "true") {
				console.log(true);
				correctAnswers++;
			} else if (buttonValue === "false") {
				console.log(false);
				wrongAnswers++;
			} else {
				console.log("unanswered");
				unanswered++;
			}
		}
	}




});