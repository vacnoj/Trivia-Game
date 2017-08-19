$(document).ready(function() {

	var timerValue = 300;

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

        	}
		}
	});

	function triviaQuestions() {
		var questions = []

	}





});