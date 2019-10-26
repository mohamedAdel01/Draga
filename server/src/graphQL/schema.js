const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema} = graphql

// GRAPHQL QUERIES
const {user, users} = require('./queries/user')
const {bike, bikes} = require('./queries/bike')
const {station, stations} = require('./queries/station')
const {travel, travels} = require('./queries/travel')

// MUTATIONS
// Create
const signUser = require('./mutations/auth/sign')
const createBike = require('./mutations/create/createBike')
const createStation = require('./mutations/create/createStation')
const createTravel = require('./mutations/create/createTravel')
// Update
const updateTravel = require('./mutations/Update/updateTravel')

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

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    signUser: signUser,
    createBike: createBike,
    createStation: createStation,
    createTravel: createTravel,
    updateTravel: updateTravel
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
