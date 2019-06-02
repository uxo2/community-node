var express = require('express')
var router = express.Router()
var connect = require('../db.js')


router.get('/', (req, res, next) => {
  var sql = `select * from userinfo where id='327c5AE8-129e-dB7a-47cB-a18CcfE7314e'`
  connect.query(sql, function (err, result) {
    return err ? res.send({
        status: 1,
        data: {
          error: err
        }
      }):
      res.send(result.length ? {
          status: 1,
          data: result[0]
        } : {
          status: 1,
          data: {
            success: 0
          }
      })
  })
})

router.post('/', (req, res, next) => {
  var sql = `select * from userinfo where id='327c5AE8-129e-dB7a-47cB-a18CcfE7314e'`
  connect.query(sql, function (err, result) {
    return err ? res.send({
        status: 1,
        data: {
          error: err
        }
      }):
      res.send(result.length ? {
          status: 1,
          data: result[0]
        } : {
          status: 1,
          data: {
            success: 0
          }
      })
  })
})

module.exports = router
