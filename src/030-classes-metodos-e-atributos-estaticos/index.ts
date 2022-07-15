/* eslint-disable no-mixed-spaces-and-tabs */
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(protected nome: string, protected ataque: number, protected vida: number){}

  atacar(personagem: Personagem){
  	this.bordao();
  	personagem.perderVida(this.ataque);
  }

  private perderVida(quantidade: number){
  	this.vida -= quantidade;
  	console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`);
  }

  protected abstract bordao(): void
}

export class Arqueira extends Personagem{
	protected emoji = '\u{1F9DD}';

	protected bordao(){
		console.log('Arqueira ao ATAQUEEEEE! ' + this.emoji);
	}
}

export class Monstro extends Personagem{
	protected emoji = '\u{1F9DF}';

	protected bordao(){
		console.log('GGRRRRRRRRRR... ' + this.emoji);
	}
}

const arqueira = new Arqueira('Arqueira', 50, 1000);
const monstro = new Monstro('Zumbi', 25, 500);

arqueira.atacar(monstro);
arqueira.atacar(monstro);
monstro.atacar(arqueira);