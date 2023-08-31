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
    <title>Crear Usuarios</title>
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
                    <h6 class="card-title">Employees</h6>
                    <!-- <a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/users/usercreate.php" class="btn d-inline-flex btn-sm btn-primary mx-1">
                        <span class="pe-2">
                            <i class="bi bi-person-fill-add"></i>
                        </span>
                        <span>Crear Usuario</span>
                    </a> -->
                    <button id="CreateUser" class="btn d-inline-flex btn-sm btn-primary mx-1">
                        <span class="pe-2">
                            <i class="bi bi-person-fill-add"></i>
                        </span>
                        <span>Crear Usuario</span>
                    </button>
                </div>

                <div class="table-responsive">
                    <table id="tableUser" class="table table-hover table-nowrap">
                        <thead class="table-light">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Departamento</th>
                                <th scope="col">Grupo</th>
                                <th scope="col">Designación</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Activo</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- <tr>
                                <td data-label="Job Title">
                                    <p class="text-heading font-semibold" href="#">
                                        Samuel Jimenez
                                    </p>
                                </td>
                                <td data-label="Grupo">
                                    <span>Web Designer</span>
                                </td>
                                <td data-label="Usuario">
                                    <p class="text-current">sjimeneh</p>
                                </td>
                                <td data-label="Departamento">
                                    <p class="text-current">FrontOffice</p>
                                </td>
                                <td data-label="Designación">
                                    <span class="badge bg-soft-success text-success">Analista L1</span>
                                </td>
                                <td data-label="Roll">
                                    <p class="text-current">1</a>
                                </td>
                                <td data-label="Activo">
                                    <p class="text-current">1</a>
                                </td>
                                <td>
                                    <button class="btn btn-outline-primary">
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button class="btn btn-outline-danger" value="1" onclick="DeleteUser(this)">
                                        Eliminar
                                    </button>
                                </td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="d-flex flex-column align-items-center justify-content-center">
                <h1 style="border-bottom: 1px bold;">Formulario de registro</h1>
                <form id="formCreate" class="mt-5 p-5 shadow-4">
                    <div class="form-group row">
                        <div class="col">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" class="form-control">
                        </div>
                        <div class="col">
                            <label for="apellido">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <label for="usuario">Usuario:</label>
                            <input type="text" id="usuario" name="usuario" class="form-control">
                        </div>
                        <div class="col">
                            <label for="designacion">Designación:</label>
                            <input type="text" id="designacion" name="designacion" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <label for="correo">Correo:</label>
                            <input type="text" id="correo" name="correo" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row mt-5">
                        <div class="col">
                            <label for="departamento">Departamento:</label>
                            <select id="departamento" name="departamento" class="form-control">
                                <option value="">Selecciona un Departamento</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="grupo">Grupo:</label>
                            <select id="grupo" name="grupo" class="form-control">
                                <option value="">Selecciona un Grupo</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row mt-5">
                        <div class="col">
                            <label for="rol">Rol de Usuario:</label>
                            <select id="rol" name="rol" class="form-control">
                                <option value="">Selecciona un Rol</option>
                                <option value="2">Solo Lectura</option>
                                <option value="1">Puede Editar</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="activo">Activo:</label>
                            <select id="activo" name="activo" class="form-control">
                                <option value="">Activar Usuario</option>
                                <option value="1">SI</option>
                                <option value="2">NO</option>
                            </select>
                        </div>

                    </div>
                    <div class="form-group row">
                        <button type="submit" class="btn btn-primary mt-5">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script src="../../script/users/userIndex.js"></script>
    <script src="../../script/users/userCreate.js"></script>
    <script src="../../script/users/userEdit.js"></script>
</body>

</html>