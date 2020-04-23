
var A = 20;
function add() {
    var A = 20;
    document.write(100 + A);
}
add(2, 5);

function multiply() {
    var x = 50;
    var y = 100;
    document.write(x * y);
}
multiply();


function add1() {
    console.log(A + 100);
}
add1(3,4);


function get_Date() {
    if (new Date().getHours() < 23) {
        Greeting = "Have a good day!";
        } else {
            Greeting = "go to bed";
        }
        document.getElementById("Greeting").innerHTML = Greeting;
    }

  
    function howHeight() {
        height = document.getElementById("height").value;
        if (height >= 6) {
            stringData = "You are tall enough";
        } else {
            stringData = "You are too short";
        }
        document.getElementById("howTall").innerHTML = stringData;
    }

    function Time_function() {
        var Time = new Date().getHours();
        var Reply;
        if (Time < 12 == Time > 0) {
            Reply = "It's the mornin"
        }
        else if (Time > 12 == Time < 18) {
            Reply ="It's afternoon";
        }
        else {
            Reply = "It's evening time";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }

    function fullSentence() {
        var sent1 = "Welcome to my store ";
        var sent2 = "Would you like a bagel? ";
        var sent3 = "I insist eat this bagel." ;
        var totalSentence = sent1.concat(sent2, sent3);
        document.getElementById("together").innerHTML = totalSentence;
    }