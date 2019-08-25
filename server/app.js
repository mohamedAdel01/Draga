// requirements
const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
require('dotenv').config()
const schema = require('./src/graphQL/schema')

// import database config
require('./config/mongo')

// run app
const app = express()

// to access from another server
app.use(cors())

// graphql for handle requests
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


// test database
// let Station = require('./src/models/Station')
// for(let i = 0; i < 10; i++) {
//   let station = new Station({
//     type: `Station${i}`,

//   })


//   station.save()
// }

// listen to PORT
app.listen(process.env.PORT || 5000, () => {
  console.log('welcome again nodejs')
})