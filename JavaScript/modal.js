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

// EXPERIENCIA CON ID - VER COMO DARLE ESTILO A TODO ESE CHOCLO
// HACERLO RESPONSIVO
// MODAL CON CV COORDINADORES

function modalCoordinadores (cordi) {


Swal.fire ({
   
    width: `50%`,
    title: `${cordi.nombre}`,

    html: `<span class="textoSweet"><p><b>
   
    Andrea - coordinadora de este proyecto, es psicóloga, egresada de la Universidad Argentina John F. Kennedy</b></p>
    
    <p>Ha trabajado desde hace más de 25 años  en consultorios externos y coordinando grupos y programas en:</p>
    <p>Centros de Salud de Atención Primaria, en el Hospital General y en la Guardia de Salud Mental, en Urgencias e Internación, lo cual le ha dado una amplia experiencia en el abordaje y manejo de todo tipo de complejidades de la clínica.</p>
    <p>También ejerce la profesión en el ámbito privado. Ha sido admisora y coordinadora de servicio en sistema de salud mental de pre pagas. </p>
    <p>Es miembro de AASAM, Asociación Argentina de Salud Mental, donde participa de los capítulos de Psicosis y Cuerpos Sexualidad y Época.</p>
    <p>Como docente universitaria, se ha desempeñado en Universidades públicas y privadas, en pasantías de  grado y posgrado:</p>
    <p>* Clínica de la Urgencia, de la carrera de Psicología de la Universidad de Buenos Aires</p> 
    <p>* Clínica Psicoanalítica del posgrado del Colegio de Psicólogos zona XV</p> 
    <p>* Residencia de Medicina Gral., en el módulo de  Salud Mental.</p>
    
    <p><b>Aunque,  como docente, prefiere seguir pensándose como aprendiz. En este día y cada día.</b></p></span>
    
    ` ,
    imageUrl: `${cordi.img}`,
    customClass: {title:`tituloCoordinadores`},
    padding: `2rem 2rem` ,
    imageWidth: 150,
    
    imageAlt:  `Custom image` ,
    showConfirmButton: false ,
    showCloseButton: true,



  })  } 

  // FUNCIÓN DONDE SE MUESTRAN LAS CARDS

  mostrarCardsCoordinadores(coordinadores); 

//imageHeigth: 

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

// MODAL CON CV COMPLETO

// MODAL CON CV COORDINADORES

function modalEquipo (equi) {


  Swal.fire ({
     
      width: `50%`,
      title: `${equi.nombre}`,
      text: `${equi.CV}`,
  
      html: `<span class="textoSweet"><p>${equi.subtitulo}
     
      </p></span>
      
      ` ,
      imageUrl: `${equi.img}`,
      customClass: {title:`tituloCoordinadores`},
      padding: `2rem 2rem` ,
      imageWidth: 150,
      
      imageAlt:  `Custom image` ,
      showConfirmButton: false ,
      showCloseButton: true,
  
  
  
    })  } 



 