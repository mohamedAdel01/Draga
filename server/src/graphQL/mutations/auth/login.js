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
    password: {type: GraphQLString}
  },
  resolve(parent, args) {
      

    //   username: args.username,
    //   password: args.password,
  }
}

module.exports = UserMutation
