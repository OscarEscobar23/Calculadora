var nombres=['oscar','anaid','nallely','claudia'];
var vegetales= new Array('tomate','lechuga','zanahoria');
/*
console.log(nombres[3]);
console.log(vegetales[1]);

nombres[0]='jose';
vegetales[2]='nabo';
console.log(nombres[0]);
console.log(vegetales[2]); */

console.log(nombres,length);
for(var i=0;i <= nombres.length-1; i++){
        console.log(nombres[i]);
}
vegetales.forEach(function(elemento,indice){
        console.log(elemento,indice);
})