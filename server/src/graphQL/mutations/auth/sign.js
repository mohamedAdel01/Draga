const graphql = require('graphql')
const {GraphQLInt, GraphQLFloat, GraphQLString} = graphql

// sub-function as a models
const { hashPassword } = require('../../../polices/authBcrypt')
const { signToken } = require('../../../polices/authToken')
const { userPresence } = require('../../../polices/authChecks')

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
  async resolve(parent, args, context) {
    
    try {
      
      // console.log(context.headers.auth_token);

      // user Modal
      let user = new UserModel({
        username: args.username,
        phoneNumber: args.phoneNumber,
        imgUrl: args.imgUrl,
        password: await hashPassword(args.password),
        wallet: args.wallet
      })
  
      // save user
      let userData = (await user.save()).toObject({ virtuals: true, minimize: true })

      // create Token
      let tokens = await signToken({
        id: userData.id,
        username: userData.username,
      })

      return {
        ...userData,
        ...tokens
      }
      
    } catch (error) {
        return {
          mssg: 'error in bla bla',
          error
        }
    }
    
  }
}

module.exports = UserMutation
