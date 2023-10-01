const mongoose = require('mongoose');

const PedidosSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    descripcion: String,
    precio: String

}, { collection: 'pedidos' });

const Pedido = mongoose.model('pedido', PedidosSchema);

module.exports = Pedido;