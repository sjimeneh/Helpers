function generatePDF() {

  if(!validarFormulario()){
    return Swal.fire(
      'Error!',
      'Por favor complete todos los campos!',
      'error'
    )
  }
  // Creamos el documento PDF
  const doc = new jsPDF();

  // Agregamos el título
  doc.setFontSize(14);
  let titulo = "Caida Parcial CM";
  doc.text(titulo, (doc.internal.pageSize.width - titulo.length) / 2, 10, { align: "center"});

  // Agregamos la tabla con los datos del formulario
  const tableData = [
    ["Tiquete:", document.getElementById("tiquete_caida_parcial").value],
    ["Tipo Tiquete:", document.getElementById("tipo_tiquete_caida_parcial").value],
    ["Variable Afectada:", document.getElementById("variable_caida_parcial").value],
    ["Nodo:", document.getElementById("Nodo_caida_parcial").value],
    ["Dirección Nodo:", document.getElementById("dir_nodo_caida_parcial").value],
    ["Dirección Fuente Nodo:", document.getElementById("dir_fuente_caida_parcial").value],
    ["Potencia del Nodo:", document.getElementById("pw_nodo_caida_parcial").value],
    ["Análisis Técnico de la Falla:", document.getElementById("analisis_caida_parcial").value],
  ];

  doc.autoTable({
    startY: 25,
    head: [["Descripción","Valor"]],
    body: tableData,
    styles: {
      fontSize: 10,
      cellPadding: 5,
    },
  });

  const div = document.getElementById("tabla_reprueba_caida_parcial");
  const tabla = div.querySelector(".htCore");
  doc.autoTable({html:tabla});


  // Agregamos las imágenes
  const cactiImg = document.getElementById("img_previa_cacti_caida_parcial").getAttribute("src");
  const pnmImg = document.getElementById("img_previa_pnm_caida_parcial").getAttribute("src");

  if (cactiImg || pnmImg) {

    doc.addPage(); //Añado una nueva página

    if (cactiImg) {
      doc.text("Gráfica de CACTI", doc.internal.pageSize.width / 3, 15, { align: "center" });
      doc.addImage(cactiImg, "PNG", 20, 25, 170, 100);
    }
    if (pnmImg) {
      doc.text("Gráfica de PNM", doc.internal.pageSize.width / 3, 135, { align: "center" });
      doc.addImage(pnmImg, "PNG", 20, 145, 170, 100);
    }
  }

  // Guardamos el documento PDF
  doc.save(`caida_parcial_${document.getElementById("tiquete_caida_parcial").value}.pdf`);
}

function validarFormulario(){
  let formulario = document.getElementById("form_caida_parcial");

  if(formulario.tipo_tiquete_caida_parcial.value === ""){
    return false;
  }
  if(formulario.variable_caida_parcial.value === ""){
    return false;
  }
  if(formulario.Nodo_caida_parcial.value === ""){
    return false;
  }
  if(formulario.dir_nodo_caida_parcial.value === ""){
    return false;
  }
  if(formulario.dir_fuente_caida_parcial.value === ""){
    return false;
  }
  if(formulario.pw_nodo_caida_parcial.value === ""){
    return false;
  }
  if(formulario.analisis_caida_parcial.value === ""){
    return false;
  }
  // if(formulario.img_cacti_caida_parcial.src === ""){
  //   return false;
  // }
  // if(formulario.img_pnm_caida_parcial.src === ""){
  //   return false;
  // }

  return true
  
}

document.getElementById("generate_pdf_caida_parcial").addEventListener("click",generatePDF);