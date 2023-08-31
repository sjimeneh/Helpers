export function Excel(datos){
    console.log(datos)
    let spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [
            {
    
                rows: [
                    {
                        //Fila #1 Tirulo
                        height: 15,
                        cells: [
                            {
                                index: 1,
                                value: "Caida Parcial CM",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 2,
                        cells: [
                            {
                                index: 0,
                                value: "Nodo",
                            },
                            {
                                index: 6,
                                value: `${datos.infoNodo[0].NODO}`,
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 3,
                        cells: [
                            {
                                index: 0,
                                value: "Variable Afectada",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 4,
                        cells: [
                            {
                                index: 0,
                                value: "Nombre Nodo",
                            },
                            {
                                index: 6,
                                value: `${datos.infoNodo[0].NODO_HFC2}`,
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 5,
                        cells: [
                            {
                                index: 0,
                                value: "Dirección",
                            },
                            {
                                index: 6,
                                value: `${datos.infoNodo[0].DIRECCION_NODO}`,
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 6,
                        cells: [
                            {
                                index: 0,
                                value: "dBm (-2 a +2)",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 7,
                        cells: [
                            {
                                index: 0,
                                value: "Elemento De Red En Común",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 8,
                        cells: [
                            {
                                index: 0,
                                value: "¿Transponder Cae O Se Alarma?",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 9,
                        cells: [
                            {
                                index: 0,
                                value: "¿Potencia Dow Cae?",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 10,
                        cells: [
                            {
                                index: 0,
                                value: "Elementos de Red Afectados y Dirección",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 80,
                        index: 10,
                        cells: [
                            {
                                index: 0,
                                value: "",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 35,
                        index: 12,
                        cells: [
                            {
                                index: 0,
                                value: "",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 35,
                        index: 13,
                        cells: [
                            {
                                index: 0,
                                value: "GRAFICAS CM O ESPECTROS",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 300,
                        index: 14,
                        cells: [
                            {
                                index: 0,
                                value: "",
                            }
                        ],
                    },
                    {
                        //Filas #2
                        height: 35,
                        index: 15,
                        cells: [
                            {
                                index: 0,
                                value: "",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 35,
                        index: 16,
                        cells: [
                            {
                                index: 0,
                                value: "GRAFICAS CACTI / PNM",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 300,
                        index: 17,
                        cells: [
                            {
                                index: 0,
                                value: "",
                            }
                        ],
                    },
                    {
                        //Filas #2
                        height: 35,
                        index: 18,
                        cells: [
                            {
                                index: 0,
                                value: "",
                            },
                        ],
                    },
                    {
                        //Filas #2
                        height: 25,
                        index: 19,
                        cells: [
                            {
                                index: 0,
                                value: "MAC_DATOS",
                            },
                            {
                                index: 1,
                                value: "NODO",
                            },
                            {
                                index: 0,
                                value: "AMP",
                            },
                            {
                                index: 0,
                                value: "TAP",
                            },
                            {
                                index: 0,
                                value: "DIRECCION",
                            },
                            {
                                index: 0,
                                value: "ESTADO",
                            },
                            {
                                index: 0,
                                value: "DW_SNR",
                            },
                            {
                                index: 0,
                                value: "DW_PL",
                            },
                            {
                                index: 0,
                                value: "UP_SNR",
                            },
                            {
                                index: 0,
                                value: "UP_PL",
                            },
                        ],
                    },
    
                ],
    
                name: "Caida Parcial CM",
    
                //#region Tamaño de Columnas
                columns: [
                     { width: 105 },
                     { width: 50 },
                     { width: 35 },
                     { width: 35 },
                     { width: 80 },
                ],
                //#endregion
            },
        ],
        openUrl: "https://services.syncfusion.com/js/production/api/spreadsheet/open",
        saveUrl: "https://services.syncfusion.com/js/production/api/spreadsheet/save",
    
        created: () => {
    
            //#region Unir Celdas desde la A1 hasta la H1, todo el texto que este en estas celdas quedará en uno solo
            spreadsheet.merge("A1:J2"); 
    
            spreadsheet.merge("A3:E3");
            spreadsheet.merge("A4:E4");
            spreadsheet.merge("A5:E5");
            spreadsheet.merge("A6:E6");
            spreadsheet.merge("A7:E7");
            spreadsheet.merge("A8:E8");
            spreadsheet.merge("A9:E9");
            spreadsheet.merge("A10:E10");
    
            spreadsheet.merge("F3:J3");
            spreadsheet.merge("F4:J4");
            spreadsheet.merge("F5:J5");
            spreadsheet.merge("F6:J6");
            spreadsheet.merge("F7:J7");
            spreadsheet.merge("F8:J8");
            spreadsheet.merge("F9:J9");
            spreadsheet.merge("F10:J10");
    
            spreadsheet.merge("A11:J11");
            spreadsheet.merge("A12:J12");
            spreadsheet.merge("A13:J13");
            spreadsheet.merge("A14:J14");
            spreadsheet.merge("A15:J15");
            spreadsheet.merge("A16:J16");
            spreadsheet.merge("A17:J17");
            spreadsheet.merge("A18:J18");
            spreadsheet.merge("A19:J19");
            //#endregion
            
            //#region Remarcar Cuadriculas
            spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "A1:J12");
            spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "A14:J15");
            spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "A17:J18");
            spreadsheet.setBorder({ border: "1px solid #A6A6A6" }, "A20:J20");
            //#endregion
    
            //#region Aplicar Formatos a cada una de las celdas
            spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" }, "A1:B1");
            spreadsheet.cellFormat({ textAlign: "center", verticalAlign: "middle" }, "F3:F10");
            spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" }, "A3:A11");
            spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" }, "A14:B14");
            spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" }, "A17:B17");
            spreadsheet.cellFormat({ fontWeight: "bold", textAlign: "center", verticalAlign: "middle" }, "A20:J20");
            //#endregion
    
            //Agrupar Texto en saltos de linea
            spreadsheet.wrap('A12:A12');
            spreadsheet.wrap('E20:E120');
    
            //Aplicar Color
            spreadsheet.cellFormat({ backgroundColor: '#043664', color: '#FFFFF4', fontSize: '12pt', fontWeight: 'bold' }, 'A1:B2');
            spreadsheet.cellFormat({ backgroundColor: '#043664', color: '#FFFFF4', fontSize: '10pt', fontWeight: 'bold' }, 'A20:F20');
    
            spreadsheet.cellFormat({ backgroundColor: '#ABEBC6', color: '#17202A', fontSize: '10pt', fontWeight: 'bold' }, 'G20:G20');
            spreadsheet.cellFormat({ backgroundColor: '#F5B7B1', color: '#17202A', fontSize: '10pt', fontWeight: 'bold' }, 'H20:H20');
            spreadsheet.cellFormat({ backgroundColor: '#ABEBC6', color: '#17202A', fontSize: '10pt', fontWeight: 'bold' }, 'I20:I20');
            spreadsheet.cellFormat({ backgroundColor: '#F5B7B1', color: '#17202A', fontSize: '10pt', fontWeight: 'bold' }, 'J20:J20');
    
            //Validar datos
            spreadsheet.addDataValidation({ type: 'List', value1: 'Caido, Alarmado', ignoreBlank: false }, 'F9:F9');
            spreadsheet.addDataValidation({ type: 'List', value1: 'SI, NO', ignoreBlank: false }, 'F10:F10');
    
            //Formato de Numero
            // spreadsheet.numberFormat("$#,##0.00", "F2:F31");
        },
    });
    
    spreadsheet.appendTo("#spreadsheet");
}
