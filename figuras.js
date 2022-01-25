//COD del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
return ladoCuadrado*4;
} 

/* console.log("Perimetro Cuadrado: "+perimetroCuadrado+"cm"); */

function areaCuadrado(lado){
    return lado * lado;
}
/* console.log("Area Cuadrado: "+areaCuadrado+"cm^2"); */
console.groupEnd();

//COD del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
/* console.log("Perimetro Triangulo: "+perimetroTriangulo+"cm"); */

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
/* console.log("Area Triangulo: "+areaTriangulo+"cm^2"); */

console.groupEnd();

//COD del Circulos
console.group("Circulos")

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
   var diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd();