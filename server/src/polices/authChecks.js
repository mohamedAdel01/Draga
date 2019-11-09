const UserModel = require('../models/User')

const userPresence = (username, email) => {
  return new Promise(async (resolve, reject) => {
      try {
          let users = await UserModel.find({ $or: [ {username: username} , {email: email} ] })
          users.filter(user => {
            let result = []
            
            if (user.username === username) result.push('username')
            if (user.email === email) result.push('email')

            resolve(result)
          })

      } catch (error) {
        reject(error)
      }
  })
}

module.exports = { userPresence }
