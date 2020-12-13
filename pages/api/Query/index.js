import { User } from '../../../models/useSchema';
import { ApolloError } from 'apollo-server-micro';
import { validate } from '../../../utils/validation';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Room } from '../../../models/roomSchema';

export const Query = {
  login: async (_, args) => {
    const { value, error } = validate(args);
    if (error) {
      throw new ApolloError('Something went wrong! Try again.');
    }
    const { email, password } = value;
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApolloError('Wrong credentials.');
    }
    // Compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new ApolloError('Wrong credentials.');
    }
    // Create token
    const token = jwt.sign(
      { id: user._id },
      process.env.TOKEN_SECRET || 'secretToken69'
    );
    // Return token
    return { user: user._id, token };
  },
  getUsers: async () => {
    try {
      const users = await User.find().select('-password');
      return users;
    } catch (error) {
      throw error;
    }
  },
  getRooms: async () => {
    try {
      const rooms = await Room.find();
      return rooms;
    } catch (error) {
      throw new ApolloError('Something went Wrong');
    }
  },
  hello: (_, args, contex) => {
    if (!contex.user) {
      return null;
    }
    return 'Hello World!';
  },
};
