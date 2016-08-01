<?php
    if(isset($_POST["submit"])){
        session_start ();
        $name = htmlspecialchars ($_POST["name"]);
        $email = htmlspecialchars ($_POST["email"]);
        $subject_message = htmlspecialchars ($_POST["subject"]);
        $message = htmlspecialchars ($_POST["message"]);
        $to = 'vikaa1190@mail.ru';
        $subject = "message from the site: http://goodgood.bitlomanka.top/";
        if (mail($to, $subject, 'Имя пользователя: '.$name."\r\n" .'Email: '.$email."\r\n".'Тема: ' .$subject_message."\r\n". 'Сообщение: '.$message)) {
            echo "message sent";    
        } else {
            echo "Error while sending message";    
        }
    }
    
?>  