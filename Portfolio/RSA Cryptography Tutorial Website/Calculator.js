$(document).ready(function() {
    $("#calculatorElement").css('background-color', '#4CAF50'); 
    
    //TEXT TO NUMBER CONVERTER
    $("#inputSubmit").click(function(){
        var numberInput = $('#numberInput').val();
        numberInput = numberInput.toUpperCase();
        numberInput.trim();
        
        if(numberInput === ''){
            $("#numberP").text("");
            alert("Please enter text.");
        }
        else if(!(numberInput.indexOf("A") > -1 || numberInput.indexOf("B") > -1 || numberInput.indexOf("C") > -1 || numberInput.indexOf("D") > -1 ||
                numberInput.indexOf("E") > -1 || numberInput.indexOf("F") > -1 || numberInput.indexOf("G") > -1 || numberInput.indexOf("H") > -1 ||
                numberInput.indexOf("I") > -1 || numberInput.indexOf("J") > -1 || numberInput.indexOf("K") > -1 || numberInput.indexOf("L") > -1 ||
                numberInput.indexOf("M") > -1 || numberInput.indexOf("N") > -1 || numberInput.indexOf("O") > -1 || numberInput.indexOf("P") > -1 ||
                numberInput.indexOf("Q") > -1 || numberInput.indexOf("R") > -1 || numberInput.indexOf("S") > -1 || numberInput.indexOf("T") > -1 ||
                numberInput.indexOf("U") > -1 || numberInput.indexOf("V") > -1 || numberInput.indexOf("W") > -1 || numberInput.indexOf("X") > -1 ||
                numberInput.indexOf("Y") > -1 || numberInput.indexOf("Z") > -1)){
                    alert("Please enter text within the alphabet.");
            
        }
        else{
            var length = numberInput.length;
            var currentChar ="";
            var numberConversion="";
            var i;

            //run through all characters of the string
            for(i=0; i<length; i++){
                currentChar = numberInput.charAt(i);
                switch(currentChar){
                    case "A":
                        numberConversion += "0";
                        break;
                    case "B":
                        numberConversion += "1";
                        break;
                    case "C":
                        numberConversion += "2";
                        break;
                    case "D":
                        numberConversion += "3";
                        break;
                    case "E":
                        numberConversion += "4";
                        break;
                    case "F":
                        numberConversion += "5";
                        break;
                    case "G":
                        numberConversion += "6";
                        break;
                    case "H":
                        numberConversion += "7";
                        break;
                    case "I":
                        numberConversion += "8";
                        break;
                    case "J":
                        numberConversion += "9";
                        break;
                    case "K":
                        numberConversion += "10";
                        break;
                    case "L":
                        numberConversion += "11";
                        break;
                    case "M":
                        numberConversion += "12";
                        break;
                    case "N":
                        numberConversion += "13";
                        break;
                    case "O":
                        numberConversion += "14";
                        break;
                    case "P":
                        numberConversion += "15";
                        break;
                    case "Q":
                        numberConversion += "16";
                        break;
                    case "R":
                        numberConversion += "17";
                        break;
                    case "S":
                        numberConversion += "18";
                        break;
                    case "T":
                        numberConversion += "19";
                        break;
                    case "U":
                        numberConversion += "20";
                        break;
                    case "V":
                        numberConversion += "21";
                        break;
                    case "W":
                        numberConversion += "22";
                        break;
                    case "X":
                        numberConversion += "23";
                        break;
                    case "Y":
                        numberConversion += "24";
                        break;
                    case "Z":
                        numberConversion += "25";
                        break;
                }
            }
            $("#numberP").text("Number: " + numberConversion);
            //$('#numberInput').val("");
        }
    });
    
    
    //ENCRYPTION CONVERTER
    $("#encryptSubmit").click(function(){
        var bool1 = true;
        var bool2 = true;
        var bool3 = true;
        var bool3 = true;
        var operation = true;
        var encryptBool = false;
        var encryptInput = $('#encryptionInput').val();
        var encryptionP = $('#encryptionP').val();
        var encryptionQ = $('#encryptionQ').val();
        var encryptionE = $('#encryptionE').val();
        var phiN = (encryptionP - 1) * (encryptionQ - 1);
        var n = encryptionP * encryptionQ;
        
        if(encryptInput === ''){
            bool1 = false;
            alert("Please enter your cipher text.");
        }
        else if(!(encryptInput.indexOf("0") > -1 || encryptInput.indexOf("1") > -1 || encryptInput.indexOf("2") > -1 || 
                  encryptInput.indexOf("3") > -1 || encryptInput.indexOf("4") > -1 || encryptInput.indexOf("5") > -1 || 
                  encryptInput.indexOf("6") > -1 || encryptInput.indexOf("7") > -1 || encryptInput.indexOf("8") > -1 ||
                  encryptInput.indexOf("9") > -1)){
            bool1 = false;
            alert("Please enter numbers for your cipher text.");
        }
        else if(!(encryptInput === '' || encryptionP === '' || encryptionQ === '' || encryptionE === '')){
            bool1 = true;   
        }
        
        if(encryptionP === ''){
            bool2 = false;
            alert("Please enter some value for n.");   
        }
        else if(encryptionP > 100){
            bool2 = false;
            alert("Please enter a prime number from 1-100 for p.");   
        }
        else if(primeNumber(Number(encryptionP)) === -1){
            bool2 = false;
            alert("Please enter a prime number for p.");
        }
        else{
            bool2 = true;
        }
        /*else if(primeNumber(Number(encryptionP)) === 1){
            //alert("Success for p.");
        }*/
    
        if(encryptionQ === ''){
            bool3 = false;
            alert("Please enter some value for q.");   
        }
        else if(encryptionQ > 100){
            bool3 = false;
            alert("Please enter a prime number from 1-100 for q.");   
        }
        else if(primeNumber(Number(encryptionQ)) === -1){
            bool3 = false;
            alert("Please enter a prime number for q.");
        }
        else{
            bool3 = true;
        }
        /*else if(primeNumber(Number(encryptionQ)) === 1){
            //alert("Success for q.");
        }*/
        
        if(encryptionE === ''){
            bool4 = false;
            alert("Please enter some value for n.");   
        }
        else if(encryptionE > 100){
            bool4 = false;
            alert("Please enter a number from 1-100 for E.");
        }
        else if(relativelyPrime(phiN,encryptionE) === false){
            bool4 = false;
            alert("Make sure n is relatively prime to E.");
        }
        else if(encryptionE > phiN){
            bool4 = false;
            alert("Make sure E is less than phi(N).");
        }
        else{
            bool4 = true;
        }
        
        //If all conditions are correct, do the encryption operation
        if(bool1 === true && bool2 === true &&
           bool3 === true && bool4 === true){
            encryptBool = true;
            $("#encryptP").text("Encrypted text: " + "");
            //alert("Success for everything");
        }
        
        if(encryptBool === true){
            
        }
    });
    
    //DECRYPTION CONVERTER
    $("#enter").click(function(){
        var encryptInput = $('#encryptionInput').val();
        var decryptionP = $('#decryptionP').val();
        var decryptionQ = $('#decryptionQ').val();
        var decryptionE = $('#decryptionE').val();
        
        if(encryptionInput === ""){
            alert("Enter your cipher text to decrypt.");
        }
        
        //var decryptInput = document.getElementById('#userInput').value;
        //$("#decryptionP").text(decryptInput);
    });
});

