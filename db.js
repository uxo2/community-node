var mysql = require('mysql')

let connect = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password:'123456',
  database:'hellolitterbear',
  port: 3306
})

connect.connect(function(err) {
  if(err) {
    console.log('连接失败，请检查代码正确性')
  } else {
    console.log('连接成功...')
  }
})

module.exports = connect