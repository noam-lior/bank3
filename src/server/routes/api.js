const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/bank2");
const moment = require("moment");

router.get('/transactions', async function (req, res) {
  let query = `SELECT * FROM transaction`
  let result = await sequelize.query(query);
  res.send(result[0])
})

router.post('/transaction', async function (req, res) {
  try {
    let {amount, vendor, category} = req.body
    let query = `INSERT INTO transaction
                VALUES(null,${amount},'${vendor}','${category}')`
    await sequelize.query(query);
  }
  catch (e) { console.log('error! registry not added.') }
  res.send()
})

router.delete('/transaction', async function (req, res) {
  try {
    const id=req.body.id
    let query = `DELETE FROM transaction
                WHERE id=${id}`
    await sequelize.query(query);
  }
  catch (e) { console.log('error! registry not added.') }
  res.send()
})
module.exports = router;
