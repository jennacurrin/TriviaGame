$(document).ready(function() {
    // The page has to load. Timer, questions/answers stay hidden.
        $('#countdown').hide();
        $('.trivia-ques').hide();
        $('.results').hide();
    
     
        var timer = 60; 
        var intervalId;
        var unanswered = 0;
        var correctAnswer = 0;
        var wrongAnswer = 0;
    

    
        // jQuery to show questions
        function showQuestions(){
            $('#countdown').show();
            $('.trivia-ques').show();
            $('#game-done').show();
        }
    
        //Timer
        function countdownTimer(){
             intervalId = setInterval(decrement, 1000);
        }
       
         // function to decrement timer
        function decrement(){
            timer--;
            $('#timer').html(" " + timer + " " + "seconds");
            if (timer ===1){
                $('#timer').html(" " + timer + " " + "second");
            }
            else if(timer ===0) {
                stop();
                displaySummary();
            }
        }
    
        //function that keep timer from going into the negative
        function stop() {
            clearInterval(intervalId);
        }
    
        //function to hide text after questions are answered or timer out
        function hide(){
            $('#countdown').hide();
            $('.trivia-ques').hide();
            $('#game-done').hide();
        }
    
        // shows results/answered&unanswered
        function displaySummary(){
            $('.results').show();
            unanswered = (8-(correctAnswer+wrongAnswer));
            $('#correctScore').text("Correct Answers:" + " " + correctAnswer); 
            $('#wrongScore').text("Wrong Answers:" + " " + wrongAnswer); 
            $('#unanswered').text("Unanswered:" + " " + unanswered); 
        }
    
        //Clicking Start Button:displays questions and starts/calls timer function
        $('#game-start').on('click', function(){
            $('#game-start').hide();
            showQuestions();
            countdownTimer();
        }); 
    
        //Done button: hides questions and displays results/summary function
        $('#game-done').on('click', function(){
            $('#game-start').hide(); 
            hide();
            displaySummary();
        });
    
    });