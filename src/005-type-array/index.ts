function somar(...args: Array<number>): number {
	return args.reduce((acc, valor) => acc + valor, 1);
}

const concatenaString: (...args: string[]) => string = (...args) => args.reduce((acc, valor) => acc + valor); //ou
//const concatenaString = (...args: string[]) => args.reduce((acc, valor) => acc + valor);

const toUpper = (...args: Array<string>) => args.map(a => a.toUpperCase());

const result = somar(1,2,3);
const result2 = concatenaString('a', 'b', 'c');
const result3 = toUpper('a', 'b', 'c');

console.log(result);
console.log(result2);
console.log(result3);