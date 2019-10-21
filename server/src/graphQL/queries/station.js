const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {StationType} = require('../types/index')

// MONGODB MODELS
const StationModel = require('../../models/Station')

const StationQueries = {
  station: {
    type: StationType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return StationModel.findById(args.id)
    }
  },
  stations: {
    type: new GraphQLList(StationType),
    resolve() {
      return StationModel.find({})
    }
  }
}

module.exports = StationQueries
