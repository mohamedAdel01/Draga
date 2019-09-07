const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

// GRAPHQL TYPES
const {TravelType} = require('../../types/index')

// MONGODB MODELS
const TravelModel = require('../../../models/Travel')
const UserModel = require('../../../models/User')
const BikeModel = require('../../../models/Bike')

const TravelUpdateMutation = {
  type: TravelType,
  args: {
    stationToId: { type: GraphQLID },
    cost: { type: GraphQLFloat },
    endAt: { type: GraphQLString }
  },
  resolve(parent, args) {
    let TravelUpdatedData = {
      stationToId: args.stationToId,
      cost: args.cost,
      endAt: args.endAt
    }

    UserModel.findOneAndUpdate({_id: parent.userId}, {$inc: {wallet: -(args.cost)} })
    BikeModel.findOneAndUpdate({_id: parent.bikeId}, {stationId: args.stationToId})
    return TravelModel.findOneAndUpdate({_id: parent.id}, TravelUpdatedData)
  }
}

module.exports = TravelUpdateMutation
