// OBJETO BUDINES

// OBJETOS COORDINADORES

class coordinadores {
    constructor(id, nombre, profesión, frase, experiencia, imagen) {
      
      this.id = id, 
      this.titulo = nombre, 
      this.profesión = profesión,
      this.frase = frase, 
      this.experiencia = experiencia 
      this.imagen = imagen
        
    }  
  
   mostrarCoodinadores() {
      console.log(`El nombre es ${this.nombre}, su profesión es ${this.profesión}, frase presentación ${this.frase}, la id es ${this.id}`);
    
    } }
  
  const coordinador1 = new coordinadores(1, 'Andrea Méndez', 'Psicologa', 1000, '../IMG/Foto Andrea.png');
  
  const coordinador2 = new coordinadores(2, 'Juan Pablo Tonna', 'Medico y psiquiatra', 1200, '../IMG/Foto Andrea.png');

  // ARRAY COORDINADORES
  
  let arrayCoorinadores = [coordinador1,coordinador2];
  
  

  // Objeto Equipo

/*  class equipo {
    constructor(id, nombre, profesión, experiencia, imagen) {
      
      this.id = id, 
      this.titulo = nombre, 
      this.profesión = profesión,
      this.experiencia = experiencia, 
      this.imagen = imagen
        
    }  
  
   mostrarEquipo() {
      console.log(`El nombre es ${this.nombre}, su profesión es ${this.profesión}, experiencia ${this.experiencia}, la id es ${this.id}`);
    
    } }
  
/*const staff1 = new equipo(1, 'Benjamin Avila', 'Psicologo', 1000, 'img/recchoco.png');
  
  const staff2 = new equipo(2, 'Julieta Aued Santi', 'Psicologa', 1200, 'img/Reccoco.png');

  const staff3 = new equipo(3, 'Rodrigo Olmedo', 'Musicoterapeuta', 1000, 'img/recchoco.png');
  
  const staff4 = new equipo(4, 'Paula Fernandez', 'Psicologa', 1200, 'img/Reccoco.png');

  // Array Equipo
  
  let arrayEquipo = [staff1,staff2,staff3,staff4];
  
  */