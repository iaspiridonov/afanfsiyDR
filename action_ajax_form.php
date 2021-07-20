<?
if((isset($_POST['name']) && $_POST['name']!="") && (isset($_POST['phone']) && $_POST['phone']!="")){ 
        $to = 'b2b@afanasy.ru'; 
        // $to = 'spiridonov.ilya81@gmail.com'; 
        $subject = 'Заявка с сайта День Рождения'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>E-mail: '.$_POST['email'].'</p> 
                        <p>Город: '.$_POST['city'].'</p>                      
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: afanasiy.info <afanasiy.info>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>