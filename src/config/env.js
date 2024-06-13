//se utiliza para manejar las variables de entorno de manera más fácil y segura.
import env from 'dotenv'
env.config()
//importa funcion para las variables
import envar from 'env-var'
// web server = const { get } = require('env-var')

export const envs = {
    PORT:envar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH:envar.get('PUBLIC_PATH').default('public').asString()
}


//web server = module.exports={envs}