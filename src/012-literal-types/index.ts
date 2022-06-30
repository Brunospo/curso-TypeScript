//tipo number
let g = 10; //eslint-disable-line

//tipo literal 10
const num = 10;

//fazendo a mesma coisa acima so que com let:
const s: 10 = 10; //eslint-disable-line
const z = 10 as const;

//É bastante usado para evitar alteração de valores em objetos:
const objeto = {
	nome: 'Teclado' as const,
	valor: 230
};

//Exemplo em funçoes:
const exibeCor = (cor: 'Amarelo' | 'Vermelho' | 'Azul') => {
	return cor;
};