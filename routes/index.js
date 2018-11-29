const express = require('express');
const router = express.Router();
const Categoria = require('../models/categorias');
const Cliente = require('../models/clientes');
const Proveedor = require('../models/proveedores');
const Servicio = require('../models/servicios');
const Usuario = require('../models/usuarios');


router.get('/categorias/', async(req, res)=>{
    const listaEst = await Categoria.find();
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/categorias/:id', async(req, res)=>{
    const {id} = req.params;
    const listaEst = await Categoria.find(id);
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/categorias/eliminar/:id', async (req,res)=>{
    const {id} = req.params;
    await Categoria.remove({id:id});
    res.redirect('/categorias');
});

router.get('/categorias/actualizar/:id', async (req,res)=>{
    const {id} = req.params;
    await Categoria.update({id:id});
    res.redirect('/categorias');
});

router.post('/categorias/agregar', async(req,res)=>{
    var e = new Categoria(req.body);
    await e.save();
    res.redirect('/categorias');
});

router.get('/clientes/', async(req, res)=>{
    const listaEst = await Cliente.find();
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/clientes/:id', async(req, res)=>{
    const {id} = req.params;
    const listaEst = await Cliente.find(id);
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/clientes/eliminar/:id', async (req,res)=>{
    const {id} = req.params;
    await Cliente.remove({id:id});
    res.redirect('/clientes');
});

router.get('/clientes/actualizar/:id', async (req,res)=>{
    const {id} = req.params;
    await Cliente.update({id:id});
    res.redirect('/clientes');
});

router.post('/clientes/agregar', async(req,res)=>{
    var e = new Cliente(req.body);
    await e.save();
    res.redirect('/clientes');
});

router.get('/proveedores/', async(req, res)=>{
    const listaEst = await Proveedor.find();
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/proveedores/:id', async(req, res)=>{
    const {id} = req.params;
    const listaEst = await Proveedor.find(id);
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/proveedores/eliminar/:id', async (req,res)=>{
    const {id} = req.params;
    await Proveedor.remove({id:id});
    res.redirect('/proveedores');
});

router.get('/proveedores/actualizar/:id', async (req,res)=>{
    const {id} = req.params;
    await Proveedor.update({id:id});
    res.redirect('/proveedores');
});

router.post('/proveedores/agregar', async(req,res)=>{
    var e = new Proveedor(req.body);
    await e.save();
    res.redirect('/proveedores');
});

router.get('/servicios/', async(req, res)=>{
    const listaEst = await Servicio.find();
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/servicios/:id', async(req, res)=>{
    const {id} = req.params;
    const listaEst = await Servicio.find(id);
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/servicios/eliminar/:id', async (req,res)=>{
    const {id} = req.params;
    await Servicio.remove({id:id});
    res.redirect('/servicios');
});

router.get('/servicios/actualizar/:id', async (req,res)=>{
    const {id} = req.params;
    await Servicio.update({id:id});
    res.redirect('/servicios');
});

router.post('/servicios/agregar', async(req,res)=>{
    var e = new Servicio(req.body);
    await e.save();
    res.redirect('/servicios');
});

router.get('/usuarios/', async(req, res)=>{
    const listaEst = await Usuario.find();
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/usuarios/:id', async(req, res)=>{
    const {id} = req.params;
    const listaEst = await Usuario.find(id);
    /*
    res.render('index',{
        listaEst
    });
    */
});
router.get('/usuarios/eliminar/:id', async (req,res)=>{
    const {id} = req.params;
    await Usuario.remove({id:id});
    res.redirect('/usuarios');
});

router.get('/usuarios/actualizar/:id', async (req,res)=>{
    const {id} = req.params;
    await Usuario.update({id:id});
    res.redirect('/usuarios');
});

router.post('/usuarios/agregar', async(req,res)=>{
    var e = new Usuario(req.body);
    await e.save();
    res.redirect('/usuarios');
});

// Ruteo
module.exports = router;