var express = require('express')
var router = express.Router()
var connect = require('../db.js')


router.post('/', (req, res, next) => {
  if(req.query) {
    var sql = `select id from counter where username='${req.query.username}' and '${req.query.password}'`
    connect.query(sql, function (err, result) {
      return err ? res.send({
          status: 1,
          data: {
            error: err
          }
        }): res.send(result.length ? {
        status: 1,
        data: {
          success: 1,
          id: result[0].id
        }
      } : {
        status: 1,
        data: {
          success: 0
        }
      })
    })
  }
})

module.exports = router
