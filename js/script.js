"use strict"

const field = $(".field");
const ball = $(".ball");
const leftTeam = $(".left");
const rightTeam = $(".right");
const goalText = $("h1");

// Высота и ширина поля

const height = field.height() - ball.height();
const width = field.width() - ball.width();
const goalTop = 250;
const goalBottom = 440;
const isLeft = 8;

let leftStart = 0;
let   rightStart = 0;



function goal() {
	if (ball.offset().top >= goalTop && ball.offset().top <= goalBottom && ball.offset().left == isLeft) {
		console.log("первый")
		animateGoal();
		rightStart++;
		rightTeam.text(rightStart)
	}
	else if (ball.offset().top >= goalTop && ball.offset().top <= goalBottom && ball.offset().left !== isLeft) {
		console.log("второй")
		animateGoal();
		leftStart++;
		leftTeam.text(leftStart)
	}
}
// Движение мяча
function ballGo() {

	let randomY = Math.floor(Math.random() * height); //Рандомное число по Y
console.log(randomY)
if (ball.offset().left === 8) {
	console.log(ball.offset())
	console.log(ball.offset().left)
	ball.animate({
		'top': randomY,
		'left': width
	}, 500, function () {
		goal();
		;
	});
} else {
	$('.ball').animate({
		'top': randomY,
		'left': 0
	}, 500, function () {
		goal();
		
	});
}
}
// Анимация надписи "Гооол"

function animateGoal() {
	goalText.fadeIn(2500, function(){
		goalText.fadeOut()
	});
	

}

$('.ball').on('click', () => {
	ballGo();
});
