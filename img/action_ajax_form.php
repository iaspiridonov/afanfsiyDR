<?
if((isset($_POST['name']) && $_POST['name']!="") && (isset($_POST['phone']) && $_POST['phone']!="")){ 
        $to = 'b2b@afanasy.ru'; 
        $subject = 'Заявка с сайта вакансий'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Город: '.$_POST['city'].'</p>  
                        <p>Дата рождения: '.$_POST['birthday'].'</p>
                        <p>Кем ты хочешь работать?: '.$_POST['empl'].'</p>                       
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: afanasiy.info <afanasiy.info>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>