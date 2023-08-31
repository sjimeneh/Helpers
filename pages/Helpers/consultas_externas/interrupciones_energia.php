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

    <title>Fallas Masivas</title>

    <style>
        .tab {
            display: none;
        }

        .tab.active {
            display: block;
        }

        input,
        select {
            height: 2rem;
        }

        .form-control {
            padding: 0;
            font-size: 1rem;
        }

        .icon-searhc {
            height: 2rem;
        }

        #spreadsheet_sheet_panel {
            height: 433px;
        }

        #content_sheet_caida_parcial {
            width: 100%;
        }

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

    <body>
        <div class="tabs">
            <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab1')">AIR_E</button>
            <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab2')">AFINIA</button>
            <!-- <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab3')">COBRE</button> -->
        </div>

        <div id="tab1" class="tab active">
            <div class="center-table">
                <div class="container-table mt-10" style="width:95%">
                    <table id="tabla_energia_aire" class="display" style="width:100%">
                        <center>
                            <h3>INTERRUPCIONES DE ENERGÍA AIR-E</h3>
                        </center>
                        <thead>
                            <tr>
                                <th></th>
                                <th>MUNICIPIO</th>
                                <th>CIRCUITO</th>
                                <th>PUNTO_APERTURA</th>
                                <th>FECHA_PROGRAMADA</th>
                                <th>HORA_INICIO</th>
                                <th>HORA_FIN</th>
                                <th>MOTIVO</th>
                                <th>SECTORES_AFECTADOS</th>
                                <th>UNIDAD_EJECUTANTE</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        
        <div id="tab2" class="tab">
            <div class="center-table">
                <div class="container-table mt-10" style="width:95%">
                    <table id="tabla_energia_caribemar" class="display" style="width:100%">
                        <center>
                            <h3>INTERRUPCIONES DE ENERGÍA AFINIA</h3>
                        </center>
                        <thead>
                            <tr>
                                <th></th>
                                <th>DEPARTAMENTO</th>
                                <th>MUNICIPIO</th>
                                <th>ZONA</th>
                                <th>SECTOR</th>
                                <th>SUBESTACION</th>
                                <th>TRABAJOS</th>
                                <th>SECTORES</th>
                                <th>AREA_EJECUTANTE</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        <div id="tab3" class="tab">
        </div>
        </div>

        <script>
            //Páginación
            function openTab(event, tabName) {
                let i, tabcontent, tablinks;

                // Ocultar todas las pestañas
                tabcontent = document.getElementsByClassName("tab");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].classList.remove("active");
                }

                // Desactivar todos los botones de pestañas
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].classList.remove("active");
                }

                // Mostrar la pestaña actual y activar su botón correspondiente
                document.getElementById(tabName).classList.add("active");
                event.currentTarget.classList.add("active");
            }
        </script>
        <script src="../../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
        <script src="../../../script/helpers/interrupcion_energia.js"></script>
    </body>

</html>