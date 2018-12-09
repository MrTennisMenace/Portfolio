//Alexander Yang
//College Text Game

//Global variables
var midterm = 0;
var final = 0;
var finalGrade = "F";
var grade = 0;
var midtermText = "";
var finalgradeText = "";
var finalText = "";

//Good Item Choice Selection
var books = false;
var syllabus = false;
var notes = false;
var homework1 = false;
var midterm1 = false;
var midterm2 = false;
var stateNineBool1 = false;
var stateNineBool2 = false;
var stateTenBool1 = false;
var stateTenBool2 = false;
var stateElevenBool1 = false;
var stateElevenBool2 = false;
var finalNotes = false;

//Bad Item Choice Selection
var hoverboard = false;
var pool = false;
var midterm3 = false;
var stateNineBool3 = false;
var stateTenBool3 = false;
var stateElevenBool3 = false;

//State variables
var beginningStoryState = 0;
var stateOneNum = 0;
var stateTwoNum = 0;
var stateThreeNum = 0;
var stateFourNum = 0;
var stateFiveNum = 0;
var stateSixNum = 0;
var stateSevenNum = 0;
var stateEightNum = 0;
var stateNineNum = 0;
var stateTenNum = 0;
var stateElevenNum = 0;
var stateTwelveNum = 0;

var fail = false;
var startOver = false;


//When page is loaded and ready
$(document).ready(function() {
    $(".choices").hide();
    $(".item").hide();
    $("#space").hide();
    $("#clock").hide();
    $("#space2").hide();
    $("#space3").hide();
    $("#space4").hide();
    $("#space5").hide();
    $("#gamePicture").hide();
    introduction();
});

function introduction(){
    switch(beginningStoryState)
    {
        case 0:
            beginningStoryState++;
            $("#gameStory").css("left", "30%");
            $("#gameStory").html("In this game you will have to either click continue or click your character choices to keep progressing in the game.");
            break;
        case 1:
            beginningStoryState++;
            $("#gameStory").css("left", "45%");
            $("#gamePicture").css("left", "40%");
            $("#gameStory").html('Welcome to your first year in college!'); 
            $("#gamePicture").css("content", "url(college.jpg)");
            $("#space2").show();
            $("#gamePicture").show();
            break;
        case 2:
            $("#gameStory").html("The objective of the game will be to get good grades for your first semester of classes."); 
            beginningStoryState++;
            $("#gameStory").css("left", "38%");
            break;
        case 3:
            beginningStoryState++;
            $("#gameStory").css("left", "42%");
            $("#gameStory").html("How you decide to balance your time before then is up to you.");
            break;
        case 4:
            beginningStoryState++;
            $("#gameStory").css("left", "34%");
            $("#gameStory").html("You are in your dorm room and have settled in.  Today is your first day of the semester.");
            $("#gamePicture").css("content", "url(dorm.jpg)");
            $("#gamePicture").css("left", "37%");
            break;
        case 5:
            stateOne();
    }
    
    $("#continue").off().on("click", function(){
        introduction();
    });
}

function stateOne(){
    switch(stateOneNum){
        case 0:
            stateOneNum++;
            $("#gameStory").css("left", "40%");
            $("#gameStory").html("Today is Sunday, the day before the first day of classes.");
            break;
        case 1:
            stateOneNum++;
            $("#gameStory").css("left", "43%");
            $("#gameStory").html("Your parents gave you $1000 for books.");
            break;
        case 2:
            stateOneNum++;
            $("#gameStory").css("left", "44%");
            $("#gameStory").html("How will you spend that money?");
            $("#continue").hide();
            $("#choice1").show();
            $("#choice2").show();
            $("#choice1").html("Purchase all your class materials and books.");
            $("#choice2").html("Purchase a hover board to look cool on campus.")
            break;
    }
    
    $("#continue").off().on("click", function(){
        stateOne();
    });
    
    $("#choice1").off().on("click", function(){
        books = true;
        stateTwo();
    });
    
    $("#choice2").off().on("click", function(){
        hoverboard = true;
        stateTwo();
    });
}

