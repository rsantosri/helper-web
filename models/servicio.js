const mongoose = require('mongoose');
const Esquema = mongoose.Schema;

const servicioEsquema = new Esquema({
    id: String,
    idCliente: String,
    idProveedor: String,
    fechaOrden: Date,
    fechaServicio: Date,
    costo: Number,
    completado: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('servicios', servicioEsquema);