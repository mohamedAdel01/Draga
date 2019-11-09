const UserModel = require('../../../models/User')

const userPresence = email => {
  return new Promise((resolve, reject) => {
      try {
          let user = UserModel.findOne({email: email})
          console.log(user)
          
          resolve({
            
          })
      } catch (error) {
        reject(error)
      }
  })
}

module.exports = { userPresence }
