class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarDoenca()
    }

    criarDoenca(){
        const sql = 'CREATE TABLE IF NOT EXISTS Doencas (id int NOT NULL AUTO_INCREMENT, nome varchar(500) NOT NULL, descricao varchar(500) NOT NULL, categoria varchar(150) NOT NULL, imagem varchar(500),recomendacao varchar(500), PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log("tabelas Doenca criada com sucesso")
            }
        })
    }
}

module.exports = new Tabelas