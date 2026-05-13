
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bd_base_defecto', 'root', 'root', {
    host: 'base_datos_mysql',
    port: 3306,
    dialect: 'mysql'
});

async function testConexion() {
    let intentos = 10;
    while (intentos > 0) {
        try {
            await sequelize.authenticate();
            console.log('Conexión correcta con la base de datos');
            return;
        } catch (error) {
            intentos--;
            console.log(`MySQL no está listo, reintentando... (${intentos} intentos restantes)`);
            await new Promise(res => setTimeout(res, 3000)); // espera 3 segundos
        }
    }
    console.error('No se pudo conectar a MySQL');
}

testConexion();

module.exports = sequelize;

