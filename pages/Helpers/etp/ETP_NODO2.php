<?php
error_reporting(E_ERROR | E_PARSE); // Suprimir warnings, mostrar solo errores graves y errores de análisis
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
    <script src="https://cdn.jsdelivr.net/npm/jquery-table2excel@1.1.1/dist/jquery.table2excel.min.js"></script>
    <title>Consulta ETP</title>
    <style>
        #export-table-nodes-etp,
        #tabla-nodoss-etp {
            display: none;
        }

        .center-table {
            display: flex;
            justify-content: center;
        }

        .tab {
            display: none;
        }

        .tab.active {
            display: block;
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
    <?php require('../../../php/components/navbar2.php') ?>
    <!-- Load Modal -->
    <div id="modal" class="modal modal-backdrop.show">
        <div id="modal-content" class="modal-content">
            <img src="../../../assets/images/load.gif" alt="">
            <p>Espere por favor...</p>
        </div>
    </div>

    <div class="tabs nav-tabs nav-link">
        <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab1')">ETP</button>
        <!-- <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab2')">ETP</button>
        <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab3')">Prueba</button> -->
        <!-- <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab3')">Consulta Nodos Reiterativos</button> -->
    </div>

    <div id="tab1" class="tab active">
        <form id="form_consulta_etp" class="p-5 shadow-4 d-flex justify-content-center w-sm-full btn-square">
            <label for="input_consulta_etp_nodos" class="me-md-2">NODOS/MACS</label>
            <div class="form-group row w-64">
                <div class="col input-group input-group-sm input-group-inline shadow-none">
                    <span class="input-group-text pe-2 rounded-start-pill icon-searhc">
                        <i class="bi bi-search"></i>
                    </span>
                    <input type="text" id="input_consulta_etp_nodos" name="input_consulta_etp_nodos" class="form-control" placeholder="Buscar NODOS o MACS">
                </div>
            </div>
        </form>
        <div class="center-table">
            <div class="content-table mt-10" style="width:95%">
                <table id="tabla-nodoss-etp" class="display" style="width:100%">
                    <thead>
                        <tr>
                            <!-- <th></th> -->
                            <th>Servicio Id</th>
                            <th>Producto</th>
                            <th>Marca Equipo</th>
                            <th>Mac</th>
                            <th>Nodo</th>
                            <th>Amp</th>
                            <th>Tap</th>                           
                            <th>Direccion</th>
                            <th>Nodo_CATV</th>
                            <th>Barrio</th>
                            <th>Tipo Equipo</th>
                            <th>Ciudad</th>
                        </tr>
                    </thead>
                </table>
                <button id="export-table-nodes-etp" class="btn btn-primary">
                    <span class="pe-2">
                        <i class="bi bi-file-earmark-spreadsheet-fill"></i>
                    </span>
                    <span>Exportar</span>
                </button>
            </div>
        </div>
    </div>
    <div id="tab2" class="tab">
    </div>
    <div id="tab3" class="tab">
        <h1></h1>
    </div>
    <script>
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
    <script type="module" src="../../../script/helpers/EtpNodo.js"></script>
    <script src="../../../node_modules/xlsx/xlsx.js"></script>
    <!-- <script src="../../../node_modules/xlsx/xlsx.mjs"></script> -->
</body>

</html>