const array1: Array<number> = [1,2,3,4,5];
const array2: number[] = [1,2,3,4,5];

console.log(array1, array2);

// retorna uma Promisse<number>
async function promisse() {
	return 1;
}

//retorna uma Promisse<unknown>
function minhaPromisse1 (){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(1);
		}, 1000);
	});
}

//da problema
minhaPromisse1().then(value => value + 1);

function minhaPromisse2 (): Promise<number> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(1);
		}, 1000);
	});
}

minhaPromisse2().then(value => value + 1);

export default 1;