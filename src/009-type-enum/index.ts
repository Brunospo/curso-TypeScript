//É uma estrutura não ordenada que utilizamos para colocar varios valores que precisamos enumerar

enum cores {
	vermelho ,
	azul
}

//ele junta automaticamente:
enum cores {
	roxo = 'roxo',
	//erro pois necessita de um inicializador: amarelo
	amarelo = 2

}

console.log(cores);