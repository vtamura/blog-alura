const DAO = require('../DAO/DAO')

module.exports = {
    async insereUsuario(req, res) {
        try{ 
            const { nome, email, senha } = req.body
            const response = await DAO.insert(`INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`)
            return res.status === 200 ? res.json(response.body) : res.status(500).json(response.body)
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao listar Usuario.', erro: error })
        }
    },

    async listaUsuarios(req, res) {
        try{ 
            const response = await DAO.list(`SELECT * FROM usuario`)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao listar usuario.', erro: error })
        }
    },

    async deletaUsuario(req, res) {
        try {
            const { id } = req.params
            await DAO.delete(`DELETE FROM Usuario WHERE id_usuario = ${id}`)
            return res.status(200).json(`Usuario de id ${id} deletado.`)
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao deletar usuario.', erro: error })
        }
    }
}