console.log('Parte III - Prueba en JavaScript');
console.log('Punto 1')
console.log('------------------------------------------');

let notes = [];

const fillNotesAndCalculate = () => {
  for (let index = 0; index < 14; index++) {
    notes[index] = parseFloat((Math.random() * 5).toFixed(1));
  }
  console.log('Notas de los alumnos: ', notes);
  notes.sort((a, b) => a - b);
  console.log('Promedio: ', parseFloat((notes.reduce((total, num) => total + num) / notes.length).toFixed(1)))
  console.log('Mayor nota: ', notes[notes.length - 1]);
  console.log('Menor nota: ', notes[0]);
  console.log('Aprobados: ', notes.filter(elem => elem >= 3.0).length)
}

fillNotesAndCalculate();