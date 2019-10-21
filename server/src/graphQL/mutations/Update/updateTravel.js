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
  resolve(root, args, context, info) {
    let TravelUpdatedData = {
      stationToId: args.stationToId,
      cost: args.cost,
      state: false,
      endAt: args.endAt
    }

    // console.log(parent)
    console.log(TravelType)

    return root
  // UserModel.findOneAndUpdate({_id: parent.userId}, {$inc: {wallet: -(args.cost)} })
  // BikeModel.findOneAndUpdate({_id: parent.bikeId}, {stationId: args.stationToId})
  // return TravelModel.findOneAndUpdate({_id: parent.id}, TravelUpdatedData)
  }
}

module.exports = TravelUpdateMutation
