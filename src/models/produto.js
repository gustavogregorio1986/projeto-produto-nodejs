const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.DataTypes('User', {
      nome: {
        type: DataTypes.STRING,
        alowNull: false
      },
      descricao: {
        type: DataTypes.STRING,
        alowNull: false
      },
      tipo: {
        type: DataTypes.STRING,
        alowNull: false
      },
});

module.exports = User;