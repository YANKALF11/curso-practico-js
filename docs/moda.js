
const lista1 = [
    1,
    2,
    3,
    4,
    1,
    2,
    1,
    3,
    3,
    4,
    4,
    3,
    1,
];

const lista1Count = {};//Declaro un obj


lista1.map(
    function (elemento) { //para cada elemento de lista1
        if (lista1Count[elemento]) {//si ya existe en el obj el elemento como "clave"
            lista1Count[elemento] += 1;//sumar +1 al "valor" de la clave
        } else {//De otra forma, crear la clave elemento == 1.
            lista1Count[elemento] = 1; // recordar obj = {clave: valor}
        }
    }
)

//Object.entries: convertimos un obj a un Array
//sort: ordenamos,
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {//trae el primer y segundo areglo y los compara
        //por el indice[1]
        //valorAcumulado > nuevoValor = -1  Else=1, son iguales = 0
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];

/* Sort: 
Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos
 los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos 
 los navegadores (p.ej.  Mozilla en versiones que datan hasta el 2003) respetan esto.
Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a.
compareFunction(a, b) siempre debe retornar el mismo valor dado un par especifico de elementos a y b como 
sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido */