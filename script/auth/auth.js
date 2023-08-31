let form = document.getElementById("login-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = await form.elements.username.value;
  const password = await form.elements.password.value;

  const data = {
    username: username,
    password: password,
  };

  if (username === "") {
    showMessage(
      "Error de Autenticación",
      "El campo Usuario es Obligatorío",
      "error"
    );
  } else if (password === "") {
    showMessage(
      "Error de Autenticación",
      "El campo Contraseña es Obligatorío",
      "error"
    );
  } else {
    Auth(data);
  }
});

function showMessage(title, message, icon) {
  Swal.fire(title, message, icon);
}

async function Auth(data) {
  // URL del servidor que recibirá la solicitud
  const url = "http://HTC5CG6021V3Q:3000/api/login";

  // Opciones de la solicitud
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  let response = await fetch(url, options)
    .then(response => response)
    .catch((err) => err);

  if(response.status === 200){
    await AuthMessage("success","Autenticación Existosa");

    await new Promise(resolve => setTimeout(resolve, 3000));

    form.submit();
  }else{
    AuthMessage("error","Error de Autenticación");
  }
}

function AuthMessage(icon,title) {
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
    icon: icon,
    title: title,
  });
}
