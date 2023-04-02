/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePremiumPageInput = {
  id?: string | null,
  name?: string | null,
  title?: string | null,
  description?: string | null,
  photo?: string | null,
};

export type ModelPremiumPageConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  and?: Array< ModelPremiumPageConditionInput | null > | null,
  or?: Array< ModelPremiumPageConditionInput | null > | null,
  not?: ModelPremiumPageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type PremiumPage = {
  __typename: "PremiumPage",
  id: string,
  name?: string | null,
  title?: string | null,
  description?: string | null,
  photo?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePremiumPageInput = {
  id: string,
  name?: string | null,
  title?: string | null,
  description?: string | null,
  photo?: string | null,
};

export type DeletePremiumPageInput = {
  id: string,
};

export type ModelPremiumPageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  and?: Array< ModelPremiumPageFilterInput | null > | null,
  or?: Array< ModelPremiumPageFilterInput | null > | null,
  not?: ModelPremiumPageFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPremiumPageConnection = {
  __typename: "ModelPremiumPageConnection",
  items:  Array<PremiumPage | null >,
  nextToken?: string | null,
};

export type CreatePremiumPageMutationVariables = {
  input: CreatePremiumPageInput,
  condition?: ModelPremiumPageConditionInput | null,
};

export type CreatePremiumPageMutation = {
  createPremiumPage?:  {
    __typename: "PremiumPage",
    id: string,
    name?: string | null,
    title?: string | null,
    description?: string | null,
    photo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePremiumPageMutationVariables = {
  input: UpdatePremiumPageInput,
  condition?: ModelPremiumPageConditionInput | null,
};

export type UpdatePremiumPageMutation = {
  updatePremiumPage?:  {
    __typename: "PremiumPage",
    id: string,
    name?: string | null,
    title?: string | null,
    description?: string | null,
    photo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePremiumPageMutationVariables = {
  input: DeletePremiumPageInput,
  condition?: ModelPremiumPageConditionInput | null,
};

export type DeletePremiumPageMutation = {
  deletePremiumPage?:  {
    __typename: "PremiumPage",
    id: string,
    name?: string | null,
    title?: string | null,
    description?: string | null,
    photo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPremiumPageQueryVariables = {
  id: string,
};

export type GetPremiumPageQuery = {
  getPremiumPage?:  {
    __typename: "PremiumPage",
    id: string,
    name?: string | null,
    title?: string | null,
    description?: string | null,
    photo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPremiumPagesQueryVariables = {
  filter?: ModelPremiumPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPremiumPagesQuery = {
  listPremiumPages?:  {
    __typename: "ModelPremiumPageConnection",
    items:  Array< {
      __typename: "PremiumPage",
      id: string,
      name?: string | null,
      title?: string | null,
      description?: string | null,
      photo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePremiumPageSubscription = {
  onCreatePremiumPage?:  {
    __typename: "PremiumPage",
    id: string,
    name?: string | null,
    title?: string | null,
    description?: string | null,
    photo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePremiumPageSubscription = {
  onUpdatePremiumPage?:  {
    __typename: "PremiumPage",
    id: string,
    name?: string | null,
    title?: string | null,
    description?: string | null,
    photo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePremiumPageSubscription = {
  onDeletePremiumPage?:  {
    __typename: "PremiumPage",
    id: string,
    name?: string | null,
    title?: string | null,
    description?: string | null,
    photo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
