const userService = require('../services/produtoService');

async function createProduto(req, res) {
  try {
    const user = await produtoService.createProduto(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function listarProdutos(req, res) {
  try {
    const users = await produtoService.listarProdutos();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function findById(req, res) {
  try {
    const user = await produtoService.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateProduto(req, res) {
  try {
    const user = await produtoService.updateProduto(req.params.id, req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteProduto(req, res) {
  try {
    const success = await produtoService.deleteProduto(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createProduto,
  listarProdutos,
  findById,
  updateProduto,
  deleteProduto
};
