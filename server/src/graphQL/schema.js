const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema} = graphql

// GRAPHQL QUERIES
const {user, users} = require('./queries/User')
const {bike, bikes} = require('./queries/Bike')
const {station, stations} = require('./queries/Station')
const {travel, travels} = require('./queries/Travel')

// MUTATIONS



// GRAPHQL ROOT QUERY
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: user,
    users: users,
    bike: bike,
    bikes: bikes,
    station: station,
    stations: stations,
    travel: travel,
    travels: travels
  }
})

// const Mutation = new GraphQLObjectType({
//   name: 'Mutations',
//   fields: {
//     AddGrade: AddGrade,
//     AddSubject: AddSubject,
//     AddClassroom: AddClassroom,
//     AddTeacher: AddTeacher,
//     AddStudent: AddStudent
//   }
// })

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation
})
