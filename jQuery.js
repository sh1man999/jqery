// callback-функция, которая выполнится, когда DOM будет загружен. 
$(function(){
   // DOM загружен. 
 });
//Выполнение кода после ПОЛНОЙ загрузки ВСЕЙ страницы (или отдельного элемента)
$(window).load(function () {
  /* манипуляции с готовой страницей */
});

$('img.pig').load(function () {
  /* действия после загрузки изображения с классом pig */
});

//---------------------------------------------------------------------------------
//                                    СЕЛЕКТОРЫ
//---------------------------------------------------------------------------------
$('div') // выберет все элементы div.

$('#el') // выберет элемент с id #el

$('.elements') // выберет все элементы с классом elements

$('li:odd') // выберет нечетные элементы li

$('li:even') // выберет четные элементы li

$('div , a') // выберет все эллементы div и a

$('#el a') // выберет все элементы a, находящиеся внутри #el

$('#el > a') // выберет все а, которые являются дочерними для #el

$('#el + a') // выберет все a, которые идут сразу после #el

$('a:not("#el a")'); // выберет все элементы a, не находящиеся внутри #el

$('p[align="left"]') // выберет все p со значением left в атрибуте align

$("div", $(".new")) и $(".new div") // выберет все элементы внутри элементов с классом new (в этом случае второй вариант предпочтительнее). 

$('#new').parent() // выберет родительский эллемент (тот в который вложен наш #new)

$('#new').next() // выберет следующиё эллемент после #new

$('#new').siblings() // выберет всех соседей #new

$('#new').find('ul') // выберет все ul которые находятся внутри #new

$('.child', $('.root')[0]); // использование контекста не облегчит поиск
$('.root').find('.child'); // а зачем нам перебор всех элементов внутри .root?
$('.root').children('.child'); // самый правильный вариант

$('#new').closest('div') // выберет ближайший к #new эллемент div

//---------------------------------------------------------------------------------
//                                     МАНИПУЛЯЦИИ
//---------------------------------------------------------------------------------
console.time('benchmark');
 for (var i=0; i<1000; i++) {
   var $elem = $(this).find('input');
 }
 console.timeEnd('benchmark');



$('.element').text('Новый текст');
$('.element').val()        /* получение значения атрибута 'value' элемента формы */
$('.element').attr('src')  /* получение значения атрибута 'src'

/* добавление в начало выбранного элемента */
$('.where-to-insert').prepend('<a class="new">what-to-insert</a>');

/* добавление в конец выбранного элемента */
$('.where-to-insert').append('<a class="new">what-to-insert</a>');

/* добавление перед выбранным элементом */
$('.where-to-insert').before('<span class="new">what-to-insert</span>');

/* добавление после выбранного элемента */
$('.where-to-insert').after('<span class="new">what-to-insert</span>');

/* что перемещаем --> куда перемещаем */
$('.what-to-move').appendTo('.where-to-move');

/* что копируем --> куда вставляем */
$('.what-to-copy').clone().appendTo('.where-to-insert');

//Обернуть элемент в 'container'
$('.element').wrap('<div class="container"></div>');

//Удалить обёртку
$('.element').unwrap('<div class="wrap"></div>');

//Удалить тег полностью
$('.element').remove();

//Тег остаётся а содержимое удаляется
$('.element').empty();

//Изменение стилей элемента(ов)
$('.element').css('border', '3px solid #f1f4f9');
/* или */
$('.element').css({'height':'8.5px', 'left':'-11px'})


document.location.reload();     /* Обновить текущую страницу */
document.location.reload(true); /* Перезагрузить текущую страницу, без использования кэша */

window.location.replace('');    /* Перенаправление подобно HTTP-редиректу */
window.location.href = '';      /* Перенаправление подобное клику по ссылке */

//---------------------------------------------------------------------------------
//        Поиск элементов относительно заданного при помощи jQuery методов
//---------------------------------------------------------------------------------
$('.element').parent()      /* родительский элемент */
$('.element').child()       /* ребёнок */

$('.element:first')         /* первый элемент в наборе */
$('.element:last')          /* последний элемент в наборе */
$('.element:even')          /* нечётные */
$('.element:odd')           /* чётные */ 
$('.element:eq(0)')         /* номер элемента (первый) */

$('.element:has(".red")')   /* имеет класс 'red' */
$('.element').has('.red')   /* имеет класс 'red' */
$('.element').not('.red')   /* все выбранные элементы, не имеющие класс 'red' */

$('a[href="google.com"]')   /* с ссылкой на гугл */
$('a[href!="google.com"]')  /* все ссылки кроме ссылки на гугл */
$('a[href^="http"]')        /* все ссылки которые начинаются с 'http' */
$('a[href$=".ru"]')         /* все ссылки которые заканчиваются '.ru' */
$('a[href*="r"]')           /* все ссылки которые содержат 'r' */

