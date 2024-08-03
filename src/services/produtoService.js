const User = require('../models/produto');

async function createProduto(data) {
    return await Produto.create(data);
}

async function listarProdutos() {
    return await Produto.findAll();
}

async function findById(id){
    return await Produto.findById(id);
}

async function updateProduto(id, data) {
    const user = await Produto.findByPk(id);
    if (user) {
      return await Produto.update(data);
    }
    return null;
}

async function deleteProduto(id) {
    const user = await Produto.findByPk(id);
    if (user) {
      return await Produto.destroy();
    }
    return null;
}


module.exports = {
    createProduto,
    listarProdutos,
    findById,
    updateProduto,
    deleteProduto
  };