function stateTwo(){
    switch(stateTwoNum){
        case 0:
            if(books == true)
            {
                stateTwoNum++;
                $('#gameStory').css("left", "47%");
                $('#gameStory').html("Item 'Books' obtained!")
                $('#choice1').hide();
                $('#choice2').hide();
                $('#continue').show();
                $('#space4').show();
                $('#item1').show();
                $('#item1').attr("src", "books.jpg");
            }
            else if(hoverboard == true)
            {
                stateTwoNum++;
                $('#gameStory').css("left", "47%");
                $('#gameStory').html("Item 'Hover Board' obtained!")
                $('#choice1').hide();
                $('#choice2').hide();
                $('#continue').show();
                $('#space4').show();
                $('#item1').show();
                $('#item1').attr("src", "hoverboard.jpg");
            }
            break;
            
        case 1:
            $('#gameStory').css("left", "50%");
            $('#gameStory').html("Day is Over.")
            stateThree();
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateTwo();
    });
}

function stateThree(){
    switch(stateThreeNum){
        case 0:
            stateThreeNum++;
            $('#gameStory').css("left", "43%");
            $('#gameStory').html("Today is your first day of the semester.");
            $('#gamePicture').attr("src", "college2.jpg");
            //LAST CODE   $('#gamePicture').css("content", "url(college2.jpg)");
            break;
        case 1:
            stateThreeNum++;
            $('#gameStory').css("left", "47%");
            $('#gameStory').html("How will you prepare?");
            $('#continue').hide();
            $('#choice1').show();
            $('#choice2').show();
            $('#choice1').html("Print your syllabus and attend your classes.");
            $('#choice2').html("Skip classes to go play pool with your room mate.")
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateThree();
    });
    
    $('#choice1').off().on('click', function(){
        syllabus = true;
        stateFour();
    });
    
    $('#choice2').off().on('click', function(){
        fail = true;
        stateFour();
    });
}

function stateFour(){
    switch(stateFourNum){
        case 0:
            $('#continue').show();
            if(syllabus == true){
                stateFourNum++;
                $('#gameStory').css("left", "47%");
                $('#gameStory').html("Nice choice.");
                $('#choice1').hide();
                $('#choice2').hide();
                $('#gamePicture').css("content", "url(classroom.jpg)");
            }
            
            else if(fail == true){
                $('#gameStory').css("left", "23%");
                $('#gameStory').html("Since you did not take attendance for the first day of class, the professor dropped you out of the class so that students on the waiting list can take the course.  YOU FLUNK.");
                $('#choice1').hide();
                $('#choice2').hide();
                $('#gamePicture').css("content", "url(dropped.jpg)");
                $('#item1').hide();
                $('#continue').html("Restart");
                startOver = true;
            }            
            break;
        case 1:
            stateFourNum++;
            $('#gameStory').html("Item 'Syllabus' obtained.");
            $('#item2').show();
            $('#item2').css("content", "url(syllabus.jpg)");
            break;
        case 2:
            stateFourNum++;
            $('#gameStory').css("left", "45%");
            $('#gameStory').html("Your instructor went over the syllabus.");
            $('#continue').show();
            break;
            
        case 3:
            stateFourNum++;
            $('#gameStory').css("left", "43%");
            $('#gameStory').html("Homework: 30% | Midterm: 30% | Final Exam: 40%");
            break;
        case 4:
            stateFourNum++;
            $('#gameStory').css("left", "43%");
            $('#gameStory').html("Classes are finished.  How will you spend your time?");
            $('#continue').hide();
            $('#choice1').show();
            $('#choice2').show();
            $('#choice1').html("Do your homework and study.");
            $('#choice2').html("Go play pool with your room mate.");
            break;
        }
    
    if(startOver == false){
        $('#continue').off().on('click', function(){
        stateFour();
    });
    }
    
    else{
        $('#continue').off().on('click', function(){
        location.reload();
        });
    }
    
    $('#choice1').off().on('click', function(){
        homework1 = true;
        stateFive();
    });
    
    $('#choice2').off().on('click', function(){
        pool = true;
        stateFive();
    });
}

