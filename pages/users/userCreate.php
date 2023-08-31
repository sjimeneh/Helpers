<?php
require("../../php/components/Session.php");
$file = $_SERVER['DOCUMENT_ROOT'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/web_pixels/style.css">
    <link rel="shortcut icon" href="<?php $file; ?>/SAM/assets/images/Logo_Tigo.svg">
    <link rel="stylesheet" href="<?php $file; ?>/SAM/css/navbar/styleNavBar.css">

    <title>Administrar Usuarios</title>
</head>

<body>
    <?php require('../../php/components/navbar.php') ?>
    <div class="d-flex flex-column align-items-center justify-content-center mt-10 ">
        <h1>Formulario de registro</h1>
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
    <script src="../../node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script src="../../script/users/userCreate.js"></script>
</body>

</html>