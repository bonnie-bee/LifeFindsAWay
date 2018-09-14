

//Create random number between 19-120; Show the number on the screen
let goal=(Math.floor(Math.random()*102)+19);
$('.goal').text('We need ' + goal + " new dinosaurs in the park");

//click on crystal and it adds points to players score
//create list of numbers
//pull random number


let score = 0;
let wins = 0;
let losses = 0;

let score1=(Math.floor(Math.random()*12)+1);
let score2=(Math.floor(Math.random()*12)+1);
let score3=(Math.floor(Math.random()*12)+1);
let score4=(Math.floor(Math.random()*12)+1);

//Reset the game after a win or loss

$('#playerScore').text(score);







function reset(){
    
    goal=(Math.floor(Math.random()*102)+19);
    $('.goal').text('We need ' + goal + " new dinosaurs in the park");
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
function winLose(){
    if (score === goal){
        wins++;
        reset();
        $('#wins').text(wins);
    } 
    
    if (score > goal){
        losses++;
        reset();
        $('#losses').text(losses);
        // alert("There are too many dinosaurs. They've taken over the park. Get out while you can!")
        $('#myModal').modal("show")
    }
}


let life = new Audio('./images/life.m4a');

//assign each crystal a random number
//on click event to increase score by crystal's assigned number
//update score total
$("#good").on("click", function(){
    score+=score1;
    $('#playerScore').text(score);
    winLose()
});


$("#fine").on("click", function(){
    score+=score2;
    $('#playerScore').text(score);
    winLose()
});

$("#sure").on("click", function(){
    score+=score3;
    $('#playerScore').text(score);
    winLose()
});


$("#whatever").on("click", function(){
    score+=score4;
    $('#playerScore').text(score);
    winLose()

});


//show wins and losses on screen

/*let winner = $('<div>')
winner.attr("class", "wins");
winner.text("Wins:" + wins);
$('.instructions').append(winner);*/



/*let btnNum = [];

while (btnNum.length<4){
    let randNum = (Math.floor(Math.random()*12)+1);
    if(btnNum.indexOf(randNum) > -1) continue;
    btnNum[btnNum.length]= randNum;
}

$('#good').attr('id', btnNum[0]);
$('#fine').attr('id', btnNum[1]);
$('#sure').attr('id', btnNum[2]);
$('#whatever').attr('id', btnNum[3]);

$('.btn').on("click", function(){
    let playNum = $(this).attr('id');
    score = score + parseInt(playNum);
    console.log('inside score' + score)
    $('#playerScore').text(score);
    winLose();

});


console.log(btnNum)*/

