<?php

  session_start();

 ?><!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>Clément Salzedo</title>
    <link rel="stylesheet" href="assets/css/style.css">
  </head>

  <body>

    <header>
      <div class="grid margtop2 margbot3 marglr2">
        <h1 class="maj font13 bold ascenter"><a href="index.html" class="text-deco-none fontblack">clément salzedo</a></h1>
        <div class="ascenter navigation jcenter">
          <nav class="">
            <ul>
              <li><a href="about.html" class="navEntry maj fontblack marglr2 padfull1">about</a></li>
              <li><a href="works.html" class="navEntry maj fontblack marglr2 padfull1">works</a></li>
              <li><a href="contact.html" class="navEntry maj fontblack marglr2 padfull1">contact</a></li>
            </ul>
          </nav>
        </div>
        <svg viewBox="0 0 100 80" width="36" height="40" class="hamburger">
            <rect width="100" height="10" rx="0"></rect>
            <rect y="25" width="100" height="10" rx="0"></rect>
            <rect y="50" width="100" height="10" rx="0"></rect>
        </svg>
        <p class="cross fontgrey"></p>
      </div>
    </header>

  <main class="column aicenter margtop13">

      <h2 class="titleMedia maj font23 fontgrey bold margbot5 textcenter fontAndalemono">Contact</h2>

          <?php
              if (
                isset($_SESSION["erreur"]) &&
                $_SESSION["erreur_envoi"] === true) {
                    echo "<p class='tcenter font09'>Une erreur s'est produite. Veuillez vérifier les champs du formulaire</p>";
                    unset($_SESSION["erreur"]);
              }
           ?>

      <div class="flex column aicenter fontRoboto">
        <form class="" action="envoiForm.php" method="post">

          <div class="flex column margbot4">
            <label for="nom">Nom</label>
            <input type="text" name="nom" value="" class="padfull1">
          </div>

          <div class="flex column margbot4">
            <label for="email">Email</label>
            <input type="mail" name="email" value="" class="padfull1">
          </div>

          <div class="flex column margbot4">
            <label for="message">Message</label>
            <textarea name="message" rows="8" cols="80" class="padfull1"></textarea>
          </div>

          <input type="submit" name="envoyer" value="Envoyer" class="padfull1 bgWhite submitButton">

        </form>

      </div>

  </main>

  <script src="assets/javascript/script.js"></script>
  </body>
</html>
