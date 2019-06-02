module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const connect = require('../db.js')
  router.post('/login', (req, resp, next) => {
    if (req.body.username && req.body.password) {
      const sql = `select * from counter where username = '${req.body.username}' && password = '${req.body.password}'`
      connect.query(sql, function (err, res) {
        if (err) {
          resp.send({
            status: 1,
            data: {
              msg: 'Incorrect username or password'
            }
          })
        }
        resp.send({
          status: 1,
          data: {
            userID: res[0].id
          }
        })
      })
    }
  })

  app.use('/', router)
}
