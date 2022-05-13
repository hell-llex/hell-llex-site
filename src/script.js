    // Коментарии в JS в 1 строку
    /* Коментарий в JS в несколько строк
    */
    // document.write("Соси!!!"); // вывод после тега script
    // console.log("Текст в консоле"); // вывод текста в консоле
    // console.info("Текст в консоле"); // вывод текста в консоле
    // console.error("Текст в консоле"); // вывод текста в консоле как ошибки
    // console.warn("Текст в консоле"); // вывод текста в консоле как предупреждения
// ------------------------------------------------------------------LocalStorage---------------------------------------------------------------------------------

//localStorage.removeItem("themeButton"); //удаляет ключи

//localStorage.setItem("themeButton", JSON.stringify(theme.id)); // JSON.stringify() переводит в строку, потому что локал может хранить элементы только в формате строк

//console.log(JSON.parse(localStorage.getItem("themeButton"))); //вывод содержимого ключа

//theme.id = JSON.parse(localStorage.getItem("themeButton")); // JSON.parse() переводит обратно в элемент из строки

// ------------------------------------------------------------------Рабочее---------------------------------------------------------------------------------
    
    /*document.addEventListener("loadstart", function(){
        theme.id = JSON.parse(localStorage.getItem("theme"));
    }) //recoverTheme());// это проверка позиции скролла после загрузки/обновления страницы
    */
    let numbInTheme = 0;
    let theme = document.querySelectorAll(".themeButMobile, .themeBut"); // выборка элемента кнопки смены темы .themeBut

   document.addEventListener("DOMContentLoaded", function() {
        recoverTheme();
        
    });// это проверка позиции скролла после загрузки/обновления страницы

    
/*    
    let theme = document.querySelector(".themeBut"); // выборка элемента кнопки смены темы .themeBut
*/

    


// проверить я хуй знает что это такое 

    function recoverTheme() { // функция для восстановления текущей темы после обновления
            if(localStorage.getItem("theme") == null) { // применяю в локал значение темы
                if(theme[1].id == "themeButtonBlack" && theme[0].id == "themeButtonMobileBlack") {
                    localStorage.setItem("theme", "Black");
                } else if(theme[1].id == "themeButtonWhite" && theme[0].id == "themeButtonMobileWhite") {
                    localStorage.setItem("theme", "White");
                };
            } else {
                if(localStorage.getItem("theme") == "Black") {
                    theme[1].id = "themeButtonBlack";
                    theme[0].id = "themeButtonMobileBlack";
                    writeNewId();
                } else if(localStorage.getItem("theme") == "White") {
                    theme[1].id = "themeButtonWhite";
                    theme[0].id = "themeButtonMobileWhite";
                };//theme.id = localStorage.getItem("theme"); // применение из локала     
            };
            /*if(localStorage.getItem("theme") == "Black") {
                writeNewId();
            };*/
            numbInTheme++;
    }


    theme[1].addEventListener('click', function() { // смена id при клике на кнопку тема
        writeNewId();// стоит первой потому что при изменении темы используется предыдущее значение кнопки 
        switchTheme();
        //localStorage.setItem("theme", theme.id);
        // еще функции для смены темы
    }); 
    
    theme[0].addEventListener('click', function() { // смена id при клике на кнопку тема
        writeNewId();// стоит первой потому что при изменении темы используется предыдущее значение кнопки 
        switchTheme();
        //localStorage.setItem("theme", theme.id);
        // еще функции для смены темы
    });
    
