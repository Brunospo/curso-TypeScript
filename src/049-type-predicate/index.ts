function isNumber (value: unknown): value is number{
	return typeof value === 'number';
}

function soma<T>(...args: T[]): number{
	const result = args.reduce((sum, value) => {
		if (isNumber(sum) && isNumber(value)) {
			return sum + value;
		}

		return sum;
	}, 0);

	return result;
}

console.log(soma(1,2,3,4));
console.log(soma('a','b','c'));
console.log(soma(1,2,3, 'a')); //erro
console.log(soma(...[1,2,3, 'a'])); //outra maneira para fazer isso