const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {BikeType} = require('../types/index')

// MONGODB MODELS
const BikeModel = require('../../models/Bike')

const BikeQueries = {
  bike: {
    type: BikeType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return BikeModel.findById(args.id)
    }
  },
  bikes: {
    type: new GraphQLList(BikeType),
    resolve() {
      return BikeModel.find({})
    }
  }
}

module.exports = BikeQueries
