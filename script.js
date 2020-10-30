/* var age = +prompt('Введите ваш возраст')
if (age <= 18 ) {
    alert("Вы еще молоды. Вам нужно учиться");
} else if (age > 18 && age <= 50) {
    alert("Вам нужно работать");
} else if (age > 50 && age <=59) {
    alert("Вам скоро на пенсию");
} else if (age > 59 && age <= 150) {
    alert("Вы пенсионер");
}  else {
    alert("Что-то пошло не так");
}   */

var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');
if (a>b && a<c || a<b && a>c) {
    alert('Среднее число '+ a);
} else if (b>a && b<c || b<a && b>c) {
    alert('Среднее число ' + b); 
} else if (c>a && c<b || c<a && c>b) {
    alert('Среднее число ' + c);
}
