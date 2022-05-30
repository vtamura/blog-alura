const bcrypt = require('bcryptjs')
const passport = require('passport')
const usuarioController = require('../controller/usuarioController')
const LocalStrategy = require('passport-local').Strategy

module.exports = function(passport) {
    passport.use( 
        new LocalStrategy({
            usernameField: 'email',
            session: false,
            passReqToCallback: true
        }, async (req, email, senha, done) => {
            try {
                const usuario = await usuarioController.buscaUsuarioPorEmail({email: email})
                return done(null, usuario, {'message': 'Usuário autenticado'})
            } catch(error) {
                return done(null, false, {'message': 'Usuário ou senha incorretos.'})
            }
        })
    )
    
    function verificaUsuario(usuario) {
        if(!usuario) {
            throw new Error('Não existe usuário com esse email')
        }
    }
    
    async function verificaSenha(senha, senhaHash) {
        const senhaValida = await bcrypt.compare(senha, senhaHash)
        if(!senhaValida) {
            throw new Error('Email ou senha inválidos.')
        }
    }
}
