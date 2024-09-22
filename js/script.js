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

              $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()){
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").value("value");
            $('form').trigger('reset');
        });
        return false;
    });
});
});
