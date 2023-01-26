function send (){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1)*parseInt(number2);

    question_number = "<h4>"+number1+"X"+number2+"</h4>";
    input_box = "<br> ANSWER:<input type='text'id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info'onclick='check()'>CHECK</button>";
    row = question_number+input_box+check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = localStorage.getItem('player1');
answer_turn = localStorage.getItem('player2');

function check(){
    get_answer = document.getElementById("input_check_box").value ;

    if (get_answer == actual_answer){
        if(answer_turn == "player1"){
           update_player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML ="ANSWER TURN :"+ update_player1_score;
        }else {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML ="ANSWER TURN :"+player2_score;
        }
    }

    if (get_answer == actual_answer){
        if(question_turn == "player1"){
           update_player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML ="QUESTION TURN :"+update_player1_score;
        }else {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML ="QUESTION TURN :"+player2_score;
        }
    }

    document.getElementById("output").innerHTML = "";
}