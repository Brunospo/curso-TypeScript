export class Database {
	private static database: Database;

	//O private não permite instanciar uma nova classe
	private constructor (private host: string, private user: string, private password: string){}

	static getDatabase(host: string, user: string, password: string): Database {
		if (Database.database) {
			console.log('Retornando instancia já criada');
			return Database.database;
		}

		console.log('Criando nova instancia');
		Database.database = new Database(host, user, password);
		return Database.database;
	}
}

/*Erro
  const teste = new Database('n', 'n', 'n'); 
*/

const db1 = Database.getDatabase('localhost', 'root', '12345');
console.log(db1);
const db2 = Database.getDatabase('localhost', 'root', '12345');
console.log(db2);
const db3 = Database.getDatabase('localhost', 'root', '12345');
console.log(db3);