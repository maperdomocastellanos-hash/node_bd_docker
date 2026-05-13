//Esto lo copiamos del modelo que nos da sequelize:

const { Sequelize, DataTypes } = require('sequelize');

//importamos la conexion
const sequelize = require("./../Config/conexion")
const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(250),
      // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING(250),
        // allowNull defaults to true
      },
  },
  {
    // Other model options go here
  },
);

//la sicronizacion es importante, lo que hace esto es que hace la consulta a la base de datos mediante SQL.
//Esto crea la tabla si no existe (y no hace nada si ya existe):
//await User.sync()

//Exportamos el modulo creado User:
module.exports = User;