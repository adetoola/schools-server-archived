import { prisma } from '../src/generated/prisma-client'

async function main() {
  await prisma.createAccount({
    email: 'alice@prisma.io',
    name: 'Alice',
    posts: {
      create: {
        title: 'Join us for Prisma Day 2019 in Berlin',
        content: 'https://www.prisma.io/day/',
        published: true,
      },
    },
  })
  await prisma.createAccount({
    email: 'bob@prisma.io',
    name: 'Bob',
    posts: {
      create: [
        {
          title: 'Subscribe to GraphQL Weekly for community news',
          content: 'https://graphqlweekly.com/',
          published: true,
        },
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://twitter.com/prisma',
        },
      ],
    },
  })
}

main().catch(e => console.error(e))
