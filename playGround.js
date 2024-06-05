class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    if (this.integrantes.some(inst => inst.instrumento === "Bateria")) {
      console.log('Ya existe un baterista');
    } else {
      this.integrantes.push(integranteNuevo)
    }
  }
}

//Crear clase Integrante
class Integrante {
  constructor({
    nombre,
    instrumento
  }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }

}

export {
  Banda,
  Integrante,
}


  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Bateria" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Santi", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Juan", instrumento: "Guitarra" }))
  
  
console.log(banda, Integrante);
