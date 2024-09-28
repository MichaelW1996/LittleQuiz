//Quiz Section of JS code

//Globally available variables
var challenge = "JS Quiz"; //title of quiz
var Done = "Finished, well done!"; //message to finish quiz
var secondsLeft = 60; //total time for quiz, in seconds
var penalty = 10; //time penalty for a wrong answer

// global variables to specify the class/id within html
var timeEl = document.querySelector(".time"); //counter
var startButton = document.getElementById("start"); //button to start quiz
var submitButton = document.getElementById("submit"); //button to submit high score
var quizButton = document.getElementById("quiz"); //possible answers
var question = document.getElementById("question"); //question item in html
var main = document.querySelector("main");
var score = document.getElementById("score");
var input = document.getElementById("input");
var output = document.getElementById("output");
var candidate = document.getElementById("candidate");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var ScoreButton = document.getElementById("ScoreButton");

//The questions, saved as objects
var question1 = {
  Q: "What pair of characters delimits a List, Tuple, Dictionary?",
  A1: "[]",
  A2: "()",
  A3: "{}",
  A4: "<>",
  CA: "A1"
};

var question2 = {
  Q: "What is the difference between a variable and a constant, what are they used for?",
  A1: "A variable can change its value during the execution of a program, while a constant's value remains fixed. They are used to store data that may change (variable) or remains constant throughout the program (constant).",
  A2: "A variable's value remains fixed, while a constant can change its value during the execution of a program. They are used to store data that may change (variable) or remains constant throughout the program (constant).",
  A3: "A variable can change its value during the execution of a program, while a constant's value remains fixed. They are used to store data that remains constant throughout the program (variable) or may change (constant).",
  A4: "A variable's value remains fixed, while a constant can change its value during the execution of a program. They are used to store data that remains constant throughout the program (variable) or may change (constant).",
  CA: "A1"
};

var question3 = {
  Q: "What are the different data types in Python?",
  A1: "int, float, str, list, tuple, dict, set, bool",
  A2: "char, string, array, list, tuple, dict, set, bool",
  A3: "int, float, str, array, list, tuple, dict, set",
  A4: "int, float, string, list, tuple, dictionary, set, boolean",
  CA: "A1"
};

var question4 = {
  Q: "What is the difference between a float, integer, and string?",
  A1: "A float stores whole numbers, an integer stores decimal numbers, a string stores numerical values.",
  A2: "A float is a numerical data type that stores decimal numbers, an integer stores whole numbers, and a string stores text.",
  A3: "A float stores decimal numbers, an integer stores whole numbers, and a string stores text.",
  A4: "A float stores numerical values, an integer stores decimal numbers, and a string stores whole numbers.",
  CA: "A2"
};

var question5 = {
  Q: "What is a tuple?",
  A1: "A tuple is an immutable sequence of Python objects.",
  A2: "A tuple is a mutable sequence of Python objects.",
  A3: "A tuple is a data type used for storing text.",
  A4: "A tuple is a data type used for storing numerical values.",
  CA: "A1"
};

var question6 = {
  Q: "What is special about a dictionary?",
  A1: "A dictionary is an ordered collection of key-value pairs.",
  A2: "A dictionary is an unordered collection of key-value pairs where keys are unique.",
  A3: "A dictionary is a sequence of Python objects.",
  A4: "A dictionary is a data type used for storing numerical values.",
  CA: "A2"
};

var question7 = {
  Q: "What is the difference between iteration and selection, what commands/verbs (If,For....) would you use for each type?",
  A1: "Iteration involves repeating a set of statements based on a condition. Commands/verbs used: For loop. Selection involves choosing between different statements based on a condition. Commands/verbs used: If, Else.",
  A2: "Selection involves repeating a set of statements based on a condition. Commands/verbs used: For loop. Iteration involves choosing between different statements based on a condition. Commands/verbs used: If, Else.",
  A3: "Iteration involves choosing between different statements based on a condition. Commands/verbs used: If, Else. Selection involves repeating a set of statements based on a condition. Commands/verbs used: For loop.",
  A4: "Selection involves choosing between different statements based on a condition. Commands/verbs used: If, Else. Iteration involves repeating a set of statements based on a condition. Commands/verbs used: For loop.",
  CA: "A1"
};

var question8 = {
  Q: "What method could add to capitalize the first letter of a string?",
  A1: "upper()",
  A2: "title()",
  A3: "initcap()",
  A4: "capitalize()",
  CA: "A4"
};

