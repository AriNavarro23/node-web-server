const express = require('express')
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public'} = options

    const app = express()
    // para poder usar middleware se usa palabra use ( en express )
    app.use(express.static(public_path)) // contenido esatatico que ponemos disponible
    //primero recibir peticion, en este caso la web
    app.get('*',(req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        //responder
        res.sendFile(indexPath)
    })
    //para escuchar por el puerto que quiero
    app.listen(port, () => {
        console.log(`escuchando en el puerto ${port} `);
    })
    
}

module.exports = {
    startServer
}

