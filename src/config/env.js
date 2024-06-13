//se utiliza para manejar las variables de entorno de manera más fácil y segura.
require('dotenv').config()
//importa funcion para las variables
const { get } = require('env-var')

const envs = {
    PORT:get('PORT').required().asPortNumber(),
    PUBLIC_PATH:get('PUBLIC_PATH').default('public').asString()
}


module.exports={
    envs    
}