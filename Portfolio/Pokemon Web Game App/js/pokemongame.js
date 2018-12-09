//Initialize variables
var counter = 0;
var pcounter = 0;
var moveDistance = 5;
var battles = 0;
var moveBool = true; 
var gymBool = false;
var healBool = false;
var storeBool = false;

var blastoiseBattle = false;
var snorlaxBattle = false;
var pidgeotBattle = false;
var mewtwoBattle = false;
var moltresBattle = false;

var blastoiseDead = false;
var snorlaxDead = false;
var pidgeotDead = false;
var mewtwoDead = false;
var moltresDead = false;

var blastoiseLevel = 1;
var blastoiseAttack = 1;
var blastoiseHealth = 3;

var snorlaxLevel = 1;
var snorlaxAttack = 1;
var snorlaxHealth = 3;

var pidgeotLevel = 1;
var pidgeotAttack = 1;
var pidgeotHealth = 3;

var mewtwoLevel = 1;
var mewtwoAttack = 1;
var pidgeotHealth = 3;

var moltresLevel, moltresAttack = 1;
var pidgeotHealth = 3;

//Global coordinates
var globalX = 0;
var globalY = 0;

//initialize boolean variables
var edge = false;
var r_edge = false;
var l_edge = false;
var u_edge = false;
var d_edge = false;
var playerR_edge = false;
var playerL_edge = false;
var playerU_edge = false;
var playerD_edge = false;

//Inventory
var pokeball = 0;
var potion = 2;
var superPotion = 2;
var pokewin = 0;

//Pokmeon Trainer variables
var baseHealth = 5;
var level = 0;
var experience = 0;
var health = 0;
var attack = 0;

var levelBackUp = 0;
var experienceBackUp = 0;
var healthBackUp = 0;
var attackBackUp = 0;
var baseHealthBacUp = 0;

//Battle Text
var wildPokemonText = ['Wild Pokemon used "Attack"!', 'Wild Pokemon used "Scratch"', ]
var text1 = "Wild Pokemon used Attack!";
var text2 = "Charizard used Attack!";
var text3 = "Wild Pokemon used "

//random generator from range: 0 - 1
var randomNum = Math.floor((Math.random() * 2));

var pokeMartX = 385;
var pokeMartY = 1023;
var pokeMartWidth = 80;
var pokeMartHeight = 69;

var player = new Image();
player.src = "js/player.png";

var city = new Image();
city.src = "js/city.png";

var charizardPic = new Image();
charizardPic.src = "js/pokemon.png";

var blastoisePic = new Image();
blastoisePic.src = "js/pokemon.png";

var snorlaxPic = new Image();
snorlaxPic.src = "js/pokemon.png";

var mewtwoPic = new Image();
mewtwoPic.src = "js/pokemon.png";

var moltresPic = new Image();
moltresPic.src = "js/pokemon.png";

var pidgeotPic = new Image();
pidgeotPic.src = "js/pokemon.png";

//Player sprite for left movement for x coordinate
//crop_x
var playerLX = [0, 37.5, 75, 112.5];
//Player sprite for right movement for x coordinate
//crop_x
var playerRX = [0, 37.5, 75, 112.5];
//Player sprite for up movement for x coordinate
//crop_x
var playerUX = [0, 37.5, 75, 112.5];
//Player sprite for down movement for x coordinate
//crop_x
var playerDX = [0, 37.5, 75, 112.5];

//Player sprite for left movement for y coordinate
//crop_y
var playerLY = [37.5, 37.5, 37.5, 37.5];
//Player sprite for right movement for y coordinate
//crop_y
var playerRY = [75, 75, 75, 75];
//Player sprite for up movement for y coordinate
//crop_y
var playerUY = [112.5, 112.5, 112.5, 112.5];
//Player sprite for down movement for y coordinate
//crop_y
var playerDY = [0, 0, 0, 0];

//Initializing offSet variable for player
var offSetPlayer = {"crop_x":0, 
              "crop_y":0, 
              "crop_width":0, 
              "crop_height":0, 
              "x":0, 
              "y":0, 
              "width":0, 
              "height":0};

//Initializing offSet variable for city
var offSetCity = {"crop_x":0, 
              "crop_y":0, 
              "crop_width":0, 
              "crop_height":0, 
              "x":0, 
              "y":0, 
              "width":0, 
              "height":0};

//Pokemon
var charizard = {"crop_x":0,"crop_y":0,"crop_width":0,"crop_height":0,"x":0,"y":0,"width":0,"height":0,"globalX":0,"globalY":0,"name":"Charizard", "level":0, "attack":0, "health":0};
var blastoise = {"crop_x":0,"crop_y":0,"crop_width":0,"crop_height":0,"x":0,"y":0,"width":0,"height":0,"globalX":0,"globalY":0,"name":"Blastoise", "level":0, "attack":0, "health":0};
var snorlax = {"crop_x":0,"crop_y":0,"crop_width":0,"crop_height":0,"x":0,"y":0,"width":0,"height":0,"globalX":0,"globalY":0,"name":"Snorlax", "level":0, "attack":0, "health":0};
var mewtwo = {"crop_x":0,"crop_y":0,"crop_width":0,"crop_height":0,"x":0,"y":0,"width":0,"height":0,"globalX":0,"globalY":0,"name":"Mewtwo", "level":0, "attack":0, "health":0};
var moltres = {"crop_x":0,"crop_y":0,"crop_width":0,"crop_height":0,"x":0,"y":0,"width":0,"height":0,"globalX":0,"globalY":0,"name":"Moltres", "level":0, "attack":0, "health":0};
var pidgeot = {"crop_x":0,"crop_y":0,"crop_width":0,"crop_height":0,"x":0,"y":0,"width":0,"height":0,"globalX":0,"globalY":0,"name":"Pidgeot", "level":0, "attack":0, "health":0};

function canvasContext(){
    var can = document.getElementById("gameCanvas");
    var ctx = can.getContext("2d");
    
    return ctx;
}

