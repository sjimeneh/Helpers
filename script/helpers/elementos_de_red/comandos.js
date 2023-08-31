async function CargarExcel() {
  let datos = await ConsultaDatos();
  let idUnicos = ObtenerIdUnicos(datos);
  let hojas = await GenerarHojasDeExcel(idUnicos,datos);

  let spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: hojas,
    openUrl:
      "https://services.syncfusion.com/js/production/api/spreadsheet/open",
    saveUrl:
      "https://services.syncfusion.com/js/production/api/spreadsheet/save",

    created: () => {
        //Sino se especifica la hoja el programa solo aplicará filtros a la primera hoja

      //#region Unir Celdas desde la A1 hasta la B1, todo el texto que este en estas celdas quedará en uno solo
      spreadsheet.merge("A1:B1");
      spreadsheet.merge("CMTS ARRIS (Cable-MAC)!A1:B1");
      spreadsheet.merge("CMTS CASA (CATV-MAC)!A1:B1");
      spreadsheet.merge("VCMTS HARMONIC (Mac-Domain)!A1:B1");
      spreadsheet.merge("COMANDOS DAAS!A1:B1");
      spreadsheet.merge("COMANDOS OLT GPON!A1:B1");
      spreadsheet.merge("COMANDOS SW ANILLO CLIENTE!A1:B1");
    //   spreadsheet[1].merge("A1:B1");
      //#endregion

      //#region Remarcar Cuadriculas
      spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "A1:B100");
      spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "CMTS ARRIS (Cable-MAC)!A1:B100");
      spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "CMTS CASA (CATV-MAC)!A1:B100");
      spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "VCMTS HARMONIC (Mac-Domain)!A1:B100");
      spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "COMANDOS DAAS!A1:B100");
      spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "COMANDOS OLT GPON!A1:B100");
      spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "COMANDOS SW ANILLO CLIENTE!A1:B100");
      //#endregion

      //#region Aplicar Formatos a cada una de las celdas
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"A1:B1");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"CMTS ARRIS (Cable-MAC)!A1:B1");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"CMTS CASA (CATV-MAC)!A1:B1");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"VCMTS HARMONIC (Mac-Domain)!A1:B1");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"COMANDOS DAAS!A1:B1");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"COMANDOS OLT GPON!A1:B1");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"COMANDOS SW ANILLO CLIENTE!A1:B1");

      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"A2:B2");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"CMTS ARRIS (Cable-MAC)!A2:B2");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"CMTS CASA (CATV-MAC)!A2:B2");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"VCMTS HARMONIC (Mac-Domain)!A2:B2");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"COMANDOS DAAS!A2:B2");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"COMANDOS OLT GPON!A2:B2");
      spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },"COMANDOS SW ANILLO CLIENTE!A2:B2");

      //#endregion

      //Aplicar Filtros a las columnas. En la propiedad Value puedo apicar un filtro por defecto
    //   spreadsheet.applyFilter([{ field: "G", operator: "equal", value: "" }],"CMTS CISCO CBR8 (Interfaz X/X/X)!A2:B2");
    //   spreadsheet.applyFilter([{ field: "G", operator: "equal", value: "" }],"A2:B2");
    //   spreadsheet.applyFilter([{ field: "G", operator: "equal", value: "" }],"CMTS ARRIS (Cable-MAC)!A2:B2");
    //   spreadsheet.applyFilter([{ field: "G", operator: "equal", value: "" }],"CMTS CASA (CATV-MAC)!A2:B2");
    //   spreadsheet.applyFilter([{ field: "G", operator: "equal", value: "" }],"VCMTS HARMONIC (Mac-Domain)!A2:B2");
    //   spreadsheet.applyFilter([{ field: "G", operator: "equal", value: "" }],"COMANDOS DAAS!A2:B2");
    //   spreadsheet.applyFilter([{ field: "G", operator: "equal", value: "" }],"COMANDOS OLT GPON!A2:B2");
    //   spreadsheet.applyFilter([{ field: "G", operator: "equal", value: "" }],"COMANDOS SW ANILLO CLIENTE!A2:B2");

      //Agrupar Texto en saltos de linea
      //spreadsheet.wrap('A12:A12');

      //Aplicar Color y estilos
    //   spreadsheet.cellFormat({backgroundColor: "#043664",color: "#FFFFF4",fontSize: "12pt",fontWeight: "bold",},"CMTS CISCO CBR8 (Interfaz X/X/X)!A1:B1");
      spreadsheet.cellFormat({backgroundColor: "#043664",color: "#FFFFF4",fontSize: "12pt",fontWeight: "bold",},"A1:B1");
      spreadsheet.cellFormat({backgroundColor: "#043664",color: "#FFFFF4",fontSize: "12pt",fontWeight: "bold",},"CMTS ARRIS (Cable-MAC)!A1:B1");
      spreadsheet.cellFormat({backgroundColor: "#043664",color: "#FFFFF4",fontSize: "12pt",fontWeight: "bold",},"CMTS CASA (CATV-MAC)!A1:B1");
      spreadsheet.cellFormat({backgroundColor: "#043664",color: "#FFFFF4",fontSize: "12pt",fontWeight: "bold",},"VCMTS HARMONIC (Mac-Domain)!A1:B1");
      spreadsheet.cellFormat({backgroundColor: "#043664",color: "#FFFFF4",fontSize: "12pt",fontWeight: "bold",},"COMANDOS DAAS!A1:B1");
      spreadsheet.cellFormat({backgroundColor: "#043664",color: "#FFFFF4",fontSize: "12pt",fontWeight: "bold",},"COMANDOS OLT GPON!A1:B1");
      spreadsheet.cellFormat({backgroundColor: "#043664",color: "#FFFFF4",fontSize: "12pt",fontWeight: "bold",},"COMANDOS SW ANILLO CLIENTE!A1:B1");

      //Validar datos

      // spreadsheet.numberFormat("$#,##0.00", "F2:F31");
    },
  });

  spreadsheet.appendTo("#spreadsheet");
}

