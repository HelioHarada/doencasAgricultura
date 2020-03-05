const conexao = require("../infra/conexao")

class Doenca{

    create(doenca, res){
        const sql = 'INSERT INTO Doencas SET ?'

        conexao.query(sql, doenca, (error,resultado) => {
            if(error){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    list(res){
        const sql = 'SELECT * FROM Doencas'

        conexao.query(sql, (error, resultado) => {
            if(error){
                res.status(400).json(error)
            }else{
                console.log(resultado)
                res.status(200).json(resultado)
            }
        })
    }

    listById(id, res){
        const sql = `SELECT * FROM Doencas WHERE id=${id}`
        

        conexao.query(sql, (error, resultado) => {
            if(error){
                res.status(400).json(error)
            }else{
                console.log(resultado)
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Doenca