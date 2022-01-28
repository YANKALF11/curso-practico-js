function calcularDescuento(monto, descuento){
    const nuevoMonto = (descuento * monto)/100;
    return monto - nuevoMonto;
}

const coupons = [
    "DC_es_Batman",
    "Gratis",
    "Mi_cupon",
];


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue){//compara si couponValue == coupons[position]
        case coupons[0]: //DC_es_Batman
            descuento = 15;
            break;
        case coupons[1]: //Gratis
            descuento = 30;
            break;
        case coupons[2]: //Mi_cupon
            descuento = 25;
            break;
    }

    const precioConDescuento = calcularDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


