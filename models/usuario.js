const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const usuarioEsquema = new Esquema({
    id: String,
    email: String,
    direccion: String,
    ofreceServicio: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('usuarios', usuarioEsquema);