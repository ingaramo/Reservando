let Reserva = function (horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento){
    this.horario = horario;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
};

let codigosDeDescuento = ['DES15','DES200','DES1'];

Reserva.prototype.calcularPrecioBase = function() {
    let precioBase = this.cantidadDePersonas * this.precioPorPersona;
    return precioBase    
};

Reserva.prototype.calcularPrecioFinal = function (){
    let precioFinal = this.calcularPrecioBase() + this.calcularAdicionales() - this.calcularDescuentos();
    return precioFinal
};

Reserva.prototype.calcularAdicionales = function (){
    let porcentajeAdicional = 0; 
    if(this.horario.getHours() < 22 && this.horario.getHours() > 19 && 
    this.horario.getHours() < 15 && this.horario.getHours() > 12 ) {
        porcentajeAdicional = 5
    };

    if (this.horario.getDay() > 3){
        porcentajeAdicional = porcentajeAdicional + 10 ;
    }
    let adicional = this.calcularPrecioBase() / 100 * porcentajeAdicional;
    return adicional

};

Reserva.prototype.calcularDescuentosPorPersonas = function (){
    let porcentaje = 0;
    let descuentosPorPersonas ; 
    if(this.cantidadDePersonas < 7 && this.cantidadDePersonas > 3 ){
        porcentaje = 5;
    }
    else if (this.cantidadDePersonas > 6 && this.cantidadDePersonas < 9 ){
        porcentaje = 10;
    }
    else if (this.cantidadDePersonas > 8 ){
        porcentaje = 15;
    }

    descuentosPorPersonas = this.calcularPrecioBase() / 100 * porcentaje;
    return descuentosPorPersonas
};

Reserva.prototype.calcularDescuentos = function(){
    return this.calcularDescuentosPorCodigo() + this.calcularDescuentosPorPersonas();
};

Reserva.prototype.calcularDescuentosPorCodigo = function(){

    if (this.codigoDeDescuento === codigosDeDescuento[0]){
        descuento = this.calcularPrecioBase() / 100 * 15;
        return descuento
    }
    else if (this.codigoDeDescuento === codigosDeDescuento[1]){
        descuento =  200
        return descuento
    }
    else if (this.codigoDeDescuento === codigosDeDescuento[2]){
        descuento = this.precioPorPersona;
        return descuento
    }

}