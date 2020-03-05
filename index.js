const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')
conexao.connect((erro) =>{
    if(erro){
        console.log(erro)
    }else{
        console.log("conecatdo com banco sucesso!")

        Tabelas.init(conexao)

        const app = customExpress()
        app.use(serveStatic(__dirname));
  


        app.listen(8081, ()=> console.log("Servidor rodando na porta 8081"));
    }
})