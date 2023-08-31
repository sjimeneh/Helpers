export function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

export function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Ocultar la ventana modal cuando la promesa se resuelve
}

// Función para recargar la página
export function recargarPagina() {
  location.reload();
}

//Páginación
export function openTab(event, tabName) {
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

export function Tostada(mensaje, icono) {
  const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
  });

  Toast.fire({
      icon: icono,
      title: mensaje,
  });
}

export function obtenerFechaActual() {
  const fecha = new Date();
  
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, '0');
  const day = String(fecha.getDate()).padStart(2, '0');
  const hours = String(fecha.getHours()).padStart(2, '0');
  const minutes = String(fecha.getMinutes()).padStart(2, '0');
  const seconds = String(fecha.getSeconds()).padStart(2, '0');
  
  const formatoFecha = `${year}-${month}-${day}_${hours}${minutes}${seconds}`;
  
  return formatoFecha;
}