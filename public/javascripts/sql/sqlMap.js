// 1. 目前暂不支持修改用户名，因为用户名唯一。如果用户绑定了电话哈嘛或者QQ微信，则可以修改。目前在暂不考虑

let sql = {
  // 用户基本信息操作
  userInfo: {
    modifyPass: (username, oldPass, newPass) => `update user_count set password=${newPass} where username=${username} and password=${oldPass}`,
    login: (username, password) => `select username=${username} and password=${password} from user_info`,
    regist: (username, password) => [`select username=${username} from user_count`, `insert into user_count (username, password) values (${username}, ${password})`]
  },
  // 文章的操作
  articles_info: {
    add: null
  }
}

export default sql;