import { prisma } from '../src/generated/prisma-client';

async function main() {
  await prisma.createAccount({
    username: 'User',
    email: 'user@example.com',
    // "secret42"
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m',
  });
  await prisma.createAccount({
    username: 'Admin',
    email: 'admin@example.com',
    // "secret42"
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m',
  });
}

// eslint-disable-next-line no-console
main().catch(e => console.error(e));