function init(){
    var ctx = canvasContext();
    
    //Hiding html elements from client side user
    $('#battlePotion').hide();
    $('#battleSuperPotion').hide();
    $('#backToOptions').hide();
    $('#wildPokemon').hide();
    $('#battleAttack').hide();
    $('#battleItem').hide();
    $('#battleText').hide();
    $('#scratch').hide();
    $('#fireBall').hide();
    $('#gameChoiceQ').hide();
    $('#yes').hide();
    $('#no').hide();
    $('#continue').hide();
    
    $('#potion').html(potion);
    $('#superPotion').html(potion);
    
    //Pokemon Code
    //Charizard
    //Position to cut image
    charizard.crop_x = 390;
    charizard.crop_y = 66;
    charizard.crop_width = 29;
    charizard.crop_height = 32;
    
    //Position of the pokemon on the canvas
    charizard.x = 230;
    charizard.y = 230;
    charizard.width = 29;
    charizard.height = 32;
    
    //Stats
    charizard.level = 1;
    charizard.attack = 1;
    charizard.health = 5;
    
    //Blastoise
    //Position to cut image
    blastoise.crop_x = 585;
    blastoise.crop_y = 68;
    blastoise.crop_width = 29;
    blastoise.crop_height = 32;
    
    //Position of the pokemon on the canvas
    blastoise.x = 230;
    blastoise.y = 230;
    blastoise.width = 29;
    blastoise.height = 32;
    blastoise.globalX = 115;
    blastoise.globalY = 1066;
    
    //Stats
    blastoise.level = 1;
    blastoise.attack = 1;
    blastoise.health = 3;
    
    //Snorlax
    //Position to cut image
    snorlax.crop_x = 584;
    snorlax.crop_y = 1227;
    snorlax.crop_width = 29;
    snorlax.crop_height = 32;
    
    //Position of the pokemon on the canvas
    snorlax.x = 230;
    snorlax.y = 230;
    snorlax.width = 29;
    snorlax.height = 32;
    snorlax.globalX = 641;
    snorlax.globalY = 1106;
    
    //Stats
    snorlax.level = 1;
    snorlax.attack = 1;
    snorlax.health = 3;
    
    //Mewtwo
    //Position to cut image
    mewtwo.crop_x = 64;
    mewtwo.crop_y = 1352;
    mewtwo.crop_width = 29;
    mewtwo.crop_height = 32;
    
    //Position of the pokemon on the canvas
    mewtwo.x = 230;
    mewtwo.y = 230;
    mewtwo.width = 29;
    mewtwo.height = 32;
    mewtwo.globalX = 321;
    mewtwo.globalY = 693;
    
    //Stats
    mewtwo.level = 1;
    mewtwo.attack = 1;
    mewtwo.health = 3;
    
    //Moltres
    //Position to cut image
    moltres.crop_x = 779;
    moltres.crop_y = 1226;
    moltres.crop_width = 29;
    moltres.crop_height = 32;
    
    //Position of the pokemon on the canvas
    moltres.x = 230;
    moltres.y = 230;
    moltres.width = 29;
    moltres.height = 32;
    moltres.globalX = 541;
    moltres.globalY = 1159;
    
    //Stats
    moltres.level = 1;
    moltres.attack = 1;
    moltres.health = 3;
    
    //Pidgeot
    //Position to cut image
    pidgeot.crop_x = 195;
    pidgeot.crop_y = 192;
    pidgeot.crop_width = 32;
    pidgeot.crop_height = 32;
    
    //Position of the pokemon on the canvas
    pidgeot.x = 230;
    pidgeot.y = 230;
    pidgeot.width = 29;
    pidgeot.height = 32;
    pidgeot.globalX = 240;
    pidgeot.globalY = 1079;
    
    //Stats
    pidgeot.level = 1;
    pidgeot.attack = 1;
    pidgeot.health = 3;
    
    //Player Code
    //Position to cut image
    offSetPlayer.crop_x = 0;
    offSetPlayer.crop_y = 0;
    offSetPlayer.crop_width = 37.5;
    offSetPlayer.crop_height = 37.5;
        
    //Position of the player on the canvas
    offSetPlayer.x = 200;
    offSetPlayer.y = 200;
    offSetPlayer.width = 35;
    offSetPlayer.height = 35;
        
    //City Code
    //Position to cut image
    offSetCity.crop_x = 322;
    offSetCity.crop_y = 850;
    offSetCity.crop_width = 450;
    offSetCity.crop_height = 450;
        
    //Position of the city on the canvas
    offSetCity.x = 0;
    offSetCity.y = 0;
    offSetCity.width = 450;
    offSetCity.height = 450;
    
    //context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    
    //City
    ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);
    
    //Player
    ctx.drawImage(player, offSetPlayer.crop_x, offSetPlayer.crop_y, offSetPlayer.crop_width, offSetPlayer.height, offSetPlayer.x, offSetPlayer.y, offSetPlayer.width, offSetPlayer.height);
    
    //Pokemon
    //blastoise

    if(offSetCity.crop_x + 450 > blastoise.globalX &&
       offSetCity.crop_y + 450 > blastoise.globalY){
            blastoise.x = blastoise.globalX - offSetCity.crop_x;
            blastoise.y = blastoise.globalY - offSetCity.crop_y;
            ctx.drawImage(blastoisePic, blastoise.crop_x, blastoise.crop_y, blastoise.crop_width, blastoise.height, blastoise.x, blastoise.y, blastoise.width, blastoise.height);
    }
    
    //snorlax
    if(offSetCity.crop_x + 450 > snorlax.globalX &&
       offSetCity.crop_y + 450 > snorlax.globalY){
            snorlax.x = snorlax.globalX - offSetCity.crop_x;
            snorlax.y = snorlax.globalY - offSetCity.crop_y;
            ctx.drawImage(snorlaxPic, snorlax.crop_x, snorlax.crop_y, snorlax.crop_width, snorlax.height, snorlax.x, snorlax.y, snorlax.width, snorlax.height);
    }

    //mewtwo
    if(offSetCity.crop_x + 450 > mewtwo.globalX &&
       offSetCity.crop_y + 450 > mewtwo.globalY){
            mewtwo.x = mewtwo.globalX - offSetCity.crop_x;
            mewtwo.y = mewtwo.globalY - offSetCity.crop_y;
            ctx.drawImage(mewtwoPic, mewtwo.crop_x, mewtwo.crop_y, mewtwo.crop_width, mewtwo.height, mewtwo.x, mewtwo.y, mewtwo.width, mewtwo.height);
    }

    //moltres
    if(offSetCity.crop_x + 450 > moltres.globalX &&
       offSetCity.crop_y + 450 > moltres.globalY){
            moltres.x = moltres.globalX - offSetCity.crop_x;
            moltres.y = moltres.globalY - offSetCity.crop_y;
            ctx.drawImage(moltresPic, moltres.crop_x, moltres.crop_y, moltres.crop_width, moltres.height, moltres.x, moltres.y, moltres.width, moltres.height);
    }

    //pidgeot
    if(offSetCity.crop_x + 450 > pidgeot.globalX &&
       offSetCity.crop_y + 450 > pidgeot.globalY){
            pidgeot.x = pidgeot.globalX - offSetCity.crop_x;
            pidgeot.y = pidgeot.globalY - offSetCity.crop_y;
            ctx.drawImage(pidgeotPic, pidgeot.crop_x, pidgeot.crop_y, pidgeot.crop_width, pidgeot.height, pidgeot.x, pidgeot.y, pidgeot.width, pidgeot.height);
    }
    
    document.addEventListener("keydown", move);
}
//END OF INIT FUNCTION

