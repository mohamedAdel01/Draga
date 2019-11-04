const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

const { hashPassword } = require('../../../polices/authBcrypt')
const { signToken, verifyJwt } = require('../../../polices/authToken')

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

    /*
    
      ** HINTS **
    // ** CHECK if user is not loged in
    // ** WE need first to check if this user is exist before
    // ** WE need to make validation on inputs 
    // ** WE need to make required inputs
    // ** HANDLE errors and send it back to front-end

    */

    try {

      // arrange user Modal
      let user = new UserModel({
        username: args.username,
        phoneNumber: args.phoneNumber,
        imgUrl: args.imgUrl,
        password: await hashPassword(args.password),
        wallet: args.wallet
      })
  
      // save user in DB
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
