
$(document).ready(function() {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        spaceBetween: 30,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });   

	$('input[name="phone"]').inputmask("+7(999)999-99-99");

    $("#ajax_form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
        type: 'POST', //Метод отправки
        url: 'action_ajax_form.php', //путь до php фаила отправителя
        data: form_data,
            success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
            alert('Заявка успешно отправлена!'); 
            }
        });
    });

    // const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
    // const elSelectCustomValue = elSelectCustom.children[0];
    // const elSelectCustomOptions = elSelectCustom.children[1];
    // const defaultLabel = elSelectCustomValue.getAttribute("data-value");

    // // Listen for each custom option click
    // Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
    //     elOption.addEventListener("click", e => {
    //         // Update custom select text too
    //         elSelectCustomValue.textContent = e.target.textContent;
    //         // Close select
    //         elSelectCustom.classList.remove("isActive");

    //         if ($('.selectCustom-trigger').text() == 'Тверь') {
    //             $('.popup__address').text('УЛ. ВОССТАНИЯ ДЕСЕПТИКОНОВ,6 13:00');
    //             $('input[name="city"]').val('Тверь');
    //         } else if ($('.selectCustom-trigger').text() == 'Торжок') {
    //             $('.popup__address').text('УЛ. Пушкина,10 18:00');
    //             $('input[name="city"]').val('Торжок');
    //         } else if ($('.selectCustom-trigger').text() == 'Лихославль') {
    //             $('.popup__address').text('УЛ. Ленина,3 10:00');
    //             $('input[name="city"]').val('Лихославль');
    //         }
    //     });
    // });

    // Toggle select on label click
    // elSelectCustomValue.addEventListener("click", e => {
    //     elSelectCustom.classList.toggle("isActive");
    // });

    // close the custom select when clicking outside.
    // document.addEventListener("click", e => {
    // const didClickedOutside = !elSelectCustom.contains(event.target);
    // if (didClickedOutside) {
    //     elSelectCustom.classList.remove("isActive");
    // }
    // });

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

});