//PRIME METHOD checking for prime numbers ranging from 1-100
function primeNumber(number){
    //parseInt(number,10);
    if(number === 2 || number === 3 ||  number === 5 ||  number === 7 ||  number === 11 ||
       number === 13 || number === 17 || number === 19 ||  number === 23 ||  number === 29 ||
       number === 31 || number === 37 ||  number === 41 ||  number === 43 ||  number === 47 ||
       number === 53 || number === 59 ||  number === 61 ||  number === 67 ||  number === 71 ||
       number === 73 || number === 79 ||  number === 83 ||  number === 89 ||  number === 97){
        return 1;
    }
    else{
        return -1;
    }
}

//Method that tests if two numbers are relatively prime
//true means the two numbers are relatively prime
//false means the two numbers aren't relatively prime, they share some multiple
function relativelyPrime(x,y){
    var bool = true;
    var valsX = [];
    var valsY = [];
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    
     //multiple check starts at 2
    for(i=2; i<y; i++){
        //multiple of y found
        if(y % i === 0){
            //store multiples of y in an array
            valsY[j] = i;
            j++;
        }
    }

    for(k=2; k<x; k++){
        if(x % k === 0){
            valsX[l] = k;//store mutliples of x in an array
            l++;
        }   
    }
    
    if(x > y){
        if(x % y === 0){
            bool = false;
        }
        for(i=0; i<valsY.length; i++){
            for(j=0; j<valsX.length; j++){
                if(valsY.length > 0 && valsX.length > 0){
                    if(valsY[i] === valsX[j]){
                        bool = false;// if x and y share a multiple, return false
                    }
                }
            }
        }
    }
    
    else if(y > x){
        if(y % x === 0){
            bool = false;
        }
         for(i=0; i<valsX.length; i++){
            for(j=0; j<valsY.length; j++){
                if(valsY.length > 0 && valsX.length > 0){
                    if(valsX[i] === valsY[j]){
                        bool = false; //if x and y share a multiple, return false
                    }
                }
            }
        }
    }
    
    return bool;
}
