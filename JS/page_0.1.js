    // Коментарии в JS в 1 строку
    /* Коментарий в JS в несколько строк
    */
    // document.write("Соси!!!"); // вывод после тега script
    // console.log("Текст в консоле"); // вывод текста в консоле
    // console.info("Текст в консоле"); // вывод текста в консоле
    // console.error("Текст в консоле"); // вывод текста в консоле как ошибки
    // console.warn("Текст в консоле"); // вывод текста в консоле как предупреждения

    
    
    
// ------------------------------------------------------------------Рабочее---------------------------------------------------------------------------------
    
    /*document.addEventListener("loadstart", function(){
        theme.id = JSON.parse(localStorage.getItem("theme"));
    }) //recoverTheme());// это проверка позиции скролла после загрузки/обновления страницы
    */
    document.addEventListener("DOMContentLoaded", function() {
        recoverTheme();
    });// это проверка позиции скролла после загрузки/обновления страницы
    
    let numbInTheme = 0;
    
    let theme = document.querySelector(".themeBut"); // выборка элемента кнопки смены темы .themeBut
    
    function recoverTheme() { // функция для восстановления текущей темы после обновления
        if(localStorage.getItem("theme") == null) {
           localStorage.setItem("theme", theme.id); 
        } else {
            theme.id = localStorage.getItem("theme"); // применение из локала     
        };
        if(localStorage.getItem("theme") == "themeButtonBlack") {
            writeNewId();
        }
        numbInTheme++;
    }

    theme.addEventListener('click', function() {
        writeNewId();// стоит первой потому что при изменении темы используется предыдущее значение кнопки 
        switchTheme();
        
        // еще функции для смены темы
    }); // смена id при клике на кнопку тема
    
    
    
    function switchTheme() { // выполнение функции смены id кнопки при клике по выбранному элементу
        if(theme.id == "themeButtonWhite") {
            theme.id = "themeButtonBlack";
        } else if(theme.id == "themeButtonBlack") {
            theme.id = "themeButtonWhite";
        }
        localStorage.setItem("theme", theme.id); // сохранение в локал  
    } 
// ------------------------------------------------------------------Делаю что-то---------------------------------------------------------------------------------
/*
let themeAll = [] = document.querySelectorAll(".", "");

console.log(themeAll);*/

let themeElements = document.querySelectorAll('.menu, .logoHead, .body, .footer, .logoFoot, .text_footer, .socialIconI, .socialIconT, .socialIconV, .socialIconY, .socialIconB');
//let themeElements = document.querySelectorAll('.menuWhite, #headerLogoWhite, #themeButtonWhite, #bodyHomeWhite, #bodyPortfolioWhite, #bodyContact, #bodyAboutmeWhite, #footerWhite, #footerLogoWhite, #footerTextWhite, .socialIconI, .socialIconT, .socialIconV, .socialIconY, .socialIconB');
//console.log(themeElements); 
//themeElements = Array.from(themeElements); // делаем массив из элементов




// function(elem, i , arr)

function writeNewId() { //--------------------переделать и доработать
    themeElements.forEach((elem) => {
        if(numbInTheme == 0) {
            let textIdElementB = elem.id.slice(0, -5) + "Black";
            elem.id = textIdElementB;
            //console.log("-------3");
        } else if(theme.id == "themeButtonBlack" && numbInTheme > 0) {
            let textIdElementB = elem.id.slice(0, -5) + "White";
            elem.id = textIdElementB;
            //console.log("---------------6");
        } else if(theme.id == "themeButtonWhite") {
            let textIdElementW = elem.id.slice(0, -5) + "Black";
            elem.id = textIdElementW;
            //console.log("------------1");   
        }
    });
        
}

//------------------------------отловить баг





/* // хуй пойми что

function writeNewId() {
    if(theme.id == "themeButtonWhite") {
        let textIdElement = themeElements[0].slice(0, -5) + "Black";
        themeElements[numbInTheme].id = textIdElement;
        numbInTheme++;
        console.log(themeElements);
    } else if(theme.id == "themeButtonBlack") {
        let textIdElement = themeElements[numbInTheme].slice(0, -5) + "White";
        themeElements[numbInTheme].id = textIdElement;
        numbInTheme++;
        console.log(themeElements);
    }
};*/ 
     
    
    
    
 // выборка подстроки(части строки) (1, 2) 1 это начало, 2 это конец 
// начинаем с позиции 0 слева, а заканчиваем на позиции -5 справа. если чисто отрицательное то с начинаем с конца







