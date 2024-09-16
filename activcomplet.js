var precios=[200, 230, 300, 345, 400, 460, 500]


var Aumento = precios.map(precio => precio * 1.15);
console.log("Precios aumentados:"+ Aumento);


var pIguales = Aumento.filter(precio => precio === 230);

var pEntre300y500 = Aumento.filter(precio=> precio >300 && precio<500);

var pmayor400 = Aumento.filter(precio=> precio > 400);

var pmenor200= Aumento.filter(precio=> precio < 200);

var pdistinto345= Aumento.filter(precio=>precio !== 345);

var pNo460 = Aumento.filter(precio => precio !== 460);

var pFiltrados500OMenores200 = Aumento.filter(precio => precio > 500 || precio < 200);

var pFiltrados345 = Aumento.filter(precio => precio === 345);



