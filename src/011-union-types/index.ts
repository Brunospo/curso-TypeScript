//usado quando uma variavel, parametro ou retorno de função pode ter mais de um tipo

//Assim gera erro pois devemos "provar" que sabemos o que estamos fazendo:

/* const somaOuConcatena1 = (a: number | string, b: number | string) => {
	return a + b;
}; */

//Fazendo a checagem, porém o retorno também tem undefined pois não estamos cobrindo todos os casos:

const somaOuConcatena2 = (a: number | string, b: number | string) => {
	if (typeof a === 'number' && typeof b === 'number'){
		return a + b;
	}

	if (typeof a === 'string' && typeof b === 'string'){
		return a + b;
	}

	//aqui verificaria se a é number e b é string e vice versa para poder cobrir todos os casos
};

//Fazendo a checagem e cobrindo todos os casos:

const somaOuConcatena3 = (a: number | string, b: number | string) => {
	if (typeof a === 'number' && typeof b === 'number'){
		return a + b;
	}

	return `${a}${b}`;
};