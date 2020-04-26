function teamPicker() {
    var teams;
    var teamSelect = document.getElementById("inputting").value;
    var teamText = " That team is really good";
    switch(teamSelect) {
        case "Lakers":
        teams = "Lakers" + teamText;
        break;
        case "Clippers":
        teams = "Clippers" + teamText;
        break;
        case "Rockets":
        teams = "Rockets" + teamText;
        break;
        default:
            teams = "You didnt pick one of the teams";
    }
    document.getElementById("output").innerHTML = teams;
}

function textChange() {
    var a = document.getElementsByClassName("change");
    a[0].innerHTML = "hiiiiiii!";
}



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(200, 100, 170, 200);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 250, 500);