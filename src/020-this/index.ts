//Tipando o this

//erros:

export function teste() {
	console.log(this);
}

teste();

//Temos que tipar o this assim
export function teste2(this: Date, argumento1: string) {
	console.log(this);
	console.log(argumento1);
}

teste2(new Date(), 'a');
teste2(new Date());
teste2('a');

//maneira correta

export function teste3(this: Date, argumento1: string) {
	console.log(this);
	console.log(argumento1);
}

teste3.call(new Date(), 'x');
//ou (so muda a maneira de passar os argumentos)
teste3.apply(new Date(), ['x']);