// Función que imprime las cards de coordinadores en el DOM  

const mostrarCardsCoordinadores = (coordinadores) => {

const contenedorCards = document.getElementById(`cardCoordinadores`)

coordinadores.forEach ((cordi) => {

const div = document.createElement(`div`) ;

div.classList.add(`boxCoordinadores`);

div.innerHTML += `   <picture class="boxCoordinadores__img">
                   <img  src=${cordi.img}>
                             </picture>
                <article class="boxCoordinadores__info">
                <h3 class="boxCoordinadores__title"> ${cordi.profesion} </h3>
                <h4 class="boxCoordinadores__subtitle"> ${cordi.universidad}  </h4>
                <p class="boxCoordinadores__text">${cordi.frase} </p>
                <b><a id="boxCoordinadores__boton${cordi.id}" class="estilos_btnModal"> Ver más...</a></b>
                
                
                </article>` ;

contenedorCards.appendChild(div)


// Evento para que el boton de ver más muestre el modal


const botonCoordinadores = document.getElementById(`boxCoordinadores__boton${cordi.id}`)
botonCoordinadores.addEventListener ('click', e => {
    e.preventDefault();

    modalCoordinadores(cordi);

})

})

}

function modalCoordinadores (cordi) {


Swal.fire ({
   
   // width: `90%`,
    title: `${cordi.nombre}`,
    grow: `column`,

    html: `<span class="textoSweet"><p><b>${cordi.presentacion}</b></p>
    
    <p>${cordi.estudios}</p>
    <p>${cordi.experiencia}</p>
    <p>${cordi.docencia}</p>
   
    
    <p><b>${cordi.final}</b></p></span>
    
    ` ,
    imageUrl: `${cordi.img}`,
    customClass: {title:`tituloCoordinadores`},
    padding: `2rem` ,
    imageWidth: 150,
    
    imageAlt:  `Custom image` ,
    showConfirmButton: false ,
    showCloseButton: true,



  })  } 

  // FUNCIÓN DONDE SE MUESTRAN LAS CARDS

  mostrarCardsCoordinadores(coordinadores); 



// FUNCIÓN DONDE SE IMPRIMEN LAS CARDS DEL EQUIPO

const mostrarCardsEquipo = (equipo) => {

  const contenedorCards = document.getElementById(`cardEquipo`)
  
  equipo.forEach ((equi) => {
  
  const div = document.createElement(`div`) ;
  
  div.classList.add(`boxEquipo`);
  
  div.innerHTML += `   <picture class="boxEquipo__img">
                     <img  src=${equi.img}>
                               </picture>
                  <article class="boxEquipo__info">
                  <h3 class="boxEquipo__title"> ${equi.profesion} </h3>
                  <h4 class="boxEquipo__subtitle"> ${equi.universidad}  </h4>
                  <p class="boxEquipo__text">${equi.presentacion} </p>
                  <b><a id="boxEquipo__boton${equi.id}" class="estilos_btnEquipo"> Ver más...</a></b>
                  
                  
                  </article>` ;
  
  contenedorCards.appendChild(div)
  
  
  // Evento para que el boton de ver más muestre el modal
  
   const botonEquipo = document.getElementById(`boxEquipo__boton${equi.id}`)
  botonEquipo.addEventListener ('click', e => {
      e.preventDefault();
  
      modalEquipo(equi); 
  
  })
  
  })
  
  }

  mostrarCardsEquipo(equipo)


// MODAL CON CV COORDINADORES

function modalEquipo (equi) {


  Swal.fire ({
     
     // width: `90%`,
      title: `${equi.nombre}`,
      grow: `column`,
  
      html: `<span class="textoSweet"><p><b>${equi.subtitulo}
     
      </b></p>
      <p>${equi.estudios}</p>
      <p>${equi.CV}</p></span>
      
      ` ,
      imageUrl: `${equi.img}`,
      customClass: {title:`tituloCoordinadores`},
      padding: `2rem` ,
      imageWidth: 150,
      imageAlt:  `Custom image` ,
      showConfirmButton: false ,
      showCloseButton: true,
  
  
  
    })  } 



 