// trivial game

$(document).ready ( () => {

    var questions = {
        question : "What is my name?",
        answerSet : ["Bob", "Art", "Adam", "Henry"],
        correctAnswer : "Art",
    }

    // display points
    var point = 0;
    $('#points').text(point);
    
    var answerDiv = $('#answerSet');

    var question = $('#question').text(questions.question);
    
    question.append(question);

    questions.answerSet.forEach((answers) => {
        var answer = answers;
        var radioDiv = $('<div>').attr("class", "radio");
        var label = $('<label>');
        answerDiv.append(radioDiv);
        radioDiv.append(label);
        label.html("<input class='selectAnswer' type='radio' name='optradio' value='" + answer + "'>" + answer);

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