const DAO = require('../DAO/DAO')

module.exports = {
    async inserePost(req, res) {
        try{ 
            const { titulo, conteudo } = req.body
            const response = await DAO.insert(`INSERT INTO post (titulo, conteudo) VALUES ('${titulo}', '${conteudo}')`)
            return res.status === 200 ? res.json(response.body) : res.status(500).json(response.body)
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao listar post.', erro: error })
        }
    },

    async listaPosts(req, res) {
        try{ 
            const response = await DAO.list(`SELECT * FROM post`)
            return res.status(200).json(response)
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao listar post.', erro: error })
        }
    },

    async deletaPost(req, res) {
        try {
            const { id } = req.params
            await DAO.delete(`DELETE FROM post WHERE id_post = ${id}`)
            return res.status(200).json(`Post de id ${id} deletado.`)
        } catch(error) {
            return res.status(500).json({ message: 'Erro ao deletar post.', erro: error })
        }
    }
}