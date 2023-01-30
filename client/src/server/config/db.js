var {Client} = require('pg');

const pg = new Client({
    user: "postgres",
    host: "localhost",
    database: "fuel",
    password: "0000",
    port: 5432,
});

pg.connect();

// pg.query("insert query", (err, res) => {
//     if (!err) console.log(res);
//     else console.log(err);
//     pg.end();
// });

module.exports = Client