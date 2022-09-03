type ObterChaveFn = <O, K extends keyof O> (objeto: O, chave: K) => O[K]

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
	nome: 'cachorro',
	cor: 'marrom',
	qtdPatas: 4
};

const result = obterChave(animal, 'cor');
console.log(result);

export default 1;