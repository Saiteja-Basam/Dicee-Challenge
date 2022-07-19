var gnum1=0,gnum2=0;

function rolldice()
{
    var num1 = Math.ceil(Math.random() * 6);
    var num2 = Math.ceil(Math.random() * 6);
    gnum1+=num1;
    gnum2+=num2;
    var str1="Player 1 score : "+gnum1;
    var str2="Player 2 score : "+gnum2;
    document.querySelector("#player1").innerHTML = str1;
    document.querySelector("#player2").innerHTML = str2;
    var imageurl1 = "images/dice" + num1 + ".png";
    var imageurl2 = "images/dice" + num2 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", imageurl1);
    document.getElementsByClassName("img2")[0].setAttribute("src", imageurl2);
    if (num1 == num2) {
        document.querySelector("#refresh").innerHTML = "Draw";
    } else if (num1 > num2) {
        document.querySelector("#refresh").innerHTML = "Player 1 wins";
    } else {
        document.querySelector("#refresh").innerHTML = "Player 2 wins";
    }
}

function reset()
{
    gnum1=gnum2=0;
    document.querySelector("#refresh").innerHTML = "Roll Dice to Start";
    document.querySelector("#player1").innerHTML = "Player 1 score : 0";
    document.querySelector("#player2").innerHTML = "Player 2 score : 0";
}
