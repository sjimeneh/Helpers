<?php
require("../php/components/Session.php");
$file = $_SERVER['DOCUMENT_ROOT'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="<?php $file; ?>/SAM/assets/images/Logo_Tigo.svg">
  <link rel="stylesheet" href="<?php $file; ?>/SAM/css/home/style_home.css">
  <link rel="stylesheet" href="<?php $file; ?>/SAM/css/navbar/styleNavBar.css">
  <link rel="stylesheet" href="<?php $file; ?>/SAM/css/web_pixels/style.css">
  <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" crossorigin="anonymous" defer></script>
  <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet" crossorigin="anonymous">
  <title>Home</title>
</head>

<body>
  <?php require('../php/components/navbar.php') ?>

  <div class="swiffy-slider slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-nav-autoplay slider-nav-autopause slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible" data-slider-nav-autoplay-interval="2000">
    <ul class="slider-container py-4" id="content-cards">
    </ul>
    <button type="button" class="slider-nav" aria-label="Go left"></button>
    <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>

    <div class="slider-indicators" id="content-slide">
      
    </div>
  </div>
  <script src="../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
  <script src="../script/home/home.js"></script>
</body>

</html>