function stateFive(){
    switch(stateFiveNum){
        case 0:
            stateFiveNum++;
            if(homework1 == true){
                if(books == true){
                    $('#gameStory').html("You have completed your homework.");
                    $('#gamePicture').show();
                    $('#gamePicture').css("content", "url(homework.jpg)");
                    $('#gamePicture').css("left", "36%");
                    grade = grade + 10;
                    $('#choice1').hide();
                    $('#choice2').hide();
                    $('#continue').show();
                }
                else{
                    $('#gameStory').html("You don't have books to do your homework with.");
                    $('#choice1').hide();
                    $('#choice2').hide();
                    $('#continue').show();
                }
            }
            
            else if(pool == true){
                $('#gameStory').html("You are having a nice time with your room mate.");
                $('gamePicture').show();
                $('gamePicture').show();
                $('#gamePicture').css("content", "url(pool.jpg)");
                $('#choice1').hide();
                $('#choice2').hide();
                $('#continue').show();
            }
            break;
        case 1:
            stateFiveNum++;
            if(books == true){
                $('#gameStory').css("left", "46%");
                $('#gameStory').html("Midterms are coming up in a few weeks.");
            }
            else{
                $('#gameStory').css("left", "40%");
                $('#gameStory').html("You instead kill time riding your hoverboard across campus.");
                $('#gamePicture').show();
                $('#gamePicture').css("content", "url(hoverboarding.jpg)");
                $('#gamePicture').css("left", "34%");
            }
            break;
        case 2:
            stateFiveNum++;
            $('#gameStory').css("left", "44%");
            $('#gameStory').html("A few hours pass and you decide to go to bed.");
            break;
        case 3:
            stateFiveNum++;
            $('#gameStory').css("left", "43%");
            $('#gameStory').html("It is morning. What will you do today?");
            $('#continue').hide();
            $('#choice1').show();
            $('#choice2').show();
            $('#choice1').html("Attend lecture and take notes.");
            $('#choice2').html("Sleep in and watch Netflix.");
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateFive();
    });
    
    $('#choice1').off().on('click', function(){
        notes = true;
        stateSix();
    });
    
    $('#choice2').off().on('click', function(){
        stateSix();
    });
}

function stateSix(){
    switch(stateSixNum){
        case 0: 
            stateSixNum++;
            $('#continue').show();
            $('#choice1').hide();
            $('#choice2').hide();
            if(notes == true){
                $('#gameStory').html('Item "Notes" obtained.');
                $('#gamePicture').css("content", "url(lecture.jpg)");
                $('#gamePicture').css("left", "42%");
                $('#item3').show();
                $('#item3').css("content", "url(notes.jpg)");
            }
            else{
                $('#gameStory').html('After a few movies you got hungry and decided to eat lunch.');
                $('#gamePicture').css("content", "url(cafeteria.jpg)");
                $('#gamePicture').css("left", "38%");
            }
            break;
        case 1:
            stateSeven();
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateSix();
    });
}

function stateSeven(){
    switch(stateSevenNum){
        case 0:
            stateSevenNum++;
            $('#gameStory').css("left", "44%");
            $('#gameStory').html('Midterms are coming up next week.');
            break;
        case 1:
            stateSevenNum++;
            $('#gameStory').html('What will you be doing this entire week to prepare?');
            $('#continue').hide();
            $('#choice1').show();
            $('#choice2').show();
            $('#choice3').show();
            $('#choice1').html("Study the whole week.");
            $('#choice2').html("Study but some days go hang out with friends.");
            $('#choice3').html("Have fun with friends and forget midterms.");
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateSeven();
    });
    
    $('#choice1').off().on('click', function(){
        midterm1 = true;
        stateEight();
    });
    
    $('#choice2').off().on('click', function(){
        midterm2 = true;
        stateEight();
    });
    
    $('#choice3').off().on('click', function(){
        midterm3 = true;
        stateEight();
    });
}

