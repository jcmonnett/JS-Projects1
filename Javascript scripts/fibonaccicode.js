function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var output = [];
        if (n === 1) {
            output = [0];
        }
        else if (n === 2) {
            output = [0,1];
        }
        else  {
            output = [0,1];
            for (var i = 2; i < n; i++) {
                output.push(output[output.length - 2] + output[output.length - 1]);
            }
               
        }
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    




    // var numOne = 0;
    //     var numTwo = 1;
    //     var total = 0;
    //     var nextNum;
    //     var numArray;
    //     numArray.push(numOne && numTwo);
        

    //     for (var i = 0; i < n; i++) {
    //       numOne + numTwo === total;
    //       nextNum === numTwo;
    //       numTwo === total;
    //       numOne === nextNum;

    //       numArray.push(numOne && numTwo);

    //       return numArray;

    //     }