export class CarrinhoDeCompras {
	private produtos: Produto[] = [];

	inserirProduto(...produtos: Produto[]) {
		for (const produto of produtos) {
			this.produtos.push(produto);
		}
	}

	quantidadeProdutos() {
		return this.produtos.length;
	}

	valorTotal() {
		return Math.floor(this.produtos.reduce((soma, produto) => soma + produto.preco, 0));
	}
}

export class Produto {
	constructor(public nome: string, public preco: number){}
}

const produto1 = new Produto('Camisa preta', 59.9);
const produto2 = new Produto('Caneca', 29.1);
const produto3 = new Produto('Lapis', 2.8);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(`R$ ${carrinhoDeCompras.valorTotal()},00`);