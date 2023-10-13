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

const santiago = new Student("Santiago", 20, [
  "Curso de videoGames",
  "Curso de Personajes",
]);

console.log(natalia);
