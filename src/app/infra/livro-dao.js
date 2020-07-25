class LivroDao{
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject)=>{
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultado) =>{
                    if (erro) return reject('não foi possível listar os livros');

                    return resolve(resultado);
                } 
            )
        })
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                INSERT INTO LIVROS(
                    titulo, 
                    preco,
                    descricao
                ) valus(?, ?, ?)
                `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                erro =>{
                    if (erro) return reject('Não foi possível adicionar livro');
                    
                    resolve();
                }  
            )
        })
    }
}
module.exports = LivroDao;

// Como a classe fornecerá toda funcionalidade relativa
// aos livros no banco de dados, faz sentido que toda instancia
// de LivroDao tenha uma referencia ao banco de dados.