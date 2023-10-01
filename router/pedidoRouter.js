const express = require('express');
const route = express.Router();
const PedidoController= require('../controllers/pedidoController');


// const {requiredScopes}=require('express-oauth2-jwt-bearer')





//ruta para traer todos los pedidos
route.get('/', PedidoController.getAllPedidos);

//ruta para traer pedidos por id
route.get('/:id', PedidoController.getPedidoById);

//ruta para crear pedidos
route.post('/', PedidoController.createPedido);
//ruta para actualizar pedido
route.put('/:id', PedidoController.updatePedido);
//ruta para eliminar pedido
route.delete('/:id', PedidoController.deletePedido);





module.exports = route;

