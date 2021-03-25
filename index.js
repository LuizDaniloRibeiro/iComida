const express = require('express')
require('dotenv').config() //Carrega as variaveis de ambiente
const InicializaMongoServer = require('./config/Db')
//Definindo as rotas da aplicaçao
const rotasCategoria = require('./routes/Categoria')

//Inicializamos o servidor MongoDB
InicializaMongoServer()


const app = express()
//Porta Default
const PORT = process.env.PORT
//Parse conteudo JSON
app.use(express.json())


app.get('/', (req, res) => {

    res.json({mensagem: "API iComida 100% funcional! ",
        versao: '1.0.1'})
})
/* Rotas da categorias */
app.use('/categorias', rotasCategoria)

app.listen(PORT, (req, res) => {
    console.log(`Servidor Web iiciado na porta ${PORT}`)
})


