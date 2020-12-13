import { User } from '../../../models/useSchema';
import { Room } from '../../../models/roomSchema';
import { ApolloError } from 'apollo-server-micro';
import { validate } from '../../../utils/validation';
import { validateRoom } from '../../../utils/roomValidation';
import bcrypt from 'bcrypt';

export const Mutation = {
  createUser: async (_, { data }) => {
    const { error, value } = validate(data);
    if (error) {
      throw new ApolloError('Something went wrong! Try again.');
    }
    const { firstName, lastName, email, password } = value;
    // Check if email exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw new ApolloError('Email already exists');
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    // Create a new user
    const user = await new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    // return the newly made user
    return await user.save();
  },
  addListing: async (_, { data }, context) => {
    // Authorized Users can post
    // if (!context.user) {
    //   return null;
    // }
    // Validate data
    const { error, value } = validateRoom(data);
    if (error) {
      console.log(error);
      throw new ApolloError('Something went wrong! Try again.');
    }

    const userExists = await User.findOne({ _id: data.user });
    if (!userExists) {
      throw new ApolloError('User does not exist');
    }
    const room = await new Room({
      ...data,
    });
    return await room.save();
  },
};