/*
    function switchTheme() { // выполнение функции смены id кнопки при клике по выбранному элементу
        if(theme.id == "themeButtonWhite") {
            theme.id = "themeButtonBlack";
        } else if(theme.id == "themeButtonBlack") {
            theme.id = "themeButtonWhite";
        }
        localStorage.setItem("theme", theme.id); // сохранение в локал  
    }
*/

    function switchTheme() { // выполнение функции смены id кнопки при клике по выбранному элементу
            if(theme[1].id == "themeButtonWhite" && theme[0].id == "themeButtonMobileWhite") {
                theme[0].id = "themeButtonMobileBlack";
                theme[1].id = "themeButtonBlack";
            } else if(theme[1].id == "themeButtonBlack" && theme[0].id == "themeButtonMobileBlack") {
                theme[0].id = "themeButtonMobileWhite";
                theme[1].id = "themeButtonWhite";
            };
            if(theme[1].id == "themeButtonBlack" && theme[0].id == "themeButtonMobileBlack") {
                localStorage.setItem("theme", "Black");
            } else if(theme[1].id == "themeButtonWhite" && theme[0].id == "themeButtonMobileWhite") {
                localStorage.setItem("theme", "White");
            }; // сохранение в локал  
        }

    





    let themeElements = document.querySelectorAll('.menu, .logoHead, .body, .footer, .logoFoot, .text_footer,\
    \.socialIconI, .socialIconT, .socialIconV, .socialIconY, .socialIconB, .socialIconG, .menuMobile_2, .logoMobile, .logoMobileFoot,\
    \ .line1, .line2, .arrow1-1, .arrow2-1, .arrow1-2, .arrow2-2, .socialList, .up, .line31, .line32, .line41, .line42,\
    \ .socialMobileIconI, .socialMobileIconT, .socialMobileIconV, .socialMobileIconY, .socialMobileIconB, .socialMobileIconG ');

    function writeNewId() { //--------------------переделать и доработать
        themeElements.forEach((elem) => {    // почитать про линейные функции
            if(numbInTheme == 0) {
                let textIdElementB = elem.id.slice(0, -5) + "Black";
                elem.id = textIdElementB;
                //console.log("-------3");
            } else if(theme[1].id == "themeButtonBlack" && theme[0].id == "themeButtonMobileBlack" && numbInTheme > 0) {
                let textIdElementB = elem.id.slice(0, -5) + "White";
                elem.id = textIdElementB;
                //console.log("---------------6");
            } else if(theme[1].id == "themeButtonWhite" && theme[0].id == "themeButtonMobileWhite" ) {
                let textIdElementW = elem.id.slice(0, -5) + "Black";
                elem.id = textIdElementW;
                //console.log("------------1");   
            }
        });
            
    }

    let logoMob = document.querySelector(".logoMobile");
    let tongue = document.querySelector(".tongue");
    let line = document.querySelectorAll(".line1, .line2");
    let listMenu = document.querySelectorAll(".menuList, .menuMobile_2, .arrow1-1, .arrow2-1, .arrow1-2, .arrow2-2");

    logoMob.addEventListener('click', function(){ // выплыввающее меню по нажатию на логотип
        line.forEach((elem) => {
            elem.classList.toggle("active");       
        });
        listMenu.forEach((elem) => {
            elem.classList.toggle("active");
        });
    });

    tongue.addEventListener("click", function(){ // выплыввающее меню по нажатию на язычок // переделать в свайп
        line.forEach((elem) => {
            elem.classList.toggle("active");       
        });
        listMenu.forEach((elem) => {
            elem.classList.toggle("active");
        });
    });




// ------------------------------------------------------------------Делаю что-то---------------------------------------------------------------------------------

//let themeElements = document.querySelectorAll('.menuWhite, #headerLogoWhite, #themeButtonWhite, #bodyHomeWhite, #bodyPortfolioWhite, #bodyContact, #bodyAboutmeWhite, #footerWhite, #footerLogoWhite, #footerTextWhite, .socialIconI, .socialIconT, .socialIconV, .socialIconY, .socialIconB');
//console.log(themeElements); 
//themeElements = Array.from(themeElements); // делаем массив из элементов


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


/*function switchTheme() { // выполнение функции смены id кнопки при клике по выбранному элементу
        theme.forEach((elem) => {
            if(theme[1].id == "themeButtonWhite" && theme[0].id == "themeButtonMobileWhite") {
                let textIdElementW = elem.id.slice(0, -5) + "Black";
                elem.id = textIdElementW;
            } else if(theme[1].id == "themeButtonBlack" && theme[0].id == "themeButtonMobileBlack") {
                let textIdElementB = elem.id.slice(0, -5) + "White";
                elem.id = textIdElementB;
            };
            if(elem.id == "themeButtonWhite" && elem.id == "themeButtonMobileWhite") {
                localStorage.setItem("theme", "White");    
            } else if(elem.id == "themeButtonBlack" && elem.id == "themeButtonMobileBlack") {
                localStorage.setItem("theme", "Black");
            } 
             // сохранение в локал    
        })
    }*/





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


// ------------------------------------------------------------------Пробная хуета---------------------------------------------------------------------------------


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

