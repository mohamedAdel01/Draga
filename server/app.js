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

// graphql for handle requests
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true

  // for passing data in "parent" param  
  // rootValue: {
  //   userState: {
          // loggedIn: bolean
    // }
  // },
}))

// listen to PORT
app.listen(process.env.PORT || 5000, () => {
  console.log('welcome again nodejs')
})
