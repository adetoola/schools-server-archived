import 'dotenv/config';

import { GraphQLClient } from 'graphql-request';

import { prisma } from '../src/generated/prisma-client';

// use this instead for cookie support
(global as any)['fetch'] = require('fetch-cookie/node-fetch')(require('node-fetch'));

const { MAILTRAP_URL, MAILTRAP_INBOX_ID, MAILTRAP_API_TOKEN, APP_URL, APP_PORT } = process.env;
export const client = new GraphQLClient(`${APP_URL}:${APP_PORT}`);
export const getPrismaTestInstance = () => prisma;

export const EMAIL_CLEAN_URL = `${MAILTRAP_URL}/inboxes/${MAILTRAP_INBOX_ID}/clean`;
export const MAILTRAP_AUTH_HEADER = {
  'Api-Token': MAILTRAP_API_TOKEN,
};

export const GET_EMAILS_URL = `${MAILTRAP_URL}/inboxes/${MAILTRAP_INBOX_ID}/messages`;
