const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

// GRAPHQL TYPES
const {StationType} = require('../../types/index')

// MONGODB MODELS
const StationModel = require('../../../models/Station')

const StationMutation = {
  type: StationType,
  args: {
    address: {type: GraphQLString},
    langitude: {type: GraphQLFloat},
    latitude: { type: GraphQLFloat }
  },
  resolve(parent, args) {
    let station = new StationModel({
      address: args.address,
      langitude: args.langitude,
      latitude: args.latitude
    })
    return station.save()
  }
}

module.exports = StationMutation