var question9 = {
  Q: "What is an object in Python?",
  A1: "An object is a built-in data type in Python.",
  A2: "An object is an instance of a class that includes properties and Methods.",
  A3: "An object is a data type used for storing text.",
  A4: "An object is a data type used for storing numerical values.",
  CA: "A2"
};

var question10 = {
  Q: "What is a while loop used for?",
  A1: "A while loop is used to execute a block of code a fixed number of times.",
  A2: "A while loop is used to repeatedly execute a block of code as long as a condition is true.",
  A3: "A while loop is used to execute a block of code based on a condition until the condition becomes false.",
  A4: "A while loop is used to execute a block of code once.",
  CA: "A2"
};

var question11 = {
  Q: "What does refactoring mean from a coding and maintenance perspective?",
  A1: "Refactoring means restructuring existing computer code without changing its external behavior to improve readability, maintainability, and performance.",
  A2: "Refactoring means adding new features to existing code.",
  A3: "Refactoring means deleting existing code.",
  A4: "Refactoring means changing the external behavior of existing code without changing its internal structure",
  CA: "A1"
};

var question12 = {
  Q: "What is the purpose of an IDE?",
  A1: "An IDE is used to execute Python code.",
  A2: "An IDE is used to write code only.",
  A3: "An IDE is used to debug code.",
  A4: "An IDE is used to provide comprehensive facilities to programmers for software development.",
  CA: "A4"
};

var question13 = {
  Q: "What is the difference between an interpreted programming language and a compiled language?",
  A1: "In an interpreted language, code is translated into machine code before execution. In a compiled language, code is executed line by line at runtime.",
  A2: "In a compiled language, code is translated into machine code before execution. In an interpreted language, code is executed line by line at runtime.",
  A3: "In an interpreted language, code is executed line by line at runtime. In a compiled language, code is translated into machine code before execution.",
  A4: "In a compiled language, code is executed line by line at runtime",
  CA: "A3"
};


//build a catalogue of questions
var QuestionArray = [question1, question2, question3];
var currentA; //empty variable that acts an answer key later
var Qnumber = 0; //which question are we on

//Logic for working out the questions from the question number
var qtext = function (qnumber) {
  //Working out the text value for questions and the answer
  if (qnumber < QuestionArray.length) {
    //runs the function if there is another question in the array
    var currentQobj = QuestionArray[qnumber]; //current question object is found by using qnumber as index in Question array
    var currentQ = currentQobj.Q; //current question is the value of the Q key in the question object
    var currentOptions = [
      currentQobj.A1,
      currentQobj.A2,
      currentQobj.A3,
      currentQobj.A4,
    ]; //array of possible answers, from keys A1,A2,A3,A4 from current question object
    var answerkey = currentQobj.CA; //answer defined in object, eg Q1 answer is in the A4 slot, so this equals A4
    currentA = currentQobj[answerkey]; //Answer to current question is found by using the value of the the above variable (A4 for Q1) as a key on the question object (returning value {})

    question.textContent = currentQ; //Write the current question into the question text
    one.textContent = currentOptions[0]; //Write possible answers in the spaces for them
    two.textContent = currentOptions[1];
    three.textContent = currentOptions[2];
    four.textContent = currentOptions[3];
  }
};

var checker = function (event) {
  //function to check answers agains the key, takes in the event as input
  var element = event.target; //what did you click?
  console.log(element.innerHTML, currentA); //log the text of the button clicked and the correct answer (for debugging
  if (element.innerHTML == currentA) {
    //does the text in the button you clicked match the correct answer?
    //Yes, correct
    output.textContent = "Correct!"; //Correct text at bottom
    Qnumber++; //Next question
    qtext(Qnumber); //generate text for next question
    return;
  } else {
    //No, incorrect
    output.textContent = "Wrong!"; //Wrong text at the bottom
    //Idea? Style incorect answers?
    secondsLeft = secondsLeft - penalty; //A penalty score is applied - penalty is defined in the timer
    //changed to match required behaviour
    Qnumber++; //Next question
    qtext(Qnumber); //generate text for next question
    return;
  }
};