/*
let one = white.join("; "); // массив в строку

console.log(one);

let two = one.split("; "); // из строки в массив

console.log(two);
*/


/*
var idStr = element.id; // Получаем id.
element.id = idStr; // Применяем id
*/




// ------------------------------------------------------------------LocalStorage---------------------------------------------------------------------------------

//localStorage.removeItem("themeButton"); //удаляет ключи

//localStorage.setItem("themeButton", JSON.stringify(theme.id)); // JSON.stringify() переводит в строку, потому что локал может хранить элементы только в формате строк

//console.log(JSON.parse(localStorage.getItem("themeButton"))); //вывод содержимого ключа

//theme.id = JSON.parse(localStorage.getItem("themeButton")); // JSON.parse() переводит обратно в элемент из строки

// ------------------------------------------------------------------Пробная хуета---------------------------------------------------------------------------------


let counter = 0;

function clickbutton(numb) { //-------------DELETE-------------------------
    counter++;
    console.log(counter);
    numb.innerHTML = "Сходил: " + counter; // inerHTML писать также КАПСОМ !!!
    // numb.style.background = "red"; добавление отдельных стилей
    numb.style.cssText = "background-color: red; border-width: 5pt; border-radius: 100pt; width: 50%; height: 20%; font-size: 100pt;";
    // добавлене стилей через JS
    // alert('Соси');
}

/*let clickTheme = 0;
    function switchTheme() {
        clickTheme++;
        if(clickTheme % 2) {
            theme.id = "themeButtonBlack";
        } else {
            theme.id = "themeButtonWhite";
        }
    }*/ // отказался из-за нужды в лишнем клике и меняю напрямую по значению id









/*
window.addEventListener("scroll", function(){ // Вывод позиций скролла окна
    console.log("scrolled")
});*/
/*
const ScrollText = document.querySelector(".scroll_t"); //выборка элемента по странице через селектор

const scrollLink = document.querySelectorAll(".page_main"); //выборка элементоВ по странице

function checkScroll(){
    let scrollPosition = window.scrollY;

        console.log(scrollPosition);
        if(scrollPosition > 0) {
            ScrollText.classList.add('red');  
        } else {
            ScrollText.classList.remove('red');
        }     
}

window.addEventListener("scroll", function(){
    checkScroll();
});// развернутый вариант
// это действие связанное с обработкой события скролла

document.addEventListener("DOMContentLoaded", checkScroll);// краткий вариант 
// это проверка позиции скролла после загрузки/обновления страницы

const scrollButton = document.querySelectorAll(".scroll");
*/
/*scrollButton.addEventListener("click", function() {
    console.log("clicked");
})*/
/*
for(let linkScr of scrollButton) { // перебор циклом по всем элементам для применения кода на каждый элемент
    linkScr.addEventListener("click", function() {
    console.log("clicked");

})
}


let ScrollTest = document.getElementById("scroll");
function testCss() {
    ScrollTest.id = "scrollTestCss";
    console.log(ScrollTest.id);    
}

let timer = 0;
setTimeout(scrollAnimation,5000);
*/
/*
const scrollAnim = document.getElementById("scrollArrow0");
const scrollAll = document.getElementById("scroll");

function scrollCheck() {
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
}
window.addEventListener("scroll", scrollCheck);

window.addEventListener("scroll", function() {
    animationArrow();
    
});*/
/*
function animationArrow() {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 0) {
        scrollAnim.classList.add('scrollArrowHover');
    } else {
        scrollAnim.classList.remove('scrollArrowHover');
    }
}
*/

/*function scrollCheck() {
    

    let scrollPosition = window.scrollY;
    if(scrollPosition > 0) {
        scrollAnim.classList.add('hover');      
    } else {
        ScrollText.classList.remove('red');
    }
}
*/
/*-
let int = setInterval(testFunction, 1000); // интервалы срабатывают через n долисекунд

function testFunction() {
    counter ++;
    if(counter <= 2) {
        alert("Иди нахуй!");
    } else{
        alert("Сходил нахуй: " + counter + " раза");    
    }
    console.log("Counter: " + counter);
    if(counter == 5) {
        clearInterval(int);//останавливает таймер если он через переменную
        alert("Хватит с тебя ходить нахуй и так 5 раз сходил.")
    }
}
*/

/*
const divElement = document.createElement("div");
const divTest = document.getElementsByClassName("testDiv");

divElement.innerText = "Хуй №666"
divElement.classList = "test"
document.body.appendChild(divElement)

document.body.appendChild(divElement)
console.log(divElement)*/

