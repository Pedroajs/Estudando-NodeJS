const db = require('../../config/database')
const LivroDao = require('../infra/livro-dao')
module.exports = (app) =>{

    app.get('/', (req, resp) =>{
        resp.send(`
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Minha lista</h1>
                </body>
            </html>
        
        `)
    });

    app.get('/livros', (req, resp) => {
        const livroDao = new LivroDao(db);

        livroDao.lista((erro, resultado)=> {
            resp.marko(
                require('../../app/rotas/views/livros/lista/lista.marko'),
                {
                    livros: resultado
                }
            )
        }
        )

        // lista((erro, resultado)=>{
        //     resp.marko(
        //         require('../app/views/livros/lista/lista.marko'),
        //         {
        //             livros: resultado
        //         }
        //     )
        // })
  
    })
}




