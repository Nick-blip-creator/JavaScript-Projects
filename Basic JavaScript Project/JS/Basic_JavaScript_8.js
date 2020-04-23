function fullSentence() {
    var sent1 = "Welcome to the bagel store " ;
    var sent2 = "Would you like this bagel? ";
    var sent3 = "Okay lemme know then.";
    var totalSent = sent1.concat(sent2, sent3);
    document.getElementById("concatIt").innerHTML = totalSent;
}

function slice_time() {
    var sentence = "I went to the store to eat a bunch of apples";
    var sliceItUp = sentence.slice(2,6);
    document.getElementById("concatIt").innerHTML = sliceItUp;
}

function getUpped() {
    var sentence1 = "this is lower case?";
    var upped = sentence1.toUpperCase();
    document.getElementById("upperCased").innerHTML = upped;
}

function whereIsYou() {
    var sent1 = "Sometimes I like to go to dance at the school";
    var search = sent1.search("o");
    document.getElementById("searchingForYa").innerHTML = search;
}

function numToStr() {
    var A = 12;
    document.getElementById("numberToString").innerHTML = A.toString();
}

function precision1() {
    var A = 190.55555;
    document.getElementById("numberToString").innerHTML = A.toPrecision(5);
}

function fixed() {
    var A = 21.6500;
    document.getElementById("fixed1").innerHTML = A.toFixed(2);
}

function primativeTime() {
    var string = "What's going on?";
    var total = string.valueOf();
    document.getElementById("primeTime").innerHTML = total;
}