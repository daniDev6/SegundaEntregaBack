const Cliente=require('../models/clienteModel');


exports.getAllClientes=async (req,res)=>{
    try{
        const clientes=await Cliente.find();
        res.status(200).json(clientes);
    }catch(err){
        res.status(500).json({error:"error al obtener lista de clientes"});
    }
}

exports.getClienteById=async (req,res)=>{
    try{
        const cliente=await Cliente.findById(req.params.id);
        if(!cliente){
            return res.status(404).json({error:"cliente no encontrado"});
        }
        res.status(200).json(cliente);
    }catch(err){
        res.status(500).json({error:"error al obtener cliente"});
    }
}


exports.crearCliente=async (req,res)=>{
    try{
        const {emailRegistrar,passwordRegistrar,username}=req.body;
        const nuevoCliente=await Cliente.create({
            email:emailRegistrar,
            password:passwordRegistrar,
            nombre:username
        });
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);
    }catch(err){
        res.status(500).json({error:"error al crear cliente"});
    }
}

exports.updateCliente=async (req,res)=>{
    try{
        const clienteId=req.params.id;
        const clienteActualizado=await Cliente.findByIdAndUpdate(
            clienteId,
            req.body,
            {new:true}
            );
        if(!clienteActualizado){
            return res.status(404).json({error:"cliente no encontrado"});
        }
        res.status(200).json(clienteActualizado);
    }catch(err){
        res.status(500).json({error:"error al actualizar cliente"});
    }
}


exports.deleteCliente=async (req,res)=>{
    try{
        const clienteId=req.params.id;
        const clienteEliminado=await Cliente.findByIdAndDelete(clienteId);
        if(!clienteEliminado){
            return res.status(404).json({error:"cliente no encontrado"});
        }
        res.status(200).json(clienteEliminado);
    }catch(err){
        res.status(500).json({error:"error al eliminar cliente"});
    }
}