function drawPokemon(){
   //blastoise
    if(offSetCity.crop_x + 450 > blastoise.globalX &&
       offSetCity.crop_y + 450 > blastoise.globalY){
            blastoise.x = blastoise.globalX - offSetCity.crop_x;
            blastoise.y = blastoise.globalY - offSetCity.crop_y;
            ctx.drawImage(blastoisePic, blastoise.crop_x, blastoise.crop_y, blastoise.crop_width, blastoise.height, blastoise.x, blastoise.y, blastoise.width, blastoise.height);
    }

    //snorlax
    if(offSetCity.crop_x + 450 > snorlax.globalX &&
       offSetCity.crop_y + 450 > snorlax.globalY){
            snorlax.x = snorlax.globalX - offSetCity.crop_x;
            snorlax.y = snorlax.globalY - offSetCity.crop_y;
            ctx.drawImage(snorlaxPic, snorlax.crop_x, snorlax.crop_y, snorlax.crop_width, snorlax.height, snorlax.x, snorlax.y, snorlax.width, snorlax.height);
    }

    //mewtwo
    if(offSetCity.crop_x + 450 > mewtwo.globalX &&
       offSetCity.crop_y + 450 > mewtwo.globalY){
            mewtwo.x = mewtwo.globalX - offSetCity.crop_x;
            mewtwo.y = mewtwo.globalY - offSetCity.crop_y;
            ctx.drawImage(mewtwoPic, mewtwo.crop_x, mewtwo.crop_y, mewtwo.crop_width, mewtwo.height, mewtwo.x, mewtwo.y, mewtwo.width, mewtwo.height);
    }

    //moltres
    if(offSetCity.crop_x + 450 > moltres.globalX &&
       offSetCity.crop_y + 450 > moltres.globalY){
            moltres.x = moltres.globalX - offSetCity.crop_x;
            moltres.y = moltres.globalY - offSetCity.crop_y;
            ctx.drawImage(moltresPic, moltres.crop_x, moltres.crop_y, moltres.crop_width, moltres.height, moltres.x, moltres.y, moltres.width, moltres.height);
    }

    //pidgeot
    if(offSetCity.crop_x + 450 > pidgeot.globalX &&
       offSetCity.crop_y + 450 > pidgeot.globalY){
            pidgeot.x = pidgeot.globalX - offSetCity.crop_x;
            pidgeot.y = pidgeot.globalY - offSetCity.crop_y;
            ctx.drawImage(pidgeotPic, pidgeot.crop_x, pidgeot.crop_y, pidgeot.crop_width, pidgeot.height, pidgeot.x, pidgeot.y, pidgeot.width, pidgeot.height);
    }
}

