﻿//FizzBuzz
//Wire event handler for click of button
document.getElementById("btnFizz").addEventListener('click', function () {

    //Get user input
    let f = Number(document.getElementById("userIn1").value); //User inputs
    let b = Number(document.getElementById("userIn2").value);
    FizzBuzz(f, b);

    //Modulus operator 

    //Run user input through named function
    //let output = FizzBuzz(f, b);


    //Output the results of FizzBuzz function
    //document.getElementById("fizzy").innerHTML = output;

})

document.getElementById("userIn1").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})

document.getElementById("userIn2").addEventListener('keydown', function (evt) {

    var character = (evt.which) ? evt.which : evt.keycode;
    if (character >= 48 && character <= 57 ||
        character === 8) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
})




//Named function
function FizzBuzz(f, b) {
    //let output = "";
    let classCollect = document.getElementsByClassName("fizzy");

    for (let loop = 1; loop < classCollect.length; loop++) {
        let fizzRemainder = loop % f;
        let buzzRemainder = loop % b;
        //output += ``;

        if (fizzRemainder === 0 && buzzRemainder === 0) {
            //output += "FizzBuzz";
            classCollect[loop].innerHTML = "FizzBuzz!";
            classCollect[loop].style.fontWeight = "bold";

        }
        else if (fizzRemainder === 0) {
            //output += "Fizz";
            classCollect[loop].innerHTML = "Fizz";
            classCollect[loop].style.fontWeight = "bold";

        }
        else if (buzzRemainder === 0) {
            //output += "Buzz";
            classCollect[loop].innerHTML = "Buzz";
            classCollect[loop].style.fontWeight = "bold";

        }
        else {
            //output += loop;
            classCollect[loop].innerHTML = loop;
        }
    }
    //return output;
}

