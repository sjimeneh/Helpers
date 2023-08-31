let inputArponTTP = document.getElementById("arpon_en_ttp");

inputArponTTP.addEventListener("keydown", async (event) => {

  if (event.key === "Enter") {
    let content_arpones_ttps = document.getElementById("content_arpones_en_ttp");
    event.preventDefault();
    content_arpones_ttps.innerHTML = "";
    document.getElementById("arpones_ttps").innerHTML = "";

    let arpon = event.target.value;

    arpon = arpon.trim();

    if (arpon.length === 8 && arpon.startsWith("11")) {
      return Swal.fire(
        "¡Error!",
        `Analista, tenga en cuenta que en esta sección solo puede consultar el número del Nodo o Arpón.
        Si desea consultar la información del Tiquete, cambie de Pestaña a TIQUETES - NODOS`,
        "error"
      );
    }

    openModal();

    let promesaArpon = await fetch(
      `http://htc5cg6021v3q:3000/api/arpones/${arpon}`
    );
    let datos = await promesaArpon.json();

    closeModal();

    if (datos.length === 0) {
      return Swal.fire(
        "Respuesta!",
        `En el momento no hay TTPs relacionados a este Arpon / Nodo`,
        "info"
      );
    }

    let texto = datos.map((registro) => {
      return `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        Arpon / Nodo <strong>${arpon}</strong> Posiblemente Asociado al TTP  <strong><a href="${
        registro.url_servicedesk
      }" target="_blank">${
        registro.TTP
      }</a></strong> - Fecha de Inicio = <strong>${new Date(registro.FechaInicio).toISOString().replace("T", " ").slice(0, 19)}</strong> - Estado = <strong>${registro.Estado}</strong> - Fecha Fin = <strong>${new Date(registro.FechaFin).toISOString().replace("T", " ").slice(0, 19)}</strong> - 
      Item Principal = <strong>${registro.Item_principal}</strong> - Categoría = <strong>${registro.Categoria}</strong>
        <button type="button" class="btn-close text-xs text-success" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    });

    document.getElementById("arpones_ttps").innerHTML = datos.length;
    content_arpones_ttps.innerHTML = texto;
  }
});
