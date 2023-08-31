<?php
require("../../../php/components/Session.php");
$file = $_SERVER['DOCUMENT_ROOT'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/web_pixels/style.css">
    <link rel="shortcut icon" href="<?php $file; ?>/SAM/assets/images/Logo_Tigo.svg">
    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/navbar/styleNavBar.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <title>Tabla de TTPs</title>
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

        td.details-control {
            background: url('../../../assets/images/details_open.png') no-repeat center center;
            cursor: pointer;
        }

        tr.details td.details-control {
            background: url('../../../assets/images/details_close.png') no-repeat center center;
        }

        .progress-row {
            background-color: #F8C471 !important;
        }

        .center-table {
            display: flex;
            justify-content: center;
        }
    </style>
</head>

<body>
    <?php require('../../../php/components/navbar.php') ?>

    <!-- Load Modal -->
    <div id="modal" class="modal modal-backdrop.show">
        <div id="modal-content" class="modal-content">
            <img src="../../../assets/images/load.gif" alt="">
            <p>Espere por favor...</p>
        </div>
    </div>
    <div class="center-table">
        <div class="container-table mt-10" style="width:95%">
            <table id="tabla-ttp" class="display" style="width:100%">
                <center>
                    <h3>TIQUETES TÉCNICOS PROGRAMADOS</h3>
                </center>
                <thead>
                    <tr>
                        <th></th>
                        <th>TTP</th>
                        <th>Estado</th>
                        <th>Indisponibilidad</th>
                        <th>FechaInicio</th>
                        <th>FechaFin</th>
                        <th>Categoria</th>
                        <th>Ciudad</th>
                        <th>Zona Afectada</th>
                        <th>Item Principal</th>
                        <th>Items Total</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    <script src="../../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script src="../../../script/helpers/tabla_ttps.js"></script>
</body>

</html>