function stateEight(){
    switch(stateEightNum){
        case 0:
            stateEightNum++;
            $('#continue').show();
            $('#choice1').hide();
            $('#choice2').hide();
            $('#choice3').hide();
            $('#gameStory').html('Today you have your midterms.');
            $('#gamePicture').css("content", "url(midterms.jpg)");
            $('#gamePicture').css("left", "39%");
            break;
        case 1:
            stateEightNum++;
            $('#gameStory').html('All your midterms are open book and notes.  Good luck!');
            $('#gameStory').css("left", "40%");
            break;
        case 2:
            stateEightNum++;
            //Studied everyday for midterm
            if(midterm1 == true){
                //Has item "Books" to help with exam
                if(books == true){
                    //Has item "Notes" to help with exam
                    if(notes == true){
                        midterm = 30;
                        grade = grade + midterm;
                    }
                    
                    //Does not have item "Notes" to help with exam
                    else if(notes == false){
                        midterm = 27;
                        grade = grade + midterm;
                    }
                }
                //Does not have item "Books" to help with exam
                else if(books == false){
                    if(notes == true){
                        midterm = 27;
                        grade = grade + midterm;
                    }
                    
                    //Does not have item "Notes" to help with exam
                    else if(notes == false){
                        midterm = 25;
                        grade = grade + midterm;
                    }
                }
            }
            
            //Studied with midterm occasionally
            else if(midterm2 == true){
                if(books == true){
                    if(notes == true){
                        midterm = 25;
                        grade = grade + midterm;
                    }
                    
                    else if(notes == false){
                        midterm = 20;
                        grade = grade + midterm;
                    }
                }
                
                else if(books == false){
                    if(notes == true){
                        midterm = 20;
                        grade = grade + midterm;
                    }
                    
                    else if(notes == false){
                        midterm = 15;
                        grade = grade + midterm;
                    }
                }
            }
            
            //Didn't study at all for midterm
            else if(midterm3 == true){
                if(books == true){
                    if(notes == true){
                        midterm = 10;
                        grade = grade + midterm;
                    }
                    
                    else if(notes == false){
                        midterm = 7;
                        grade = grade + midterm;
                    }
                }
                
                else if(books == false){
                    if(notes == true){
                        midterm = 7;
                        grade = grade + midterm;
                    }
                    
                    else if(notes == false){
                        midterm = 5;
                        grade = grade + midterm;
                    }
                }
            }
            midtermText = "You scored: " + midterm + "/" + "30"
            $('#gameStory').html(midtermText);
            $('#gameStory').css("left","50%");
            break;
            
        case 3:
            stateNine();
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateEight();
    });
}

function stateNine(){
    switch(stateNineNum){
        case 0:
            stateNineNum++;
            $('#gameStory').css("left","45%");
            $('#gameStory').html("You are back at your dorm room.");
            $('#gamePicture').css("content", "url(dormroom.jpg)");
            break;
        case 1:
            stateNineNum++;
            $('#gameStory').html("How will you spend your time preparing for class tomorrow?");
            $('#continue').hide();
            $('#choice1').show();
            $('#choice2').show();
            $('#choice3').show();
            $('#choice1').html("Study and do your homework.");
            $('#choice2').html("Partially do your homework and then hang out with friends.");
            $('#choice3').html("Play video games with friends.");
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateNine();
    });
    
    $('#choice1').off().on('click', function(){
        stateNineBool1 = true;
        stateTen();
    });
    
    $('#choice2').off().on('click', function(){
        stateNineBool2 = true;
        stateTen();
    });
    
    $('#choice3').off().on('click', function(){
        stateNineBool3 = true;
        stateTen();
    });
}

function stateTen(){
    switch(stateTenNum){
        case 0:
            stateTenNum++;
            $('#continue').show();
            $('#choice1').hide();
            $('#choice2').hide();
            $('#choice3').hide();
            //Grade is raised by 10 points because homework is completed fully
            if(stateNineBool1 == true){
                grade = grade + 10;
            }
            //Grade is raised by 7 points because homework is partially completed
            else if(stateNineBool2 == true){
                grade = grade + 7;
            }
            //Grade is raised by 0 points because homework is not completed
            else if(stateNineBool3 == true){
                
            }
            $('#gameStory').html("You got tired and slept.");
            break;
        case 1:
            stateTenNum++;
            $('#gameStory').html("It is morning. How will you be spending your week?");
            $('#gamePicture').css("content", "url(morning.jpg)");
            $('#continue').hide();
            $('#choice1').show();
            $('#choice2').show();
            $('#choice3').show();
            $('#choice1').html("Study and make notes for the final.");
            $('#choice2').html("Make partial notes for the final and hang out with friends.");
            $('#choice3').html("Sleep in after classes and goof off.");
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateTen();
    });
    
    $('#choice1').off().on('click', function(){
        stateTenBool1 = true;
        stateEleven();
    });
    
    $('#choice2').off().on('click', function(){
        stateTenBool2 = true;
        stateEleven();
    });
    
    $('#choice3').off().on('click', function(){
        stateTenBool3 = true;
        stateEleven();
    });
}

