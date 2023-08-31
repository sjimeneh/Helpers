<?php
session_start();
$file = $_SERVER['DOCUMENT_ROOT'];

if (isset($_SESSION['username'])) {
	header("Location: ./pages/home.php");
	exit;
}


?>

<!DOCTYPE html>
<html lang="es">

<head>
	<title>Iniciar sesión</title>
	<link rel="stylesheet" type="text/css" href="./css/login/style_login.css">
	<link rel="shortcut icon" href="assets/images/Logo_Tigo.svg">
	<link rel="stylesheet" href="<?php $file; ?>/SAM/css/navbar/styleNavBar.css">
</head>

<body>
	<div class="content">
		<div class="login-box">
			<img class="login-tigo" src="assets/images/Logo_Tigo.svg" alt="TIGO">
			<h3>F R O N T - O F F I C E</h3>
			<form id="login-form" action="./php/login.php" method="POST">
				<div class="user-box">
					<input type="text" id="username" name="username" required>
					<label>Usuario de Red</label>
				</div>
				<div class="user-box">
					<input type="password" id="password" name="password" required>
					<label>Contraseña</label>
				</div>
				<input type="submit" value="Iniciar sesión">
			</form>
		</div>
	</div>
	<script src="./node_modules/sweetalert2/dist/sweetalert2.all.min.js"></script>
	<script src="./script/auth/auth.js"></script>
	<?php
	if (isset($_GET['auth'])) {
	?>
		<script>
			Swal.fire(
				'Error',
				'Tus Credenciales son correctas, pero no cuentas con permisos para usar la herramienta',
				'error'
			);
		</script>
	<?php
	}
	?>
</body>

</html>