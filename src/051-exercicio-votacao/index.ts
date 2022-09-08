interface VotationOption {
  option: string
}
interface NumberOfVotes {
  numberOfVotes: number
}

interface IVotation extends VotationOption, NumberOfVotes{}

export class Votation {
	private _votations: IVotation[] = [];

	constructor(public question: string ) {}

	addVotationOption(votationOption: VotationOption) {
		this._votations.push({...votationOption, numberOfVotes: 0});
	}

	vote(votationIndex: number) {
		if (!this._votations[votationIndex]) {
			return;
		}

		this._votations[votationIndex].numberOfVotes++;
	}

	get votations() {
		return this._votations;
	}
}

export class VoteApp {
	private votations: Votation[] = [];

	addVotation(votation: Votation) {
		this.votations.push(votation);
	}

	showVotations() {
		for(const votation of this.votations){
			console.log(votation.question);

			for(const option of votation.votations){
				console.log(`${option.option}: ${option.numberOfVotes}`);
			}
			console.log('------------------');    
		}
	}
}

const votation1 = new Votation('Qual sua cor preferida?');
votation1.addVotationOption({option: 'Vermelho'});
votation1.addVotationOption({option: 'Azul'});
votation1.addVotationOption({option: 'Amarelo'});
votation1.addVotationOption({option: 'Verde'});
votation1.vote(0);
votation1.vote(1);
votation1.vote(2);
votation1.vote(0);
votation1.vote(2);
votation1.vote(0);

const votation2 = new Votation('Qual seu animal preferio?');
votation2.addVotationOption({option: 'Cachorro'});
votation2.addVotationOption({option: 'Gato'});
votation2.addVotationOption({option: 'Papagaio'});
votation2.addVotationOption({option: 'Peixe'});
votation2.addVotationOption({option: 'Hamster'});
votation2.vote(3);
votation2.vote(1);
votation2.vote(2);
votation2.vote(4);
votation2.vote(2);
votation2.vote(0);

const app = new VoteApp();
app.addVotation(votation1);
app.addVotation(votation2);
app.showVotations();