function move(e){
    if(moveBool === false){
        
    }
    else{
        counter = (counter + 1) % 4;
    
        var ctx = canvasContext();

        if(offSetCity.crop_x + 450 + moveDistance > 780 ||
           offSetCity.crop_x - moveDistance < 0 ||
           offSetCity.crop_y + 450 + moveDistance > 1300 ||
           offSetCity.crop_y - moveDistance < 660){
            edge = true;

            if(offSetCity.crop_x + 450 + moveDistance > 780){
                r_edge = true;}
            if(offSetCity.crop_x - moveDistance < 0){
                l_edge = true;}
            if(offSetCity.crop_y + 450 + moveDistance > 1300){
                d_edge = true;}
            if(offSetCity.crop_y - moveDistance < 660){
                u_edge = true;}
        }

        //left key
        if(e.keyCode === 37){
            $('#battleText').hide();
            
            if(offSetPlayer.x - 2 < pokeMartX + pokeMartWidth &&
               offSetPlayer.y < pokeMartY + pokeMartHeight &&
               offSetPlayer.y + 35 > pokeMartY && 
               offSetPlayer.x + 35 > pokeMartX){
                    alert("Hello");
                    pokeMartPrompt();
            }
            else if(offSetPlayer.x - 2 < blastoise.x + 29 &&
               offSetPlayer.y < blastoise.y + 32 &&
               offSetPlayer.y + 35 > blastoise.y && 
               offSetPlayer.x + 35 > blastoise.x){
                    blastoiseBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.x - 2 < snorlax.x + 29 &&
               offSetPlayer.y < snorlax.y + 32 &&
               offSetPlayer.y + 35 > snorlax.y && 
               offSetPlayer.x + 35 > snorlax.x){
                    snorlaxBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.x - 2 < mewtwo.x + 29 &&
               offSetPlayer.y < mewtwo.y + 32 &&
               offSetPlayer.y + 35 > mewtwo.y && 
               offSetPlayer.x + 35 > mewtwo.x){
                    mewtwoBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.x - 2 < moltres.x + 29 &&
               offSetPlayer.y < moltres.y + 32 &&
               offSetPlayer.y + 35 > moltres.y && 
               offSetPlayer.x + 35 > moltres.x){
                    moltresBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.x - 2 < pidgeot.x + 29 &&
               offSetPlayer.y < pidgeot.y + 32 &&
               offSetPlayer.y + 35 > pidgeot.y && 
               offSetPlayer.x + 35 > pidgeot.x){
                    pidgeotBattle = true;
                    battlePrompt();
            }
            else{
                //Clear canvas
                ctx.clearRect(offSetPlayer.x, offSetPlayer.y,37.5,37.5);
                ctx.clearRect(offSetCity.x, offSetCity.y, 400, 400);

                //city
                if(offSetCity.crop_x - moveDistance < 0){
                    offSetCity.crop_x = 0;
                    ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);

                    //Prevents player from escaping the canvas
                    if(offSetPlayer.x - moveDistance > 0){
                        offSetPlayer.x -= moveDistance;
                    }
                    else{
                        offSetPlayer.x = 0;
                    }
                }
                else{
                    if(offSetPlayer.x > 200){
                        offSetPlayer.x -= moveDistance;
                        offSetCity.crop_x = 330; 
                        ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);
                    }
                    else{
                        offSetCity.crop_x = offSetCity.crop_x - moveDistance;
                        ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);   
                    }
                }

                //player
                offSetPlayer.crop_x = playerLX[counter];
                offSetPlayer.crop_y = playerLY[counter];
                ctx.drawImage(player, offSetPlayer.crop_x, offSetPlayer.crop_y, offSetPlayer.crop_width, offSetPlayer.crop_height, offSetPlayer.x, offSetPlayer.y, offSetPlayer.width, offSetPlayer.height);

                //blastoise
                if(offSetCity.crop_x + 450 > blastoise.globalX &&
                   offSetCity.crop_y + 450 > blastoise.globalY){
                        blastoise.x = blastoise.globalX - offSetCity.crop_x;
                        blastoise.y = blastoise.globalY - offSetCity.crop_y;
                        ctx.drawImage(blastoisePic, blastoise.crop_x, blastoise.crop_y, blastoise.crop_width, blastoise.height, blastoise.x, blastoise.y, blastoise.width, blastoise.height);
                }

                //snorlax
                if(offSetCity.crop_x + 450 > snorlax.globalX &&
                   offSetCity.crop_y + 450 > snorlax.globalY){
                        snorlax.x = snorlax.globalX - offSetCity.crop_x;
                        snorlax.y = snorlax.globalY - offSetCity.crop_y;
                        ctx.drawImage(snorlaxPic, snorlax.crop_x, snorlax.crop_y, snorlax.crop_width, snorlax.height, snorlax.x, snorlax.y, snorlax.width, snorlax.height);
                }

                //mewtwo
                if(offSetCity.crop_x + 450 > mewtwo.globalX &&
                   offSetCity.crop_y + 450 > mewtwo.globalY){
                        mewtwo.x = mewtwo.globalX - offSetCity.crop_x;
                        mewtwo.y = mewtwo.globalY - offSetCity.crop_y;
                        ctx.drawImage(mewtwoPic, mewtwo.crop_x, mewtwo.crop_y, mewtwo.crop_width, mewtwo.height, mewtwo.x, mewtwo.y, mewtwo.width, mewtwo.height);
                }

                //moltres
                if(offSetCity.crop_x + 450 > moltres.globalX &&
                   offSetCity.crop_y + 450 > moltres.globalY){
                        moltres.x = moltres.globalX - offSetCity.crop_x;
                        moltres.y = moltres.globalY - offSetCity.crop_y;
                        ctx.drawImage(moltresPic, moltres.crop_x, moltres.crop_y, moltres.crop_width, moltres.height, moltres.x, moltres.y, moltres.width, moltres.height);
                }

                //pidgeot
                if(offSetCity.crop_x + 450 > pidgeot.globalX &&
                   offSetCity.crop_y + 450 > pidgeot.globalY){
                        pidgeot.x = pidgeot.globalX - offSetCity.crop_x;
                        pidgeot.y = pidgeot.globalY - offSetCity.crop_y;
                        ctx.drawImage(pidgeotPic, pidgeot.crop_x, pidgeot.crop_y, pidgeot.crop_width, pidgeot.height, pidgeot.x, pidgeot.y, pidgeot.width, pidgeot.height);
                }
            }
        }

        //right key
        if (e.keyCode === 39)
        {
            $('#battleText').hide();
            if(offSetPlayer.x + 37 > blastoise.x &&
               offSetPlayer.y + 35 > blastoise.y &&
               offSetPlayer.y < blastoise.y + 32 &&
               offSetPlayer.x < blastoise.x + 29){
                    blastoiseBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.x + 37 > snorlax.x &&
               offSetPlayer.y + 35 > snorlax.y &&
               offSetPlayer.y < snorlax.y + 32 &&
               offSetPlayer.x < snorlax.x + 29){
                    snorlaxBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.x + 37 > mewtwo.x &&
               offSetPlayer.y + 35 > mewtwo.y &&
               offSetPlayer.y < mewtwo.y + 32 &&
               offSetPlayer.x < mewtwo.x + 29){
                    mewtwoBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.x + 37 > moltres.x &&
               offSetPlayer.y + 35 > moltres.y &&
               offSetPlayer.y < moltres.y + 32 &&
               offSetPlayer.x < moltres.x + 29){
                    moltresBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.x + 37 > pidgeot.x &&
               offSetPlayer.y + 35 > pidgeot.y &&
               offSetPlayer.y < pidgeot.y + 32 &&
               offSetPlayer.x < pidgeot.x + 29){
                    pidgeotBattle = true;
                    battlePrompt();
            }
                
            else{
                ctx.clearRect(offSetCity.x, offSetCity.y, 400, 400);
                ctx.clearRect(offSetPlayer.x, offSetPlayer.y,37.5,37.5);

                //city
                if(offSetCity.crop_x + 450 + moveDistance > 780){
                    offSetCity.crop_x = 330;
                    ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);

                    //Prevents player from escaping the canvas
                    if(offSetPlayer.x + moveDistance < 400){
                        offSetPlayer.x += moveDistance;
                    }
                    else{
                        offSetPlayer.x = 400;
                    }
                }
                else{
                    if(offSetPlayer.x < 200){
                        offSetPlayer.x += moveDistance;
                        offSetCity.crop_x = 0; 
                        ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);
                    }
                    else{
                        offSetCity.crop_x = offSetCity.crop_x + moveDistance;
                        ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);
                    }
                }

                //player
                offSetPlayer.crop_x = playerRX[counter];
                offSetPlayer.crop_y = playerRY[counter];
                ctx.drawImage(player, offSetPlayer.crop_x, offSetPlayer.crop_y, offSetPlayer.crop_width, offSetPlayer.crop_height, offSetPlayer.x, offSetPlayer.y, offSetPlayer.width, offSetPlayer.height);

                //blastoise
                if(offSetCity.crop_x + 450 > blastoise.globalX &&
                   offSetCity.crop_y + 450 > blastoise.globalY){
                        blastoise.x = blastoise.globalX - offSetCity.crop_x;
                        blastoise.y = blastoise.globalY - offSetCity.crop_y;
                        ctx.drawImage(blastoisePic, blastoise.crop_x, blastoise.crop_y, blastoise.crop_width, blastoise.height, blastoise.x, blastoise.y, blastoise.width, blastoise.height);
                }

                //snorlax
                if(offSetCity.crop_x + 450 > snorlax.globalX &&
                   offSetCity.crop_y + 450 > snorlax.globalY){
                        snorlax.x = snorlax.globalX - offSetCity.crop_x;
                        snorlax.y = snorlax.globalY - offSetCity.crop_y;
                        ctx.drawImage(snorlaxPic, snorlax.crop_x, snorlax.crop_y, snorlax.crop_width, snorlax.height, snorlax.x, snorlax.y, snorlax.width, snorlax.height);
                }

                //mewtwo
                if(offSetCity.crop_x + 450 > mewtwo.globalX &&
                   offSetCity.crop_y + 450 > mewtwo.globalY){
                        mewtwo.x = mewtwo.globalX - offSetCity.crop_x;
                        mewtwo.y = mewtwo.globalY - offSetCity.crop_y;
                        ctx.drawImage(mewtwoPic, mewtwo.crop_x, mewtwo.crop_y, mewtwo.crop_width, mewtwo.height, mewtwo.x, mewtwo.y, mewtwo.width, mewtwo.height);
                }

                //moltres
                if(offSetCity.crop_x + 450 > moltres.globalX &&
                   offSetCity.crop_y + 450 > moltres.globalY){
                        moltres.x = moltres.globalX - offSetCity.crop_x;
                        moltres.y = moltres.globalY - offSetCity.crop_y;
                        ctx.drawImage(moltresPic, moltres.crop_x, moltres.crop_y, moltres.crop_width, moltres.height, moltres.x, moltres.y, moltres.width, moltres.height);
                }

                //pidgeot
                if(offSetCity.crop_x + 450 > pidgeot.globalX &&
                   offSetCity.crop_y + 450 > pidgeot.globalY){
                        pidgeot.x = pidgeot.globalX - offSetCity.crop_x;
                        pidgeot.y = pidgeot.globalY - offSetCity.crop_y;
                        ctx.drawImage(pidgeotPic, pidgeot.crop_x, pidgeot.crop_y, pidgeot.crop_width, pidgeot.height, pidgeot.x, pidgeot.y, pidgeot.width, pidgeot.height);
                }
            }
        }
        //up key
        if(e.keyCode === 38)
        {
            $('#battleText').hide();
            if(offSetPlayer.y - 2 < blastoise.y + 32 &&
               offSetPlayer.x < blastoise.x + 29 &&
               offSetPlayer.x + 35 > blastoise.x &&
               offSetPlayer.y + 35 > blastoise.y){
                    blastoiseBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.y - 2 < snorlax.y + 32 &&
               offSetPlayer.x < snorlax.x + 29 &&
               offSetPlayer.x + 35 > snorlax.x &&
               offSetPlayer.y + 35 > snorlax.y){
                    snorlaxBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.y - 2 < mewtwo.y + 32 &&
               offSetPlayer.x < mewtwo.x + 29 &&
               offSetPlayer.x + 35 > mewtwo.x &&
               offSetPlayer.y + 35 > mewtwo.y){
                    mewtwoBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.y - 2 < moltres.y + 32 &&
               offSetPlayer.x < moltres.x + 29 &&
               offSetPlayer.x + 35 > moltres.x &&
               offSetPlayer.y + 35 > moltres.y){
                    moltresBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.y - 2 < pidgeot.y + 32 &&
               offSetPlayer.x < pidgeot.x + 29 &&
               offSetPlayer.x + 35 > pidgeot.x &&
               offSetPlayer.y + 35 > pidgeot.y){
                    pidgeotBattle = true;
                    battlePrompt();
            }
            else{
                ctx.clearRect(offSetPlayer.x, offSetPlayer.y,37.5,37.5);
                ctx.clearRect(offSetPlayer.x, offSetPlayer.y,37.5,37.5);

                //city
                if(offSetCity.crop_y - moveDistance < 660){
                    offSetCity.crop_y = 660;
                    ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);

                    //Prevents player from escaping the canvas
                    if(offSetPlayer.y - moveDistance > 0){
                        offSetPlayer.y -= moveDistance;
                    }
                    else{
                        offSetPlayer.y = 0;
                    }
                }
                else{

                    if(offSetPlayer.y > 200){
                        offSetPlayer.y -= moveDistance;
                        offSetCity.crop_y = 850; 
                        ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);
                    }
                    else{
                        offSetCity.crop_y = offSetCity.crop_y - moveDistance;
                        ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);
                    }
                }

                //player
                offSetPlayer.crop_x = playerUX[counter];
                offSetPlayer.crop_y = playerUY[counter];
                ctx.drawImage(player, offSetPlayer.crop_x, offSetPlayer.crop_y, offSetPlayer.crop_width, offSetPlayer.crop_height, offSetPlayer.x, offSetPlayer.y, offSetPlayer.width, offSetPlayer.height);

                //blastoise
                if(offSetCity.crop_x + 450 > blastoise.globalX &&
                   offSetCity.crop_y + 450 > blastoise.globalY){
                        blastoise.x = blastoise.globalX - offSetCity.crop_x;
                        blastoise.y = blastoise.globalY - offSetCity.crop_y;
                        ctx.drawImage(blastoisePic, blastoise.crop_x, blastoise.crop_y, blastoise.crop_width, blastoise.height, blastoise.x, blastoise.y, blastoise.width, blastoise.height);
                }

                //snorlax
                if(offSetCity.crop_x + 450 > snorlax.globalX &&
                   offSetCity.crop_y + 450 > snorlax.globalY){
                        snorlax.x = snorlax.globalX - offSetCity.crop_x;
                        snorlax.y = snorlax.globalY - offSetCity.crop_y;
                        ctx.drawImage(snorlaxPic, snorlax.crop_x, snorlax.crop_y, snorlax.crop_width, snorlax.height, snorlax.x, snorlax.y, snorlax.width, snorlax.height);
                }

                //mewtwo
                if(offSetCity.crop_x + 450 > mewtwo.globalX &&
                   offSetCity.crop_y + 450 > mewtwo.globalY){
                        mewtwo.x = mewtwo.globalX - offSetCity.crop_x;
                        mewtwo.y = mewtwo.globalY - offSetCity.crop_y;
                        ctx.drawImage(mewtwoPic, mewtwo.crop_x, mewtwo.crop_y, mewtwo.crop_width, mewtwo.height, mewtwo.x, mewtwo.y, mewtwo.width, mewtwo.height);
                }

                //moltres
                if(offSetCity.crop_x + 450 > moltres.globalX &&
                   offSetCity.crop_y + 450 > moltres.globalY){
                        moltres.x = moltres.globalX - offSetCity.crop_x;
                        moltres.y = moltres.globalY - offSetCity.crop_y;
                        ctx.drawImage(moltresPic, moltres.crop_x, moltres.crop_y, moltres.crop_width, moltres.height, moltres.x, moltres.y, moltres.width, moltres.height);
                }

                //pidgeot
                if(offSetCity.crop_x + 450 > pidgeot.globalX &&
                   offSetCity.crop_y + 450 > pidgeot.globalY){
                        pidgeot.x = pidgeot.globalX - offSetCity.crop_x;
                        pidgeot.y = pidgeot.globalY - offSetCity.crop_y;
                        ctx.drawImage(pidgeotPic, pidgeot.crop_x, pidgeot.crop_y, pidgeot.crop_width, pidgeot.height, pidgeot.x, pidgeot.y, pidgeot.width, pidgeot.height);
                }
            }
        }
        //down key
        if(e.keyCode === 40)
        {
            $('#battleText').hide();
            if(offSetPlayer.y + 37 > blastoise.y &&
               offSetPlayer.x < blastoise.x + 29 &&
               offSetPlayer.x + 35 > blastoise.x &&
               offSetPlayer.y < blastoise.y + 32){
                    blastoiseBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.y + 37 > snorlax.y &&
               offSetPlayer.x < snorlax.x + 29 &&
               offSetPlayer.x + 35 > snorlax.x &&
               offSetPlayer.y < snorlax.y + 32){
                    snorlaxBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.y + 37 > mewtwo.y &&
               offSetPlayer.x < mewtwo.x + 29 &&
               offSetPlayer.x + 35 > mewtwo.x &&
               offSetPlayer.y < mewtwo.y + 32){
                    mewtwoBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.y + 37 > moltres.y &&
               offSetPlayer.x < moltres.x + 29 &&
               offSetPlayer.x + 35 > moltres.x &&
               offSetPlayer.y < moltres.y + 32){
                    moltresBattle = true;
                    battlePrompt();
            }
            else if(offSetPlayer.y + 37 > pidgeot.y &&
               offSetPlayer.x < pidgeot.x + 29 &&
               offSetPlayer.x + 35 > pidgeot.x &&
               offSetPlayer.y < pidgeot.y + 32){
                    pidgeotBattle = true;
                    battlePrompt();
            }
            else{
                ctx.clearRect(offSetPlayer.x, offSetPlayer.y,37.5,37.5);
                ctx.clearRect(offSetPlayer.x, offSetPlayer.y,37.5,37.5);

                //city
                if(offSetCity.crop_y + 450 + moveDistance > 1300){
                    offSetCity.crop_y = 850;
                    ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);

                    //Prevents player from escaping the canvas
                    if(offSetPlayer.y + moveDistance < 400){
                        offSetPlayer.y += moveDistance;
                    }
                    else{
                        offSetPlayer.y = 400;
                    }
                }
                else{
                    if(offSetPlayer.y < 200){
                        offSetPlayer.y += moveDistance;
                        offSetCity.crop_y = 660;
                        ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);
                    }
                    else{
                        offSetCity.crop_y = offSetCity.crop_y + moveDistance;
                        ctx.drawImage(city, offSetCity.crop_x, offSetCity.crop_y, offSetCity.crop_width, offSetCity.height, offSetCity.x, offSetCity.y, offSetCity.width, offSetCity.height);
                    }
                }

                //player
                offSetPlayer.crop_x = playerDX[counter];
                offSetPlayer.crop_y = playerDY[counter];
                ctx.drawImage(player, offSetPlayer.crop_x, offSetPlayer.crop_y, offSetPlayer.crop_width, offSetPlayer.crop_height, offSetPlayer.x, offSetPlayer.y, offSetPlayer.width, offSetPlayer.height);

                //blastoise
                if(offSetCity.crop_x + 450 > blastoise.globalX &&
                   offSetCity.crop_y + 450 > blastoise.globalY){
                        blastoise.x = blastoise.globalX - offSetCity.crop_x;
                        blastoise.y = blastoise.globalY - offSetCity.crop_y;
                        ctx.drawImage(blastoisePic, blastoise.crop_x, blastoise.crop_y, blastoise.crop_width, blastoise.height, blastoise.x, blastoise.y, blastoise.width, blastoise.height);
                }

                //snorlax
                if(offSetCity.crop_x + 450 > snorlax.globalX &&
                   offSetCity.crop_y + 450 > snorlax.globalY){
                        snorlax.x = snorlax.globalX - offSetCity.crop_x;
                        snorlax.y = snorlax.globalY - offSetCity.crop_y;
                        ctx.drawImage(snorlaxPic, snorlax.crop_x, snorlax.crop_y, snorlax.crop_width, snorlax.height, snorlax.x, snorlax.y, snorlax.width, snorlax.height);
                }

                //mewtwo
                if(offSetCity.crop_x + 450 > mewtwo.globalX &&
                   offSetCity.crop_y + 450 > mewtwo.globalY){
                        mewtwo.x = mewtwo.globalX - offSetCity.crop_x;
                        mewtwo.y = mewtwo.globalY - offSetCity.crop_y;
                        ctx.drawImage(mewtwoPic, mewtwo.crop_x, mewtwo.crop_y, mewtwo.crop_width, mewtwo.height, mewtwo.x, mewtwo.y, mewtwo.width, mewtwo.height);
                }

                //moltres
                if(offSetCity.crop_x + 450 > moltres.globalX &&
                   offSetCity.crop_y + 450 > moltres.globalY){
                        moltres.x = moltres.globalX - offSetCity.crop_x;
                        moltres.y = moltres.globalY - offSetCity.crop_y;
                        ctx.drawImage(moltresPic, moltres.crop_x, moltres.crop_y, moltres.crop_width, moltres.height, moltres.x, moltres.y, moltres.width, moltres.height);
                }

                //pidgeot
                if(offSetCity.crop_x + 450 > pidgeot.globalX &&
                   offSetCity.crop_y + 450 > pidgeot.globalY){
                        pidgeot.x = pidgeot.globalX - offSetCity.crop_x;
                        pidgeot.y = pidgeot.globalY - offSetCity.crop_y;
                        ctx.drawImage(pidgeotPic, pidgeot.crop_x, pidgeot.crop_y, pidgeot.crop_width, pidgeot.height, pidgeot.x, pidgeot.y, pidgeot.width, pidgeot.height);
                }
            }
        }
    }
}

