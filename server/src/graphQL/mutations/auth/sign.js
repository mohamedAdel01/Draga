const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

const { hashPassword } = require('../../../polices/AuthBcrypt')
const { signToken } = require('../../../polices/AuthToken')

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
  async resolve(parent, args) {

    let user = new UserModel({
      username: args.username,
      phoneNumber: args.phoneNumber,
      imgUrl: args.imgUrl,
      password: await hashPassword(args.password),
      wallet: args.wallet
    })

    let token = await signToken({
        username: args.username,
        password: args.password,
    })

    return {
        username: token
    }


    // return user.save()
  }
}

module.exports = UserMutation
