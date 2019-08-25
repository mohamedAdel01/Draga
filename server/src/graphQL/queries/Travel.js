const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {TravelType} = require('../types/index')

// MONGODB MODELS
const TravelModel = require('../../models/Travel')

const TravelQueries = {
  travel: {
    type: TravelType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return TravelModel.findById(args.id)
    }
  },
  travels: {
    type: new GraphQLList(TravelType),
    resolve() {
      return TravelModel.find({})
    }
  }
}

module.exports = TravelQueries
