var router = require('express').Router()
const hombres = new Map();

hombres.set("1", "Juan Perez");
hombres.set("2", "Pedro García");
hombres.set("3", "Miguel Rodriguez");
hombres.set("4", "Carlos Martinez");
hombres.set("5", "José Fernandez");
hombres.set("6", "Antonio Gonzalez");
hombres.set("7", "David López");
hombres.set("8", "Javier Sánchez");
hombres.set("9", "Rafael Hernández");
hombres.set("10", "Francisco Díaz");
hombres.set("11", "Diego Moreno");
hombres.set("12", "Sergio Pérez");
hombres.set("13", "Luis Castro");
hombres.set("14", "Alberto Jiménez");
hombres.set("15", "Mario Gómez");
hombres.set("16", "Manuel González");
hombres.set("17", "Andrés Fernández");
hombres.set("18", "Jorge García");
hombres.set("19", "Lucas Ortiz");
hombres.set("20", "Alejandro Rodríguez");
hombres.set("21", "José Manuel Silva");
hombres.set("22", "Daniel Ruiz");
hombres.set("23", "Ángel Vásquez");
hombres.set("24", "Isaac Muñoz");
hombres.set("25", "Enrique Romero");
hombres.set("26", "Juan Carlos Martínez");
hombres.set("27", "Juan José García");
hombres.set("28", "Ricardo López");
hombres.set("29", "Julián Fernández");
hombres.set("30", "Pablo Hernández");
hombres.set("31", "Mauricio Sánchez");
hombres.set("32", "Eduardo Rodriguez");
hombres.set("33", "Marcos González");
hombres.set("34", "Víctor Ortiz");
hombres.set("35", "Rubén García");
hombres.set("36", "Gerardo López");
hombres.set("37", "Federico Pérez");
hombres.set("38", "Gustavo Martínez");
hombres.set("39", "Esteban Ruiz");
hombres.set("40", "Raúl Fernández");
hombres.set("41", "Roberto Hernández");
hombres.set("42", "Santiago González");
hombres.set("43", "Adrián Rodriguez");
hombres.set("44", "Tomás García");
hombres.set("45", "Salvador Ortiz");
hombres.set("46", "Joaquín Sánchez");
hombres.set("47", "Oscar Muñoz");
hombres.set("48", "Aitor Fernández");
hombres.set("49", "Álvaro García");
hombres.set("50", "Francisco Gómez");

let id=50;

router.get('/:id', function(req, res) {
var nombre = hombres.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe ningún hombre con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(hombres, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/:name', function(req, res) {
  id++;
  hombres.set(id.toString(), req.params.name);
  res.json({ message: 'Se ha añadido un nuevo hombre con el nombre: '+req.params.name });
});

router.put('/:id(\\d+[^/]*):name', function(req, res) {
  let name = req.params.id.replace(/^\d+/, '') + decodeURIComponent(req.params.name);
  hombres.set(req.params.id.match(/^(\d+)/)[0], name);
  res.json({ message: 'Se actualizó el hombre con id ' + req.params.id.match(/^(\d+)/)[0] + ' a ' + name})
})

router.delete('/:id', function(req, res) {
  hombres.delete(req.params.id);
  res.json({ message: 'Se eliminó al hombre con id ' + req.params.id})
})


module.exports = router