
const botonValores = document.getElementById(`botonValores`)
botonValores.addEventListener ('click', e => {
    e.preventDefault();

    modalValores();

})


function modalValores() {

    Swal.fire ({
     
         width: `40%`,
         title: `Visión`,
        
     
         html: `<p><b> Aspiramos a consolidarnos no solo como la red de referencia en zona norte para tratamientos ambulatorios en salud mental con abordajes interdisciplinarios, sino también un modelo terapéutico basado en: </b>  </p>
        <p> -La efectivización interdisciplinaria en reuniones de equipo que se constituyan como espacios de intercambio de saberes clínicos, indispensable para la articulación interdisciplinar.</p>
        <p> -La implementación de procesos de mejora continua como son la formación y capacitación profesional, la presentación de trabajos, la actividad docente, supervisión de casos. </p>
         
         ` ,
        padding: `2rem` ,
        position: `bottom-left`
         
     
     
     
       })


}