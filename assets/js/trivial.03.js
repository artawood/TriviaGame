// trivial game

$(document).ready ( () => {

    var questionOne = {
        question : "What is my name?",
        answerSet : ["Bob", "Art", "Adam", "Henry"],
        correctAnswer : "Art",
    }

    var questionTwo = {
        question : "How old am I?",
        answerSet: ["24, 16, 56, 33"],
        correctAnswer: "33",
    }

    // display points
    var point = 0;
    $('#points').text(point);
    
    var answerDiv = $('<div>').attr("class", "answerSet");

    var displayQuestionOne = $('<h3>').attr("class", "questionOne").text(questionOne.question);
    var displayQuestionTwo = $('<h3>').attr("class", "questionTwo").text(questionTwo.question);
    
    $('#questions').append(answerDiv);
    answerDiv.prepend(displayQuestionOne);
    answerDiv.append(displayQuestionTwo);

    questionOne.answerSet.forEach((answers) => {
        var answerOne = answers;
        var radioDiv = $('<div>').attr("class", "radio");
        var label = $('<label>');
        answerDiv.append(radioDiv);
        radioDiv.append(label);
        label.html("<input class='selectAnswer' type='radio' name='optradio' value='" + answerOne + "'>" + answerOne);

    });

    questionTwo.answerSet.forEach((answers) => {
        var answerTwo = answers;
        var radioDiv = $('<div>').attr("class", "radio");
        var label = $('<label>');
        answerDiv.append(radioDiv);
        radioDiv.append(label);
        label.html("<input class='selectAnswer' type='radio' name='optradio' value='" + answerTwo + "'>" + answerTwo);

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
        
        //Display "Game Over" if timer ends and stop countdown from displaying less than 0
        var gameOver = function gameOver () {
            alert("You did not answer in time! Game Over!");
            clearInterval(timer);
        };

        //On click "Start Game", execute timer
        var startGame = setTimeout(gameOver, 10000);


        $('#confirmAnswer').on("click", () => {
            event.preventDefault();
            var value = $("input[type='radio']:checked").val();
            if ($("input[type='radio']").is(':checked')) {
                if (value === questions.correctAnswer) {
                    alert("Yes, you are correct! My name is " + value);
                    clearTimeout(startGame);
                    clearInterval(timer);
                    point++;
                    $('#points').text(point);
                } else {
                    alert("No, my name is not " + value);
                }
            } else {
                alert(" Please Select any Option ");
            }
        });
    });

});