function stateEleven(){
    switch(stateElevenNum){
        case 0:
            stateElevenNum++;
            $('#continue').show();
            $('#choice1').hide();
            $('#choice2').hide();
            $('#choice3').hide();
            if(stateTenBool1 == true){
                finalNotes = true;
                $('#gameStory').html("Item 'Final Notes' obtained.");
                $('#item4').show();
                $('#item4').css("content", "url(finalnotes.jpg)");
            }
            else if(stateTenBool2 == true){
                
            }
            else if(stateTenBool3 == true){
                
            }
            break;
        case 1:
            stateElevenNum++;
            $('#gameStory').html("One week has passed.");
            break;
        case 2:
            stateElevenNum++;
            $('#gameStory').html("Finals Week is next week.");
            break;
        case 3:
            $('#gameStory').html("How shall you prepare for next week?");
            $('#continue').hide();
            $('#choice1').show();
            $('#choice2').show();
            $('#choice3').show();
            $('#choice1').html("Finish the last homework assignment and study for finals.");
            $('#choice2').html("Finish the last homework assignment and play video games.");
            $('#choice3').html("Do anything besides homework and studying.");
            break;
    }
    
    $('#continue').off().on('click', function(){
        stateEleven();
    });
    
    $('#choice1').off().on('click', function(){
        stateElevenBool1 = true;
        stateTwelve();
    });
    
    $('#choice2').off().on('click', function(){
        stateElevenBool2 = true;
        stateTwelve();
    });
    
    $('#choice3').off().on('click', function(){
        stateElevenBool3 = true;
        stateTwelve();
    });
}

//Final Exam Week
function stateTwelve(){
    switch(stateTwelveNum){
        case 0:
            stateTwelveNum++;
            $('#gameStory').html("Finals Week is here.");
            $('#gamePicture').css("content", "url(finalexam.jpg)");
            $('#continue').show();
            $('#choice1').hide();
            $('#choice2').hide();
            $('#choice3').hide();
            break;
        case 1:
            stateTwelveNum++;
            $('#gameStory').html("You attend class and take your finals.");
            break;
        case 2:
            stateTwelveNum++;
            //Grade is increased by 10 points because homework #3 has been fully completed
            if(stateElevenBool1 == true){
                grade = grade + 10;
                if(finalNotes = true){
                    final = 40;
                }
                else{
                    final = 35;
                }
                grade = grade + final;
            }
            //Grade is increased by 7 points because homework #3 has been partially completed
            else if(stateElevenBool2 == true){
                grade = grade + 7;
                if(finalNotes = true){
                    final = 30;
                }
                else{
                    final = 25;
                }
                grade = grade + final;
            }
            //Grade is increased by 0 points because homework #3 has not been worked on
            else if(stateElevenBool3 == true){
                if(finalNotes = true){
                    final = 20;
                }
                else{
                    final = 15;
                }
                grade = grade + final;
            }
            finalText = "Your Final Exam score: " + final + "/40";
            $('#gameStory').html(finalText);
            break;
        case 3:
            stateTwelveNum++;
            if(grade > 90){
                finalGrade = 'A';
            }
            else if(grade > 80 && grade < 90){
                finalGrade = 'B';
            }
            else if(grade > 70 && grade < 80){
                finalGrade = 'C';
            }
            else if(grade > 60 && grade < 70){
                finalGrade = 'D';
            }
            else if(grade <= 59){
                finalGrade = "F";
            }
            finalGradeText = "Your final grade is: " + finalGrade;
            $('#gameStory').html(finalGradeText);
            $('#gamePicture').css("content", "url(endofsemester.jpg)");
            startOver = true;
            $('#continue').html("Restart?");
            break;
    }
    
    if(startOver == false){
        $('#continue').off().on('click', function(){
        stateTwelve();
        });
    }
    
    else{
        $('#continue').off().on('click', function(){
        location.reload();
        });
    }
}
