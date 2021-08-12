<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
 
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
 
$mail->Host = 'ssl://smtp.mail.ru';
$mail->Port = 465;
$mail->Username = 'maclarinfest@afanasy.ru';
$mail->Password = 'afa21fest';

$name = $_POST['name'];
$name2 = $_POST['name2'];
$name3 = $_POST['name3'];
$name4 = $_POST['name4'];
$name5 = $_POST['name5'];
$name6 = $_POST['name6'];

$phone = $_POST['phone'];
$phone2 = $_POST['phone2'];
$phone3 = $_POST['phone3'];
$phone4 = $_POST['phone4'];
$phone5 = $_POST['phone5'];
$phone6 = $_POST['phone6'];

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
            </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: afanasiy.info <afanasiy.info>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

    $backMessage = '
        <html>
            <head>
                <title>Поздравляем! Регистрация прошла успешно!</title>
            </head>
            <body>
                <p>
                Добрый день! Благодарим за участие в конкурсе, регистрация прошла успешно!<br>
                Итоги 1 этапа будут подведены 9 августа с помощью генератора случайных чисел.<br>
                Каждому участнику мы пришлем смс-оповещение о его результате. <br><br>

                20 000 человек проходят во второй тур: получают фирменную футболку фестиваля и участвуют в розыгрыше 6 000 билетов на фестиваль.<br><br>

                Информацию о втором туре мы опубликуем на сайте <a href="maclarin-fest.ru">maclarin-fest.ru</a> и в соцсетях холдинга «Афанасий». Следите за новостями!
                </p>                  
            </body>
        </html>';

    // От кого
    $mail->setFrom('maclarinfest@afanasy.ru', 'Холдинг Афанасий');		
    // Кому
    $mail->addAddress($email, $name);
    // Тема письма
    $mail->Subject = "Поздравляем! Регистрация прошла успешно!";
    // Тело письма
    $mail->msgHTML($backMessage);
    $mail->send();

    $count = htmlentities(file_get_contents("count.txt"));
    if ($count < 3300) $count = 3313;

    if ((isset($name6) && $name6!="") && (isset($phone6) && $phone6!="")) {
        file_put_contents("count.txt", $count + 6);
        $tofile = "'$name';'$phone';'$email';'$city';'$today'\n";
        $tofile .= "'$name2';'$phone2'\n";
        $tofile .= "'$name3';'$phone3'\n";
        $tofile .= "'$name4';'$phone4'\n";
        $tofile .= "'$name5';'$phone5'\n";
        $tofile .= "'$name6';'$phone6'\n";
    } else if ((isset($name5) && $name5!="") && (isset($phone5) && $phone5!="")) {
        file_put_contents("count.txt", $count + 5);
        $tofile = "'$name';'$phone';'$email';'$city';'$today'\n";
        $tofile .= "'$name2';'$phone2'\n";
        $tofile .= "'$name3';'$phone3'\n";
        $tofile .= "'$name4';'$phone4'\n";
        $tofile .= "'$name5';'$phone5'\n";
    } else if ((isset($name4) && $name4!="") && (isset($phone4) && $phone4!="")) {
        file_put_contents("count.txt", $count + 4);
        $tofile = "'$name';'$phone';'$email';'$city';'$today'\n";
        $tofile .= "'$name2';'$phone2'\n";
        $tofile .= "'$name3';'$phone3'\n";
        $tofile .= "'$name4';'$phone4'\n";
    } else if ((isset($name3) && $name3!="") && (isset($phone3) && $phone3!="")) {
        file_put_contents("count.txt", $count + 3);
        $tofile = "'$name';'$phone';'$email';'$city';'$today'\n";
        $tofile .= "'$name2';'$phone2'\n";
        $tofile .= "'$name3';'$phone3'\n";
    } else if ((isset($name2) && $name2!="") && (isset($phone2) && $phone2!="")) {
        file_put_contents("count.txt", $count + 2);
        $tofile = "'$name';'$phone';'$email';'$city';'$today'\n";
        $tofile .= "'$name2';'$phone2'\n";
    } else {
        file_put_contents("count.txt", $count + 1);
        $tofile = "'$name';'$phone';'$email';'$city';'$today'\n";
    }

    $today = date("j-m-Y, H:i");
    $file = 'users.csv';
    $bom = "\xEF\xBB\xBF";
    file_put_contents($file, $bom . $tofile . file_get_contents($file));
}