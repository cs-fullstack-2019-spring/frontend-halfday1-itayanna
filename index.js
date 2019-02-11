//this code is pulling the button elements and making them count the score

var p1Score= document.getElementById('p1score');
var p2Score= document.getElementById('p2score');


var p1Btn= document.getElementById('p1');
var p2Btn= document.getElementById('p2');



// the code that gets the mouse and keybord buttons working

var mouseSettingBtn= document.getElementById('mouse');
var keyboardsettingBtn= document.getElementById('keyboard');

mouseSettingBtn.addEventListener("click", function () {
    p1Btn.addEventListener('click', updatep1score);


    p2Btn.addEventListener('click', updatep2score);



});

// the functions that makes the scores change
function updatep1score(){
    p1Score.innerText= parseInt(p1Score.innerText)+1;
    console.log(1);
    winnercheck();
}

function updatep2score(){
    p2Score.innerText= parseInt(p2Score.innerText)+1;
    console.log(2);
    winnercheck();
}



//this code makes the keybord setting work
keyboardsettingBtn.addEventListener("click", function () {
    console.log('b');
    document.addEventListener('keydown', function (e) {
        console.log(e.code);
        if (e.code==='KeyQ'){
            updatep1score();
            winnercheck()

        }
    });
document.addEventListener('keydown', function (e) {
        console.log(e.code);
        if (e.code==='KeyP'){
            updatep2score();
            winnercheck()

        }
    })

});
//this function checks wor a winner

function winnercheck() {
    if (p1Score.innerText==='15'){
        alert('Player 1 Wins!!');
        p1Score.innerText='0';
        p2Score.innerText='0';

    }
    else if (p2Score.innerText==='15'){
        alert('Player 2 wins!!');
        p1Score.innerText='0';
        p2Score.innerText='0';
    }
}
//these variables pull the button elements aso i can use them in this javascript file
var blue= document.getElementById('blue');
var red= document.getElementById('red');
var yellow= document.getElementById('yellow');
var backdrop= document.getElementsByTagName('body');


//these three event listensers turnes the background when button is pressed

blue.addEventListener("click", function () {
    backdrop[0].style.backgroundColor='blue'


});
red.addEventListener("click", function () {
    backdrop[0].style.backgroundColor='red'


});
yellow.addEventListener("click", function () {
    backdrop[0].style.backgroundColor='yellow'


});











