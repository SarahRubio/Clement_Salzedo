<?php

session_start();

    if(
      !empty($_POST["nom"]) &&
      !empty($_POST["email"]) &&
      false !== filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) &&
      !empty($_POST["message"])) && {

          $to = 'sarahrubio.pro@gmail.com';

          $subject = 'Portfolio Clement Salzedo';

          $nom = $_POST["nom"];

          $adresse_mail =  $_POST["email"];

          $message = $_POST["message"];

          $headers = 'From: s.rubio@live.fr' . "\r\n" .
          'Reply-To: s.rubio@live.fr' . "\r\n" .
          'X-Mailer: PHP/' . phpversion();

          mail($to, $subject, $message, $headers);

          header("location:contact.php");
          exit;
    }

    else {
      $_SESSION["erreur"] = true;
      header("location:contact.php");
      exit;
    }

 ?>