function pokeMartPrompt(){
    alert("Succes!");
}

function battlePrompt(){
    moveBool = false;
    $('#battleText').hide();
    $('#yes').show();
    $('#no').show();
    $('#gameChoiceQ').show();
    
    if(blastoiseBattle === true){
        $('#wildName').html(blastoise.name);
        $('#wildLevel').html(blastoise.level);
        $('#wildAttack').html(blastoise.attack);
        $('#wildHealth').html(blastoise.health);
    }
    
    else if(snorlaxBattle === true){
        $('#wildName').html(snorlax.name);
        $('#wildLevel').html(snorlax.level);
        $('#wildAttack').html(snorlax.attack);
        $('#wildHealth').html(snorlax.health);
    }
    
    else if(moltresBattle === true){
        $('#wildName').html(moltres.name);
        $('#wildLevel').html(moltres.level);
        $('#wildAttack').html(moltres.attack);
        $('#wildHealth').html(moltres.health);
    }
    
    else if(pidgeotBattle === true){
        $('#wildName').html(pidgeot.name);
        $('#wildLevel').html(pidgeot.level);
        $('#wildAttack').html(pidgeot.attack);
        $('#wildHealth').html(pidgeot.health);
    }
    
    else if(mewtwoBattle === true){
        $('#wildName').html(mewtwo.name);
        $('#wildLevel').html(mewtwo.level);
        $('#wildAttack').html(mewtwo.attack);
        $('#wildHealth').html(mewtwo.health);
    }
    
    $('#wildPokemon').show();
    
    $("#yes").off().on("click", function(){
        battle();
    });
    
    $("#no").off().on("click", function(){
        moveBool = true;
        $('#yes').hide();
        $('#no').hide();
        $('#gameChoiceQ').hide();
    });
}

