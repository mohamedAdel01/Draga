const graphql = require('graphql')
const {GraphQLID, GraphQLList} = graphql

// GRAPHQL TYPES
const {UserType} = require('../types/index')

// MONGODB MODELS
const UserModel = require('../../models/User')

const UserQueries = {
  user: {
    type: UserType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return UserModel.findById(args.id)
    }
  },
  users: {
    type: new GraphQLList(UserType),
    resolve() {
      return UserModel.find({})
    }
  }
}

module.exports = UserQueries
