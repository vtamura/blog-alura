const DAO = require('../DAO/DAO')
const hash = require('../middleware/encriptaSenha')

module.exports = {
    async insereUsuario(req, res) {
        try{ 
            const { nome, email, senha } = req.body
            const senhaHash = await hash.gerarSenhaHash(senha)
            const response = await DAO.insert(`INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senhaHash}')`)
            return res.status(200).json(response.body)
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

    async listaUsuario(req, res) {
        const { id } = req.params
        try{ 
            const response = await DAO.list(`SELECT * FROM usuario WHERE id_usuario = ${id}`)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao listar usuario.', erro: error })
        }
    },

    async buscaUsuarioPorEmail(req, res) {
        const { email } = req.body
        try{ 
            const response = await DAO.list(`SELECT * FROM usuario WHERE email = '${email}'`)
            return response
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao listar usuario.', erro: error })
        }
    },

    login(req, res) {
        return res.send(204).send()
    },

    async deletaUsuario(req, res) {
        try {
            const { id } = req.params
            await this.listaUsuario(id)
            await DAO.delete(`DELETE FROM Usuario WHERE id_usuario = ${id}`)
            return res.status(200).json(`Usuario de id ${id} deletado.`)
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao deletar usuario.', erro: error })
        }
    }
}