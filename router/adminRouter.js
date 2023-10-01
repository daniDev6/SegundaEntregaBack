const express = require('express');
const route = express.Router();
const AdminController = require('../controllers/adminController');


// const {requiredScopes}=require('express-oauth2-jwt-bearer')





//ruta para traer todos los adminitradores
route.get('/', AdminController.getAllAdmins);

//ruta para traer Admin por id
route.get('/:id', AdminController.getAdminById);

//ruta para crear Admin
route.post('/', AdminController.createAdmin);
//ruta para actualizar adminitrador
route.put('/:id', AdminController.updateAdmin);
//ruta para eliminar adminitrador
route.delete('/:id', AdminController.deleteAdmin);


module.exports = route;







































