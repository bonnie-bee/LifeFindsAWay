

//Create random number between 19-120; Show the number on the screen
let goal=(Math.floor(Math.random()*102)+19);
$('.goal').text('We need ' + goal + "new dinosaurs in the park");

//click on crystal and it adds points to players score
//create list of numbers
//pull random number
//assign each crystal a random number
//on click event to increase score by crystal's assigned number
//update score total

let score = 0;
let wins = 0;
let losses = 0;

let score1=(Math.floor(Math.random()*12)+1);
let score2=(Math.floor(Math.random()*12)+1);
let score3=(Math.floor(Math.random()*12)+1);
let score4=(Math.floor(Math.random()*12)+1);


$('#playerScore').text(score);







function reset(){
    
    goal=(Math.floor(Math.random()*102)+19);
    $('.goal').text('The goal is: ' + goal);
    score = 0;
    score1=(Math.floor(Math.random()*12)+1);
    score2=(Math.floor(Math.random()*12)+1);
    score3=(Math.floor(Math.random()*12)+1);
    score4=(Math.floor(Math.random()*12)+1);
    $('#playerScore').text(score);
}









//win - player's score = random #
//compare score to #
//players score = random # -> wins++




$("#good").on("click", function(){
    score = score+score1;
    $('#playerScore').text(score);
    if (score === goal){
        wins++;
        reset();
        $('#wins').text(wins);
    } 
    
    if (score > goal){
        losses++;
        reset();
        $('#losses').text(losses);
    }

    console.log("inside score: " + score);

    console.log("inside wins: " + wins);
    
    console.log("inside losses: " + losses);
});


$("#fine").on("click", function(){
    score=score+score2;
    $('#playerScore').text(score);
    if (score === goal){
        wins++;
        reset();
        $('#wins').text(wins);
    } 
    
    if (score > goal){
        losses++;
        reset();
        $('#losses').text(losses);
    }

    console.log("inside score: " + score);

    console.log("inside wins: " + wins);
    
    console.log("inside losses: " + losses);
});

$("#sure").on("click", function(){
    score=score+score3;
    $('#playerScore').text(score);
    if (score === goal){
        wins++;
        reset();
        $('#wins').text(wins);
    } 
    
    if (score > goal){
        losses++;
        reset();
        $('#losses').text(losses);
    }

    console.log("inside score: " + score);

    console.log("inside wins: " + wins);
    
    console.log("inside losses: " + losses);
});


$("#whatever").on("click", function(){
    score=score+score4;
    $('#playerScore').text(score);
    if (score === goal){
        wins++;
        reset();
        $('#wins').text(wins);
    } 
    
    if (score > goal){
        losses++;
        reset();
        $('#losses').text(losses);
    }

    console.log("inside score: " + score);

console.log("inside wins: " + wins);

console.log("inside losses: " + losses);

});


//show wins and losses on screen

/*let winner = $('<div>')
winner.attr("class", "wins");
winner.text("Wins:" + wins);
$('.instructions').append(winner);*/





































/*
let btnNum = [];

while (btnNum.length<4){
    let randNum = (Math.floor(Math.random()*12)+1);
    if(btnNum.indexOf(randNum) > -1) continue;
    btnNum[btnNum.length]= randNum;
}

$('#good').attr('id', parseInt(btnNum[0], 10));
$('#fine').attr('id', parseInt(btnNum[1], 10));
$('#sure').attr('id', parseInt(btnNum[2], 10));
$('#whatever').attr('id', parseInt(btnNum[3], 10));

$('.btn').on("click", function(){
    let playNum = $(this).attr('id');
    score = score + playNum;
    console.log('inside score' + score)

});

$('#playerScore').text(score);

console.log(btnNum)*/

