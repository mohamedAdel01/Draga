const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

// GRAPHQL TYPES
const {TravelType} = require('../../types/index')

// MONGODB MODELS
const TravelModel = require('../../../models/Travel')

const TravelMutation = {
  type: TravelType,
  args: {
    stationFromId: { type: GraphQLID },
    userId: { type: GraphQLID },
    bikeId: { type: GraphQLID }
  },
  resolve(parent, args) {
    let travel = new TravelModel({
      stationFromId: args.stationFromId,
      userId: args.userId,
      bikeId: args.bikeId
    })
    return travel.save()
  }
}

module.exports = TravelMutation
