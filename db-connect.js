require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function verificarConexion() {
  let client;

  try {
    client = await pool.connect();
    console.log('✅ Conexión exitosa a PostgreSQL');

    const result = await client.query('SELECT NOW() AS fecha_actual');
    console.log('Hora del servidor:', result.rows[0].fecha_actual);
  } catch (err) {
    console.error('❌ Error al conectar a PostgreSQL');
    console.error('Mensaje:', err.message);
    console.error('Código:', err.code);
  } finally {
    if (client) client.release();
    await pool.end();
  }
}

verificarConexion();