//COD del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
return lado*4;
} 

/* console.log("Perimetro Cuadrado: "+perimetroCuadrado+"cm"); */

function areaCuadrado(lado){
    return lado * lado;
}
/* console.log("Area Cuadrado: "+areaCuadrado+"cm^2"); */
console.groupEnd();


//

function calcularPerimetroCuadrado(){
   const input = document.getElementById("lado"); 
   const value = input.value;
   const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("lado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}






//COD del triangulo.---------------------------------
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
/* console.log("Perimetro Triangulo: "+perimetroTriangulo+"cm"); */

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
/* console.log("Area Triangulo: "+areaTriangulo+"cm^2"); */

//Funcion Triangulo Isosceles
function alturaTrianguloIso(ladoA, ladoB, ladoBase){
    if(ladoA != ladoB){
        console.error("Loas lados a y b no son iguales");
    }else{
       const baseMenor = ladoBase / 2;
       const altura = Math.sqrt(ladoA*ladoA - baseMenor*baseMenor);
       return altura;
    }
    
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA,
    trianguloGrandeLadoB, trianguloGrandeLadoBase){
        if(trianguloGrandeLadoA != trianguloGrandeLadoB){
            console.error("Los lados a y b no son iguales");
        }else{
            const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
            const trianguloPequenoLadoBase = trianguloGrandeLadoA;

            const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
            const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

            const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

            const trianguloGrandeAltura = trianguloPequenoLadoA;
            return trianguloGrandeAltura;
        }
    }


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


