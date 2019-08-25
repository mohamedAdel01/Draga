const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql
const ObjectId = require('mongodb').ObjectID

// USER TYPE
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    phoneNumber: {type: GraphQLInt},
    imgUrl: {type: GraphQLString},
    password: {type: GraphQLString},
    wallet: {type: GraphQLFloat}
  })
})

// BIKE TYPE
const BikeType = new GraphQLObjectType({
  name: 'Bike',
  fields: () => ({
    id: {type: GraphQLID},
    type: {type: GraphQLString},
    imgUrl: {type: GraphQLString},
    hourPrice: {type: GraphQLFloat},
    barcode: {type: GraphQLInt},

  // Relational Data
  // here data for station
  })
})

// STATION TYPE
const StationType = new GraphQLObjectType({
  name: 'Station',
  fields: () => ({
    id: {type: GraphQLID},
    address: {type: GraphQLString},
    langitude: {type: GraphQLFloat},
    latitude: {type: GraphQLFloat},

  // Relational Data
  // here data for bikes
  })
})

// TRAVEL TYPE
const TravelType = new GraphQLObjectType({
  id: {type: GraphQLID},
  startAt: {type: GraphQLString},
  endAt: {type: GraphQLString},

// Relation Data
// data for all three

})

module.exports = {
  UserType,
  BikeType,
  StationType,
  TravelType
}
