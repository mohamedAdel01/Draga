const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

// GRAPHQL TYPES
const {TravelType} = require('../../types/index')

// MONGODB MODELS
const TravelModel = require('../../../models/Travel')

const TravelMutation = {
  type: TravelType,
  args: {
    endAt: { type: GraphQLString }
  },
  resolve(parent, args) {
    let travel = new TravelModel({
      endAt: args.endAt
    })
    return travel.save()
  }
}

module.exports = TravelMutation
