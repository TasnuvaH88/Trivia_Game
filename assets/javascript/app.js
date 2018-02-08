var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "Which actor played a role in both \"Twin Peaks\" and \"The X-Files\"?",
  answers: ["Winona Ryder", "Kyle McLaughlin", "David Duchovny", "Sheryl Lee"],
  correctAnswer: "David Duchovny"
}, {
  question: "How long does it take for light from the Sun to reach Earth?",
  answers: ["8 minutes, 20 seconds", "5 minutes, 10 seconds", "1 minute", "56 minutes, 9 seconds"],
  correctAnswer: "8 minutes, 20 seconds"
}, {
  question: "Which philosopher is best known for the saying, \"I think, therefore, I am.\"?",
  answers: ["Jacques Derrida", "Michel Foucault", "Rene Descartes", "Mulla Sadra"],
  correctAnswer: "Rene Descartes"
}, {
  question: "Which country is the geographically largest in the world?",
  answers: ["China", "United States of America", "India", "Russia"],
  correctAnswer: "Russia"
}, {
  question: "What is the name of the celestial occurence when the moon passes directly behind the Earth?",
  answers: ["Lunar Eclipse", "Solar Eclipse", "Solar Flare", "New Moon"],
  correctAnswer: "Lunar Eclipse"
}, {
  question: "Who wrote the play called 'No Exit'?",
  answers: ["William Shakespeare", "Soren Kierkegaard", "Arthur Miller", "Jean-Paul Sartre"],
  correctAnswer: "No Exit"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});