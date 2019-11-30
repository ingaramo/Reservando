var expect = chai.expect;
describe('RESERVAR HORARIO', function (){
    
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo',function(){
        listadoDeRestaurantes[0].reservarHorario('18:00');
        expect(listadoDeRestaurantes[0].horarios.indexOf('18:00')).to.equal(-1);
    });
    
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function (){
        var listadoDeHorariosOriginal = listadoDeRestaurantes[0].horarios 
        listadoDeRestaurantes[0].reservarHorario('20:00');
        expect(listadoDeRestaurantes[0].horarios).to.eql(listadoDeHorariosOriginal);
    })

    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual', function(){
        var listadoDeHorariosOriginal = listadoDeRestaurantes[0].horarios 
        listadoDeRestaurantes[0].reservarHorario();
        expect(listadoDeRestaurantes[0].horarios).to.eql(listadoDeHorariosOriginal);
    })
})

describe('OBTENER PUNTUACION', function (){

    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.',function (){
        expect(listadoDeRestaurantes[23].obtenerPuntuacion()).to.equal(6.8)
    },);

    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.',function(){
        expect(listadoDeRestaurantes[24].obtenerPuntuacion()).to.equal(0)
    });
});

describe('CALIFICAR ', function (){

    it('cuando se agrega una calificacion el arreglo de calif debe incrementarse en uno', function(){
        var length = listadoDeRestaurantes[24].calificaciones.length;
        listadoDeRestaurantes[24].calificar(5);
        expect(listadoDeRestaurantes[24].calificaciones.length).to.equal(length+1)
    });
    
    it('Cuando se intenta calificar  pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual', function(){
        var length = listadoDeRestaurantes[24].calificaciones.length;
        listadoDeRestaurantes[24].calificar(0);
        expect(listadoDeRestaurantes[24].calificaciones.length).to.equal(length)
    });

    it('Cuando se intenta calificar y se le pasa un valor negativo por parámetro a la función, el arreglo se mantiene igual', function(){
        var length = listadoDeRestaurantes[24].calificaciones.length;
        listadoDeRestaurantes[24].calificar(-1);
        expect(listadoDeRestaurantes[24].calificaciones.length).to.equal(length)
    });
    
    it('Cuando se intenta calificar y se le pasa un valor mayor a 10 por parámetro a la función, el arreglo se mantiene igual', function(){
        var length = listadoDeRestaurantes[24].calificaciones.length;
        listadoDeRestaurantes[24].calificar(11);
        expect(listadoDeRestaurantes[24].calificaciones.length).to.equal(length)
    });
});

describe('BUSCAR RESTAURANTE POR ID', function (){

    it('Cuando se busca un restaurant y se le pasa un id no valido por parametro retorna mensaje de error.',function (){
        expect(listado.buscarRestaurante(504) ).to.equal("No se ha encontrado ningún restaurant")
    });
    
    it('Cuando se busca un restaurant y no se le pasa un id por parametro retorna mensaje de error.',function (){
        expect(listado.buscarRestaurante() ).to.equal("No se ha encontrado ningún restaurant")
    });
    
    it('Cuando se busca un restaurant y se le pasa un id por parametro retorna el objeto restaurant.',function (){
        expect(listado.buscarRestaurante(1)).to.eql(listadoDeRestaurantes[0])
    });
});

describe('OBTENER RESTAURANTE (FILTROS)', function (){

    it('cuando se busca un restaurante sin poner ningun parametro, la funcion devuelve un arreglo vacio.',function (){
        expect(listado.obtenerRestaurantes()).to.eql([]);
    });

    it('cuando se busca un restaurante pasando solo un parametro invalido, la funcion devuelve un arreglo vacio.',function (){
        expect(listado.obtenerRestaurantes('novalido')).to.eql([]);
    });

    it('cuando se busca un restaurante pasando parametros validos, la funcion devuelve un arreglo con los restaurantes que cumplen las condiciones.',function (){
        expect(listado.obtenerRestaurantes("Asiática", "Londres", "15:00")).to.eql([listadoDeRestaurantes[1]]);
    });
});
//EN EL CALCULO DE ESTAS FUNCIONES, TOME COMO QUE LOS PORCENTAJES BRINDADOS EN EL ENUNCIADO SON SOBRE EL PRECIO BASE (no concuerdan con los tambien brindados resultados). PUNTUALMENTE EL CASO 1 DE CALCULAR.ADICIONALES()

describe('Comprueba el calculo del calculo de adicionales', function (){
    
    it('caso 1',function (){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.calcularAdicionales()).to.equal(280);
    });
    
    it('caso 2',function (){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva2.calcularAdicionales()).to.equal(0);
    });
});

describe('Comprueba el calculo de descuento total', function (){

    it('caso 1',function (){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.calcularDescuentos()).to.equal(630);
    });

    it('caso 2',function (){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva2.calcularDescuentos()).to.equal(200);
    });
});

describe('Comprueba el calculo de descuento por persona', function (){

    it('caso 1',function (){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.calcularDescuentosPorPersonas()).to.equal(280);
    });

    it('caso 2',function (){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva2.calcularDescuentosPorPersonas()).to.equal(0);
    });
});

describe('Comprueba el calculo de descuento por codigo', function (){

    it('caso 1',function (){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.calcularDescuentosPorCodigo()).to.equal(350);
    });

    it('caso 2',function (){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva2.calcularDescuentosPorCodigo()).to.equal(200);
    });
});

describe('CALCULAR PRECIO BASE RESERVA', function (){

    it('caso 1',function (){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.calcularPrecioBase()).to.equal(2800);
    });

    it('caso 2',function (){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva2.calcularPrecioBase()).to.equal(300);
    });
});

describe('CALCULAR PRECIO FINAL', function (){

    it('caso 1',function (){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.calcularPrecioFinal()).to.equal(2450);
    });

    it('caso 2',function (){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva2.calcularPrecioFinal()).to.equal(100);
    });
});

describe('calculo de sumatoria', function (){

    it('caso base arreglo [1,2,3,4]',function (){
        var array = [1,2,3,4];
        expect(sumatoria(array)).to.equal(10);
    });
    
    it('caso arreglo vacio ',function (){
        var array = [];
        expect(sumatoria(array)).to.equal(0);
    });
});

describe('calculo de promedio', function (){

    it('caso base arreglo [1,2,3,4]',function (){
        var array = [1,2,3,4];
        expect(promedio(array)).to.equal(2.5);
    });
    
    it('caso arreglo vacio ',function (){
        var array = [];
        expect(sumatoria(array)).to.equal(0);
    });
});

