/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPremiumPage = /* GraphQL */ `
  mutation CreatePremiumPage(
    $input: CreatePremiumPageInput!
    $condition: ModelPremiumPageConditionInput
  ) {
    createPremiumPage(input: $input, condition: $condition) {
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
export const updatePremiumPage = /* GraphQL */ `
  mutation UpdatePremiumPage(
    $input: UpdatePremiumPageInput!
    $condition: ModelPremiumPageConditionInput
  ) {
    updatePremiumPage(input: $input, condition: $condition) {
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
export const deletePremiumPage = /* GraphQL */ `
  mutation DeletePremiumPage(
    $input: DeletePremiumPageInput!
    $condition: ModelPremiumPageConditionInput
  ) {
    deletePremiumPage(input: $input, condition: $condition) {
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
