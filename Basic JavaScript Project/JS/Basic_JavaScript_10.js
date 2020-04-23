function Call_Loop() {
    var amount = "";
    var A = 1;
    while (A < 10) {
        amount += "<br>" + A;
        A++;
    }
    document.getElementById("Loop").innerHTML = amount;
}

function stringFunction() {
    var str = "Hello there";
    var a = str.length;
    document.getElementById("longstring").innerHTML = a;
}

function for_Loop() {
    var cars = ["BMW", "Benz", "bentley", "ferrari"];
var data = "Your favorite car types should be: " + "<br>";
   var A;

   for (A = 0; A < cars.length; A++) {
       data += cars[A] + "<br>";
   }
document.getElementById("List_of_Instruments").innerHTML = data;
}

function array_Function() {
var Car_Things = [];
Car_Things[0] = "ferrari";
Car_Things[1] = "bmw";
Car_Things[2] = "bentley";
Car_Things[3] = "rolls royce";
document.getElementById("Array").innerHTML = "This is a photo of a " + Car_Things[3];

}

function constant_function() {
    const Vehicle = {type: "Sedan", model:"6 series", color: "Black"};
    Vehicle.wheel = "Red";
    Vehicle.wheel = "pink";
    document.getElementById("Constant").innerHTML = Vehicle.wheel + " The cost will be $400 for a " + Vehicle.model;
}

function houseFun() {
    let home = {
        garge: "two car",
        pool: "spa",
        bedrooms: 10,
        description: function() {
            return "This house has a " + this.garge + " garage";
        }
    }
    document.getElementById("house").innerHTML = home.description();
}

function breakFun() {
    var text = "";
    var i = 1;
    while (i < 55) {
        text += "<br>" + i;
        i++;
        if (i === 34) {
            break;
        }
    }
    document.getElementById("break").innerHTML = text;
}

function continueFun() {
    var text = "";
    var i;
    for (i = 0; i < 34; i++) {
        if(i === 12) {
            continue;
        }
        text += "<br>" + i;
    }
    document.getElementById("continue").innerHTML = text;
}