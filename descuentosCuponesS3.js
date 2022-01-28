const coupons = [
    {name :"DC_es_Batman",
     discount: 15,
    },
    {name :"Gratis",
     discount: 30,
    },
    {name :"Mi_cupon",
     discount: 25,
    },
];



function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    
    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon){
        alert("El cupón " + userCouponValue + "no es válido")
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularDescuento(priceValue, descuento);
        ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}

function calcularDescuento(monto, descuento){
    const nuevoMonto = (descuento * monto)/100;
    return monto - nuevoMonto;
}