import * as cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import { AddressInfo } from 'net';
import { makePrismaSchema } from 'nexus-prisma';
import * as path from 'path';

import datamodelInfo from './generated/nexus-prisma';
import { prisma } from './generated/prisma-client';
import { permissions } from './permissions';
import * as allTypes from './resolvers';

// Make sure dotenv works across the project
config();

const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: allTypes,

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma,
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: true,
    output: false,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
});

const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
});

// Initialize all middleware here
server.express.use(cookieParser());

const { FRONTEND_URL, APP_PORT } = process.env;

server
  .start({
    cors: {
      credentials: true,
      origin: FRONTEND_URL,
    },
    port: parseInt(APP_PORT, 10),
  })
  .then(http =>
    // eslint-disable-next-line no-console
    console.log(`> 🚀 GraphQL API Gateway is running on http://localhost:${(http.address() as AddressInfo).port}`)
  )
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(`Something went wrong:`, err);
    process.exit(1);
  });
