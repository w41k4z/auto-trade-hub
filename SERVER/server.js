
const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');
const app = express();
const port = 3001;

// Configurez votre connexion PostgreSQL
const pool = new Pool({
  user: 'auto_trade',
  host: 'localhost',
  database: 'auto_trade',
  password: 'auto_trade',
  port: 5432,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.array('images', 5), async (req, res) => {
  const filePaths = req.files.map(file => file.path);

  try {
    const client = await pool.connect();

    await client.query('BEGIN');

    for (const path of filePaths) {
      await client.query('INSERT INTO images (path) VALUES ($1)', [path]);
    }

    await client.query('COMMIT');

    res.status(200).send('Upload réussi !');
  } catch (err) {

    await client.query('ROLLBACK');
    console.error('Erreur lors de l\'insertion dans la base de données', err);
    res.status(500).send('Erreur lors de l\'insertion dans la base de données');
  } finally {

    client.release();
  }
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
