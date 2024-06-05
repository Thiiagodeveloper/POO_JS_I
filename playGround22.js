 class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name
    }
  
    set name(nuevoNombrecito) {
      // validation of type 
      if(typeof nuevoNombrecito !== "string"){
        throw new Error('El nombre del curso debe ser una cadena')
      }
      var palabras = nuevoNombrecito.split(" ")
      for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].CharA;
        
      }
    }
  }

const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})

console.log(nombreMaysuculas.name);
console.log(palabras);

let cadena = "Hola mundo";
let resultado = cadena.split(" ");
console.log(resultado); // ["Hola", "mundo"]