import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    getUsers {
      id
      firstName
      lastName
    }
  }
`;

export const GET_ROOMS = gql`
  query {
    getRooms {
      id
      heading
      selectedFile
      guests
      bed
      bedRooms
      bathRooms
      kitchen
      parking
      wifi
    }
  }
`;

export const LOG_IN = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user
      token
    }
  }
`;
