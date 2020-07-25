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

    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                SELECT *
                FROM livros
                WHERE id = ?
                `,
                [id],
                (erro, livro) =>{
                    if (erro) return ('Não foi possível buscar livro pelo id');
                    return resolve(livro);
                }
            )
        })
    }

    atualiza(livro){
        return new Promise((resolve, reject) =>{
            this._db.run(
                `
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?,
                WHERE id = ?
                `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao,
                    livro.id
                ],
                erro =>{
                    if (erro) return reject ("Não foi possível atualizar o livro");
                    resolve();
                }
            )
        })
    }

    remove(id){
        return new Promise((resolve, reject)=>{
            this._db.run(
                `
                DELETE *
                FROM livros
                WHERE id = ?
                `,
                [id],
                erro =>{
                    if(erro) return reject('Não foi possível exluir livro');
                    return resolve();
                }
            )
        })
    }
}
module.exports = LivroDao;

// Como a classe fornecerá toda funcionalidade relativa
// aos livros no banco de dados, faz sentido que toda instancia
// de LivroDao tenha uma referencia ao banco de dados.