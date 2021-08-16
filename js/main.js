
$(document).ready(function() {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        spaceBetween: 30,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });   

	$('input[name="phone"]').inputmask("+7(999)999-99-99");

    $("#ajax_form").submit(function(e) { //устанавливаем событие отправки для формы с id=form 
        e.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
        type: 'POST', //Метод отправки
        url: 'action_ajax_form.php', //путь до php фаила отправителя
        data: form_data,
            success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                alert('Заявка успешно отправлена!'); 
                $('#mask, .window').hide();
                $("#ajax_form")[0].reset();
                var count = +$(".vip__counter-number").text();
                $(".vip__counter-number").text(count + 1);
                
                
                $('.vip__counter-number').spincrement({
                    thousandSeparator: "",
                    duration: 1200
                });
                show = false;
            }
        });
    });

    $(document).ready(function() {   
        $('.js-modal').click(function(e) {
            e.preventDefault();
            var popup = $('.popup');
            $('#mask').fadeTo("fast",0.5);
            popup.fadeIn(300); 
        });
        
        $('.window .close').click(function (e) { 
            e.preventDefault();
            $('#mask, .window').hide();
        }); 
        $('#mask').click(function () {
            $(this).hide();
            $('.window').hide();
        }); 
    });

    // var show = true;
    // var countbox = ".vip__counter";
    // $(window).on("scroll load resize", function () {
    //     if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    //     var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    //     var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    //     var w_height = $(window).height(); // Высота окна браузера
    //     var d_height = $(document).height(); // Высота всего документа
    //     var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    //     if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    //         $('.vip__counter-number').css('opacity', '1');
    //         $('.vip__counter-number').spincrement({
    //             thousandSeparator: "",
    //             duration: 1200
    //         });
    //         show = false;
    //     }
    // }); 

    
    $('#js-new-person--1').click(function () { 
        let line2 = $('<hr class="popup__line">');
        // let del2 = $('<div class="popup__delete popup__delete--2">✖</div>');
        let name2 = $('<input name="name2" type="text" placeholder="Ф.И.О." required>');
        let phone2 = $('<input name="phone2" type="text" placeholder="Телефон" required>');
        $(this).before(line2);
        // $(this).before(del2);
        $(this).before(name2);
        $(this).before(phone2);
        $('input[name="phone2"]').inputmask("+7(999)999-99-99");
        $(this).css('display', 'none');
        $('#js-new-person--2').css('display', 'block');
    });

    $('#js-new-person--2').click(function () { 
        let line3 = $('<hr class="popup__line">');
        // let del3 = $('<div class="popup__delete popup__delete--3">✖</div>');
        let name3 = $('<input name="name3" type="text" placeholder="Ф.И.О." required>');
        let phone3 = $('<input name="phone3" type="text" placeholder="Телефон" required>');
        $(this).before(line3);
        // $(this).before(del3);
        $(this).before(name3);
        $(this).before(phone3);
        $('input[name="phone3"]').inputmask("+7(999)999-99-99");
        $(this).css('display', 'none');
        $('#js-new-person--3').css('display', 'block');
    });

    $('#js-new-person--3').click(function () { 
        let line4 = $('<hr class="popup__line">');
        // let del4 = $('<div class="popup__delete popup__delete--4">✖</div>');
        let name4 = $('<input name="name4" type="text" placeholder="Ф.И.О." required>');
        let phone4 = $('<input name="phone4" type="text" placeholder="Телефон" required>');
        $(this).before(line4);
        // $(this).before(del4);
        $(this).before(name4);
        $(this).before(phone4);
        $('input[name="phone4"]').inputmask("+7(999)999-99-99");
        $(this).css('display', 'none');
        $('#js-new-person--4').css('display', 'block');
    });

    $('#js-new-person--4').click(function () { 
        let line5 = $('<hr class="popup__line">');
        // let del5 = $('<div class="popup__delete popup__delete--5">✖</div>');
        let name5 = $('<input name="name5" type="text" placeholder="Ф.И.О." required>');
        let phone5 = $('<input name="phone5" type="text" placeholder="Телефон" required>');
        $(this).before(line5);
        // $(this).before(del5);
        $(this).before(name5);
        $(this).before(phone5);
        $('input[name="phone5"]').inputmask("+7(999)999-99-99");
        $(this).css('display', 'none');
        $('#js-new-person--5').css('display', 'block');
    });

    $('#js-new-person--5').click(function () { 
        let line6 = $('<hr class="popup__line">');
        // let del6 = $('<div class="popup__delete popup__delete--6">✖</div>');
        let name6 = $('<input name="name6" type="text" placeholder="Ф.И.О." required>');
        let phone6 = $('<input name="phone6" type="text" placeholder="Телефон" required>');
        $(this).before(line6);
        // $(this).before(del6);
        $(this).before(name6);
        $(this).before(phone6);
        $('input[name="phone6"]').inputmask("+7(999)999-99-99");
        $(this).css('display', 'none');
        // $('#js-new-person--2').css('display', 'block');
    });

});