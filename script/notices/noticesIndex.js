let data = null;

async function LoadTable() {
  try {
    const response = await fetch("http://htc5cg6021v3q:3000/api/notices");
    data = await response.json();
    const table = document.getElementById("table_notices");
    var rowCount = table.rows.length; //Obtener la cantidad de filas en la tabla

    for (var i = rowCount - 1; i > 0; i--) {
      //   console.log("Eliminando..");
      //Iterar por todas las filas, excepto la primera (encabezado)
      table.deleteRow(i); //Borrar cada fila
    }
    if (data.length === 0) {
      table.innerHTML = ` <tr>
                            <td data-label="Title">
                                <p class="text-heading font-semibold">No hay datos para mostrar</p>
                            </td>
                            <td data-label="Title">
                            <img class="w-20" src="https://cdn.dribbble.com/users/107759/screenshots/4588830/article-not-found.gif"/>
                            </td>
                            </tr>
                            `;
    } else {
      data.forEach((notices) => {
        // console.log("Entro a Insertar");
        const nuevaFila = `
            <tr>
              <td data-label="Title">
                <p class="text-heading font-semibold" href="#">${notices.Title}</p>
              </td>
              <td data-label="Usuario">
                <p class="text-truncate text-wrap h-20">${notices.Description_Title}</p>
              </td>
              <td data-label="Grupo">
                <span>${notices.Edit_Date}</span>
              </td>
              <td>
                <button class="btn btn-outline-primary" onclick="EditNotices(${notices.Id})">Editar</button>
              </td>
              <td>
                <button class="btn btn-outline-danger" onclick="Deletenotices(${notices.Id})">Eliminar</button>
              </td>
            </tr>
          `;

        // agregar la nueva fila a la tabla
        table.insertAdjacentHTML("beforeend", nuevaFila);
      });
    }
    data = null;
  } catch (error) {
    console.error(error);
  }
}

async function EditNotices(id) {
  let titulo = document.getElementById("title_notice");
  let description = document.getElementById("description");

  try {
    const response = await fetch(`http://htc5cg6021v3q:3000/api/notices/${id}`);
    data = await response.json();

    titulo.value = data[0].Title;
    description.value = data[0].Description_Title;

    modal.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

async function Deletenotices(id) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const result = await swalWithBootstrapButtons.fire({
    title: "¿Estás Seguro?",
    text: "Eliminarás una Noticia del sistema",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Si, Eliminar!",
    cancelButtonText: "No, Cancelar!",
    reverseButtons: true,
  });

  if (result.isConfirmed !== true) {
    await swalWithBootstrapButtons.fire(
      "Cancelado",
      "El registro no se ha Eliminado :)",
      "error"
    );
    return;
  }

  const url = `http://htc5cg6021v3q:3000/api/notices/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("La petición no pudo completarse");
    }

    LoadTable();

    await swalWithBootstrapButtons.fire(
      "Eliminado!",
      "Registro eliminado con éxito",
      "success"
    );
  } catch (error) {
    console.error("Error al eliminar el elemento:", error);
  }
}

document.addEventListener("DOMContentLoaded", LoadTable);

//#region Registro de Noticias con Ventana Modal
let buttonCreate = document.getElementById("CreateNotice");

var modal = document.getElementById("modal");
var btn = document.getElementById("btn-modal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

buttonCreate.addEventListener("click", async () => {
  data = null;
  document.getElementById("title_notice").value = "";
  document.getElementById("description").value = "";
  modal.style.display = "block";
});
//#endregion

let formulario = document.getElementById("form_notice");

formulario.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log(data);
  let title = formulario.elements.title.value;
  let description = formulario.elements.description.value;

  if (title == "" || description == "") {
    return Swal.fire(
      "Error",
      `El Titulo y la descripción son campos obligatorios`,
      "error"
    );
  }

  var editable = data !== null ? data[0]?.Id : null;

  //Si la variable data contiene valores es porque se va a editar, sino entonces se va a crear

  let noticias = {
    id: editable,
    title: title,
    description: description,
  };

  // URL del servidor que recibirá la solicitud
  const url = "http://htc5cg6021v3q:3000/api/notices";

  // Opciones de la solicitud
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noticias),
  };

  let response = await fetch(url, options)
    .then((response) => response)
    .catch((err) => err);

  if (response.status === 200) {
    LoadTable();
    modal.style.display = "none";
    data = null;
    ClearForm();
    return Swal.fire(
      "Registro Exitoso",
      `La Noticia se ha Creado con Exito`,
      "success"
    );
  } else {
    let mensaje = await response.json();
    console.log(mensaje);
    data = null;
    return Swal.fire("Error", mensaje.error, "error");
  }
});

function ClearForm() {
  document.getElementById("title_notice").value = "";
  document.getElementById("description").value = "";
}
