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

var mas = []; // массивы 


























