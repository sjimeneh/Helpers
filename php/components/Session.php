<?php
// Iniciar sesión
session_start();
// Verificar si el usuario ha iniciado sesión
if ($_SESSION['loggedin'] !== true) {
  // Si el usuario no ha iniciado sesión, redirigirlo a la página de inicio de sesión
  header('Location: http://htc5cg6021v3q.epmtelco.com.co/SAM/index.php');
  exit();
}
