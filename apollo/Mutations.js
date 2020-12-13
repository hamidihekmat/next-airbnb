import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      firstName
      lastName
    }
  }
`;

export const ADD_LISTING = gql`
  mutation(
    $user: ID!
    $heading: String!
    $selectedFile: String!
    $guests: Int!
    $bed: Int!
    $bedRooms: Int!
    $bathRooms: Int!
    $kitchen: Boolean!
    $parking: Boolean!
    $wifi: Boolean!
  ) {
    addListing(
      data: {
        user: $user
        heading: $heading
        selectedFile: $selectedFile
        guests: $guests
        bed: $bed
        bedRooms: $bedRooms
        bathRooms: $bathRooms
        kitchen: $kitchen
        parking: $parking
        wifi: $wifi
      }
    ) {
      id
    }
  }
`;
