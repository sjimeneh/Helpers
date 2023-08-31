<!DOCTYPE html>
<html lang="en">

<head>
  <title>Calendario de Turnos Front-Office</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- href="https://cdn.syncfusion.com/ej2/20.4.38/ej2-base/styles/material.css" -->
  <link href="../../css/style_scheduler/scheduler_material_1.css" rel="stylesheet" type="text/css" />
  <link href=".././../css/style_scheduler/scheduler_material_2.css" rel="stylesheet" type="text/css" />
  <!-- href="https://cdn.syncfusion.com/ej2/20.4.38/ej2-calendars/styles/material.css" -->
  <link href=".././../css/style_scheduler/scheduler_material_3.css" rel="stylesheet" type="text/css" />
  <!-- href="https://cdn.syncfusion.com/ej2/20.4.38/ej2-dropdowns/styles/material.css" -->
  <link href="../../css/style_scheduler/scheduler_material_4.css" rel="stylesheet" type="text/css" />
  <!-- href="https://cdn.syncfusion.com/ej2/20.4.38/ej2-inputs/styles/material.css" -->
  <link href="../../css/style_scheduler/scheduler_material_5.css" rel="stylesheet" type="text/css" />
  <link href="../../css/style_scheduler/scheduler_material_6.css" rel="stylesheet" type="text/css" />
  <!-- href="https://cdn.syncfusion.com/ej2/20.4.38/ej2-lists/styles/material.css" -->
  <link href="../../css/style_scheduler/scheduler_material_7.css" rel="stylesheet" type="text/css" />
  <!-- href="https://cdn.syncfusion.com/ej2/20.4.38/ej2-popups/styles/material.css" -->
  <link href="../../css/style_scheduler/scheduler_material_8.css" rel="stylesheet" type="text/css" />
  <!-- href="https://cdn.syncfusion.com/ej2/20.4.38/ej2-navigations/styles/material.css" -->
  <link href="../../css/style_scheduler/scheduler_material_9.css" rel="stylesheet" type="text/css" />
  <!-- href="https://cdn.syncfusion.com/ej2/20.4.38/ej2-schedule/styles/material.css" -->
  <link href="../../css/style_scheduler/scheduler_material_10.css" rel="stylesheet" type="text/css" />
  <link href="../../css/style_scheduler/scheduler_material_11.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="../../css/navbar/styleNavBar.css">
  <link rel="stylesheet" href="../../css/style_scheduler/style.css">
  <link rel="shortcut icon" href="<?php $file; ?>/SAM/assets/images/Logo_Tigo.svg">
  <link rel="stylesheet" href="<?php $file; ?>/SAM/css/web_pixels/style.css">
</head>

<body>
  <?php require("../../php/components/Session.php"); ?>
  <?php require("../../php/components/navbar.php"); ?>
  <!-- <div class="col-lg-12 control-section"> -->
  <div class="content-wrapper">
    <div class="schedule-container">
      <!-- <div class="title-container">
            <h1 class="title-text">Front-Office Scheduler</h1>
          </div> -->
      <div id="Schedule"></div>
    </div>
  </div>
  <!-- </div> -->
</body>
<script src="../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
<script src="../../script/scheduler/scheduler.js" type="text/javascript"></script>
<script src="../../node_modules/@syncfusion/ej2-schedule/schedule.js" type="text/javascript"></script>
<script src="../../script/scheduler/scheduler_md.js" type="text/javascript"></script>

</html>