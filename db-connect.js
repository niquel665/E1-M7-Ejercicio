require('dotenv').config(); // carga variables desde env
const { Pool } = require('pg'); //trae la clase pool desde la libreria pg

const pool = new Pool({  //crea pool de conexiones usando la url de database
  connectionString: process.env.DATABASE_URL,
});
// funcion asincrona para probar conexion a la database
async function verificarConexion() {
  let client;

  try {  //intetna conectarse a la database y traer un cliente del pool
    client = await pool.connect();
    console.log('✅ Conexión exitosa'); //si llega aca mensaje de exito
  } catch (err) {
    // Si falla muestra el error. se prueba con un error en la url database
    console.error('❌ Error al conectar a PostgreSQL');
    console.error('Mensaje:', err.message);
    console.error('Código:', err.code);
  } finally {
    // libera el cliente si fue creado
    if (client) client.release();

    // cierra el pool al terminar
    await pool.end();
  }
}

// ejecuta la funcion
verificarConexion();