    // Коментарии в JS в 1 строку
    /* Коментарий в JS в несколько строк
    */
    // document.write("Соси!!!"); // вывод после тега script
    // console.log("Текст в консоле"); // вывод текста в консоле
    // console.info("Текст в консоле"); // вывод текста в консоле
    // console.error("Текст в консоле"); // вывод текста в консоле как ошибки
    // console.warn("Текст в консоле"); // вывод текста в консоле как предупреждения

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

var i=0;
        var image=document.getElementById("image");
        // Добавьте свои картинки в массив через запятую
        var imgs=new Array('but_top.svg','but_bot.svg');
        function clicklanguage() {
            i++;i%=imgs.length;
            image.src = imgs[i];
        }