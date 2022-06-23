function semRetorno(...args: string[]): void {
	console.log(args.join(' '));
}

const pessoa = {
	nome: 'Bruno',
	sobrenome: 'Bispo',

	exibirNome(): void {
		console.log(this.nome + ' ' + this.sobrenome);
	}
};

semRetorno('Bruno', 'Bispo');
pessoa.exibirNome();

export {pessoa}; //somente para o ts sair do script module