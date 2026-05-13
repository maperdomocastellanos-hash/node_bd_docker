
const express = require("express");
const sequelize = require("./Config/conexion");
const User = require("./models/User");
const Producto = require("./models/Producto");

const app = express();

app.get("/", function(req, res) {
    return res.json({ Mensaje: "Saludos desde mi app de node" });
});

async function iniciar() {
    await sequelize.authenticate();
    console.log("Conexión correcta");

    await sequelize.sync();
    console.log("Tablas creadas correctamente");

    app.listen(3000, function() {
        console.log("Servidor corriendo en el puerto 3000");
    });
}

iniciar();




/*
//Forma de levantar un servidor en Node.JS
const express = require("express");
//const sequelize = require("./Config/conexion"); 
const User = require("./models/User");
const Producto = require("./models/Producto")


//Inicializando una app de express
const app = express();

app.get("/",function(req, res){
    return res.json({Mensaje: "Saludos desde mi app de node (modificado)"})

});

app.listen(3000,function(){
    console.log("Servidor corriendo en el puerto 3000");


})
*/