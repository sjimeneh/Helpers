let InputTiqueteCaidaParcial = document.getElementById("tiquete_caida_parcial");

InputTiqueteCaidaParcial.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        let tiquete = event.target.value;

        tiquete = tiquete.trim();

        if (tiquete.length < 8) {
            return Tostada("El Campo Tiquete No tiene un formato Valido", "error");
        }

        openModal();

        let response = await fetch(`http://htc5cg6021v3q:3000/api/tiquete/${tiquete}`);


        if (response.status === 200) {
            datos = await response.json();
            closeModal();
            // Aquí puedes realizar las operaciones con los datos obtenidos
          } else {
            closeModal();
            return Tostada("Error en la consulta", "error");
            // La respuesta no fue 200, puedes manejar el error de acuerdo a tus necesidades
          }

        if (datos.length === 0) {
            return Tostada("El Tiquete no Exite", "info");
        }

        if (datos.nodos.length === 0) {
            Swal.fire(
                "¡Error!",
                `Este Tiquete No Contiene Nodos en su Descripción\n o No existen en la base de datos`,
                "error"
            );
        }

        if (datos.nodos.length > 0) {
            Swal.fire(
                "¡Advertencia!",
                `Este Tiquete Contiene:<br>
        <b>${datos.infoCables.length}</b> Cables
        <br>
        <b>${datos.nodos.length}</b> Nodos
        <br>
        <b>[${datos.nodos.join("-")}]</b>
        <br>
        <br>
        <b>${datos.infoNodosReincidente.length
                }</b> Registros de Nodos Reincidentes en las últimas 72 Horas
        <br><br>
        <b>${datos.TTPsCoincidentes.length}</b> Registros de Nodos en TTPs
        `,
                "warning"
            );
        }

        let texto = datos.infoCables.map((dato) => {
            return dato.Cables;
        });

        // Asignar Valores a las Tarjetas
        // nodosVsCables.innerText
        document.getElementById("valor_calbes").innerText = datos.infoCables.length;
        document.getElementById("valor_nodos").innerText = datos.nodos.length;
        document.getElementById("valor_reincidentes").innerText = datos.infoNodosReincidente.length;
        document.getElementById("nodos_ttps").innerText =datos.TTPsCoincidentes.length;
        document.getElementById("urgencia_tiquete").innerText = datos.Urgencia;
        document.getElementById("impacto_tiquete").innerText = datos.Impacto;

        const nodosVsCables = document.getElementById("nodos_cables");
        const nodosReiterativos = document.getElementById("nodos_reiterativos");
        const nodosenttp = document.getElementById("nodos_en_ttp");

        nodosenttp.innerHTML = "";
        nodosReiterativos.innerHTML = "";

        nodosVsCables.innerHTML = `
    <label>Consulta de Cables Vs Nodos</label>
    <textarea class="form-control" rows="6">${texto.join("\n")}</textarea>`;

        if (datos.infoNodosReincidente.length) {
            let textoNodosReterativos = datos.infoNodosReincidente.map((dato) => {
                return `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    Nodos = <strong>${dato.nodos_reincidentes.join("-")}</strong> - Tiquete = <strong><a href="${dato.url_servicedesk}" target="_blank">${dato.tiquete}
                    </a></strong> - Fecha/Hora Inicio = <strong>${dato.fecha_hora_apertura}</strong>
                    - Estado del Tiquete = <strong>${dato.estado}</strong>
                    - Urgencia = <strong>${dato.Urgencia}</strong> - Impacto = <strong>${dato.Impacto}</strong>
                    - Registrado por = ${dato.analista_last_mod_by !== null && dato.analista_last_mod_by !== undefined ? dato.analista_last_mod_by : "Pendiente Usuario"}
                    <button type="button" class="btn-close text-xs text-success" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                `;
            });

            nodosReiterativos.innerHTML = `
            <label class="mt-4">Consulta de Nodos Reiterativos</label>
            ${textoNodosReterativos.join("\n")}`;
        }

        if (datos.TTPsCoincidentes.length) {
            let texto = datos.TTPsCoincidentes.map((registro) => {
                return `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            Nodos <strong>${registro.nodo_asociado.join("-")}</strong> Posiblemente Asociado al TTP  <strong><a href="${registro.url_servicedesk
                    }" target="_blank">${registro.TTP}</a></strong> 
                    - Fecha de Inicio = <strong>${new Date(registro.FechaInicio).toISOString().replace("T", " ").slice(0, 19)}</strong> 
                    - Estado = <strong>${registro.Estado}</strong> 
                    - Fecha Fin =  <strong>${new Date(registro.FechaFin).toISOString().replace("T", " ").slice(0, 19)}</strong> 
                    - Item Principal = <strong>${registro.Item_principal}</strong>
                    - Zona Afectada = <strong>${registro.zona_afectada}</strong>
            <button type="button" class="btn-close text-xs text-success" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
            });

            nodosenttp.innerHTML = `
                <label class="mt-4">Consulta de Nodos en TTPs</label>
                ${texto.join("\n")}
            `;
        }
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

function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Ocultar la ventana modal cuando la promesa se resuelve
}
