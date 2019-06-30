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

describe('AccountMutation (e2e)', () => {
  afterEach(async () => {
    //reset prisma db especially the account table
    await getPrismaTestInstance().deleteManyAccounts();
  });

  describe('signup - (valid inputs)', () => {
    it('should create an account when the mutation is valid.', async () => {
      const response = await client.request(signupMutation, {
        email: 'adetoola@gmail.com',
        username: 'adetoola',
        password: 'qwerty1234',
      });
      console.log(response);
      expect(response).toMatchObject({
        signup: {
          id: expect.any(String),
          username: 'adetoola',
          email: 'adetoola@gmail.com',
        },
      });
    });

    it('should create an account when username is absent.', async () => {
      const response = await client.request(signupMutation, {
        email: 'adetoola@gmail.com',
        password: 'qwerty1234',
      });

      expect(response).toMatchObject({
        signup: {
          id: expect.any(String),
          username: null,
          email: 'adetoola@gmail.com',
        },
      });
    });
  });

  describe('signup - (missing inputs)', () => {
    it('should throw an error when email is absent', async () => {
      client
        .request(signupMutation, {
          username: 'adetoola',
          password: 'qwerty1234',
        })
        .catch(e => {
          expect(e.response.status).toBe(400);
          expect(e.response.errors[0].message).toEqual(
            'Variable "$email" of required type "String!" was not provided.'
          );
        });
    });

    it('should throw an error when password is absent', async () => {
      client
        .request(signupMutation, {
          email: 'adetoola@gmail.com',
        })
        .catch(e => {
          expect(e.response.status).toBe(400);
          expect(e.response.errors[0].message).toEqual(
            'Variable "$password" of required type "String!" was not provided.'
          );
        });
    });
  });

  describe('signup - (validation errors)', () => {
    it('should throw an error when username is invalid', async () => {
      client
        .request(signupMutation, {
          email: 'adetoola@gmail.com',
          username: 'a',
          password: 'qwerty1234',
        })
        .catch(e => {
          expect(e.response.errors[0].message).toEqual('"username" length must be at least 3 characters long');
        });
    });

    it('should throw an error when email is invalid', async () => {
      client
        .request(signupMutation, {
          email: 'test',
          password: 'qwerty1234',
        })
        .catch(e => {
          expect(e.response.errors[0].message).toEqual('"email" must be a valid email');
        });
    });

    it('should throw an error when password is invalid', async () => {
      client
        .request(signupMutation, {
          email: 'adetoola@gmail.com',
          password: 'q',
        })
        .catch(e => {
          expect(e.response.errors[0].message).toEqual(expect.any(String));
        });
    });
  });

  describe('signup - (duplicate items)', () => {
    it('should throw an error if username already exists', async () => {
      // create account
      await client.request(signupMutation, {
        email: 'adetoola@gmail.com',
        username: 'adetoola',
        password: 'qwerty1234',
      });

      // test for duplicate
      client
        .request(signupMutation, {
          email: 'adetoola2@gmail.com',
          username: 'adetoola',
          password: 'qwerty1234',
        })
        .catch(e => {
          expect(e.response.errors[0].message).toEqual(
            'A unique constraint would be violated on Account. Details: Field name = username'
          );
        });
    });

    it('should throw an error if email already exists', async () => {
      // create account
      await client.request(signupMutation, {
        email: 'adetoola@gmail.com',
        password: 'qwerty1234',
      });

      // test for duplicate
      client
        .request(signupMutation, {
          email: 'adetoola@gmail.com',
          password: 'qwerty1234',
        })
        .catch(e => {
          expect(e.response.errors[0].message).toEqual('Email already in use.');
        });
    });
  });
});
