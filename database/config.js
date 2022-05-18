const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado")
    } catch (error) {
        console.error("Erro: ", error.message)
    }
}

module.exports = {
    connect
}