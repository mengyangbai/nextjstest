/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPremiumPage = /* GraphQL */ `
  query GetPremiumPage($id: ID!) {
    getPremiumPage(id: $id) {
      id
      name
      title
      description
      photo
      createdAt
      updatedAt
    }
  }
`;
export const listPremiumPages = /* GraphQL */ `
  query ListPremiumPages(
    $filter: ModelPremiumPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPremiumPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        title
        description
        photo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
