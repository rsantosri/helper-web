const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const clienteEsquema = new Esquema({
    idUsuario: String,
    direcciones: [{
        calle: String,
        numero: Number,
        colonia: String,
        ciudad: String,
        estado: String,
        pais: String
    }],
    ofreceServicio: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('clientes', clienteEsquema);