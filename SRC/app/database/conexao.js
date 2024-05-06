import mysql2 from 'mysql2';

const conexao = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '35351790Si@',
    database: "dbcopa"
})

conexao.connect()

const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, selecao, (erro, resultado) => {
            if(erro) return reject('Não foi possível cadastrar')

            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default conexao