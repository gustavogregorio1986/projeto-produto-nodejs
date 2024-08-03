const express = require('express');
const listarProdutosController = require('../controllers/userController');
const router = express.Router();

router.post('/produto', produtoController.createProduto);
router.get('/produto', produtoController.listarProdutos);
router.get('/produto/:id', produtoController.findById);
router.put('/produto/:id', produtoController.updateProduto);
router.delete('/produto/:id', produtoController.deleteProduto);

module.exports = router;
