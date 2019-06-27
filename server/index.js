import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import gqlServerConfig from './api';
import db from './db';

// get config
dotenv.config();

// connect to db
db.connect(process.env.MONGO_URI).then(
  () => { console.log('Connected to mongo db'); },
  err => { console.error('Error in connecting to mongo db:', err.message); },
);

// graphQL server options
const gqlServerOptions = {
  port: process.env.SERVER_PORT,
  endpoint: '/graphql',
  playground: '/graphiql',
  cors: {
    origin: "*"
  }
};

// create the graphQL server
const server = new GraphQLServer(gqlServerConfig);

// start the graphQL server
server.start(gqlServerOptions, ({ port }) =>
  console.log(`GraphQL Server is running on port ${port}`),
);
