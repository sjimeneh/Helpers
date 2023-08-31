async function LoadTable() {
  try {
    const response = await fetch("http://htc5cg6021v3q:3000/api/users");
    const data = await response.json();
    const table = document.getElementById("tableUser");

    var rowCount = table.rows.length; //Obtener la cantidad de filas en la tabla

    for (var i = rowCount - 1; i > 0; i--) {
      //Iterar por todas las filas, excepto la primera (encabezado)
      table.deleteRow(i); //Borrar cada fila
    }

    //console.log(data);

    if (data.length === 0) {
      const row = table.insertRow();
      const noDataCell = row.insertCell(0);
      noDataCell.colSpan = 9;
      noDataCell.innerText = `<p class="text-heading font-semibold">No hay datos para mostrar</p>`;
    } else {
      data.forEach((user) => {
        const row = table.insertRow();
        const jobTitleCell = row.insertCell(0);
        const groupCell = row.insertCell(1);
        const userCell = row.insertCell(2);
        const departmentCell = row.insertCell(3);
        const designationCell = row.insertCell(4);
        const rollCell = row.insertCell(5);
        const activeCell = row.insertCell(6);
        const editCell = row.insertCell(7);
        const deleteCell = row.insertCell(8);

        jobTitleCell.setAttribute("data-label", "Job Title");
        groupCell.setAttribute("data-label", "Grupo");
        userCell.setAttribute("data-label", "Usuario");
        departmentCell.setAttribute("data-label", "Departamento");
        designationCell.setAttribute("data-label", "Designación");
        rollCell.setAttribute("data-label", "Roll");
        activeCell.setAttribute("data-label", "Activo");

        jobTitleCell.innerHTML = `
            <p class="text-heading font-semibold">
              ${user.Name} ${user.LastName}
            </p>
          `;
        groupCell.innerHTML = `
            <span>${user.Username}</span>
          `;
        userCell.innerHTML = `
            <p class="text-current">${user.Deparment_Name}</p>
          `;
        departmentCell.innerHTML = `
            <p class="text-current">${user.Group_Name}</p>
          `;
        designationCell.innerHTML = `
            <span class="badge bg-soft-success text-success">${user.Designation}</span>
          `;
        rollCell.innerHTML = `
            <p class="text-current">${user.RolUser}</p>
          `;
        activeCell.innerHTML = `
            <p class="text-current">${user.Active}</p>
          `;
        editCell.innerHTML = `
            <button class="btn btn-outline-primary" value="${user.EmployeeID}" onclick="EditUser(${user.EmployeeID})">
            <span class=" pe-2">
                <i class="bi bi-pencil"></i>
            </span>
              Editar
            </button>
          `;
        deleteCell.innerHTML = `
            <button class="btn btn-outline-danger" value="${user.EmployeeID}" onclick="DeleteUser(${user.EmployeeID})">
            <span class=" pe-2">
                <i class="bi bi-trash"></i>
            </span>
              Eliminar
            </button>
          `;
      });
    } //Fin Else
  } catch (error) {
    console.error(error);
  }
}

async function DeleteUser(id) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const result = await swalWithBootstrapButtons.fire({
    title: "¿Estás Seguro?",
    text: "Eliminarás a un usuario del sistema",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Si, Eliminar!",
    cancelButtonText: "No, Cancelar!",
    reverseButtons: true,
  });

  //Propiedades que se pueden comparar
  // console.log(Swal.DismissReason);
  // console.log(result);

  if (result.isConfirmed !== true) {
    await swalWithBootstrapButtons.fire(
      "Cancelado",
      "El registro no se ha eliminado :)",
      "error"
    );
    return;
  }

  const url = `http://htc5cg6021v3q:3000/api/users/${id}`;

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
      "¡Eliminado!",
      "El Registro se ha eliminado con éxito",
      "success"
    );
  } catch (error) {
    console.error("Error al eliminar el elemento:", error);
  }
}

document.addEventListener("DOMContentLoaded", LoadTable);

//#region Registro de Noticias con Ventana Modal
let buttonCreate = document.getElementById("CreateUser");

// Funciones para Cerrar la Ventana Modal
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

buttonCreate.addEventListener("click", () => {
  modal.style.display = "block";
  LimpiarFormulario();
});

function LimpiarFormulario() {
  form.elements.nombre.value = "";
  form.elements.apellido.value = "";
  form.elements.usuario.value = "";
  form.elements.designacion.value = "";
  form.elements.correo.value = "";
  form.elements.departamento.value = "";
  form.elements.grupo.value = "";
  form.elements.rol.value = "";
  form.elements.activo.value = "";
}
