<?php 
    //Implemtentando sesiones
    session_start();
        session_destroy(); // Destruir la sesión
        // unset($_SESSION['mi_variable']);
        header('Location: ../../index.php');
        exit;
?>