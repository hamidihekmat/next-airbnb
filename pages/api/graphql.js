import { ApolloServer, AuthenticationError } from 'apollo-server-micro';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

mongoose.connect(
  process.env.DB_CONNECT ||
    'mongodb+srv://hwhahmidi:Aminajan123@cluster0.lvgqp.mongodb.net/webas?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('Connected to database')
);
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    let user = '';
    if (token) {
      try {
        user = jwt.verify(token, process.env.TOKEN_SECRET || 'secretToken69');
      } catch (error) {
        user = '';
      }
    }
    return { user };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
