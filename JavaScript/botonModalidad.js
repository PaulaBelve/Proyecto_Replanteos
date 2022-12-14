
const botonOnline = document.getElementById(`botonOnline`)
botonOnline.addEventListener ('click', e => {
    e.preventDefault();

    modalOnline();

})


function modalOnline() {

    Swal.fire ({
     
         width: `70%`,
         showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {  popup: 'animate__animated animate__fadeOutUp'
        },
        
        
        html:  `<strong><h2 class="tituloVirtual">Modalidad Virtual</h2></strong>
        <div class="borderValores"></div>
        <p class="parrafoVirtual"> La modalidad de atención virtual se ha instalado como una opción para muchos consultantes que por cuestiones de distancia, tiempo, organización se encuentran imposibilitados de concurrir a la consulta presencial en los consultorios. Ofrecemos esta posibilidad, sujeta a evaluación profesional acerca de los dispositivos terapéuticos convenientes a cada consulta.</p>` , 
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
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {  popup: 'animate__animated animate__fadeOutUp'
    },

    html: `<strong><h2 class="tituloVirtual">Nuestros consultorios</h2></strong>
    <div class="borderValores"></div>
    <img class="imgPresencial" src="../IMG/consulPrincipal 1.png" alt="">
    <img class="imgPresencial" src="../IMG/Presencial1.jpeg" alt="">
    <img class="imgPresencial" src="../IMG/Presencial5.jpeg" alt="">
    <img class="imgPresencial" src="../IMG/Presencial2.jpeg" alt="">
    <img class="imgPresencial" src="../IMG/Presencial3.jpeg" alt="">
    <img class="imgPresencial" src="../IMG/Presencial4.jpeg" alt="">
     
     ` ,
     
     showConfirmButton: false ,
     showCloseButton: true,
  })


}