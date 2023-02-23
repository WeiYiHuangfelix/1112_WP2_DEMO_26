const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    post: '5432',
    database: 'wp2_demo_26',
    password: '0000'
});

console.log('connect database', pool.options.database);

module.exports = pool;