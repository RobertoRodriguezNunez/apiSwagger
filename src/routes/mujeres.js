var router = require('express').Router()
const mujeres = new Map();

mujeres.set("1", "María García");
mujeres.set("2", "Ana Rodríguez");
mujeres.set("3", "Isabel Fernández");
mujeres.set("4", "Lucía González");
mujeres.set("5", "Sofía Martínez");
mujeres.set("6", "Marta Pérez");
mujeres.set("7", "Elena López");
mujeres.set("8", "Rosa Sánchez");
mujeres.set("9", "Carmen Romero");
mujeres.set("10", "Julia Ortiz");
mujeres.set("11", "Teresa Jiménez");
mujeres.set("12", "Clara Alonso");
mujeres.set("13", "Beatriz Moya");
mujeres.set("14", "Emilia Navarro");
mujeres.set("15", "Dolores Moreno");
mujeres.set("16", "Esther Rodríguez");
mujeres.set("17", "Verónica Castro");
mujeres.set("18", "Aurora Sanz");
mujeres.set("19", "Laura Díaz");
mujeres.set("20", "Miriam Pérez");
mujeres.set("21", "Silvia Gómez");
mujeres.set("22", "Alba Moreno");
mujeres.set("23", "Adriana García");
mujeres.set("24", "Mercedes Sánchez");
mujeres.set("25", "Concepción Martínez");
mujeres.set("26", "Rita Fernández");
mujeres.set("27", "Alicia Ortiz");
mujeres.set("28", "Carlota González");
mujeres.set("29", "Esperanza Romero");
mujeres.set("30", "Elvira López");
mujeres.set("31", "Fátima Rodríguez");
mujeres.set("32", "Inés Jiménez");
mujeres.set("33", "Irene Díaz");
mujeres.set("34", "Juliana Pérez");
mujeres.set("35", "Lorena Gómez");
mujeres.set("36", "Marisol Moreno");
mujeres.set("37", "Nuria García");
mujeres.set("38", "Olga Sánchez");
mujeres.set("39", "Patricia Martínez");
mujeres.set("40", "Ramona Fernández");
mujeres.set("41", "Raquel Ortiz");
mujeres.set("42", "Rebeca González");
mujeres.set("43", "Rocío Romero");
mujeres.set("44", "Sara López");
mujeres.set("45", "Sofía Rodríguez");
mujeres.set("46", "Julia López");
mujeres.set("47", "Susana Jiménez");
mujeres.set("48", "Catalina Domínguez");
mujeres.set("49", "María de la Paz Vázquez");
mujeres.set("50", "Agueda Ruiz");

let id=50;

router.get('/:id', function(req, res) {
  res.json({ message: mujeres.get(req.params.id) })
})

router.get('/', function(req, res) {
    array = Array.from(mujeres, ([name, value]) => ({ name, value }));
    console.log(array);
    res.json(array)
})

router.post('/:name', function(req, res) {
  id++;
  mujeres.set(id.toString(), req.params.name);
  res.json({ message: 'Se ha añadido una nueva mujer con el nombre: '+req.params.name });
});

router.put('/:id/:name', function(req, res) {
  mujeres.set(req.params.id, req.params.name);
  res.json({ message: 'Se actualizó el hombre con id ' + req.params.id + ' a ' + req.params.name})
})

router.delete('/:id', function(req, res) {
  mujeres.delete(req.params.id);
  res.json({ message: 'Se eliminó la mujer con id ' + req.params.id})
})


module.exports = router