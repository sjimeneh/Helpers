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
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <title>Helpers - Consulta Tiquetes</title>
</head>
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
</style>
</head>

<body>
    <?php require('../../../php/components/navbar.php') ?>

    <body>
        <!-- Load Modal -->
        <div id="modal" class="modal modal-backdrop.show">
            <div id="modal-content" class="modal-content">
                <img src="../../../assets/images/load.gif" alt="">
                <p>Espere por favor...</p>
            </div>
        </div>

        <div class="tabs nav-tabs nav-link">
            <!-- <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab1')">Tiquetes - Nodos</button> -->
            <!-- <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab2')">Arpon / Nodo en TTP</button> -->
            <!-- <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab3')">Tabla TTPs</button> -->
            <!-- <button class="tablinks btn btn-outline-primary" onclick="openTab(event, 'tab3')">Consulta Nodos Reiterativos</button> -->
        </div>


        <div id="tab1" class="tab active">
            <!-- justify-content-center -->
            <div class="d-flex flex-column align-items-center mt-2 bg-surface-secondary min-h-sm-screen">
                <form id="form_caida_parcial" class="p-5 shadow-4 d-flex justify-content-center w-sm-full">
                    <label for="tiquete_caida_parcial" class="me-md-2">Tiquete</label>
                    <div class="form-group row w-64">
                        <div class="col input-group input-group-sm input-group-inline shadow-none">
                            <span class="input-group-text pe-2 rounded-start-pill icon-searhc">
                                <i class="bi bi-search"></i>
                            </span>

                            <input type="text" id="tiquete_caida_parcial" name="tiquete_caida_parcial" class="form-control" placeholder="Buscar Tiquete">
                        </div>
                    </div>
                </form>
                <div id="content_description_nodo" class="mt-5 w-5/6 ">
                    <!-- Card stats -->
                    <div class="row g-6 mb-6 d-md-flex justify-content-md-center">
                        <div class="col-xl-auto col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Cantidad de Cables</span>
                                            <span class="h3 font-bold mb-0" id="valor_calbes">0</span>
                                        </div>
                                        <div class="col-auto">
                                            <!-- BackGround Aqui -->
                                            <div class="icon icon-shape bg-success text-white text-lg rounded-circle">
                                                <i class="bi bi-activity"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-auto col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Cantidad de Nodos</span>
                                            <span class="h3 font-bold mb-0" id="valor_nodos">0</span>
                                        </div>
                                        <div class="col-auto">
                                            <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                <i class="bi bi-triangle-half"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-auto col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Nodos Reincidentes</span>
                                            <span class="h3 font-bold mb-0" id="valor_reincidentes">0</span>
                                        </div>
                                        <div class="col-auto">
                                            <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                <i class="bi bi-clock-history"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-auto col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Nodos en TTPs</span>
                                            <span class="h3 font-bold mb-0" id="nodos_ttps">0</span>
                                        </div>
                                        <div class="col-auto">
                                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                <i class="bi bi-cone-striped"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-auto col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Urgencia</span>
                                            <span class="h5 font-bold mb-0" id="urgencia_tiquete"></span>
                                        </div>
                                        <div class="col-auto">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Impacto</span>
                                            <span class="h5 font-bold mb-0" id="impacto_tiquete"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="nodos_cables"></div>
                    <div id="nodos_reiterativos"></div>
                    <div id="nodos_en_ttp"></div>
                </div>
            </div>
        </div>
        </div>
        <div id="tab2" class="tab">
            <!-- justify-content-center -->
            <div class="d-flex flex-column align-items-center mt-2 bg-surface-secondary min-h-sm-screen">
                <form id="form_caida_parcial" class="p-5 shadow-4 d-flex justify-content-center w-sm-full">
                    <div class="form-group row w-64">
                        <div class="col input-group input-group-sm input-group-inline shadow-none">
                            <span class="input-group-text pe-2 rounded-start-pill icon-searhc">
                                <i class="bi bi-search"></i>
                            </span>
                            <input type="text" id="arpon_en_ttp" name="arpon_en_ttp" class="form-control" placeholder="Buscar Arpon / Nodo">
                        </div>
                    </div>
                </form>
                <div id="content_description_arpon" class="mt-5 w-5/6 ">
                    <!-- Card stats -->
                    <div class="row g-6 mb-6 d-md-flex justify-content-md-center">
                        <div class="col-xl-auto col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">Arpon / Nodo en TTPs</span>
                                            <span class="h3 font-bold mb-0" id="arpones_ttps">0</span>
                                        </div>
                                        <div class="col-auto">
                                            <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                <i class="bi bi-cone-striped"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div id="nodos_cables"></div>
                    <div id="nodos_reiterativos"></div> -->
                    <div id="content_arpones_en_ttp"></div>
                </div>
            </div>
        </div>
        </div>
        <div id="tab3" class="tab">
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
        <script src="../../../script/helpers/NodevsCables.js"></script>
        <script src="../../../script/helpers/Arpones.js"></script>
    </body>

</html>