fetch("http://htc5cg6021v3q:3000/api/notices")
  .then((res) => res.json())
  .then(data => {
   
    var carousel = document.getElementById("car_carousel");

    if (data.length === 0) {
      return (carousel.innerHTML = `<div class="swiper-slide"><h3>SIN NOTICIAS</h3><p>No hay Noticias Actuales</p></div>`);
    }

    let bloque = "";

    data.forEach((noticia) => {
      bloque += `<div class="swiper-slide"><h3>${noticia.Title.toUpperCase()}</h3><p style = "width: 80%; text-align: justify; text-align: center; white-space: pre-line; overflow-y: auto;">${
        noticia.Description_Title
      }</p></div>`;
    });

    carousel.innerHTML = bloque;
    console.log("Proceso 1");
  })
  .catch((error) => console.error(error));
