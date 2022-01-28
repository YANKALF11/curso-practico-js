const lista1 = [
    100,
    200,
    300,
    500,
];

/*PROMEDIO  */
function calcularMediaAritmetica(lista) {
    /* let sumaLista1 = 0;
    for (let i = 0; i < lista1.length; i++) {
        sumaLista1 = sumaLista1 + lista1[i];
    } */
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista1.length;
    return promedioLista;
}




/*  */