// When start button is clicked the following function is called
startButton.addEventListener("click", function start() {
  ScoreButton.className = "hidden";
  timeEl.textContent = "Time: " + secondsLeft; //displays that 60 seconds remain at start
  // function to start counting down from 60seconds
  var timerInterval = setInterval(function () {
    // when the time reaches 0, the timer is stopped
    if (secondsLeft < 1) {
      endFunction(); //run the ending function if the time is 0
    } else {
      secondsLeft--; //if the time is not zero count down one second
      timeEl.textContent = "Time: " + secondsLeft; //timer is equal to the word "Time" concatted with number of seconds left
    }
  }, 1000);

  // changes the element display status, text alignments, and box alignments
  document.getElementById("desc").style.display = "none";
  quizButton.classList.remove("hidden");
  startButton.style.display = "none";
  // output.style.display = "block";
  output.classList.remove("hidden");

  qtext(0); //runs qtext function to get text value for questions and answers on the first question (0 index)

  //end function to be triggered by final question answered or by timer running out
  var endFunction = function () {
    clearInterval(timerInterval); //kill the timer
    question.textContent = Done; //display a completion message
    quizButton.className = "hidden"; //hide the answer boxes
    score.classList.remove("hidden"); //show score
    input.classList.remove("hidden"); //show input feild for givin intital for highscore
    submitButton.classList.remove("hidden");
    output.className = "hidden";
    score.textContent = "Your score is: " + secondsLeft;
    ScoreButton.classList.remove("hidden");
  };

  // When button is clicked, it calls the following function
  quizButton.addEventListener("click", function (event) {
    checker(event); //checks the button clicked is the correct answer
    if (Qnumber == QuestionArray.length) {
      //if the current question is the last
      endFunction(); //end the quiz
    }
  });
});

// When submit button is clicked, it stores the value entered in <form> in local storage
submitButton.addEventListener("click", function submit() {
  event.preventDefault();
  console.log("Triggered");
  let OldScores = localStorage.getItem("Score"); //gets the current value of score in local storage
  if (OldScores == "No High scores yet") {
    //if the default message is the only item in storage
    localStorage.clear(); //get rid of the message
    localStorage.setItem("Score", `${candidate.value};${secondsLeft}`); //add the score with inital
  } else {
    //if there was already 1 or more scores
    localStorage.setItem(
      "Score",
      `${OldScores},${candidate.value};${secondsLeft}` //set the value to the old score(s) then the newest score
    );
  }
  location.reload();
  //reset the page to allow user to reattempt
});

candidate.addEventListener("keypress", function (event) {
  //listen for keypress in the candidate box
  if (event.key === "Enter") {
    // if the key is enter
    event.preventDefault(); //stop the reload
    submitButton.click(); //simulate a click on the submit button
  }
});

//High scores

//Elements only used by High scores
var ScoreContainer = document.getElementById("ScoresContainer");
var ResetButton = document.getElementById("ResetButton");
var StorageClear = document.getElementById("StorageClear");
var ScoreMain = document.getElementById("MainScores");
var QuestionMain = document.getElementById("MainQuestion");

var PullScores = function () {
  //gets scores from local storage and splits them into different strings
  var ScoreObject = localStorage.getItem("Score").split(","); //splits into "inital;score"
  ScoreObject.forEach((score) => {
    const Scoredata = score.split(";"); //splits into an array of [inital, score]
    const ScoreCard = document.createElement("card"); //make the elements to hold the score
    const ScoreName = document.createElement("p");
    const ScoreNumber = document.createElement("p");
    ScoreName.textContent = Scoredata[0]; //insert inital
    ScoreNumber.textContent = Scoredata[1]; //insert score
    ScoreCard.append(ScoreName, ScoreNumber); //add to card
    ScoreContainer.append(ScoreCard); //put the card in the container
  });
};

var displayswitch = function () {
  //Hides unwanted content for scores and unhides the score board
  QuestionMain.className = "hidden";
  ScoreButton.className = "hidden";
  ScoreMain.classList.remove("hidden");
  ResetButton.classList.remove("hidden");
  StorageClear.classList.remove("hidden");
};

ScoreButton.addEventListener("click", function () {
  if (localStorage.getItem("Score") == null) {
    localStorage.setItem("Score", "No High scores yet");
  }
  PullScores();
  displayswitch();
});
ResetButton.addEventListener("click", function () {
  location.reload();
});
StorageClear.addEventListener("click", function () {
  localStorage.clear();
  localStorage.setItem("Score", "No High scores yet");
  location.reload();
});
