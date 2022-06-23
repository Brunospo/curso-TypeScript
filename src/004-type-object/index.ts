//Essa declaração permite:
const objA = {
	chaveA: 'a',
	chaveB: 'B'
};

console.log(objA.chaveA);
objA.chaveB = 'b';
//Não permite: objA.chaveC: 'c';

//Para permitir, devemos declarar assim:
const objB: {
	chaveA: string
	chaveB: string
	[key: string]: unknown
} = {
	chaveA: 'a',
	chaveB: 'b'
};

objB.chaveC = 'c';

//Para evitar alteração de valores do obj podemos usar o redonly:
const objC: {
	readonly chaveA: string
	chaveB: string
} = {
	chaveA: 'a',
	chaveB: 'b'
};

//erro: objC.chaveA = 'c';