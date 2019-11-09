const UserModel = require('../models/User')

const userPresence = email => {
  return new Promise(async (resolve, reject) => {
      try {
          let user = await UserModel.findOne({username: 'moamed'})
          if (!user) resolve(false)
          if (user) resolve(true)
      } catch (error) {
        reject(error)
      }
  })
}

module.exports = { userPresence }
