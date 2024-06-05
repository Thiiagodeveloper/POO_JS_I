//Literal Object
const natalia = {
  name: "natalia",
  age: 20,
  cursosAprobados: ["Curso Hhtml y css", "Curso Practico Hhtml y css"],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};
//Hacer que natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de responsve design");

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  //   this.aprobarCurso = function (nuevoCurso) {
  //     this.cursosAprobados.push(nuevoCurso);
  //   };
}
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const santiago = new Student(
  "Santiago", 20, 
  [
    "Curso de videoGames",
    "Curso de Personajes",
  ]);

console.log(santiago);

//Prototipos con la sintaxis de class

class Student2 {
    constructor({name, age, cursosAprobados = [], email, }) {
      this.name = name;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
      this.email = email;
    }

    aprobarCurso(nuevoCurso){
      this.cursosAprobados.push(nuevoCurso)
    }
}


const miguelito = new Student2({
  email:"miguelito@platzi.com",
  age: 20,
  name: 'Miguel',
})

