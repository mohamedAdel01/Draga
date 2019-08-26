const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

// GRAPHQL TYPES
const {UserType} = require('../../types/index')

// MONGODB MODELS
const UserModel = require('../../../models/User')

const UserMutation = {
  type: UserType,
  args: {
    username: {type: GraphQLString},
    phoneNumber: {type: GraphQLInt},
    imgUrl: {type: GraphQLString},
    password: {type: GraphQLString},
    wallet: { type: GraphQLFloat }
  },
  resolve(parent, args) {
    let user = new UserModel({
      username: args.username,
      phoneNumber: args.phoneNumber,
      imgUrl: args.imgUrl,
      password: args.password,
      wallet: args.wallet
    })
    return user.save()
  }
}

module.exports = UserMutation
