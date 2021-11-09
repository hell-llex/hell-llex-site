    // Коментарии в JS в 1 строку
    /* Коментарий в JS в несколько строк
    */
    // document.write("Соси!!!"); // вывод после тега script
    // console.log("Текст в консоле"); // вывод текста в консоле
    // console.info("Текст в консоле"); // вывод текста в консоле
    // console.error("Текст в консоле"); // вывод текста в консоле как ошибки
    // console.warn("Текст в консоле"); // вывод текста в консоле как предупреждения

var num_1 = 3;
var num_2 = 5;

console.log("Результат: " + (num_1 + num_2));

var num_3 = 10;
num_3 += 3;
console.log("Результат: " + num_3);

console.log("Math: " + Math.PI);
console.log("Math: " + Math.min(0,2,3,5,22,15,6,7,8,9), Math.max(0,2,3,5,22,15,6,7,8,9));

var num_1 = 3;
var lox = true;

if(num_1 > 5 || lox == true) { // оператор if = если, для проверки || - или, && - и
    console.log("OK");
 } else if(num_1 <= 5) { // оператор else if = иначе если
    console.log("OK!");
 } else if(num_1 != 5) { // оператор else if = иначе если
    console.log("OK!");
 } else { // оператор else = иначе, только если есть if      
    console.log("NOT_OK");
}
// && и этот и этот должны быть выволненны (верные)
// || это или это должно быть выполненно

var text = 11;

switch(text) { // удобная проверка для нескльких элементов
    case 5:
        console.log("Переменная свитч 1: " + text); 
        break; // обозначение конца кейса, потому что без {}
    case 10:
        console.log("Переменная свитч 2: " + text);
        break;
    case 11:
        console.log("Переменная свитч 2.5: " + text);
        break; 
    default:
        console.log("Default " + text); // нужно если ни один из кейсов не выполнился
        break;
}

//-------------Массивы

var mass = [5, true, "text", "lox", 3.14, -100]; // одномерный массив

console.log ("Массив - " + mass[3] + " - длина массива " + mass.length);

//в массивах могут быть любые типы данных 

var matrix = [ // многомерный массив
    [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]
]

matrix[1][0] = 55;
console.log(matrix)

//--------------Циклы

for(var i = 1; i <= 10; i *= 2) { // только числа, создаются все в () 
    console.log("For - " + i);
} 

var whi = 5;

while("While - " + whi < 10) { // не только для чисел, можно true/folse. в () записывается только условие 
    console.log(whi);
    whi += 1;
} // можно проверять какуюто переменную

var dw = 50;
do { // цикл выполняющий 1 действие а дальше в зависимости от значений
    console.log("Do.While - " + dw);
    // ее какой-то код
} while(dw >= 1000);

// Операторы

for(var i = 9; i <= 11; i++) { // только числа, создаются все в () 
    if(i == 10) {
//        break;} // Выход из цикла
        continue;} // пропуск 1 итерации *действия
    console.log(i);
} 

// работа цикла с массивом

for(var m = 0; m < mass.length; m++) {
    console.log("Элемент " + (m + 1) + ": " +mass[m]);
} 
/*
// Всплывающие окна

alert("Hello"); // просто всплывающее окно несущее информацию (1 кнопка)

var data = confirm("Привет??"); // всплывающее с выбором да/нет
// чтобы узнать на какую кнопку нажал true/folse

var time = prompt("Сколько сейчас времени?"); // всплывающее окно с полем ввода
// приписать данные в переменную 
 
console.log(data + " " + time);

var person = null;
if(confirm("Вы точно уверены?")) {
    person = prompt("Вевидете имя.")
    alert("Привет, " + person + " - пидор");
} else {
    alert("Хуйню выбрали");
}
*/

function print() { //сама функция
    console.log("Hello ");
    console.log("world!");
}

print(); //вызов функции, чтобы она активировалась 

function number(a, b) { // с созданным параметром, который можно потом заполнить
    //console.log(b, a + " = это то что передали в функцию");
    return с= a + b;; // возвращение значения из функции для применения ее вне функции
}


var res = number(9, " lol");
console.log(res + " выдрали из функции");

// number(9, "lol"); //вызов функции с добавлением параметра, чтобы она активировалась
// можно добавлять несколько параметров через ","

var counter = 0;

function clickbutton(numb) {
    counter++;
    console.log(counter);
    numb.innerHTML = "Отсосал: " + counter; // inerHTML писать также КАПСОМ !!!
    // numb.style.background = "red"; добавление отдельных стилей
    numb.style.cssText = "background-color: red; border-width: 5pt; border-radius: 100pt; width: 50%; height: 20%; font-size: 100pt;";
    // добавлене стилей через JS
    // alert('Соси');
}

/* При помощи отслеживания нажатий можно сделать автоматическю фильтрацию фоток 
на странице портфолио
*/
























