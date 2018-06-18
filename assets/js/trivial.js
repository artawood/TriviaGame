// trivial game

$(document).ready ( () => {

    var questions = {
        question : "What is my name?",
        answerSet : ["Bob", "Art", "Adam", "Henry"],
        correctAnswer : "Art",
    }

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

    
    var gameOver = function gameOver () {
        alert("You did not answer in time! Game Over!");
    };

    $('.startGame').on("click", () => {
        var startGame = setTimeout(gameOver, 3000);
    });

    $('#confirmAnswer').on("click", () => {
        var value = $("input[type='radio']:checked").val();
        if ($("input[type='radio']").is(':checked')) {
            if (value === questions.correctAnswer) {
                alert("Yes, you are correct! My name is " + value);
                clearTimeout(startGame);
                point++;
                $('#points').text(point);
                $('#startGame').modal('hide');
            } else {
                alert("No, my name is not " + value);
                $('#startGame').modal('hide');
            }
        } else {
            alert(" Please Select any Option ");
            $('#startGame').modal('hide');
        }
    });
});