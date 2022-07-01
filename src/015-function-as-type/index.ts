//Exemplo de uso em callback

type MapStringCallback = (item: string) => string;

const map2 = (array: string[], callbackFn: MapStringCallback) => {
	const newArray = [];

	for (let i = 0; i < array.length; i++) {
		newArray.push(callbackFn(array[i]));
	}

	return newArray;
};

const abc = ['a', 'b', 'c'];
console.log(map2(abc, item => item.toUpperCase()));