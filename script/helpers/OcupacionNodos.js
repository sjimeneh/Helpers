function CargarExcel(datos) {
  console.log(datos);
  let spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [
      {
        rows: [
          {
            height: 35,
            index: 0, //Filas
            cells: [
              {
                index: 0,
                value: "ColumnaUno",
              },
              {
                index: 1,
                value: "ColumnaDos",
              },
            ],
          },
        ],

        name: "Ocupacion Nodos HFC",

        //#region Tamaño de Columnas
        columns: [
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
          { width: 110 },
        ],
        //#endregion
      },
    ],
    openUrl:
      "https://services.syncfusion.com/js/production/api/spreadsheet/open",
    saveUrl:
      "https://services.syncfusion.com/js/production/api/spreadsheet/save",

    created: () => {
      //#region Unir Celdas desde la A1 hasta la J2, todo el texto que este en estas celdas quedará en uno solo
      //spreadsheet.merge("A1:J2");
      //#endregion

      //#region Remarcar Cuadriculas
    //   spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "A1:BR10000");
      //#endregion

      //#region Aplicar Formatos a cada una de las celdas
      spreadsheet.cellFormat(
        { fontWeight: "bold", textAlign: "center", verticalAlign: "middle" },
        "A1:BR1"
      );

    //   spreadsheet.cellFormat(
    //     { textAlign: "center", verticalAlign: "middle" },
    //     "F3:F10"
    //   );
      //#endregion

      spreadsheet.applyFilter([{ field: 'G', operator: 'equal', value: 'Services' }], 'A1:BR1');

      //Agrupar Texto en saltos de linea
      //spreadsheet.wrap('A12:A12');

      //Aplicar Color y estilos
      spreadsheet.cellFormat(
        {
          backgroundColor: "#043664",
          color: "#FFFFF4",
          fontSize: "12pt",
          fontWeight: "bold",
        },
        "A1:BR1"
      );

      //Validar datos

      // spreadsheet.numberFormat("$#,##0.00", "F2:F31");
    },
  });

  spreadsheet.appendTo("#spreadsheet");
}

CargarExcel({});
