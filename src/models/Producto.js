//Esto lo copiamos del modelo que nos da sequelize:

const { Sequelize, DataTypes } = require('sequelize');

//importamos la conexion
const sequelize = require("./../Config/conexion")

const Producto = sequelize.define(
  'Producto',
  {
    // Model attributes are defined here
    Nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Precio: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true,
      // allowNull defaults to true
    },
    Stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    Descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
      },   
    
  },
  {
    // Other model options go here
  },
);

//la sicronizacion es importante, lo que hace esto es que hace la consulta a la base de datos mediante SQL.
//Esto crea la tabla si no existe (y no hace nada si ya existe):
Producto.sync()

//Exportamos el modulo creado User:
module.exports = Producto;