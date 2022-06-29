//alert("Working!!");
//$("h1").css("color","green");
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
function nextSequence(){
    randomNumber=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $(".btn").on("click",function(event){
        userChosenColour=event.target.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour)
    }); 
}
nextSequence();
function playSound(name){
    fpath="sounds/"+name+".mp3";
    var a=new Audio(fpath);
    a.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    var v=setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)
}
