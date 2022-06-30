//funciona como um any mais seguro, pois para usar os valores, ele força fazer uma checagem de tipos

let x: unknown;

x = 1;
x = 'abc';
x = 100;
x = '100';

const y = 50;

//erro: console.log(x + y);

if (typeof x === 'number'){
	console.log(x + y);
}