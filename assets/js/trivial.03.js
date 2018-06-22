// trivial game

$(document).ready ( () => {

    var questionNumbers = ["one", "two", "three"];

    var questionOne = {
        question : "Where do Giant Panda live?",
        answerSet : ["Japan", "China", "United States", "Congo"],
        correctAnswer : "China",
    }

    var questionTwo = {
        question : "How much can a Giant Panda weight on average?",
        answerSet : ["300lbs/136kg", "600lbs/272.73kg", "1000lbs/454.54kg", "1500lbs/680.86kg"],
        correctAnswer : "300lbs/136kg",
    }

    var questionThree = {
        question : "How many hours does a Giant Panda spent eating?",
        answerSet : ["5-6 hours", "7-9 hours", "10-16 hours", "the whole day"],
        correctAnswer : "10-16 hours",
    }
    // display points
    var point = 0;
    $('#points').text(point);

    // Set up variables to display question and question sets
    var questionForm = $('#questions');

    var answerDiv = $('<div>').attr("class", "anwserSet");

    questionNumbers.forEach((number) => {
        var questionSet = $('<div>').addClass("question " + number);
        questionForm.append(questionSet);
    });
    
    //First Question Set
    var one = $('.one');
    var firstQuestion = $("<h3>").text(questionOne.question);
    var answerSetOne = $('<div>').attr("class", "answerSetOne");
    one.append(firstQuestion);
    one.append(answerSetOne);

    questionOne.answerSet.forEach((answers) => {
        var answerOne = answers;
        var radioDiv = $('<div>').attr("class", "radio");
        var label = $('<label>');
        answerSetOne.append(radioDiv);
        radioDiv.append(label);
        label.html("<input id='selectAnswerOne' type='radio' value='" + answerOne + "'> " + answerOne);

    });

    //Second Question Set
    var two = $('.two');
    var secondQuestion = $("<h3>").text(questionTwo.question);
    var answerSetTwo = $('<div>').attr("class", "answerSetTwo");
    two.append(secondQuestion);
    two.append(answerSetTwo);
    questionTwo.answerSet.forEach((answers) => {
        var answerTwo = answers;
        var radioDiv = $('<div>').attr("class", "radio");
        var label = $('<label>');
        answerSetTwo.append(radioDiv);
        radioDiv.append(label);
        label.html("<input id='selectAnswerTwo' type='radio' value='" + answerTwo + "'> " + answerTwo);

    });

    //Third Question Set
    var three = $('.three');
    var thirdQuestion = $("<h3>").text(questionThree.question);
    var answerSetThree = $('<div>').attr("class", "answerSetThree");
    three.append(thirdQuestion);
    three.append(answerSetThree);
    questionThree.answerSet.forEach((answers) => {
        var answerThree = answers;
        var radioDiv = $('<div>').attr("class", "radio");
        var label = $('<label>');
        answerSetThree.append(radioDiv);
        radioDiv.append(label);
        label.html("<input id='selectAnswerThree' type='radio' value='" + answerThree + "'> " + answerThree);

    });


    //Display Timer
    var time = 10;
    $('#display').text(time);

    //Start Game
    $('.startGame').on("click", () => {
        //On click "Start Game", execute and display countdown
        var timer = setInterval( ()=> {  
            time--
            console.log(time);
            $('#display').text(time);
        }, 1000);
        
        //Check if selected answers are correct
        function validation () {
            var valueOne = $("input#selectAnswerOne:checked").val();
            var valueTwo = $("input#selectAnswerTwo:checked").val();
            var valueThree = $("input#selectAnswerThree:checked").val();
            if ($("input[type='radio']").is(':checked')) {
                if (valueOne === questionOne.correctAnswer) {
                    point++;
                }
                if (valueTwo === questionTwo.correctAnswer) {
                    point++;
                }
                if (valueThree === questionThree.correctAnswer) {
                    point++;
                }
            }
            $('#points').text(point);
        };

        //Display "Game Over" if timer ends and stop countdown from displaying less than 0
        var gameOver = function gameOver () {
            validation();
            $('#timeUp').modal('show');
            clearInterval(timer);
        };

        //Set Time Out
        var startGame = setTimeout(gameOver, 10000);

        //Run validation after clicking submit
        $('#confirmAnswer').on("click", () => {
            event.preventDefault();
            validation();
            $('#points').text(point);
            clearTimeout(startGame);
            clearInterval(timer);
            $('#success').modal('show');
        });
    });

    //Reloads the page if play again
    $(".playAgain").on("click", () => {
        location.reload();
    });

});