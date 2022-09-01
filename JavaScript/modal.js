

const botonCoordinadores = document.getElementById(`boxCoordinadores__boton`)
botonCoordinadores.addEventListener  ('click', e => {
    e.preventDefault();

    modalPrestaciones();

})

function modalPrestaciones () {


Swal.fire ({
   
    width: `50%`,
    title: `Andrea Méndez`,
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
    
    imageUrl: `../IMG/Foto Andrea.png`,
    customClass: {title:`tituloCoordinadores`},
    padding: `2rem 2rem` ,
    imageWidth: 100,
    imageHeigth: 100,
    imageAlt:  `Custom image` ,
    showConfirmButton: false ,
    showCloseButton: true,

  }) }