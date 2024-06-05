//  //Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

// Que sea de tipo string.
// Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
// Si no es un string no se cambia el valor de la propiedad name.
// La solución debería tener un input y output como los siguientes:

//Input
 
 class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }

    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito !== "string") {
        console.error('No se puede ')
      }
        var palabras = nuevoNombrecito.split(' ')
  
        for(var i=0; i< palabras.length; i++){
            palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
        }
        this._name = palabras.join(' ')
      
    }
  }
  const courseName = "curso de programación básica"
  const nombreMaysuculas = new Course({
      name: courseName,
  })
  
  console.log(nombreMaysuculas.name);


