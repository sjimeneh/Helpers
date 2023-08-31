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
    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/web_pixels/style.css">
    <link rel="shortcut icon" href="<?php $file; ?>/SAM/assets/images/Logo_Tigo.svg">
    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/navbar/styleNavBar.css">
    <title>Noticias</title>
    <style>
        /* Estilos generales */

        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
            background-color: #fefefe;
            margin: 5% auto;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
            transform: translateY(-50px);
            opacity: 0;
            transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            transition: color 0.2s ease-in-out;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        /* Estilos específicos para el formulario */

        .btn-primary {
            background-color: #5e72e4;
            border-color: #5e72e4;
        }

        .form-control {
            display: block;
            width: 100%;
            height: calc(2.25rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 0.9rem;
            font-weight: 400;
            line-height: 1.6;
            color: #8898aa;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #cad1d7;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .form-control:focus {
            border-color: #5e72e4;
            box-shadow: 0 0 0 0.2rem rgba(94, 114, 228, 0.25);
        }

        .btn-primary:hover {
            background-color: #324cdd;
            border-color: #324cdd;
        }

        /* Animaciones */

        .modal {
            animation: fadeIn 0.2s ease-in-out forwards;
        }

        .modal-content {
            animation: slideIn 0.2s ease-in-out forwards;
        }

        .close:hover {
            color: #f44336;
        }

        @keyframes fadeIn {
            from {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }

        @keyframes slideIn {
            from {
                transform: translateY(-50px);
                opacity: 0
            }

            to {
                transform: translateY(0px);
                opacity: 1
            }
        }

        /* Animaciones para cerrar el modal */

        .modal.fade-out {
            animation: fadeOut 0.2s ease-in-out forwards;
        }

        .modal-content.slide-out {
            animation: slideOut 0.2s ease-in-out forwards;
        }

        @keyframes fadeOut {
            from {
                opacity: 1
            }

            to {
                opacity: 0
            }
        }

        @keyframes slideOut {
            from {
                transform: translateY(0px);
                opacity: 1
            }

            to {
                transform: translateY(-50px);
                opacity: 0
            }
        }
    </style>

</head>

<body>
    <?php require('../../php/components/navbar.php') ?>
    <div class="p-10 bg-surface-secondary">
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Notices</h6>
                    <button id="CreateNotice" class="btn d-inline-flex btn-sm btn-primary mx-1">
                        <span class="pe-2">
                            <i class="bi bi-info-square-fill"></i>
                        </span>
                        <span>Crear Noticia</span>
                    </button>
                </div>

                <div class="table-responsive">
                    <table id="table_notices" class="table table-hover table-nowrap">
                        <thead class="table-light">
                            <tr>
                                <th scope="col">Titulo</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Fecha Editado</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Noticia</h3>
            <form id="form_notice">
                <div class="form-group row  mt-5">
                    <div class="col">
                        <label for="title">Titulo</label>
                        <input type="text" id="title_notice" name="title" class="form-control">
                    </div>
                </div>
                <div class="form-group row  mt-5">
                    <div class="col">
                        <label for="description">Descripción</label>
                        <textarea id="description" name="description" class="form-control h-sm-48"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                <button id="send" class="btn btn-outline-primary mt-4">Enviar</button>
                </div>
            </form>
        </div>
    </div>


    <script src="../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script src="../../script/notices/noticesIndex.js"> </script>


</body>

</html>