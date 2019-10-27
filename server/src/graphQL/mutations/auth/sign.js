const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLID} = graphql

const { hashPassword } = require('../../../polices/authBcrypt')
// const { signToken, verifyJwt } = require('../../../polices/authToken')

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
      let data = await user.save()

      // create Token
      let tokenObj = await signToken({
        id: data.id,
        username: data.username,
      })

    }

    catch (error){
      return error
    }
    
  


    // let data = await verifyJwt(tokenObj)

    // console.log(data)

    // return data


    // return user.save()
  }
}

module.exports = UserMutation
