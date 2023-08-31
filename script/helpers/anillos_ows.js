async function ConsultarAnillos() {
  openModal();
  let datos = null;
  let respuesta = await fetch(`http://htc5cg6021v3q:3000/api/anillosows`);

  if (respuesta.status == 200) {
    datos = await respuesta.json();
    console.log(datos);
  }

  closeModal();
  return datos;
}

function format(d) {
  return (
    "<b>Region: </b>" +
    d.Region +
    "<br>" +
    "<b>Departamento: </b>" +
    d.Departamento +
    "<br>" +
    "<b>Ciudad: </b>" +
    d.Ciudad +
    "<br>" +
    "<b>Categoria: </b>" +
    d.Categoria +
    "<br>" +
    "<b>SubCategoria: </b>" +
    d.Subcategoria
  );
}

async function llenarTablaAnillosOws() {
  openModal();
  let data_server = await ConsultarAnillos();
  closeModal();

  if (data_server.length === 0) {
    return Swal.fire(
      "¡Error!",
      `Error en la Consulta de TTPS. Problemas con el servidor`,
      "error"
    );
  }

  var dt = $("#tabla-anillos-ows").DataTable({
    // processing: true,
    // serverSide: true,
    // ajax: 'http://htc5cg6021v3q:3000/api/ttps',
    data: data_server.data,
    pageLength: 7,
    columns: [
      {
        class: "details-control",
        orderable: false,
        data: null,
        defaultContent: "",
      },
      {
        data: "IncidenteTT",
      },
      {
        data: "FechaCreacion",
      },
      {
        data: "EstadoWO",
      },
      {
        data: "Anillo",
      },
      {
        data: "Categoria",
      },
      {
        data: "Subcategoria",
      },
      {
        data: "Descripcion",
      },
    ],
    oLanguage: {
      sLengthMenu: "Mostrar _MENU_ registros por página",
      sSearch: "Buscar Anillo: ",
      sZeroRecords: "No se encontraron resultados",
      sEmptyTable: "Ningún dato disponible en esta tabla",
      oPaginate: {
        sFirst: "Primero",
        sLast: "Último",
        sNext: "Siguiente",
        sPrevious: "Anterior",
      },
      sInfo: "Mostrando página _PAGE_ de _PAGES_",
    },
    rowCallback: function (row, data) {
      // if (data.Estado === "Implementacion en Progreso") {
      //   $(row).addClass("progress-row"); // Agrega la clase CSS para cambiar el color de fondo
      // }
      // if (data.Estado === "Item Principal") {
      //   $(row).css({
      //     "progress-row":""
      //   }); // Agrega la clase CSS para cambiar el color de fondo
      // }
    },
  });

  // Array to track the ids of the details displayed rows
  var detailRows = [];

  $("#tabla-anillos-ows tbody").on(
    "click",
    "tr td.details-control",
    function () {
      var tr = $(this).closest("tr");
      var row = dt.row(tr);
      var idx = detailRows.indexOf(tr.attr("id"));

      if (row.child.isShown()) {
        tr.removeClass("details");
        row.child.hide();

        // Remove from the 'open' array
        detailRows.splice(idx, 1);
      } else {
        tr.addClass("details");
        row.child(format(row.data())).show();

        // Add to the 'open' array
        if (idx === -1) {
          detailRows.push(tr.attr("id"));
        }
      }
    }
  );

  // On each draw, loop over the `detailRows` array and show any child rows
  dt.on("draw", function () {
    detailRows.forEach(function (id, i) {
      $("#" + id + " td.details-control").trigger("click");
    });
  });

  // Obtener la referencia a la tabla por su ID o clase
  var tabla = $("#tabla-anillos-ows");

  // Establecer el ancho y alto de la tabla
  tabla.css({
    width: "100%",
    height: "100%",
  });

  $("tabla-anillos-ows").find("th, td").css("width", "100px");
}

function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Ocultar la ventana modal cuando la promesa se resuelve
}

// Función para recargar la página
function recargarPagina() {
  location.reload();
}

$(document).ready(function () {
  llenarTablaAnillosOws();

  // Llamada a la función cada 15 minutos (900,000 milisegundos)
  setInterval(recargarPagina, 900000);
});
