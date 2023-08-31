import {
    openModal,
    closeModal,
    recargarPagina,
    Tostada,
    obtenerFechaActual,
  } from "./Functiones.js";
  
  let InputTiqueteCaidaParcial = document.getElementById(
    "input_consulta_etp_nodos"
  );
  
  let contendorTabla = document.getElementById("content-table");
  
  async function consultaETP2(nodo) {
    openModal();
    let datos = null;
    let datos2 = null;
    let respuesta = await fetch(`http://hp315505:2020/api/parra3/${nodo}`);
  
    if (respuesta.status == 200) {
      datos = await respuesta.json();
      datos2 = datos
    }
  
    closeModal();
    return datos2;
  }
  
  function format(d) {
    console.log(d);
    return (
      "<b>Descripción: </b>" +
      d.Descripcion +
      "<br>" +
      "<b>Items de Configuración: </b></b>" +
      d.items +
      "<br>"
    );
  }
  
  async function llenarTablaETP2(datos) {
    document.getElementById("tabla-nodoss-etp").style.display = "block";
    document.getElementById("export-table-nodes-etp").style.display = "block";
  
    var dt = $("#tabla-nodoss-etp").DataTable({
      data: datos,
      pageLength: 7,
      columns: [
        {
          data: "IDSERVICIO",
        },
        {
          data: "PRODUCTO",
        },
        {
          data: "MARCA",
        },
        {
          data: "MAC",
        },
        {
          data: "NODO",
        },
        {
          data: "AMP",
        },
        {
          data: "TAP",
        },
        {
            data: "DIRECCION",
          },
          {
            data: "NODO_CATV",
          },          
          {
            data: "BARRIO",
          },
          {
            data: "TIPO",
          },
          {
            data: "MUNICIPIO",
          },
      ],
      oLanguage: {
        sLengthMenu: "Mostrar _MENU_ registros por página",
        sSearch: "Buscar: ",
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
    });
  
    // Obtener la referencia a la tabla por su ID o clase
    var tabla = $("#tabla-nodoss-etp");
  
    // Establecer el ancho y alto de la tabla
    tabla.css({
      width: "100%",
      height: "100%",
    });
  
    $("tabla-nodoss-etp").find("th, td").css("width", "100px");
  }
  
  async function GenerarExcel(datos) {
    // Crear una hoja de cálculo
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(datos);
  
    // Agregar la hoja de cálculo al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");
  
    // Guardar el libro como archivo Excel
    const excelFilePath = `Nodoss_Etp_${obtenerFechaActual()}.xlsx`;
    XLSX.writeFile(workbook, excelFilePath);
  
    console.log("Archivo Excel generado con éxito.");
    // Llamada a la función cada 10 segundos (10000 milisegundos)
    setInterval(recargarPagina, 10000);
  }
  
  InputTiqueteCaidaParcial.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      //  contendorTabla.innerHTML = '';
  
      let dato_input = event.target.value;
  
      if (dato_input.length < 5) {
        return Tostada("Error\n Valor de consulta no valido", "error");
      }
  
      //Creo un array separando los datos por ,
      let lista_datos = await dato_input.trim().split(",");
  
      //Creo un nuevo array en donde almacenaré solo los digitos = 5 ó = 12
      let nueva_lista = [];
      
      await lista_datos.forEach((dato) => {
        if (dato.length == 5 || dato.length == 12 || dato.length == 12 || dato.includes('_')) {
          nueva_lista.push(dato);
        }
      });
  
      //Convierto el array a un Texto nuevamente uniendolos por comas 
      let datos_consultar = nueva_lista.join(",");

      datos_consultar = datos_consultar.replace('.','');
      
  
      let resultado_consulta = await consultaETP2(datos_consultar);
  
      if (resultado_consulta == null) {
        return Swal.fire(
          "¡Error!",
          `Los datos Ingresados No tienen un formato válido.
          <br>
          <br>
          Los Nodos deben contener una <b>longitud de 5 dígitos</b> y deben estar <b>concatenados por comas.</b>
          <br>
          <br>
          Las Macs deben contener una <b>longitud de 10 Carácteres</b> y deben estar <b>concatenados por comas.</b>
          `,
          "error"
        );
      }
  
      // console.log(resultado_consulta);
  
      llenarTablaETP2(resultado_consulta);
  
      document
        .getElementById("export-table-nodes-etp")
        .addEventListener("click", () => {
          GenerarExcel(resultado_consulta);
        });
    }
  });
  