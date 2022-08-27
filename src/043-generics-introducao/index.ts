type CallbackFn <T> = (value: T,	index?: number,	array?: T[]) => boolean

const meuFilter = <T>(array: T[], callback: CallbackFn<T>): T[] => {
	const novoArray = [];

	for (let index = 0; index < array.length; index++) {
		if(callback(array[index])){
			novoArray.push(array[index]);
		}		
	}

	return novoArray;
};

const arr = [1,2,3,4,5];
const arrFiltrado = meuFilter(arr, (e) => e >= 3);
console.log(arrFiltrado);
const arr2 = [1,2,3,4,5, 'a'];
const arrFiltrado2 = meuFilter(arr2, (e) => e >= 3 || e === 'a');
console.log(arrFiltrado2);
