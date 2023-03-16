var express = require('express');
var router = express.Router();

const db = require('../utils/database');

router.get('/', async function(req, res, next) {
  const results = await db.query(`select * from card_26`);
  //console.log('json data', JSON.stringify(results.rows));
  res.render('card2_26/index', { data: results.rows ,id: '210410626', name: 'Huang Wei Yi' });
});

module.exports = router;