function ObtenerIdUnicos(datos) {
  // Creamos un conjunto para almacenar los valores únicos de "id"
  const idsUnicos = new Set();
  // Iteramos a través del arreglo de objetos y agregamos cada "id" al conjunto
  datos.forEach((objeto) => {
    idsUnicos.add(objeto.ID);
  });

  // Convertimos el conjunto de valores únicos de "id" de nuevo a un arreglo (opcional)
  const idsUnicosArray = Array.from(idsUnicos);

  return idsUnicosArray;
}

async function GenerarHojasDeExcel(idUnicos,datos){
    let arrayHojas = [];

    for(let i=0; i<idUnicos.length; i++){

        let id = idUnicos[i];
        
        let fila = await OrdenarDatos(datos, id);

        arrayHojas.push({
            rows: fila,
    
            //Nombre de la Hoja
            name: fila[0].cells[0].value,
    
            //#region Tamaño de Columnas
            columns: [{ width: 500 }, { width: 1000 }],
            //#endregion
          })
    }

    return arrayHojas;
}

async function ConsultaDatos() {
  let respuesta = await fetch(
    `http://HTC5CG6021V3Q:3000/api/elementos_de_red/comandos`
  );
  if (respuesta.status !== 200) {
    return false;
  }
  let datos = await respuesta.json();

  return datos;
}

async function OrdenarDatos(datos, id) {
  let datosFiltrados = FiltrarDatosPorId(datos, id);

  let datos_formateados = [];

  datos_formateados.unshift(RetornarTitulos());
  datos_formateados.unshift(RetornarCabecera(datosFiltrados[0].ELEMENTO));

  let indice = 2;
  datosFiltrados.forEach((element) => {
    datos_formateados.push({
      height: 30,
      index: indice, //Filas
      cells: [
        //Celda, cada objeto es una columna de una fila en especifica, ene este caso la 0
        {
          index: 0,
          value: element.COMANDO,
        },
        {
          index: 1,
          value: element.DESCRIPCION,
        },
      ],
    });

    indice++;
  });

  return datos_formateados;
}

function RetornarCabecera(cabecera) {
  return {
    height: 35,
    index: 0, //Filas
    cells: [
      {
        index: 0,
        value: cabecera,
      },
    ],
  };
}

function RetornarTitulos() {
  return {
    //Fila 2
    height: 30,
    index: 1, //Filas
    cells: [
      //Celda, cada objeto es una columna de una fila en especifica, ene este caso la 0
      {
        index: 0,
        value: "Comando",
      },
      {
        index: 1,
        value: "Descripcion",
      },
    ],
  };
}

function FiltrarDatosPorId(array, id) {
  let numero_array = array.filter((elemento) => {
    return elemento.ID === id;
  });

  return numero_array;
}

CargarExcel();
