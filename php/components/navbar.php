<?php
$url_home = "http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/home.php";
$url_scheduler = "http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/scheduler/scheduler.php";
$url_logout = "http://htc5cg6021v3q.epmtelco.com.co/SAM/php/components/DestroySession.php";
?>

<nav class="nav-menu" id="nav-menu">
  <div class="nav-main">
    <div class="logo-nav-main"><?php echo $_SESSION['username'] ?> <i class="bi bi-person-vcard-fill"></i></div>
    <ul class="nav-links-nav">
      <ul class="nav-link-menu"><a href="<?php echo $url_home ?>">Inicio</a></ul>
      <li class="nav-link-menu dropdown">Calendario <i class="bi bi-chevron-compact-down"></i>
        <ul class="dropdown-list">
          <h5>Gestion De Turno</h5>
          <li class="nav-link-menu margin-menu-nav"><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/scheduler/scheduler.php">Turnos</a>
          <li class="nav-link-menu margin-menu-nav"><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/scheduler/dashboard.php">DashBoard</a>
          <li class="nav-link-menu margin-menu-nav"><a href="">Cambio Turno</a>
        </ul>
      </li>
      <li class="nav-link-menu dropdown">Front-Office <i class="bi bi-chevron-compact-down"></i>
        <ul class="dropdown-list">
          <li class="nav-link-menu margin-menu-nav">
            <h5>Gestion De Tiquetes</h5>
            <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/tiquetes/Tiquetes.php">Consulta De Tiquetes</a></p>
            <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/tiquetes/tabla_ttps.php">Tabla De TTPs</a></p>
            <p><a href="#">Reprueba CPM</a></p>
            <!-- http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/Reprueba_NOUSAR.php -->
            <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/tiquetes/tiquetes_activos.php">TTs - TPs (Activos)</a></p>
      </li>

      <li class="nav-link-menu margin-menu-nav">
        <h5>OWS</h5>
        <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/ows/anillos_ows.php">TTs Anillos OWS (Activos)</a></p>
      </li>
      <li class="nav-link-menu margin-menu-nav">
        <h5>ELITE</h5>
        <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/elite/Elite.php">Consulta Ocupación Elite</a></p>
      </li>
      <li class="nav-link-menu margin-menu-nav">
        <h5>ETP</h5>
        <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/etp/ETP_NODOLAN.php">Consulta Ocupación ETP</a></p>
      </li>

      <li class="nav-link-menu margin-menu-nav">
        <h5>FILTRO</h5>
        <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/Filtro/municipios_sin_premisas_extendidas.php">Procesos</a></p>
      </li>
      <li class="nav-link-menu margin-menu-nav">
        <h5>Consultas Externas</h5>
        <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/consultas_externas/interrupciones_energia.php">Consulta Interrupción Energía</a></p>
      </li>
      <li class="nav-link-menu margin-menu-nav">
        <h5>Asignación Nacional</h5>
        <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/asignacion_nacional/index.php">Regionales</a></p>
      </li>
      <li class="nav-link-menu margin-menu-nav">
        <h5>Elementos De Red</h5>
        <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/elementos_de_red/comandos.php">Comandos</a></p>
        <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/elementos_de_red/conexion_nodos_rphy.php">Conexion Nodos RPHY</a></p>
      </li>
      <li class="nav-link-menu margin-menu-nav">
        <h5>Aplicaciones</h5>
        <p><a href="#">Rutas de Aplicaciones</a></p>
      </li>

    </ul>
    </li>
    <li class="nav-link-menu dropdown">Toco <i class="bi bi-chevron-compact-down"></i>
      <ul class="dropdown-list">
        <li class="nav-link-menu margin-menu-nav">
          <h5>Prueba</h5>
          <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/Helpers/asignacion_nacional/index.php">Regionales</a></p>
        </li>
      </ul>
    </li>
    <?php
    if ($_SESSION['roll'] == 1) {
      echo '
          <li class="nav-link-menu dropdown">Servicios <i class="bi bi-chevron-compact-down"></i>
          <ul class="dropdown-list">
              <li class="nav-link-menu margin-menu-nav">
              <h5>Administración</h5>
              <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/users/userIndex.php">Usuarios</a></p>
              <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/notices/NoticesIndex.php">Noticias</a></p>
              <p><a href="http://htc5cg6021v3q.epmtelco.com.co/SAM/pages/notices/NoticesIndex.php">Dash Analistas</a></p>
              
          </ul>';
    }
    ?>
    </ul>
  </div>

  <button class="btn btn-primary border-0 py-2 px-3 text-xs font-bold" type="button" onclick="Salir()" }>
    Salir
    <span class="pe-2">
      <i class="bi bi-box-arrow-left"></i>
    </span>
  </button>

</nav>

<script>
  function Salir() {
    window.location.replace('<?php echo $url_logout ?>')
  }
</script>