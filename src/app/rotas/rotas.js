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

        livroDao.lista()
                .then(livros =>  resp.marko(
                    require('../../app/rotas/views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
                ))
                .catch(erro => console.log(erro));
    })

    app.get('/livros/form', (req, resp) => {
        resp.marko(
            require('./views/livros/form/form.marko')
        )
    });

    app.post('/livros', (req, resp) => {
        console.log(req.body);
    } )
    
}




