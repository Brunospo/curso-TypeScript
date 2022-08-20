const coresObj = {
	vermelho: 'red',
	verde: 'green',
	azul: 'blue'
};

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
	console.log(cores[cor]);
}

traduzirCor('azul', coresObj);