const { Sequelize, QueryTypes } = require('sequelize')

const db_name = process.env.DB_NAME
const db_username = process.env.DB_USERNAME
const db_password = process.env.DB_PASSWORD
const db_host = process.env.DB_HOST
const db_port = process.env.DB_PORT

const sequelize = new Sequelize(db_name, db_username, db_password, {
    host: db_host,
    port: db_port,
    dialect: 'mysql'
})

module.exports = {
    connect() {
        try {
            sequelize.authenticate()
            console.log('Autenticação com o banco de dados realizada com sucesso.')
        } catch(error) {
            console.log('Não foi possível conectar com o banco de dados.', error)
        }
    },

    async list(query) {
        try{
            sequelize.authenticate()
            try {
                const result = await sequelize.query(query, { type: QueryTypes.SELECT})
                return result
            } catch(error) {
                return { message: 'Erro ao realizar query.', erro: error }
            }
        } catch(error) {
            return { message: 'Erro ao conectar no banco.', erro: error }
        }
    },

    async insert(query) {
        try{
            sequelize.authenticate()
            try {
                const result = await sequelize.query(query, { type: QueryTypes.INSERT})
                return {status: 200, body: result}
            } catch(error) {
                return { message: 'Erro ao realizar query.', erro: error }
            }
        } catch(error) {
            return { message: 'Erro ao conectar no banco.', erro: error }
        }
    },

    async update(query) {
        try{
            sequelize.authenticate()
            try {
                const result = await sequelize.query(query, { type: QueryTypes.UPDATE})
                return {status: 200, body: result}
            } catch(error) {
                return { message: 'Erro ao realizar query.', erro: error }
            }
        } catch(error) {
            return { message: 'Erro ao conectar no banco.', erro: error }
        }
    },

    async delete(query){
        try{
            sequelize.authenticate()
            try {
                const result = await sequelize.query(query, { type: QueryTypes.DELETE})
                return {status: 200, body: result}
            } catch(error) {
                return { message: 'Erro ao realizar query.', erro: error }
            }
        } catch(error) {
            return { message: 'Erro ao conectar no banco.', erro: error }
        }
    }
}