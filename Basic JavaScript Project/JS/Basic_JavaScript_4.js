
function myDictionary(){
    var car = {
        Body:"Sedan",
        Color:"Red",
        Model:"BMW",
        Make: "M6",
    };
    delete car.Color;
    document.getElementById("Dictionary").innerHTML = car.Make;
}   
