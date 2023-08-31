<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DashBoard Scheduler</title>
    <link rel="stylesheet" href="../../css/navbar/styleNavBar.css">
    <link rel="shortcut icon" href="<?php $file; ?>/SAM/assets/images/Logo_Tigo.svg">
    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/web_pixels/style.css">
</head>

<body>
    <?php require("../../php/components/Session.php"); ?>
    <?php require("../../php/components/navbar.php"); ?>
    <div class="container-filter w-screem d-sm-flex justify-content-sm-center align-items-sm-center mt-6">
        <div class="form-group row">
            <div class="col">
                <label for="fechaInicio">Fecha Inicio:</label>
                <input type="date" id="fechaInicio" name="fechaInicio" class="form-control">
            </div>
            <div class="col">
                <label for="fechaFin">Fecha Fin:</label>
                <input type="date" id="fechaFin" name="fechaFin" class="form-control">
            </div>
            <div class="col">
                <button class="btn btn-primary">Filtrar</button>
            </div>
        </div>
    </div>

    <div class="content-cards">
        <!-- Primera linea de Cartas -->
        <div class="row g-6 mb-6 mt-6 w-screen d-sm-flex justify-content-sm-center">
            <div class="col-xl-3 col-sm-3 col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Días a Laborar</span>
                                <span class="h3 font-bold mb-0">0</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                    <i class="bi bi-calendar3"></i>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mt-2 mb-0 text-sm">
                            <span class="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                <i class="bi bi-arrow-up me-1"></i>10%
                            </span>
                            <span class="text-nowrap text-xs text-muted">Laborado</span>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-3 col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <span class="h6 font-semibold text-muted text-sm d-block mb-2">Días a Descansar</span>
                                <span class="h3 font-bold mb-0">0</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-success text-white text-lg rounded-circle">
                                    <i class="bi bi-calendar-heart"></i>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mt-2 mb-0 text-sm">
                            <span class="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                <i class="bi bi-arrow-up me-1"></i>10%
                            </span>
                            <span class="text-nowrap text-xs text-muted">Laborado</span>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Card stats -->
        <div class="row g-6 mb-6 w-screen d-sm-flex justify-content-sm-center">
            <div class="col-xl-3 col-sm-3 col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <span class="h6 font-semibold text-muted text-sm d-block mb-2">Horas Diurnas</span>
                                <span class="h3 font-bold mb-0">0</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                    <i class="bi bi-clock-history"></i>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mt-2 mb-0 text-sm">
                            <span class="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                <i class="bi bi-arrow-up me-1"></i>10%
                            </span>
                            <span class="text-nowrap text-xs text-muted">Laborado</span>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-3 col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <span class="h6 font-semibold text-muted text-sm d-block mb-2">Horas Nocturas</span>
                                <span class="h3 font-bold mb-0">0</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                    <i class="bi bi-clock-history"></i>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mt-2 mb-0 text-sm">
                            <span class="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                <i class="bi bi-arrow-up me-1"></i>10%
                            </span>
                            <span class="text-nowrap text-xs text-muted">Laborado</span>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-3 col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <span class="h6 font-semibold text-muted text-sm d-block mb-2">Dominicales</span>
                                <span class="h3 font-bold mb-0">0</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-danger text-white text-lg rounded-circle">
                                    <i class="bi bi-calendar2-day"></i>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mt-2 mb-0 text-sm">
                            <span class="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                <i class="bi bi-arrow-up me-1"></i>10%
                            </span>
                            <span class="text-nowrap text-xs text-muted">Laborado</span>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-3 col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <span class="h6 font-semibold text-muted text-sm d-block mb-2">Festivos</span>
                                <span class="h3 font-bold mb-0">0</span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-danger text-white text-lg rounded-circle">
                                    <i class="bi bi-calendar2-day"></i>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mt-2 mb-0 text-sm">
                            <span class="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                <i class="bi bi-arrow-up me-1"></i>10%
                            </span>
                            <span class="text-nowrap text-xs text-muted">Laborado</span>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>