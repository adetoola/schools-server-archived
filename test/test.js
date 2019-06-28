const defaultOrderFragment = `
  id
  rows {
    id
    quantity
    product {
      id
      name
    }
  }
`;

const query = `
    mutation {
      createOrder {
        token
        ${defaultOrderFragment}
      }
    }
  `;

console.log(query);
