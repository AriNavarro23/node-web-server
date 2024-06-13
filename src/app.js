import { envs } from './config/env.js'
//web server = const { envs } = require('./config/env')
import { startServer  } from './server/server.js'
//web server = const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion agnostica autocomvocada
//agnostica porque no tiene nombre
//autoconvocada porque la ejecutamos con parentesis
//la hago asi porque quiero que sea asincrona
(async() =>{
    main()
})()