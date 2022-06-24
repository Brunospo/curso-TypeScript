//usado para funções que nuncam retornam nada, geralmente usada para funções de erro

function criaErro(): never {
	throw new Error('Erro qualquer');
}

criaErro();