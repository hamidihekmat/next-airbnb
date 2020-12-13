import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Auth {
    user: ID!
    token: String!
  }

  type Room {
    id: ID!
    user: ID!
    heading: String!
    selectedFile: String!
    guests: Int!
    bed: Int!
    bedRooms: Int!
    bathRooms: Int!
    kitchen: Boolean!
    parking: Boolean!
    wifi: Boolean!
  }

  type Query {
    getUsers: [User!]!
    getRooms: [Room!]!
    hello: String
    login(email: String!, password: String!): Auth
  }

  type Mutation {
    createUser(data: SignUpUserInput!): User
    addListing(data: AddListingInput!): Room
  }

  input SignUpUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input AddListingInput {
    user: ID!
    heading: String!
    selectedFile: String!
    guests: Int!
    bed: Int!
    bedRooms: Int!
    bathRooms: Int!
    kitchen: Boolean!
    parking: Boolean!
    wifi: Boolean!
  }
`;