function battle(){
    $('#yes').hide();
    $('#no').hide();
    $('#gameChoiceQ').hide();
    
    $('#battleText').html("Wild Pokemon appeared!")
    $('#battleText').show();
    $('#continue').show();
    
    $("#continue").off().on("click", function(){
        battle2();
    });
    
}

function battle2(){
    $("#battleText").html("What will you do?");
    $('#continue').hide();
    $('#battleAttack').show();
    $('#battleItem').show();
    $('#fireBall').hide();
    $('#scratch').hide();
    $('#backToOptions').hide();
    $('#battlePotion').hide();
    $('#battleSuperPotion').hide();
    
    $("#battleAttack").off().on("click", function(){
        attackMode();
    });
    $("#battleItem").off().on("click", function(){
        itemMode();
    });
}

function battle3(){
    $('#fireBall').hide();
    $('#scratch').hide();
    $('#battlePotion').hide();
    $('#battleSuperPotion').hide();
    $('#continue').show();
    
    var trainerDead = false;
    
    charizard.health = charizard.health - 1;
    if(charizard.health === 0){
        $('#health').html(charizard.health + "/" + baseHealth);
        $("#battleText").html("Your Pokemon has fainted!");
        trainerDead = true;
    }
    else{
        if(blastoiseBattle === true){
            $('#health').html(charizard.health + "/" + baseHealth);
            $("#battleText").html(blastoise.name + " attacked you!");
        }
        else if(moltresBattle === true){
            $('#health').html(charizard.health + "/" + baseHealth);
            $("#battleText").html(moltres.name + " attacked you!");        
        }
        else if(mewtwoBattle === true){
            $('#health').html(charizard.health + "/" + baseHealth);
            $("#battleText").html(mewtwo.name + " attacked you!");
        }
        else if(snorlaxBattle === true){
            $('#health').html(charizard.health + "/" + baseHealth);
            $("#battleText").html(snorlax.name + " attacked you!");
        }
        else if(pidgeotBattle === true){
            $('#health').html(charizard.health + "/" + baseHealth);
            $("#battleText").html(pidgeot.name + " attacked you!");
        }
    }
    
    if(trainerDead === false){
        $("#continue").off().on("click", function(){
            battle2();
        });
    }
    else{
        $("#continue").off().on("click", function(){
            $('#battleText').html("You have been defeated.")
            playerDefeat();
        });
    }
}

