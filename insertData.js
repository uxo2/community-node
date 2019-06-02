var Mock = require('mockjs')

let insertData = (connect) => {

  // 清空所有数据
  var allTable = ['counter', 'userinfo', 'articles']
  allTable.forEach(item => {
    var sql = `truncate ${item}`
    connect.query(sql, function (err, result) {
      console.log(err, result)
    })
  })

  // 用户账号
  let sqlCounter = Mock.mock({
    'data|10': [
      {
        id: '@guid',
        username: '@cword(2, 5)',
        password: '@word(5, 10)'
      }
    ]
  })
  for (let i = 0; i < sqlCounter.data.length; i++) {
    var sql = `insert into counter (id, username, password) values ('${sqlCounter.data[i].id}', '${sqlCounter.data[i].username}','${sqlCounter.data[i].password}')`
    connect.query(sql, function (err, result) {
      console.log(err, result)
    })
  }

  // 用户基本信息
  let sqlUserinfo = Mock.mock({
    'data|10': [
      {
        'sex|1': ['boy', 'girl'],
        logo: 'xxx',
        address: '@county(true)',
        school: '@cword(3, 5)' + '学校',
        qq: Mock.mock('@natural(1000000000, 9999999999)'),
        wechat: Mock.mock('@natural(1000000000, 9999999999)'),
        website: '@url',
        intro: '@cparagraph(1, 3)',
        tel: Mock.mock('@natural(10000000000, 99999999999)'),
        specialty: '@cword(4, 7)'
      }
    ]
  })
  for (let i = 0; i < sqlUserinfo.data.length; i++) {
    article.id = sqlCounter.data[i].id
    var sql = `insert into userinfo (id, sex, logo, address, school, qq, wechat, website, intro, tel, specialty) values
    ('${article.id}', '${article.sex}','${article.logo}', '${article.address}','${article.school}', '${article.qq}', '${article.wechat}', '${article.website}','${article.intro}', '${article.tel}', '${article.specialty}')`
    connect.query(sql, function (err, result) {
      console.log(err, result)
    })
  }

  // 文章基本信息
  let sqlArticle = Mock.mock({
    'data|100': [
      {
        content: '@cparagraph',
        id: '@guid',
        'comment|1-100': 1,
        'read|1-100': 1,
        'praise|1-100': 1,
        'modify_num|1-100': 1,
        'modify_time|1-100': 1,
        publish: '@datetime'
      }
    ]
  })
  sqlCounter.data.forEach(item => {
    sqlArticle.data.forEach(article => {
      article['user_id'] = item.id
    })
  })
  sqlArticle.forEach((article, i) => {
    article[i]['user_id'] = sqlCounter.data[Math.floor(i/10)].id
  })
  sqlArticle.forEach(article => {
    var sql = `insert into articles (id, user_id, content, comment, read, praise, modify_num, modify_time, publish) values
    ('${article.id}', '${article.user_id}','${article.content}', '${article.comment}','${article.read}', '${article.praise}', '${article.modify_num}', '${article.modify_time}','${article.publish}')`
    connect.query(sql, function (err, result) {
      console.log(err, result)
    })
  })
}
export default insertData