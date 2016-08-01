<?php
    if(isset($_POST["submit_subscription"])){
        session_start ();
        $mail_subscription = htmlspecialchars ($_POST["mail_subscription"]);
        $to = 'vikaa1190@mail.ru';
        $subject = "message from the site: http://goodgood.bitlomanka.top/";
        if (mail($to, $subject, 'Email subscription: ' .$mail_subscription)) {
            echo "Subscribing";    
        } else {
            echo "Error subscribing";    
        }
    }
    
?>  