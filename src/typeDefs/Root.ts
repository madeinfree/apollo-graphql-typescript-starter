import { gql } from 'apollo-server'

const typeDefs = gql`
  type Spy {
    durationTime: Int
  }
  type Query {
    helloWorld: String
  }
`

export default typeDefs