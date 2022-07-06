//alert("Working!!");
//$("h1").css("color","green");


var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;

//To detect any keypress event
$(document).on("keypress",function(){
    if(!started){
        started=true;
        nextSequence();
    }
}); 

//To use play button 
$(".StButton").on("click",function(){
    if(!started){
        started=true;
        nextSequence();
    }
})

//To detect if any of the 4 buttons were clicked
$(".btn").on("click",function(event){
    userChosenColour=event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
}); 

//Check answer whether user clicked button matches with the current index of game pattern
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        //console.log("Success");
        if(gamePattern.length===userClickedPattern.length){
            var v=setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        //console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        var v=setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game over! Press any key/start button to restart");
        startOver();
    }
}

//Generate the new sequence
function nextSequence(){
    userClickedPattern=[];
    level+=1;
    $("#level-title").text("Level "+level);
    randomNumber=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


//To play sound
function playSound(name){
    fpath="sounds/"+name+".mp3";
    var a=new Audio(fpath);
    a.play();
}

//To display animation effect of the button clicked
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    var v=setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

//To restart the game when game is ended!
function startOver(){
    level=0;
    started=false;
    gamePattern=[];
}

