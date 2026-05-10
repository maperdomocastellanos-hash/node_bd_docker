
//Forma de levantar un servidor en Node.JS

const express = require("express");

//Inicializando una app de express
const app = express();

app.get("/",function(req, res){
    return res.json({Mensaje: "Saludos desde mi app de node"})

});

app.listen(3000,function(){
    console.log("Servidor funcionando en 3000");


})
