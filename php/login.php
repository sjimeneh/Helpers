<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Aquí podrías valusernamear las credenciales del usuario contra una base de datos o algún otro mecanismo
$username = $_POST['username'];
$resultado = consultarUsuario($username);


if ($resultado[0] && $resultado[2] == '1') {
    session_start();
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    $_SESSION['roll'] = $resultado[1];
    header('Location: ../pages/home.php');
    exit;
} else {
    header("Location: ../index.php?auth=false");
    exit;
}


}else{
    header("Location: ../index.php");
    exit;
}


function consultarUsuario($username) {
     // Conexión a la base de datos
    // $host = $_ENV['DB_HOST_LINUX_HELPERS'];
    // $dbUsername = $_ENV['DB_USER_LINUX_HELPERS'];
    // $password = $_ENV['DB_PASS_LINUX_HELPERS'];
    // $database = $_ENV['DB_DATABASE_LINUX_HELPERS'];
   
    $host = '10.100.16.22';
    $dbUsername = 'atenea';
    $password = 'Colombia2023+--+';
    $database = 'HELPERS';

    $conn = mysqli_connect($host, $dbUsername, $password, $database);

    if (!$conn) {
        die("Conexión fallida: " . mysqli_connect_error());
    }

    // Consulta SQL para obtener la información del usuario
    $username = mysqli_real_escape_string($conn, $username);
    $sql = "SELECT * FROM employees WHERE username = '$username'";
    $resultado = mysqli_query($conn, $sql);

    // Verificar si hay resultados
    if (mysqli_num_rows($resultado) > 0) {
        if ($fila = mysqli_fetch_assoc($resultado)) {
            $roll = $fila['RolUser'];
            $active = $fila['Active'];
        } else {
            $roll = null;
            $active = null;
        }
        mysqli_close($conn);
        return [true,$roll,$active];
    } else {
        // Cerrar la conexión a la base de datos
        mysqli_close($conn);
        return [false,null,null];
    }
}
