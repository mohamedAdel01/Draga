const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

// GRAPHQL TYPES
const {BikeType} = require('../../types/index')

// MONGODB MODELS
const BikeModel = require('../../../models/Bike')

const BikeMutation = {
  type: BikeType,
  args: {
    type: {type: GraphQLString},
    imgUrl: {type: GraphQLString},
    hourPrice: {type: GraphQLFloat},
    code: { type: GraphQLInt }
  },
  resolve(parent, args) {
    let bike = new BikeModel({
      type: args.type,
      imgUrl: args.imgUrl,
      hourPrice: args.hourPrice,
      code: args.code
    })
    return bike.save()
  }
}

module.exports = BikeMutation
