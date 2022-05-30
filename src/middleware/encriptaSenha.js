const bcrypt = require('bcryptjs')

module.exports = {
    gerarSenhaHash(senha) {
        return bcrypt.hash(senha, 12)
    }
}