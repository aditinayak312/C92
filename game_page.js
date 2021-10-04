player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;


function send(){

     get_word=document.getElementById("word").value;
     word=get_word.toLowerCase();
    c1= word.charAt(1);
    console.log(c1);
     halflength=Math.floor(word.length/2);
     c2=word.charAt(halflength);
    console.log(c2);
     lastletter=word.length-1;
     c3=word.charAt(lastletter);
    console.log(c3);
     removec1 = word.replace(c1,"_");
     removec2 = removec1.replace(c2,"_");
    console.log(removec2);
     c3=removec2.replace(c3," _ ");

    
     question="<h4 id='word_display' >Q."+c3+" </h4>";
     answer="<br><br> Ans: <input id='input_box' placeholder='ANSWER'>";
     check_button="<br><br> <button onclick='check()' class='btn btn-primary'>CHECK</button>";
     row=question+answer+check_button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";


function check(){

    get_ans=document.getElementById("input_box").value;
    answer=get_ans.toLowerCase();

    if(answer==word){

        if (answer_turn=="player1"){

            player1_score=player1_score+1;
            console.log(player1_score);
            document.getElementById("player1_score").innerHTML=player1_score;
        }

        else {

            player2_score=player2_score+1;
            console.log(player2_score);
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn=="player1"){

        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn -"+player2_name;

    }

    else {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn -"+player1_name;
    }

    if (answer_turn=="player1"){

        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

    }

    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}

