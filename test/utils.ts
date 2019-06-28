import 'dotenv/config';

import { GraphQLClient } from 'graphql-request';

import { prisma } from '../src/generated/prisma-client';

// use this instead for cookie support
(global as any)['fetch'] = require('fetch-cookie/node-fetch')(require('node-fetch'));

const { APP_URL, APP_PORT } = process.env;
export const client = new GraphQLClient(`${APP_URL}:${APP_PORT}`);
export const getPrismaTestInstance = () => prisma;
