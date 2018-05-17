(function(){

	angular.module("tv_facts")
	.factory("quizMetrics",QuizMetrics);

	QuizMetrics.$inject=['DataService'];

	function QuizMetrics(DataService)	{
		var quizOb = {
			quizActive: false,
			resultsActive: false,
			changeState: changeState,
			markQuiz: markQuiz,
			correctAnswers: [],
			numCorrect: 0
		};
		return quizOb;

		function changeState(metric, state){

			if(metric === "quiz")
				quizOb.quizActive = state;
			else if(metric === "results")
				quizOb.resultsActive = state;
			else
				return false;
		}

		function markQuiz(){
			quizOb.correctAnswers = DataService.correctAnswers;
			for(var i=0; i<DataService.quizQuestions.length; i++){
				if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
					DataService.quizQuestions[i].correct = true;
					quizOb.numCorrect++;
				}
				else{
					DataService.quizQuestions[i].correct = false;
				}
			}
		}
	}
})();