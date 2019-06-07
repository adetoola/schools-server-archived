import * as path from "path";
import { GraphQLServer } from "graphql-yoga";
import { config } from "dotenv";
import { makePrismaSchema } from "nexus-prisma";
import * as cookieParser from "cookie-parser";
import { prisma } from "./generated/prisma-client";
import datamodelInfo from "./generated/nexus-prisma";

import * as allTypes from "./resolvers";

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
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts"),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, "./types.ts"),
        alias: "types",
      },
    ],
    contextType: "types.Context",
  },
});

const server = new GraphQLServer({
  schema,
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
});

// Initialize all middleware here
server.express.use(cookieParser());

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  () => console.log(`🚀 Server is running on http://localhost:4000`)
);
