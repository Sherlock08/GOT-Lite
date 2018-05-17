(function (){

	angular.module("tv_facts")
	.controller("resultController",ResultController)

	ResultController.$inject = ['quizMetrics','DataService'];

	function ResultController(quizMetrics,DataService){

		var v = this;
		v.quizMetrics = quizMetrics;
		v.dataService = DataService;
		v.activeQuestion = 0;
		v.getAnswerClass = getAnswerClass;
		v.setActiveQuestion = setActiveQuestion;
		v.calculatePerc = calculatePerc;
		v.reset = reset;

		function getAnswerClass(index){
			
			if(index === quizMetrics.correctAnswers[v.activeQuestion])
				return "bg-success";
			else if(index === DataService.quizQuestions[v.activeQuestion].selected)
				return "bg-danger";
		}

		function setActiveQuestion(index){
			v.activeQuestion = index;
		}

		function calculatePerc(){
			return ((quizMetrics.numCorrect / DataService.quizQuestions.length) * 100); 
		}

		function reset(){
			
			quizMetrics.changeState("results",false);
			quizMetrics.numCorrect = 0;

			for(var i=0; i<DataService.quizQuestions.length; i++){
				var data = DataService.quizQuestions[i];
				data.selected = null;
				data.correct = null;
			}
		}

	}

})();