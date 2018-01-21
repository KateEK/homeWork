
var time = new Date;
var day = time.getDate();
var year = time.getFullYear();
var month = time.getMonth();

switch (month) {
    case 0:
        month = 'январь';
        break;
    case 1:
        month = 'февраля';
        break;
    case 2:
        month = 'март';
        break;
    case 3:
        month = 'апрель';
        break;
    case 4:
        month = 'май';
        break;
    case 5:
        month = 'июнь';
        break;
    case 6:
        month = 'июль';
        break;
    case 7:
        month = 'август';
        break;
    case 8:
        month = 'сентябрь';
        break;
    case 9:
        month = 'октябрь';
        break;
    case 10:
        month = 'ноябрь';
        break;
    case 11:
        month = 'декабрь';
        break;
    default:
        break;
}
alert(day + ' ' + month + ' ' + year);

/*квадрат с плавным переходом цвета*/

var smoothTransition = document.querySelector('.smoothTransition');
var hypnosis = document.querySelector('.hypnosis');


var firstColor = 0;
var toggleFirstColor = true;
var secondColor = 0;
var toggleSecondColor = true;
var lastColor = 0;
var toggleLastColor = true;

var setIntervalId = '';


 function onMouseMove (){
     setIntervalId = setInterval(function (){
    if (toggleFirstColor) {
        firstColor += Math.round(Math.random() * 10);
    } else {
        firstColor -= Math.round(Math.random() * 10);
    }

    if (firstColor >=250){
        toggleFirstColor = false;
    }else if(firstColor <= 0){
        toggleFirstColor = true;
    }

    if (toggleSecondColor){
        secondColor += Math.round(Math.random() * 10);
    }else {
        secondColor -= Math.round(Math.random() * 10);
    }

    if (secondColor >=250){
        toggleSecondColor = false;
    }else if(secondColor <= 0){
        toggleSecondColor = true;
    }

    if (toggleLastColor) {
        lastColor += Math.round(Math.random() * 10);
    }else {
        lastColor -= Math.round(Math.random() * 10);
    }

    if (lastColor >=250){
        toggleLastColor = false;
    }else if(lastColor <= 0){
        toggleLastColor = true;
    }


    smoothTransition.style.backgroundColor = 'rgb(' + firstColor  + ', ' + secondColor + ', ' + lastColor + ')';
},50);}

function onMouseOut (){
    clearInterval(setIntervalId);
}

smoothTransition.addEventListener('mouseover', onMouseMove);

smoothTransition.addEventListener('mouseout', onMouseOut);



/*круг с гипножабой*/



var setIntervalHypnosis = '';

function HypnosisonMouseMove (){

    setIntervalHypnosis = setInterval(function (){

    var fColor = Math.round(Math.random() * 200);
    var sColor = Math.round(Math.random() * 200);
    var lColor = Math.round(Math.random() * 200);

hypnosis.style.backgroundColor = 'rgb(' + fColor  + ', ' + sColor + ', ' + lColor + ')';
},100);}

function HypnosisonMouseOut (){
    clearInterval(setIntervalHypnosis);
}

hypnosis.addEventListener('mouseover', HypnosisonMouseMove);

hypnosis.addEventListener('mouseout', HypnosisonMouseOut);

/**
 *
 * расчет выплат по кредиту
 * в поле ввода вводим сумму кредита и
 * рядом появляется график который показывает сколько денег мы получили в кредит
 * и сколько надо будет отдать, через год, при 12% годовых по кредиту
 *
 */