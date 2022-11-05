
const botonOnline = document.getElementById(`botonOnline`)
botonOnline.addEventListener ('click', e => {
    e.preventDefault();

    modalOnline();

})


function modalOnline() {

    Swal.fire ({
     
         width: `40%`,
         title: `Modalidad Online`,
         text: ``,
        
     
         html: `<p><b> Aspiramos a consolidarnos no solo como la red de referencia en zona norte para tratamientos ambulatorios en salud mental con abordajes interdisciplinarios, sino también un modelo terapéutico basado en: </b>  </p>
        <p> -La efectivización interdisciplinaria en reuniones de equipo que se constituyan como espacios de intercambio de saberes clínicos, indispensable para la articulación interdisciplinar.</p>
        <p> -La implementación de procesos de mejora continua como son la formación y capacitación profesional, la presentación de trabajos, la actividad docente, supervisión de casos. </p>
         
         ` ,
        padding: `2rem` ,
        showConfirmButton: false ,
        showCloseButton: true,
    //    position: `bottom-right`
         
     
     
     
       })


}


const botonPresencial = document.getElementById(`botonPresencial`)
botonPresencial.addEventListener ('click', e => {
    e.preventDefault();

    modalPresencial();

})


function modalPresencial() {

     
Swal.fire({

    width: '60%' ,

    html: `<img class="imgPresencial" src="../IMG/Presencial1.jpeg" alt="">
    <img src="../IMG/Presencial2.jpeg" alt="">
    <img src="../IMG/Presencial3.jpeg" alt="">
    <img src="../IMG/Presencial4.jpeg" alt="">
     
     ` ,
     
     showConfirmButton: false ,
     showCloseButton: true,
  })


}