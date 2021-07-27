
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

    var show = true;
    var countbox = ".vip__counter";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.vip__counter-number').css('opacity', '1');
            $('.vip__counter-number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
            show = false;
        }
    }); 

});