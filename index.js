const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')
const serveStatic = require('serve-static')
const port = process.env.PORT || 8081;
conexao.connect((erro) =>{
    if(erro){
        console.log(erro)
    }else{
        console.log("conecatdo com banco sucesso!")

        Tabelas.init(conexao)

        const app = customExpress()
        app.use(serveStatic(__dirname));
  


        app.listen(port, ()=> console.log("Servidor rodando na porta :" + port));
    }
})