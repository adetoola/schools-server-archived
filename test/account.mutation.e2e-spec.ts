import { client, getPrismaTestInstance } from './utils';

const defaultAccountFragment = `
  id
  username
  email
`;

const signupMutation = `
  mutation signup($username: String, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      ${defaultAccountFragment}
    }
  }
`;

// const inSignupMutation = `
//   mutation signup($username: String, $email: String!, $password: String!) {
//     signup(username: $username, email: $email, password: $password) {
//       ${defaultAccountFragment}
//       password
//     }
//   }
// `;

describe('AccountMutation - signup (e2e)', () => {
  afterEach(async () => {
    //reset prisma db especially the account table
    await getPrismaTestInstance().deleteManyAccounts();
    console.log('I was called!');
  });

  // it('calls the API and throws an error', async () => {
  //   try {
  //     await login('email', 'password');
  //   } catch (error) {
  //     expect(error.name).toEqual('Unauthorized');
  //     expect(error.status).toEqual(401);
  //   }
  // });

  it('should create an account when the mutation is valid.', async () => {
    console.log(process.env.NOD_ENV);
    const response = await client.request(signupMutation, {
      email: 'adetoola@gmail.com',
      username: 'adetoola',
      password: 'qwerty1234',
    });

    expect(response).toMatchObject({
      signup: {
        id: expect.any(String),
        username: 'adetoola',
        email: 'adetoola@gmail.com',
      },
    });
  });
});
