<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$city = $_POST['city'];

if((isset($name) && $name!="") && (isset($phone) && $phone!="")){ 
        $to = 'b2b@afanasy.ru'; 
        $subject = 'Заявка с сайта День Рождения'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$phone.'</p> 
                        <p>E-mail: '.$email.'</p> 
                        <p>Город: '.$city.'</p>                      
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: afanasiy.info <afanasiy.info>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

        $today = date("j-m-Y, H:i");

        $file = 'users.csv';
        $tofile = "'$name';'$phone';'$email';'$city';'$today'\n";
        $bom = "\xEF\xBB\xBF";
        file_put_contents($file, $bom . $tofile . file_get_contents($file));

        $count = htmlentities(file_get_contents("count.txt"));
        file_put_contents("count.txt", $count + 1);
}