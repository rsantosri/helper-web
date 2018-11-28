const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const categoriaEsquema = new Esquema({
    id: String,
    nombre: String,
    imagen: String,
});

module.exports = mongoose.model('categorías', categoriaEsquema);