//---------------------------------------------------------------------------------
//                                     СОБЫТИЯ
//---------------------------------------------------------------------------------

//Таймер
setTimeout(function() {
   ...
  }, 1000);

$(window).resize(function(){ // при изминении окна браузера
   console.log(window.innerHeight, window.innerWidth); // выводим в консовь высоту и ширину окна 
});

//AddEventListener при клике
$('#nav').on("click", function () {
            $(this).css('color','red');
        });
// изменит цвет элемента с id nav, при клике

// изменит цвет span, который нвходится внутри элемента с id nav, при клике
$('#nav').on("click", function () {
            $('span', this).css('color','red');
        });

  
$('button').on("click", {user:"Test"} ,function (e) {
            $(this).css('color','red');
        });


$('.someDiv').on("click", function (e) {
            $('#modal-div').css("background-color", $(e.target).css("background-color"));
        });
// при клике на .someDiv, будет меняться фон #modal-div, на тот что указан в .someDiv...
// $(e.target) это тот элемент с которым было соверешено событие

$('#send').trigger('click'); // выполнит событие клик на элементе #send и вызовет обработчик(если такое есть)

$('.list').wrap('<span></span>') // обернёт в спан все эллементы с классом list

  $('<a/>', {
        text    :   'Ссылка на Яндекс',
        title   :   'Это Яндекс',
        href    :   'http://ya.ru',
        target  :   '_blank',
        'class' :   'red',
        css     :   {
                     fontSize       :   16,
                     textTransform  :   'uppercase',
                     fontWeight     :   700      
                    },
        click   :   function(){
            alert('Сейчас пойдем на Яндекс');
            return true;
        }                             
    }).appendTo('#parentDiv');
// создаст ссылку со всеми атрибутами что мы задали в том числе и с оброботчиком события click, и вставит её в #parentDiv
// кроме appendTo() есть ещё prependTo(), after(), before и тд.

$('.element').hover(function(){     //при наведении курсора 
  $(this).addClass('anyClass');     //добавление класса 
}, function(){                      //при покидании курсора 
  $(this).removeClass('anyClass');  //удаление класса 
});


//---------------------------------------------------------------------------------
//                                     Анимация
//---------------------------------------------------------------------------------

/* через 1,8 секунды будет выполнена анимация 'fadeIn' */
$('.element').delay(1800).fadeIn();


$("#book").animate({
    opacity: 0.25,
    left: "+=50"
  }, 5000);
 // анимирует #book, меняет свойства его css с заданной скоростью

$('#modal').animate({height: 400}, {duration: 1000, queue: false})
        .animate({width: 400}, {duration: 1000, queue: false})
        .animate({top:(window.innerHeight - 400) / 2}, {duration: 1000, queue: false})
        .animate({left:(window.innerWidth - 400) / 2}, {duration: 1000, queue: false});
// анимирует элемент #modal, все анимации происходят одновременно(queue: false)
// .animate(css, дополнительные параметры)

$(this).animate({width:300},{duration: 1000, specialEasing:{width:'swing'}, complete: function(){alert('анимация закончилась')}});
// параметр specialEasing изменяет метод анимации в данном случае (swing)
// в параметре complete - функция которая вызовется по окончанию анимации

//---------------------------------------------------------------------------------
//                                     AJAX
//---------------------------------------------------------------------------------

<p id="content"></p>
<form id="mail_send">
    <input type="email" name="mail">
    <button type="submit">Send</button>
</form>

<script>
    $('#mail_send').submit(function () {
        var str = $(this).serialize(); // тут получаем сериализованую строку значений полей формы
        $.ajax({
            type: "POST", // метод
            url: "mail.php", // путь
            data: str, // передаём в php сериализованую строку, которую он получет виде массива $_POST
            success: function (html) { // функция в случе успеха
                $('#content').html(html); // записываем в #content, то что нам вернул файл mail.php
            }
        });
        return false; // для того что бы остановить выполнение
    });
</script>

/*--------------------Передаём данные с PHP в JS с помощью Ajax--------------------------------*/
// cars.php
<?php
$cars = ['audi','bmw','lexus'=>['rx', 'gx']];
print json_encode($cars); // ковертируем в JSON формат
?>
// js
$('#cars').click(function () {
        $.ajax({
            url: "cars.php",
            success: function (html) {
                var res = $.parseJSON(html); // конвертируем плученый JSON, в javascript-объект
                console.dir(res); // выводим в консоль
            }
        });
    });
/*--------------------Передаём данные с JS в PHP с помощью Ajax--------------------------------*/
// cars.php
<?php
print_r($_POST['cars']);
?>
   
var cars = ['toyota', 'nissan', 'honda']; // js массив
    $('#cars').click(function () {
        $.ajax({
            url: "php/hello.php",
            type: "POST",
            data: {cars: cars}, // передаём массив cars, в PHP получем его в виде $_POST['cars']
            success: function (html) {
                console.log(html); // выводим в консоль
            }
        });
    });
