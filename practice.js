//CLASS 5 = WHAT IS LITERALS OBJECTS AND JS PROTOTYPES
function Pokemon(name, type, weaknesses, gender, numPokedex) {
  this.name = name;
  this.type = type;
  this.weaknesses = weaknesses;
  this.gender = gender;
  this.numPokedex = numPokedex;
}

Pokemon.prototype.Addweaknesses = function (types) {
  this.weaknesses.push(types);
};

const charizad = new Pokemon(
  "Charizadad",
  ["Fire", "Fly"],
  ["Water", "Electric"],
  "Male",
  6
);

charizad.Addweaknesses("Rock");

console.log(charizad);
