
function calcularDescuento(monto, descuento){
    const nuevoMonto = (descuento * monto)/100;
    return nuevoMonto;
}

function calcularDescuentosTotales(){
    const monto = document.getElementById("inputMonto");
    const descuento = document.getElementById("inputDescuento");

    const montoValue = monto.value;
    const descuentoValue = descuento.value;
    const msm = calcularDescuento(montoValue, descuentoValue);
    const descuentoDecimal = document.getElementById("parrafo");
    descuentoDecimal.innerText = `El descuento de ${descuentoValue}% equivale a ${msm}`;

}