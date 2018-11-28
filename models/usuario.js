const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const usuarioEsquema = new Esquema({
    id: String,
    email: String,
    uuid: String
});

module.exports = mongoose.model('usuarios', usuarioEsquema);