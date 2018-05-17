( function(){

	angular.module("tv_facts")
	.controller("quizController",QuizController);

	QuizController.$inject = ['quizMetrics','DataService'];

	function QuizController(quizMetrics,DataService){
		
		var v = this;
		v.quizMetrics = quizMetrics;
		v.dataService = DataService;
		v.activeQuestion = 0;
		v.questionAnswered = questionAnswered;
		v.setActiveQuestion = setActiveQuestion;
		v.selectAnswer = selectAnswer;
		v.finalise = false;
		v.error = false;
		v.finaliseAnswers = finaliseAnswers;
		var numQuestionsAnswered = 0;

		function setActiveQuestion(index){

			if(index==undefined){
				var breakOut = false;
				var quizLength = DataService.quizQuestions.length - 1;

				while(!breakOut){
					
					v.activeQuestion = v.activeQuestion < quizLength ? ++v.activeQuestion : 0 ;

					if(v.activeQuestion === 0){
						v.error = true;
					}

					if(DataService.quizQuestions[v.activeQuestion].selected === null)
						breakOut = true;
				}
			}
			else{
				v.activeQuestion=index;
			}
		}

		function questionAnswered(){

			if(DataService.quizQuestions[v.activeQuestion].selected !== null){

				var quizLength = DataService.quizQuestions.length;

				numQuestionsAnswered++;
				if(numQuestionsAnswered>=quizLength){
					//finalise quiz
					for(var i=0; i<quizLength; i++){
						if(DataService.quizQuestions[i].selected === null){
							setActiveQuestion(i);
							return;
						}	
					}
					v.error = false;
					v.finalise = true;
					return;
				}
			}

			v.setActiveQuestion();

		}

		function selectAnswer(index){

			DataService.quizQuestions[v.activeQuestion].selected = index;
		}

		function finaliseAnswers(){
			v.finalise = false;
			numQuestionsAnswered = 0;
			v.activeQuestion = 0;

			quizMetrics.markQuiz();
			quizMetrics.changeState("quiz", false);
			quizMetrics.changeState("results", true);
		}


		
	}

}
)();