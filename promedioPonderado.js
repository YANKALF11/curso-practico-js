const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

//Multiplicar cada número de la lista por su peso
const notesWithCredit = notes.map(function
    (noteObject){
    return noteObject.note * noteObject.credit;
    //Retorna un arreglo[20, 40, 35]
});

//Sumar todos los elementos del arreglo de elementos multiplicados
//por su peso
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
        //Retorna 95 = sum
    }
);

//Sumar todos los pesos (creditos)
const credits = notes.map(function (noteObject){
    return noteObject.credit;
    //Retorna un arr de creditos [2, 5, 5]
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
        //Retorna la sum de creditos = 12
    }
);

//Hacer la división entre ambas "Sumas"
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
    //PromedioPonConCreditos = 95 / 12 = 7.91666


///////Promedio Aritmetico---rpta: 8.333333------------------------

//Creamos un arr solo con las notas
const arrNotas = notes.map(function (noteObject){
    return noteObject.note;
});

//Sumamos las notas y los dividimos con el # de materias
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
