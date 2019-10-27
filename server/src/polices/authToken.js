const jwt = require('jsonwebtoken')

const signToken = authData => {
  return new Promise(resolve => {
    resolve({
      token: jwt.sign({ apiKey: authData }, process.env.TOKEN_KEY, {expiresIn: process.env.TOKEN_LIFE}),
      refreshToken: jwt.sign({ apiKey: authData }, process.env.REFRESH_TOKEN_KEY, {expiresIn: process.env.REFRESH_TOKEN_LIFE})
    })
  })
}

const verifyJwt = req => {
  // let token = req.token
  // if (req.query && req.query.hasOwnProperty('access_token')) {
  //   token = req.query.access_token
  // } else if (req.headers.authorization && req.headers.authorization.includes('Bearer')) {
  //   token = req.headers.authorization.split(' ')[1]
  // }
  
  return new Promise((resolve, reject) => {
    jwt.verify(req.token, process.env.TOKEN_KEY, (error, decoded) => {
      if (error) reject('401: User is not authenticated')
   
      resolve(decoded)
    })
  })
}

module.exports = { signToken, verifyJwt }