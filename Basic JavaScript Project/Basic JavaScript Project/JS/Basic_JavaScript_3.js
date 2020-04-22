function addFunction(a,b){
return a + b;
}
document.getElementById("addMath").innerHTML = addFunction(3,6)

function subtractFunction(a, b){
    return a - b;
    }
    document.getElementById("subtractMath").innerHTML = "Your total is " +  subtractFunction(6,3);

    function multiplyFunction(a, b){
        return a * b;
        }
        document.getElementById("multiplyMath").innerHTML = "Your total is " +  multiplyFunction(6,3);
    
        function divideFunction(a, b){
            return a / b;
            }
            document.getElementById("divideMath").innerHTML = "Your total is " +  divideFunction(6,3);
        
            

            function moreMath(a,b,c,d) {
                return a + b / c * d;
            }      
            document.getElementById("moreMath").innerHTML = "Your total is " +  moreMath(63,3345,438,1212);

            function modFunction(a, b){
                return a % b;
                }
                document.getElementById("modMath").innerHTML = "Your total is " +  modFunction(7,3);


                function negateFunction(a) {
                    return -a;
                }
                document.getElementById("negateMath").innerHTML = "Your total is " +  negateFunction(7);


                var x = 5;
                x++;
                document.write(x);

                var y = 5;
                y--;
                document.write(y);

                

                var i = Math.round(5.5);
                document.write(i);

               document.write(Math.random() * 500);
            
            