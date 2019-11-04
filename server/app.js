// requirements
const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./src/graphQL/schema')
require('dotenv').config()

// import database config
require('./config/mongo')

let token

let loginMiddleware = (req, res, next) => {
  token = req.header.auth_token
}

let root = {
  auth_token: () => token
}

// run app
const app = express()

// to access from another server
app.use(cors())

// graphql for handle requests
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

// test database
// let Travel = require('./src/models/Travel')
// let travel = new Travel({
//   stationFromId: 'String',
//   UserId: 'String',
//   bikeId: 'String',
// })

// travel.save()

// listen to PORT
app.listen(process.env.PORT || 5000, () => {
  console.log('welcome again nodejs')
})
