const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const proveedorEsquema = new Esquema({
    idUsuario: String,
    idCategoria: String,
    descripcion: String,
    costoPromedio: Number,
    oferta:[{
        nombre: String,
        imagen: String,
        costo: Number
    }],
    imagen: String
});

module.exports = mongoose.model('proveedores', proveedorEsquema);