function playerDefeat(){
    $('#continue').show();
    $('#continue').html("Restart");
    $("#continue").off().on("click", function(){
            location.reload();
    });
}

function attackMode(){
    $('#battleText').hide();
    $('#battleAttack').hide();
    $('#battleItem').hide();
    $('#fireBall').show();
    $('#scratch').show();
    $('#backToOptions').show();
    
    $("#fireBall").off().on("click", function(){
        attackFireballReaction();
    });
    
    $("#scratch").off().on("click", function(){
        attackScratchReaction();
    });
    
    $("#backToOptions").off().on("click", function(){
        battle2();
    });
}

function itemMode(){
    $('#battleText').hide();
    $('#battleAttack').hide();
    $('#battleItem').hide();
    $('#battlePotion').show();
    $('#battleSuperPotion').show();
    $('#backToOptions').show();
    
    $("#battlePotion").off().on("click", function(){
        itemPotionReaction();
    });
    
    $("#battleSuperPotion").off().on("click", function(){
        itemSuperPotionReaction();
    });
    
    $("#backToOptions").off().on("click", function(){
        battle2();
    });
}

function pokemonDefeat(){
    $('#continue').show();
    $('#wildPokemon').hide();
    if(blastoiseBattle === true){
        $('#battleText').html("You defeated " + blastoise.name + ".");
    }
    else if(snorlaxBattle === true){
        $('#battleText').html("You defeated " + snorlax.name + ".");
    }
    else if(pidgeotBattle === true){
        $('#battleText').html("You defeated " + pidgeot.name + ".");
    }
    else if(moltresBattle === true){
        $('#battleText').html("You defeated " + moltres.name + ".");
    }
    else if(mewtwoBattle === true){
        $('#battleText').html("You defeated " + mewtwo.name + ".");
    }

    $("#continue").off().on("click", function(){
        pokemonDefeatState2();
    });
}

function pokemonDefeatState2(){
    $('#battleText').html("You gained a poke win point!");
    pokewin++;
    $('#pokewin').html(pokewin);
    
    ctx = canvasContext();
    
    if(blastoiseBattle === true){
        blastoiseBattle = false;
        blastoise.globalX = 999;
        blastoise.globalY = 999;
        blastoise.x = blastoise.globalX - offSetCity.crop_x;
        blastoise.y = blastoise.globalY - offSetCity.crop_y;
    }
    else if(snorlaxBattle === true){
        snorlaxBattle = false;
        snorlax.globalX = 999;
        snorlax.globalY = 999;
        snorlax.x = snorlax.globalX - offSetCity.crop_x;
        snorlax.y = snorlax.globalY - offSetCity.crop_y;
    }
    else if(pidgeotBattle === true){
        pidgeotBattle = false;
        pidgeot.globalX = 999;
        pidgeot.globalY = 999;
        pidgeot.x = pidgeot.globalX - offSetCity.crop_x;
        pidgeot.y = pidgeot.globalY - offSetCity.crop_y;
    }
    else if(moltresBattle === true){
        moltresBattle = false;
        moltres.globalX = 999;
        moltres.globalY = 999;
        moltres.x = moltres.globalX - offSetCity.crop_x;
        moltres.y = moltres.globalY - offSetCity.crop_y;
        ctx.drawImage(moltresPic, moltres.crop_x, moltres.crop_y, moltres.crop_width, moltres.height, moltres.x, moltres.y, moltres.width, moltres.height);
    }
    else if(mewtwoBattle === true){
        mewtwoBattle = false;
        mewtwo.globalX = 999;
        mewtwo.globalY = 999;
        mewtwo.x = mewtwo.globalX - offSetCity.crop_x;
        mewtwo.y = mewtwo.globalY - offSetCity.crop_y;
    }
    
    $("#continue").off().on("click", function(){
        pokemonDefeatState3();
    });
}

function pokemonDefeatState3(){
    $('#battleText').html("After clicking continue.  Move around to continue playing.")
    
    $("#continue").off().on("click", function(){
        pokemonDefeatState4();
    });
}

function pokemonDefeatState4(){
    moveBool = true;
    $('#battleText').hide();
    $('#continue').hide();
}

