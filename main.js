function Adduser(){
    Player_1_name=document.getElementById("player_1_name_input").value;
    Player_2_name=document.getElementById("player_2_name_input").value;

    localStorage.setItem("Player 1 name", Player_1_name);
    localStorage.setItem("Player 2 name", Player_2_name);

    window.location="quiz.html";
}