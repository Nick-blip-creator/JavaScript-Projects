
function myFunction() {
    document.getElementById("button1").innerHTML = "Hey there";
}

function myFunction1(){
    var string1 = "Hello, "
    string1 += "welcome to my store";
    document.getElementById("concat").innerHTML = string1;
}

function myFunction2(a,b) {
    return a + b;
    document.getElementById("test").innerHTML = myFunction2(3, 3);

}
