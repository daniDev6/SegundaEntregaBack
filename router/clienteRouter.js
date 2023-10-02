const express = require('express');
const route = express.Router();
const ClienteController= require('../controllers/clienteController');



//ruta traer todos los clientes
route.get('/', ClienteController.getAllClientes);
//ruta para traer cliente por id
route.post('/email', ClienteController.getClienteById);
//ruta para crear cliente
route.post('/', ClienteController.crearCliente);
//ruta para actualizar cliente
route.put('/:id', ClienteController.updateCliente);
//ruta para eliminar Cliente
route.delete('/:id', ClienteController.deleteCliente);





module.exports = route;










