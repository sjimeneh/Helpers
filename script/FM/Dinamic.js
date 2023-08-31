import { Excel } from "./SpreadSheets/SpreadSheet.js";

let InputTiqueteCaidaParcial = document.getElementById("tiquete_caida_parcial");

InputTiqueteCaidaParcial.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    console.log("Esntro");
    event.preventDefault();

    let tiquete = event.target.value;

    if (tiquete.length < 8) {
      return Tostada("El Campo Tiquete No tiene un formato Valido", "error");
    }

    let response = await fetch(`http://htc5cg6021v3q:3000/api/tiquete/${tiquete}`);

    let datos = await response.json();

    if (datos.length === 0) {
      return Tostada("El Tiquete no Exite", "info");
    }

    if(datos.nodos.length>1){
      Swal.fire(
        '¡Advertencia!',
        `Este Tiquete Contiene <b>${datos.nodos.length}</b> Nodos en Total<br><br><b>[${datos.nodos.join("-")}]</b>`,
        'warning'
      )
    }

    document.getElementById("content_sheet_caida_parcial").innerHTML = `
    <div class="control-section">
      <div id="spreadsheet"></div>
    </div>
    `;

    Excel(datos);
  }
});

function Tostada(mensaje, icono) {
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
