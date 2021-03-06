const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql
const ObjectId = require('mongodb').ObjectID

const BikeModel = require('../../models/Bike')

// USER TYPE
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    email: {type: GraphQLString},
    phoneNumber: {type: GraphQLInt},
    imgUrl: {type: GraphQLString},
    password: {type: GraphQLString},
    token: {type: GraphQLString},
    refreshToken: {type: GraphQLString},
    wallet: { type: GraphQLFloat },
    createdAt: {type: GraphQLString}
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
    code: { type: GraphQLString },
    createdAt: {type: GraphQLString}

  // Relational Data
  // here data for station
  })
})

// STATION TYPE
const StationType = new GraphQLObjectType({
  name: 'Station',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    langitude: {type: GraphQLFloat},
    latitude: { type: GraphQLFloat },
    createdAt: {type: GraphQLString},
    bikes: {
      type: new GraphQLList(BikeType),
      resolve(parent, args) {
        return BikeModel.find({stationId: parent.id})
      }
    }

  // Relational Data
  // here data for bikes
  })
})

// TRAVEL TYPE
const TravelType = new GraphQLObjectType({
  name: 'Travel',
  fields: () => ({
    id: {type: GraphQLID},
    startAt: {type: GraphQLString},
    endAt: { type: GraphQLString },
    cost: {type: GraphQLFloat}
  // Relation Data
  // data for all three
  })
})

module.exports = {
  UserType,
  BikeType,
  StationType,
  TravelType
}
