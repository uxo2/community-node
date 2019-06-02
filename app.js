var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors({
	origin: ['http://localhost:8765'],  //允许这个域的访问
	methods: ['GET','POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT', 'OPTIONS'],
	alloweHeaders: ['Conten-Type', 'Authorization']	//只允许带这两种请求头的连接访问
}))

// routes 所有的获取数据均是GET，所有的修改数据都是POST，所有的删除数据都是delete
// 登录注册等其他严密采用post发送数据，发送数据大部分是post

// 登录界面
require('./routes/index')(app)

// 插入数据
require('./insertDB/index')(require('./db'))

// app.use('/user', require('./routes/users'))

// // 用户基本信息获取
// app.use('/userinfo', require('./routes/userinfo'))

// app.use('/login', require('./routes/index'))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(404)
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})





module.exports = app
