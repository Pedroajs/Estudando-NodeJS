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
    resp.send(`
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Minha lista</h1>
                    <ul>
                        <li>Cavernas de Aço</li>
                        <li>O Sol desvelado</li>
                        <li>Robôs da Alvorada</li>
                    </ul>
                </body>
            </html>
        
        `)
    })
}




