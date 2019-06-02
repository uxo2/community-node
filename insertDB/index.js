module.exports = connect => {
  const uuid = require('node-uuid')
  let sqlArr = [
    'truncate table counter',
    `insert into counter (id, username, password) values ( '${uuid.v4()}', 'admin', 'admin')`,
  ]
  sqlArr.map(sql => {
    connect.query(sql, function (err, res) {
     console.log(err || '插入数据成功')
    })
  })

}
