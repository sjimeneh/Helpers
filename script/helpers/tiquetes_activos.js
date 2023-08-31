function format(d) {
    return (
      "<b>Resumen: </b>" +
      d.RESUMEN +
      "<br>" +
      "<b>Analista: </b>" +
      d.MODIFICADO_POR +
      "<br>"+
      "<b>Urgencia: </b>"+
      d.URGENCIA+
      "<br>"+
      "<b>Impacto: </b>"+
      d.IMPACTO
    );
  }
  
  async function consultarTTPs() {
    let response = await fetch("http://htc5cg6021v3q:3000/api/tiquetesActivos");
    let data = await response.json();
    return data;
  }
  
  async function llenarTabla() {
    openModal();
    let data_server = await consultarTTPs();
    console.log(data_server);
    closeModal();
  
    if (data_server.length === 0) {
      return Swal.fire(
        "¡Error!",
        `Error en la Consulta de TTPS. Problemas con el servidor`,
        "error"
      );
    }
  
    var dt = $("#tabla-tiquetes_activos").DataTable({
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
          data: "TIQUETE",
          render: function (data, type, row) {
            if (type === "display") {
              // Aquí puedes crear el enlace utilizando el valor de 'link_servicedesk'
              return (
                '<b><a href="' +
                row.URL_SERVICEDESK +
                '" target="_blank">' +
                data +
                "</a></b>"
              );
            }
            return data;
          },
        },
        {
          data: "ESTADO",
          render: function (data, type, row) {
              return "<b>" + data + "</b>";
          },
        },
        {
          data: "ELEMENTO_PRINCIPAL",
        },
        {
            data: "HOST_NAME",
          },
        {
          data: "FECHA_HORA_APERTURA",
          render: function (data, type, row) {
            console.log(row.FECHA_HORA_INICIO);
            return row.FECHA_HORA_APERTURA.replace("T", " ").slice(0, 19);
          },
        },
        {
          data: "ULTIMA_MODIFICACION",
          render: function (data, type, row) {
            return row.ULTIMA_MODIFICACION.replace("T", " ").slice(0, 19);
          },
        },
        {
          data: "DESCRIPCION",
        },
        {
          data: "GRUPO_ANALISTA",
        },
        {
          data: "TIPO",
        },
      ],
      oLanguage: {
        sLengthMenu: "Mostrar _MENU_ registros por página",
        sSearch: "Buscar:",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        oPaginate: {
          sFirst: "Primero",
          sLast: "Último",
          sNext: "Siguiente",
          sPrevious: "Anterior"
      },
      sInfo: "Mostrando página _PAGE_ de _PAGES_",
      },
      rowCallback: function (row, data) {
        if (data.Estado === "Abierto") {
          $(row).addClass("progress-row"); // Agrega la clase CSS para cambiar el color de fondo
        }
      },
    });
  
    // Array to track the ids of the details displayed rows
    var detailRows = [];
  
    $("#tabla-tiquetes_activos tbody").on("click", "tr td.details-control", function () {
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
    });
  
    // On each draw, loop over the `detailRows` array and show any child rows
    dt.on("draw", function () {
      detailRows.forEach(function (id, i) {
        $("#" + id + " td.details-control").trigger("click");
      });
    });
  
      // Obtener la referencia a la tabla por su ID o clase
      var tabla = $("#tabla-tiquetes_activos");
  
      // Establecer el ancho y alto de la tabla
      tabla.css({
        "width": "100%",
        "height": "100%"
      });
  
      $('tabla-tiquetes_activos').find('th, td').css('width', '100px');
  
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
    llenarTabla();
  
  // Llamada a la función cada 15 minutos (900,000 milisegundos)
  setInterval(recargarPagina, 900000);
  
  });
  