function attackScratchReaction(){
    $('#continue').show();
    $('#battleText').show();
    $('#backToOptions').hide();
    $('#scratch').hide();
    $('#fireBall').hide();
    
    if(blastoiseBattle === true){
        if(blastoise.health - 1 === 0){
            battles++;
            $('#battleText').html("You scratched " + blastoise.name);
            blastoise.health = 0;
            $('#wildHealth').html(blastoise.health);
        }
        else{
            $('#battleText').html("You scratched " + blastoise.name);
            blastoise.health = blastoise.health - 1;
            $('#wildHealth').html(blastoise.health);
        }
    }
    else if(snorlaxBattle === true){
        if(snorlax.health - 1 === 0){
            battles++;
            $('#battleText').html("You scratched " + snorlax.name);
            snorlax.health = 0;
            $('#wildHealth').html(snorlax.health);
        }
        else{
            $('#battleText').html("You scratched " + snorlax.name);
            snorlax.health = snorlax.health - 1;
            $('#wildHealth').html(snorlax.health);
        }
    }
    
    else if(moltresBattle === true){
        if(moltres.health - 1 === 0){
            battles++;
            $('#battleText').html("You scratched " + moltres.name);
            moltres.health = 0;
            $('#wildHealth').html(moltres.health);
        }
        else{
            $('#battleText').html("You scratched " + moltres.name);
            moltres.health = moltres.health - 1;
            $('#wildHealth').html(moltres.health);
        }
    }
    
    else if(pidgeotBattle === true){
        if(pidgeot.health - 1 === 0){
            battles++;
            $('#battleText').html("You scratched " + pidgeot.name);
            pidgeot.health = 0;
            $('#wildHealth').html(pidgeot.health);
        }
        else{
            $('#battleText').html("You scratched " + pidgeot.name);
            pidgeot.health = pidgeot.health - 1;
            $('#wildHealth').html(pidgeot.health);
        }
    }
    
    else if(mewtwoBattle === true){
        if(mewtwo.health - 1 === 0){
            battles++;
            $('#battleText').html("You scratched " + mewtwo.name);
            mewtwo.health = 0;
            $('#wildHealth').html(mewtwo.health);
        }
        else{
            $('#battleText').html("You scratched " + mewtwo.name);
            mewtwo.health = mewtwo.health - 1;
            $('#wildHealth').html(mewtwo.health);
        }
    } 
    
    if(blastoiseBattle === true){
        if(blastoise.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(blastoise.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
    if(snorlaxBattle === true){
        if(snorlax.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(snorlax.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
    if(moltresBattle === true){
        if(moltres.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(moltres.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
    if(pidgeotBattle === true){
        if(pidgeot.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(pidgeot.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
    if(mewtwoBattle === true){
        if(mewtwo.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(mewtwo.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
}

function attackFireballReaction(){
    $('#continue').show();
    $('#battleText').show();
    $('#backToOptions').hide();
    $('#scratch').hide();
    $('#fireBall').hide();
    
    if(blastoiseBattle === true){
        if(blastoise.health <= 0){
            battles++;
            $('#battleText').html("You used Fire Ball on " + blastoise.name);
            blastoise.health = 0;
            $('#wildHealth').html(blastoise.health);
        }
        else{
            $('#battleText').html("You used Fire Ball on " + blastoise.name);
            blastoise.health = blastoise.health - 2;
            if(blastoise.health <= 0){
                blastoise.health = 0;
            }
            $('#wildHealth').html(blastoise.health);
        }
    }
    else if(snorlaxBattle === true){
        if(snorlax.health <= 0){
            battles++;
            $('#battleText').html("You used Fire Ball on " + snorlax.name);
            snorlax.health = 0;
            $('#wildHealth').html(snorlax.health);
        }
        else{
            $('#battleText').html("You used Fire Ball on " + snorlax.name);
            snorlax.health = snorlax.health - 2;
            if(snorlax.health <= 0){
                snorlax.health = 0;
            }
            $('#wildHealth').html(snorlax.health);
        }
    }
    
    else if(moltresBattle === true){
        if(moltres.health <= 0){
            battles++;
            $('#battleText').html("You used Fire Ball on " + moltres.name);
            moltres.health = 0;
            $('#wildHealth').html(moltres.health);
        }
        else{
            $('#battleText').html("You used Fire Ball on " + moltres.name);
            moltres.health = moltres.health - 2;
            if(moltres.health <= 0){
                moltres.health = 0;
            }
            $('#wildHealth').html(moltres.health);
        }
    }
    
    else if(pidgeotBattle === true){
        if(pidgeot.health <= 0){
            battles++;
            $('#battleText').html("You used Fire Ball on " + pidgeot.name);
            pidgeot.health = 0;
            $('#wildHealth').html(pidgeot.health);
        }
        else{
            $('#battleText').html("You used Fire Ball on " + pidgeot.name);
            pidgeot.health = pidgeot.health - 2;
            if(pidgeot.health <= 0){
                pidgeot.health = 0;
            }
            $('#wildHealth').html(pidgeot.health);
        }
    }
    
    else if(mewtwoBattle === true){
        if(mewtwo.health <= 0){
            battles++;
            $('#battleText').html("You used Fire Ball on " + mewtwo.name);
            mewtwo.health = 0;
            $('#wildHealth').html(mewtwo.health);
        }
        else{
            $('#battleText').html("You used Fire Ball on " + mewtwo.name);
            mewtwo.health = mewtwo.health - 2;
            if(mewtwo.health <= 0){
                mewtwo.health = 0;
            }
            $('#wildHealth').html(mewtwo.health);
        }
    } 
    
    if(blastoiseBattle === true){
        if(blastoise.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(blastoise.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
    if(snorlaxBattle === true){
        if(snorlax.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(snorlax.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
    if(moltresBattle === true){
        if(moltres.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(moltres.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
    if(pidgeotBattle === true){
        if(pidgeot.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(pidgeot.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
    if(mewtwoBattle === true){
        if(mewtwo.health > 0){
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
        else if(mewtwo.health <= 0){
            $("#continue").off().on("click", function(){
                pokemonDefeat();
            });
        }
    }
}

function itemPotionReaction(){
    $('#continue').show();
    $('#backToOptions').hide();
    var fullHealth = false;
    var potionBool = true;
    
    if(potion == 0){
        $('#battleText').show();
        $('#battleText').html("You don't have anymore potions left.");
        potionBool = false;
    }
    else if(potion > 0){
        if(charizard.health == baseHealth){
            fullHealth = true;
            $('#battleText').show();
            $('#battleText').html("Your pokemon is already at full health.");

        }
        else if(charizard.health < baseHealth){
            potion = potion - 1;
            $('#potion').html(potion);
            if(charizard.health + 2 > 5){
                charizard.health = 5;
                $('#health').html(charizard.health + "/" + baseHealth)
                $('#battleText').show();
                $('#battleText').html("Your pokemon regained some health.");
            }
            else{
                charizard.health = charizard.health + 2;
                $('#health').html(charizard.health + "/" + baseHealth)
                $('#battleText').show();
                $('#battleText').html("Your pokemon regained some health.");
            }
        }
    }
    
    if(potionBool === false){
        $("#continue").off().on("click", function(){
            battle2();
        });
    }
    else if(potionBool === true){
        if(fullHealth === true){
            $("#continue").off().on("click", function(){
                battle2();
            });
        }
        else{
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
    }
}

function itemSuperPotionReaction(){
    $('#continue').show();
    $('#backToOptions').hide();
    var fullHealthBool = false;
    var superPotionBool = true;
    
    //Check if there are super potions in the inventory
    //no super potions
    if(superPotion == 0){
        $('#battleText').show();
        $('#battleText').html("You don't have anymore super potions left.");
        superPotionBool = false;
    }
    
    //there are super potions
    else if(superPotion > 0){
        //if trainer's pokemon is at full health
        if(charizard.health == baseHealth){
            fullHealthBool = true;
            $('#battleText').show();
            $('#battleText').html("Your pokemon is already at full health.");

        }
        //if trainer's pokemon is not at full health
        else if(charizard.health < baseHealth){
            superPotion = superPotion - 1;
            $('#superPotion').html(superPotion);
            if(charizard.health + 3 > 5){
                charizard.health = 5;
                $('#health').html(charizard.health + "/" + baseHealth)
                $('#battleText').show();
                $('#battleText').html("Your pokemon regained alot of health.");
            }
            else{
                charizard.health = charizard.health + 3;
                $('#health').html(charizard.health + "/" + baseHealth)
                $('#battleText').show();
                $('#battleText').html("Your pokemon regained alot of health.");
            }
        }
    }
    
    if(superPotionBool === false){
        $("#continue").off().on("click", function(){
            battle2();
        });
    }
    else if(superPotionBool === true){
        if(fullHealthBool === true){
            $("#continue").off().on("click", function(){
                battle2();
            });
        }
        else{
            $("#continue").off().on("click", function(){
                battle3();
            });
        }
    }
}

