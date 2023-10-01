const express = require('express');
const route = express.Router();
const ProductoController = require('../controllers/productoController');


//ruta traer todos productos
route.get('/', ProductoController.getAllProductos);
//ruta para traer producto por id
route.get('/:id', ProductoController.getAllProductoById);
//ruta para crear producto
route.post('/', ProductoController.createProducto);
//ruta para actualizar producto
route.put('/:id', ProductoController.updateProducto);
//ruta para eliminar producto
route.delete('/:id', ProductoController.deleteProducto);









module.exports = route;


