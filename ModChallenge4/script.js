function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
function showQuestions(questions, quizContainer){
		var myQuestions = [
            {
      question: "what is 9+10?",
        answers: {
            a: '19',
            b: '21',
             c: '910'
        },
        correctAnswer: '19'
    },
    {
        question: "Where are Bearded dragons native to?",
        answers: {
            a: 'United States',
            b: 'Australia',
            c: 'China'
        },
        correctAnswer: 'Australia'
    }
];
}

	function showResults(questions, quizContainer, resultsContainer){
     function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
        
           
    for(var i=0; i<questions.length; i++){
        answers = [];
        for(letter in questions[i].answers){
    answers.push(
            '<label>'
                 + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                     + letter + ': '
                     + questions[i].answers[letter]
                + '</label>'
            );
          }
        
      output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
         );
     }
        
        
    quizContainer.innerHTML = output.join('');
}
}

showQuestions(questions, quizContainer);

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
}

