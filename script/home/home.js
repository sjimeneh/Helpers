
async function ConsultarNoticias() {
  let resultadoConsultaNoticias = await fetch("http://htc5cg6021v3q:3000/api/notices");
  let datosNoticias = null;
  console.log("Llamado a la funcion");

  if (resultadoConsultaNoticias.status === 200) {
    datosNoticias = resultadoConsultaNoticias.json();
  }

  return datosNoticias;
}

document.addEventListener("DOMContentLoaded", async () => {
  let datosNoticias = await ConsultarNoticias();


  if (datosNoticias == null) {
    return "";
  }

  let conetendorTarjetas = document.getElementById("content-cards");
  let contenedorSlides = document.getElementById("content-slide");

  let bandera = false;
  datosNoticias.forEach((noticia) => {

    conetendorTarjetas.innerHTML += `
        <li class="slide-visible">
        <div class="card shadow h-100" style="min-height: 35rem;">
          <div class="card-body p-3 p-xl-5">
            <h3 class="card-title h3">${noticia.Title}</h3>
            <p class="card-text" style="overflow: hidden;">
              ${noticia.Description_Title}
            </p>
            </br>
            </br>
            <p class="card-text" style="overflow: hidden;">
              Actualizado el ${noticia.Edit_Date}
            </p>
            </div>
          </div>
        </div>
      </li>
        `;

        if(bandera == false){
            bandera = true;
            contenedorSlides.innerHTML += `<button class="active" aria-label="Go to slide"></button>`;
        }else{
            contenedorSlides.innerHTML += `<button aria-label="Go to slide"></button>`;
        }
        
  });
});
