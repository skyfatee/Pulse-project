/* var name = "Tamerlan";

let number = 7;
const pi = 3.14;
 
number = 4;

let leftBorderWidth;

// number
// string - "", '' ,
// true/false
// null
// undefined

let obj = {
    name: 'apple'
    color: 'green'
    weight: 200
}

Symbol

alert (1234)
console.log(number);
let answer = confirm("Вам есть 18?");
console.log(answer);

let answer = prompt("Вам есть 18?", "");
console.log(answer);

console.log(4 + 'fdd');

let isChecked = true,
    isClose = false;
     
console.log(isChecked && isClose);

console.log(isChecked || isClose);

if(2*4 == 8*1) {
    console.log('Верно')
} else {
    console.log('Ошибка')
}

let answer = confirm("Вам есть 18?");
    if (answer) {
console.log('Проверка Выполнена')
} else {
    console.log('К сожалению вход запрещен')
}

const num = 50;

if (num < 49 ) {
    console.log('Неправильно')
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Верно')
}

for(let i = 1; i < 8; i ++) {
    console.log(i);
}

function logging(a, b) {
    console.log( a + b )
}

logging(3, 5);

logging(6, 8); */

//Slider

    $(document).ready(function(){
        $('.carousel__inner').slick({
            speed: 1200,
            prevArrow:'<button type="button" class="slick-prev"><img src="../icons/arrows/chevron-left-solid.svg"></button>',
            nextArrow:'<button type="button" class="slick-next"><img src="../icons/arrows/chevron-right-solid.svg"></button>',
            responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    });

// Modal 

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
        $('.modal_close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_catalog_btn').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal_descr').text($('.catalog_item_subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    
    // Validate
      function validateForms(form) {
          $(form).validate({
              rules: {
                  name: {
                      required: true,
                      minlength: 2
                  },
                  phone: "required",
                  email: {
                      required: true,
                      email: true
                  }
              },
              messages: {
                  name: {
                      required: "Пожалуйста, введите свое имя",
                      minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                  phone: "Пожалуйста, введите свой номер телефона",
                  email: {
                      required: "Пожалуйста, введите свою почту",
                      email: "Неправильно введен адрес почты"
                  }
              }
          });
      };

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');
});
