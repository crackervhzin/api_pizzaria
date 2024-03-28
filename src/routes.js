const express = require('express');
const path = require('path');
const router = express.Router();
 
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
});

const clienteControler = require(`./clienteController`);

router.get(`/cliente`, clienteControler.listarCliente);
module.exports = router;