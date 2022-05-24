const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
     },
     dietType:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  });
};
