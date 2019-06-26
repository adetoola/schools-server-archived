import 'dotenv/config';

import * as cookieParser from 'cookie-parser';
import { AddressInfo } from 'net';

import server from './server';

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
