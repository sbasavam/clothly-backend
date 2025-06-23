const { Pool } = require('pg');
require('dotenv').config();
const dns = require('dns');

// Force IPv4
dns.setDefaultResultOrder('ipv4first');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // use only if hosting on platforms like Render
  },
});

pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch(err => console.error('❌ Connection error', err));

module.exports = pool;
