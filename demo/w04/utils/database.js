const { Pool } = require('pg');

let pool;

if(process.env.NODE_ENV === 'SUPABASE') {
        pool = new Pool({
        user: 'postgres',
        host: process.env.SUPABASE_HOST,
        port: '5432',
        database: 'postgres',
        password: process.env.SUPABASE_PASSWORD
    });
    console.log(`connecting Supabase PostgreSQL  database ${pool.options.database} on port ${pool.options.port}`);
}else {
    pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'wp2_demo_26',
    password: '0000'
    });
    console.log(`connecting local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);
};



// pool.query('select * from card_26', [], (error, results) => {
//     console.log(results)
// })

module.exports = pool;