let radio = 7;
let altura = 12;
let areaBase, areaLateral, areaTotal, volumen;

areaBase = Math.PI * Math.pow(radio, 2);
areaLateral = 2 * Math.PI * radio * altura;
areaTotal = 2 * areaBase + areaLateral ;
volumen = areaBase * altura;

console.log ("El área de la base del cilindro es :" + areaBase.toFixed(2));
console.log ("El área lateral del cilindro es :" + areaLateral.toFixed(2));
console.log ("El área total del cilindro es :" + areaTotal.toFixed(2));
console.log ("El volumen del cilindro es :" + volumen.toFixed(2));
