$(document).ready(function() {
    $("#problemElement").css('background-color', '#4CAF50');    
    
    $("#exercise1").click(function(){
       var exerciseInput = $("#exercise1Input").val();
        var userInput = "";
        var answer = "19,4,18,19";
        
        if(exerciseInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(exerciseInput === "")){
            if(!(exerciseInput.indexOf(0) > -1 || exerciseInput.indexOf(1) > -1 ||          exerciseInput.indexOf(2) > -1 || exerciseInput.indexOf(3) > -1 ||
                 exerciseInput.indexOf(4) > -1 || exerciseInput.indexOf(5) > -1 || exerciseInput.indexOf(6) > -1 || exerciseInput.indexOf(7) > -1 ||
                 exerciseInput.indexOf(8) > -1 || exerciseInput.indexOf(9) > -1 || exerciseInput.indexOf(",") > -1)){
                            alert("Please enter only numbers and appropriate commas.");

                }
            
                userInput = $("#exercise1Input").val();
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#exercise1");
                }
                else{
                    alert("Wrong try again.");
                }
        }  
    });
    
    $("#p1R1").click(function(){
            $('#p1R2').prop('checked', false);
            $('#p1R3').prop('checked', false);
            $('#p1R4').prop('checked', false);
    });
    
    $("#p1R2").click(function(){
            $('#p1R1').prop('checked', false);
            $('#p1R3').prop('checked', false);
            $('#p1R4').prop('checked', false);
    });
    
    $("#p1R3").click(function(){
            $('#p1R2').prop('checked', false);
            $('#p1R1').prop('checked', false);
            $('#p1R4').prop('checked', false);
    });
    
    $("#p1R4").click(function(){
            $('#p1R2').prop('checked', false);
            $('#p1R3').prop('checked', false);
            $('#p1R1').prop('checked', false);
    });
    
    $("#p3True").click(function(){
            $('#p3False').prop('checked', false);
    });
    
    $("#p3False").click(function(){
            $('#p3True').prop('checked', false);
    });
    
    $("#p4True").click(function(){
            $('#p4False').prop('checked', false);
    });
    
    $("#p4False").click(function(){
            $('#p4True').prop('checked', false);
    });
    
    $("#p5Option1").click(function(){
            $('#p5Option2').prop('checked', false);
            $('#p5Option3').prop('checked', false);
            $('#p5Option4').prop('checked', false);
    });
    
    $("#p5Option2").click(function(){
            $('#p5Option1').prop('checked', false);
            $('#p5Option3').prop('checked', false);
            $('#p5Option4').prop('checked', false);
    });
    
    $("#p5Option3").click(function(){
            $('#p5Option1').prop('checked', false);
            $('#p5Option2').prop('checked', false);
            $('#p5Option4').prop('checked', false);
    });
    
    $("#p5Option4").click(function(){
            $('#p5Option1').prop('checked', false);
            $('#p5Option2').prop('checked', false);
            $('#p5Option3').prop('checked', false);
    });
    
    $("#p6Option1").click(function(){
            $('#p6Option2').prop('checked', false);
            $('#p6Option3').prop('checked', false);
            $('#p6Option4').prop('checked', false);
    });
    
    $("#p6Option2").click(function(){
            $('#p6Option1').prop('checked', false);
            $('#p6Option3').prop('checked', false);
            $('#p6Option4').prop('checked', false);
    });
    
    $("#p6Option3").click(function(){
            $('#p6Option2').prop('checked', false);
            $('#p6Option1').prop('checked', false);
            $('#p6Option4').prop('checked', false);
    });
    
    $("#p6Option4").click(function(){
            $('#p6Option2').prop('checked', false);
            $('#p6Option3').prop('checked', false);
            $('#p6Option1').prop('checked', false);
    });
    
    
    $("#exercise2").click(function(){
        if(!($('#p1R1').is(':checked')) && !($('#p1R2').is(':checked')) &&
           !($('#p1R3').is(':checked')) && !($('#p1R4').is(':checked'))){
                alert("Please select a answer.");
        }
        else{
            if($('#p1R1').is(':checked')){
                $("<p class='inline'> &#10004;</p>").insertAfter("#exercise2");
                alert("You got the right answer.");
            }
            else{
                alert("You got the wrong answer.");
            }
        }
    });
    
    $("#exercise3").click(function(){
         if(!($('#p3True').is(':checked')) && !($('#p3False').is(':checked'))){
                alert("Please select a answer.");
        }
        else{
            if($('#p3False').is(':checked')){
                $("<p class='inline'> &#10004;</p>").insertAfter("#exercise3");
                alert("You got the right answer.");
            }
            else{
                alert("You got the wrong answer.");
            }
        }
    });
    
    $("#exercise4").click(function(){
         if(!($('#p4True').is(':checked')) && !($('#p4False').is(':checked'))){
                alert("Please select a answer.");
        }
        else{
            if($('#p4True').is(':checked')){
                $("<p class='inline'> &#10004;</p>").insertAfter("#exercise4");
                alert("You got the right answer.");
            }
            else{
                alert("You got the wrong answer.");
            }
        }
    });
    
    $("#exercise5").click(function(){
         if(!($('#p5Option1').is(':checked')) && !($('#p5Option2').is(':checked')) &&
            !($('#p5Option3').is(':checked')) && !($('#p5Option4').is(':checked'))){
                alert("Please select a answer.");
        }
        else{
            if($('#p5Option3').is(':checked')){
                $("<p class='inline'> &#10004;</p>").insertAfter("#exercise5");
                alert("You got the right answer.");
            }
            else{
                alert("You got the wrong answer.");
            }
        }
    });
    
    $("#exercise6").click(function(){
         if(!($('#p6Option1').is(':checked')) && !($('#p6Option2').is(':checked')) &&
            !($('#p6Option3').is(':checked')) && !($('#p6Option4').is(':checked'))){
                alert("Please select a answer.");
        }
        else{
            if($('#p6Option2').is(':checked')){
                $("<p class='inline'> &#10004;</p>").insertAfter("#exercise6");
                alert("You got the right answer.");
            }
            else{
                alert("You got the wrong answer.");
            }
        }
    });
    
    
    $("#encryptSubmit1").click(function(){
        var encryptionInput = $("#encryptionInput1").val();
        var userInput = "";
        var answer = "33,2,0";
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf(0) > -1 || encryptionInput.indexOf(1) > -1 || encryptionInput.indexOf(2) > -1 || encryptionInput.indexOf(3) > -1 ||
                 encryptionInput.indexOf(4) > -1 || encryptionInput.indexOf(5) > -1 || encryptionInput.indexOf(6) > -1 || encryptionInput.indexOf(7) > -1 ||
                 encryptionInput.indexOf(8) > -1 || encryptionInput.indexOf(9) > -1 || encryptionInput.indexOf(",") > -1)){
                            alert("Please enter a valid cipher text.");

                }
            
                userInput = $("#encryptionInput1").val();
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#encryptSubmit1");
                }
                else{
                    alert("Wrong try again.");
                }
        }  
    });
  
    $("#encryptSubmit2").click(function(){
        var encryptionInput = $("#encryptionInput2").val();
        var userInput = "";
        var answer = "17,26,26,11";
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf(0) > -1 || encryptionInput.indexOf(1) > -1 || encryptionInput.indexOf(2) > -1 || encryptionInput.indexOf(3) > -1 ||
                 encryptionInput.indexOf(4) > -1 || encryptionInput.indexOf(5) > -1 || encryptionInput.indexOf(6) > -1 || encryptionInput.indexOf(7) > -1 ||
                 encryptionInput.indexOf(8) > -1 || encryptionInput.indexOf(9) > -1 || encryptionInput.indexOf(",") > -1)){
                            alert("Please enter a valid cipher text.");

                }
            
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#encryptSubmit2");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
    
    
    $("#encryptSubmit3").click(function(){
        var encryptionInput = $("#encryptionInput3").val();
        var userInput = "";
        var answer = "0,11,41,49,1,8,0";
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf(0) > -1 || encryptionInput.indexOf(1) > -1 || encryptionInput.indexOf(2) > -1 || encryptionInput.indexOf(3) > -1 ||
                 encryptionInput.indexOf(4) > -1 || encryptionInput.indexOf(5) > -1 || encryptionInput.indexOf(6) > -1 || encryptionInput.indexOf(7) > -1 ||
                 encryptionInput.indexOf(8) > -1 || encryptionInput.indexOf(9) > -1 || encryptionInput.indexOf(",") > -1)){
                            alert("Please enter a valid cipher text.");

                }
            
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#encryptSubmit3");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
    
    $("#encryptSubmit4").click(function(){
        var encryptionInput = $("#encryptionInput4").val();
        var userInput = "";
        var answer = "6,8,19,11,10,23";
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf(0) > -1 || encryptionInput.indexOf(1) > -1 || encryptionInput.indexOf(2) > -1 || encryptionInput.indexOf(3) > -1 ||
                 encryptionInput.indexOf(4) > -1 || encryptionInput.indexOf(5) > -1 || encryptionInput.indexOf(6) > -1 || encryptionInput.indexOf(7) > -1 ||
                 encryptionInput.indexOf(8) > -1 || encryptionInput.indexOf(9) > -1 || encryptionInput.indexOf(",") > -1)){
                            alert("Please enter a valid cipher text.");

                }
            
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#encryptSubmit4");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
    
    $("#encryptSubmit5").click(function(){
        var encryptionInput = $("#encryptionInput5").val();
        var userInput = "";
        var answer = "16,13,11,5,12,15,10";
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf(0) > -1 || encryptionInput.indexOf(1) > -1 || encryptionInput.indexOf(2) > -1 || encryptionInput.indexOf(3) > -1 ||
                 encryptionInput.indexOf(4) > -1 || encryptionInput.indexOf(5) > -1 || encryptionInput.indexOf(6) > -1 || encryptionInput.indexOf(7) > -1 ||
                 encryptionInput.indexOf(8) > -1 || encryptionInput.indexOf(9) > -1 || encryptionInput.indexOf(",") > -1)){
                            alert("Please enter a valid cipher text.");

                }
            
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#encryptSubmit5");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
    
    
    $("#decryptSubmit1").click(function(){
        var encryptionInput = $("#decryptionInput1").val();
        var userInput = "";
        var answer = "COMPUTER";
        
        encryptionInput = encryptionInput.toUpperCase();
        encryptionInput.trim();
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf("A") > -1 || encryptionInput.indexOf("B") > -1 || encryptionInput.indexOf("C") > -1 || encryptionInput.indexOf("D") > -1 ||
                 encryptionInput.indexOf("E") > -1 || encryptionInput.indexOf("F") > -1 || encryptionInput.indexOf("G") > -1 || encryptionInput.indexOf("H") > -1 ||
                 encryptionInput.indexOf("I") > -1 || encryptionInput.indexOf("J") > -1 || encryptionInput.indexOf("K") > -1 || encryptionInput.indexOf("L") > -1 ||
                 encryptionInput.indexOf("M") > -1 || encryptionInput.indexOf("N") > -1 || encryptionInput.indexOf("O") > -1 || encryptionInput.indexOf("P") > -1 ||
                 encryptionInput.indexOf("Q") > -1 || encryptionInput.indexOf("R") > -1 || encryptionInput.indexOf("S") > -1 || encryptionInput.indexOf("T") > -1 ||
                 encryptionInput.indexOf("U") > -1 || encryptionInput.indexOf("V") > -1 || encryptionInput.indexOf("W") > -1 || encryptionInput.indexOf("X") > -1 ||
                 encryptionInput.indexOf("Y") > -1 || encryptionInput.indexOf("Z") > -1)){
                    alert("Please enter text within the alphabet.");

            }
            
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#decryptSubmit1");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
    
    $("#decryptSubmit2").click(function(){
        var encryptionInput = $("#decryptionInput2").val();
        var userInput = "";
        var answer = "NUMBER";
        
        encryptionInput = encryptionInput.toUpperCase();
        encryptionInput.trim();
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf("A") > -1 || encryptionInput.indexOf("B") > -1 || encryptionInput.indexOf("C") > -1 || encryptionInput.indexOf("D") > -1 ||
                 encryptionInput.indexOf("E") > -1 || encryptionInput.indexOf("F") > -1 || encryptionInput.indexOf("G") > -1 || encryptionInput.indexOf("H") > -1 ||
                 encryptionInput.indexOf("I") > -1 || encryptionInput.indexOf("J") > -1 || encryptionInput.indexOf("K") > -1 || encryptionInput.indexOf("L") > -1 ||
                 encryptionInput.indexOf("M") > -1 || encryptionInput.indexOf("N") > -1 || encryptionInput.indexOf("O") > -1 || encryptionInput.indexOf("P") > -1 ||
                 encryptionInput.indexOf("Q") > -1 || encryptionInput.indexOf("R") > -1 || encryptionInput.indexOf("S") > -1 || encryptionInput.indexOf("T") > -1 ||
                 encryptionInput.indexOf("U") > -1 || encryptionInput.indexOf("V") > -1 || encryptionInput.indexOf("W") > -1 || encryptionInput.indexOf("X") > -1 ||
                 encryptionInput.indexOf("Y") > -1 || encryptionInput.indexOf("Z") > -1)){
                    alert("Please enter text within the alphabet.");

            }
            
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#decryptSubmit2");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
    
    $("#decryptSubmit3").click(function(){
        var encryptionInput = $("#decryptionInput3").val();
        var userInput = "";
        var answer = "DECRYPT";
        
        encryptionInput = encryptionInput.toUpperCase();
        encryptionInput.trim();
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf("A") > -1 || encryptionInput.indexOf("B") > -1 || encryptionInput.indexOf("C") > -1 || encryptionInput.indexOf("D") > -1 ||
                 encryptionInput.indexOf("E") > -1 || encryptionInput.indexOf("F") > -1 || encryptionInput.indexOf("G") > -1 || encryptionInput.indexOf("H") > -1 ||
                 encryptionInput.indexOf("I") > -1 || encryptionInput.indexOf("J") > -1 || encryptionInput.indexOf("K") > -1 || encryptionInput.indexOf("L") > -1 ||
                 encryptionInput.indexOf("M") > -1 || encryptionInput.indexOf("N") > -1 || encryptionInput.indexOf("O") > -1 || encryptionInput.indexOf("P") > -1 ||
                 encryptionInput.indexOf("Q") > -1 || encryptionInput.indexOf("R") > -1 || encryptionInput.indexOf("S") > -1 || encryptionInput.indexOf("T") > -1 ||
                 encryptionInput.indexOf("U") > -1 || encryptionInput.indexOf("V") > -1 || encryptionInput.indexOf("W") > -1 || encryptionInput.indexOf("X") > -1 ||
                 encryptionInput.indexOf("Y") > -1 || encryptionInput.indexOf("Z") > -1)){
                    alert("Please enter text within the alphabet.");

            }
            
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#decryptSubmit3");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
    
    $("#decryptSubmit4").click(function(){
        var encryptionInput = $("#decryptionInput4").val();
        var userInput = "";
        var answer = "SHOE";
        
        encryptionInput = encryptionInput.toUpperCase();
        encryptionInput.trim();
        
        if(encryptionInput === ""){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf("A") > -1 || encryptionInput.indexOf("B") > -1 || encryptionInput.indexOf("C") > -1 || encryptionInput.indexOf("D") > -1 ||
                 encryptionInput.indexOf("E") > -1 || encryptionInput.indexOf("F") > -1 || encryptionInput.indexOf("G") > -1 || encryptionInput.indexOf("H") > -1 ||
                 encryptionInput.indexOf("I") > -1 || encryptionInput.indexOf("J") > -1 || encryptionInput.indexOf("K") > -1 || encryptionInput.indexOf("L") > -1 ||
                 encryptionInput.indexOf("M") > -1 || encryptionInput.indexOf("N") > -1 || encryptionInput.indexOf("O") > -1 || encryptionInput.indexOf("P") > -1 ||
                 encryptionInput.indexOf("Q") > -1 || encryptionInput.indexOf("R") > -1 || encryptionInput.indexOf("S") > -1 || encryptionInput.indexOf("T") > -1 ||
                 encryptionInput.indexOf("U") > -1 || encryptionInput.indexOf("V") > -1 || encryptionInput.indexOf("W") > -1 || encryptionInput.indexOf("X") > -1 ||
                 encryptionInput.indexOf("Y") > -1 || encryptionInput.indexOf("Z") > -1)){
                    alert("Please enter text within the alphabet.");

            }
            
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#decryptSubmit4");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
    
    $("#decryptSubmit5").click(function(){
        var encryptionInput = $("#decryptionInput5").val();
        var userInput = "";
        var answer = "CONVERT";
        
        encryptionInput = encryptionInput.toUpperCase();
        encryptionInput.trim();

        if(encryptionInput === ''){
            alert("A blank answer is not acceptable.");
        }
        else if(!(encryptionInput === "")){
            if(!(encryptionInput.indexOf("A") > -1 || encryptionInput.indexOf("B") > -1 || encryptionInput.indexOf("C") > -1 || encryptionInput.indexOf("D") > -1 ||
                 encryptionInput.indexOf("E") > -1 || encryptionInput.indexOf("F") > -1 || encryptionInput.indexOf("G") > -1 || encryptionInput.indexOf("H") > -1 ||
                 encryptionInput.indexOf("I") > -1 || encryptionInput.indexOf("J") > -1 || encryptionInput.indexOf("K") > -1 || encryptionInput.indexOf("L") > -1 ||
                 encryptionInput.indexOf("M") > -1 || encryptionInput.indexOf("N") > -1 || encryptionInput.indexOf("O") > -1 || encryptionInput.indexOf("P") > -1 ||
                 encryptionInput.indexOf("Q") > -1 || encryptionInput.indexOf("R") > -1 || encryptionInput.indexOf("S") > -1 || encryptionInput.indexOf("T") > -1 ||
                 encryptionInput.indexOf("U") > -1 || encryptionInput.indexOf("V") > -1 || encryptionInput.indexOf("W") > -1 || encryptionInput.indexOf("X") > -1 ||
                 encryptionInput.indexOf("Y") > -1 || encryptionInput.indexOf("Z") > -1)){
                    alert("Please enter text within the alphabet.");

            }
                userInput = encryptionInput;
                userInput = userInput.replace(/\s/g, "");
                
                if(userInput === answer){
                    alert("You got the right answer.");
                    $("<p class='inline'> &#10004;</p>").insertAfter("#decryptSubmit5");
                }
                else{
                    alert("Wrong try again.");
                }
        }
    });
});