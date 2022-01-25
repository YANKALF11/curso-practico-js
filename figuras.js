//COD del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Lado cuadrado mide:"+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("Perimetro Cuadrado: "+perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("Area Cuadrado: "+areaCuadrado+"cm^2");
console.groupEnd();

//COD del triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;


console.log(
"Lados del triangulo miden: "
+ladoTriangulo1+"cm "
+ladoTriangulo2+"cm "
+ladoTriangulo3+"cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo: "+alturaTriangulo+"cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTriangulo3;
console.log("Perimetro Triangulo: "+perimetroTriangulo+"cm");

const baseTriangulo = ladoTriangulo2;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("Area Triangulo: "+areaTriangulo+"cm^2");

console.groupEnd();

//COD del Circulos
console.group("Circulos")
const radio = 4;
const diametroCirculo = radio * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radio * radio) * PI;
console.log("Radio circulo: "+radio+"cm");
console.log("PI:" + Math.PI);

console.log("Perimetro Circulo: "+perimetroCirculo+"cm");

console.log("Area Circulo: "+areaCirculo+"cm^2");

console.groupEnd();