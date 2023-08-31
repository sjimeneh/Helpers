generate_excel_caida_parcial.addEventListener("click", generarExcel)


function generarExcel() {
    // Obtener los datos del formulario
    const tiquete = document.getElementById("tiquete_caida_parcial").value;
    const tipoTiquete = document.getElementById("tipo_tiquete_caida_parcial").value;
    const variableAfectada = document.getElementById("variable_caida_parcial").value;
    const nodo = document.getElementById("Nodo_caida_parcial").value;
    const dirNodo = document.getElementById("dir_nodo_caida_parcial").value;
    const dirFuente = document.getElementById("dir_fuente_caida_parcial").value;
    const pwNodo = document.getElementById("pw_nodo_caida_parcial").value;
    const analisis = document.getElementById("analisis_caida_parcial").value;
    const imgCacti = document.getElementById("img_cacti_caida_parcial").files[0];
    const imgPnm = document.getElementById("img_pnm_caida_parcial").files[0];
  
    // Crear un objeto de libro de Excel
    const workbook = XLSX.utils.book_new();
  
    // Crear una hoja de cálculo
    const sheet = XLSX.utils.json_to_sheet([
      {
        Tiquete: tiquete,
        "Tipo de Tiquete": tipoTiquete,
        "Variable Afectada": variableAfectada,
        Nodo: nodo,
        "Dirección Nodo": dirNodo,
        "Dirección Fuente Nodo": dirFuente,
        "Potencia del Nodo": pwNodo,
        "Analisis Tecnico de la Falla": analisis,
        "Grafica de CACTI": "",
        "Grafica de PNM": "",
      },
    ]);
  
    // Agregar la hoja de cálculo al libro de Excel
    XLSX.utils.book_append_sheet(workbook, sheet, "Caida Parcial");
  
    // Leer la imagen de CACTI
    if (imgCacti) {
      const reader = new FileReader();
      reader.readAsDataURL(imgCacti);
      reader.onload = function () {
        const base64Img = reader.result.split(",")[1];
        XLSX.utils.sheet_add_aoa(sheet, [["data:image/jpeg;base64," + base64Img]], { origin: { r: 9, c: 9 } });
        descargarExcel(workbook);
      };
    } else {
      descargarExcel(workbook);
    }
  
    // Leer la imagen de PNM
    if (imgPnm) {
      const reader = new FileReader();
      reader.readAsDataURL(imgPnm);
      reader.onload = function () {
        const base64Img = reader.result.split(",")[1];
        XLSX.utils.sheet_add_aoa(sheet, [["data:image/jpeg;base64," + base64Img]], { origin: { r: 9, c: 10 } });
        descargarExcel(workbook);
      };
    } else {
      descargarExcel(workbook);
    }
  }
  
  function descargarExcel(workbook) {
    // Descargar el libro de Excel
    XLSX.writeFile(workbook, "caida_parcial.xlsx");
  }
  