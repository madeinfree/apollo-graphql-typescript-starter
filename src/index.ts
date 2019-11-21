require('dotenv').config()
import {
  ApolloServer,
  makeExecutableSchema,
  IResolvers
} from 'apollo-server'

/**
 * Graphql typeDefs
 */
import RootTypeDefs from './typeDefs/Root'

const resolvers: IResolvers = {
  Query: {
    helloWorld: async (parent, context, argvs, info) => {
      return 'Hello World'
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs: [RootTypeDefs],
  resolvers
})

const server = new ApolloServer({
  schema: schema
});

// The `listen` method launches a web server.
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});