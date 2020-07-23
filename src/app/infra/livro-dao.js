class LivroDao{
    constructor(db){
        this._db = db;
    }

    lista(callback){
        this._db.all(
            'SELECT * FROM livros',
            (erro, resultado) => callback(erro, resultado)
                
        )
    }
}
module.exports = LivroDao;

// Como a classe fornecerá toda funcionalidade relativa
// aos livros no banco de dados, faz sentido que toda instancia
// de LivroDao tenha uma referencia ao banco de dados.