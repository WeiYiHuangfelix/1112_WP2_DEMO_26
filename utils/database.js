const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'db.boadkpezbkrextxfzgiw.supabase.co',
    port: '5432',
    database: 'wp2_demo_26',
    password: 'Aa24213193!'
});

console.log(`connecting local posgreSQL database ${pool.options.database} on port ${pool.options.port}`);

// pool.query('select * from card_26', [], (error, results) => {
//     console.log(results)
// })

module.exports = pool;