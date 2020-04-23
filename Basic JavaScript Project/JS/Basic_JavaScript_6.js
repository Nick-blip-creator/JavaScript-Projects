function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";

}


function voteAge () {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are too young to vote":"You are allowed to vote";
    document.getElementById("vote").innerHTML = canVote  + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "colored " + Erik.Vehichle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


function House(Yard, Pool, Gate, Driveway) {
    this.House_Yard = Yard;
    this.House_Pool = Pool;
    this.House_Gate = Gate;
    this.House_Driveway = Driveway;
}
var willow = new House("front Yard", "spa", "plastic", "two-car");
function houseFunction() {
    document.getElementById("New_and_This").innerHTML = "Willow lives in the " + willow.House_Yard;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var starting_point = 9;
        function Plus_one() {
            starting_point += 1;
        }
        Plus_one();
        return starting_point;
    }
}

function subtract_Function() {
    document.getElementById("Nested_Function").innerHTML = minus();
    function minus() {
        var start = 32 ;
        function minus_One() {
            start -= 1;
        }
        minus_One();
        return start;
    }
}

function numberPies () {
    document.getElementById("Nested_Function").innerHTML= pies();
    function pies () {
        var start = 95;
        function minus_Pie() {
            start -= 1;
            
        } 
        minus_Pie();
        return start;
    }
}



