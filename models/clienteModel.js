const mongoose = require('mongoose');

const ClientesSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String
}, { collection: 'clientes' });

const Cliente = mongoose.model('cliente', ClientesSchema);

module.exports = Cliente;