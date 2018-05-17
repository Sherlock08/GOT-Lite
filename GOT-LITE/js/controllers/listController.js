(function(){
	var myApp = angular.module("tv_facts");
	myApp.controller("listController",ListController);

	ListController.$inject = ['quizMetrics','DataService'];

	function ListController(quizMetrics,DataService){
		 
		 var v = this;
		 v.quizMetrics = quizMetrics;
		 v.data = DataService.tvData;
		 v.activeTV = {};
		 v.changeActiveTV = changeActiveTV;
		 v.search = "";
		 v.activateQuiz = activateQuiz;

		 function changeActiveTV(index){
		 	v.activeTV = index;
		 }

		 function activateQuiz(){
		 	quizMetrics.changeState("quiz",true);
		 }
	}

	

})();