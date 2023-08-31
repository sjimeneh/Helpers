let datosUsuario;

async function EditUser(id = "") {
  if (id.length === 0) {
    return AuthMessage("error", `El campo Id es obligatorio`);
  }

  try {
    let respuesta = await fetch(`http://htc5cg6021v3q:3000/api/users/${id}`);

    if (respuesta.status != 200) {
      return null;
    }

    datosUsuario = await respuesta.json();
    modal.style.display = "block";

    await LlenarFormulario(datosUsuario[0]);
  } catch (error) {
    console.log(error);
  }
}

async function LlenarFormulario(datos) {
  form.elements.nombre.value = datos.Name;
  form.elements.apellido.value = datos.LastName;
  form.elements.usuario.value = datos.Username;
  form.elements.designacion.value = datos.Designation;
  form.elements.correo.value = datos.Email;
  form.elements.departamento.value = datos.Department_Id;
  await LoadGroups(selectDeparment.value);
  form.elements.grupo.value = datos.GrupoId;
  form.elements.rol.value = datos.RolUser;
  form.elements.activo.value = datos.Active;
}
