<?php
require("../../php/components/Session.php");
$file = $_SERVER['DOCUMENT_ROOT'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="<?php $file; ?>/SAM/assets/images/Logo_Tigo.svg">
    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/web_pixels/style.css">
    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/navbar/styleNavBar.css">
    <link rel="stylesheet" href="../../node_modules/@syncfusion/ej2/bootstrap5.css" />
    <title>Ocupación Nodos HFC</title>
    <style>
        #modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* background-color: rgba(0, 0, 0, 0.5); */
            /* Color con transparencia */
            z-index: 9999;
        }

        #modal-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            /* background-color: rgba(0, 0, 0, 0.5); */
            /* Color con transparencia */
        }

        #spreadsheet_sheet_panel {
            height: 480px;
        }

        #content_sheet_caida_parcial {
            width: 100%;
        }
    </style>
</head>

<body>
    <?php require('../../php/components/navbar.php') ?>
    <!-- Load Modal -->
    <div id="modal" class="modal modal-backdrop.show">
        <div id="modal-content" class="modal-content">
            <img src="../../assets/images/load.gif" alt="">
            <p>Espere por favor...</p>
        </div>
    </div>
    
    <div id="content_sheet_caida_parcial">
        <div class="control-section">
            <div id="spreadsheet"></div>
        </div>
    </div>
</body>
<script src="../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
<script src="../../node_modules/@syncfusion/ej2/dist/ej2.min.js"></script>
<script src="../../script/helpers/OcupacionNodos.js"></script>

</html>