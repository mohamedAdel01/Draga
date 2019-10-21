const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema} = graphql

// GRAPHQL QUERIES
const {user, users} = require('./queries/User')
const {bike, bikes} = require('./queries/Bike')
const {station, stations} = require('./queries/Station')
const {travel, travels} = require('./queries/Travel')

// MUTATIONS
// Create
const CreateUser = require('./mutations/create/createUser')
const CreateBike = require('./mutations/create/createBike')
const CreateStation = require('./mutations/create/createStation')
const CreateTravel = require('./mutations/create/createTravel')
// Update
const UpdateTravel = require('./mutations/Update/updateTravel')

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
    CreateUser: CreateUser,
    CreateBike: CreateBike,
    CreateStation: CreateStation,
    CreateTravel: CreateTravel,
    UpdateTravel: UpdateTravel
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
