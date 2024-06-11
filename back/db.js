const { Pool } = require('pg');

const pool = new Pool({
  user: '-',
  host: '-',
  database: 'interesting_places_db',
  password: '-',
  port: 5432,
});

module.exports = pool;
