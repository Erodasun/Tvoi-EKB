const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Подключаем файл db.js

const app = express();
app.use(cors()); // Добавляем middleware для разрешения CORS
app.use(express.json()); // Добавляем middleware для разбора JSON-запросов

app.get('/api/reviews/:placeTitle', async (req, res) => {
  const placeTitle = req.params.placeTitle;
  try {
    const reviews = await pool.query('SELECT * FROM reviews WHERE place_title = $1', [placeTitle]);
    res.json(reviews.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/reviews', async (req, res) => {
  const { title, description, name } = req.body;
  try {
    const newReview = await pool.query(
      'INSERT INTO reviews (place_title, text, author) VALUES ($1, $2, $3)',
      [title, description, name]
    );    
    res.json(newReview.rows[0]);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
