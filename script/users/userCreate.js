document.addEventListener("DOMContentLoaded", async () => {
  LoadDeparments();
});

let selectDeparment = document.getElementById("departamento");

selectDeparment.addEventListener("change", async () => {
  // console.log(selectDeparment.value);
  await LoadGroups(selectDeparment.value);
});

LoadDeparments = async () => {
  let departaments = await getDepartment();

  let options = selectDeparment.innerHTML;

  departaments.forEach((department) => {
    options += `<option value="${department.Id}">${department.Deparment_Name}</option>`;
  });
  selectDeparment.innerHTML = options;
};

LoadGroups = async (id) => {
  let groups = await getGroups(id);
  let selectGroup = document.getElementById("grupo");
  selectGroup.innerHTML = "";
  let options = selectGroup.innerHTML;

  groups.forEach((grupo) => {
    options += `<option value="${grupo.Id}">${grupo.Group_Name}</option>`;
  });

  selectGroup.innerHTML = options;
};

const form = document.getElementById("formCreate");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = form.elements.nombre.value;
  const apellido = form.elements.apellido.value;
  const usuario = form.elements.usuario.value.toLowerCase();
  const designacion = form.elements.designacion.value;
  const correo = form.elements.correo.value.toLowerCase();
  const departamento = form.elements.departamento.value;
  const grupo = form.elements.grupo.value;
  const rol = form.elements.rol.value;
  const activo = form.elements.activo.value;
  const color = generarColorHex();

  let datos = {
    nombre: nombre,
    apellido: apellido,
    usuario: usuario,
    designacion: designacion,
    correo: correo,
    departamento: departamento,
    grupo: grupo,
    rol: rol,
    activo: activo,
    color: color,
  };

  // console.log(datos);

  if (ValidarDatos(datos)) {
    CreateEmpleyee(datos);
  }
});

async function getDepartment() {
  const response = await fetch(
    "http://htc5cg6021v3q:3000/api/users/department"
  );
  const data = await response.json();
  return data;
}

async function getGroups(id) {
  const response = await fetch(
    `http://htc5cg6021v3q:3000/api/users/group?deparmentId=${id}`
  );
  const data = await response.json();
  return data;
}

function AuthMessage(logo, mensaje) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: logo,
    title: mensaje,
  });
}

function ValidarDatos(datos) {
  for (const dato in datos) {
    if (datos[dato] === "") {
      AuthMessage("error", `El campo ${dato} es obligatorio`);
      return false;
    }
  }
  return true;
}

async function CreateEmpleyee(data) {
  // URL del servidor que recibirá la solicitud
  const url = "http://htc5cg6021v3q:3000/api/users";

  // Opciones de la solicitud
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  let response = await fetch(url, options)
    .then((response) => response)
    .catch((err) => err);

  if (response.status === 200) {

    await MessageSweet(
      "Registro Exitoso",
      `El Usuario ${data.usuario} ha sido registrado con Exito`,
      "success"
    );

    ClearForm(form.elements);

    //Esta función se encuentra en el archivo de user Index
    LoadTable();

  } else {
    let mensaje = await response.json();
    console.log(mensaje);
    await MessageSweet("Error", mensaje.error, "error");
  }
}

let redireccionar = () =>
  window.location.replace("../../pages/scheduler/scheduler.html");

function ClearForm(elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.value = "";
  }
}

let MessageSweet = (title, message, logo) => {
  Swal.fire(title, message, logo);
};

function generarColorHex() {
  // Generar tres valores de color RGB aleatorios
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Convertir los valores RGB a un valor hexadecimal de 6 dígitos
  var colorHex =
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return colorHex;
}
