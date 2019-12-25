// requirements
const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./src/graphQL/schema')

require('dotenv').config()

// import database config
require('./config/mongo')

// run app
const app = express()

// to access from another server
app.use(cors())

// let Travel = require('./src/models/Bike')
// let travel = new Travel({
//   type: "33333",
//   imgUrl: "888",
//   hourPrice: 1234,
//   code: "A123"
// })

// travel.save()

// graphql for handle requests
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  customFormatErrorFn(error) {

    return { message: error.message, status: error.status }
  }
}))

// listen to PORT
app.listen(process.env.PORT || 5000, () => {
  console.log('welcome again nodejs')
})
