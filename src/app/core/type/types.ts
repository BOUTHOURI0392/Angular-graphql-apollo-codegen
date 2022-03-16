import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CarDto = {
  __typename?: 'CarDTO';
  _id: Scalars['ID'];
  cost: Scalars['Float'];
  created: Scalars['DateTime'];
  name: Scalars['String'];
  price: Scalars['Float'];
  updated?: Maybe<Scalars['DateTime']>;
};

export type CreateCarDto = {
  cost: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create: CarDto;
  deleteCar: Scalars['String'];
  updateCar: CarDto;
};


export type MutationCreateArgs = {
  createCar: CreateCarDto;
};


export type MutationDeleteCarArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCarArgs = {
  id: Scalars['String'];
  updatecar: UpdateCarDto;
};

export type Query = {
  __typename?: 'Query';
  car: CarDto;
  findAll: Array<CarDto>;
};


export type QueryCarArgs = {
  id: Scalars['String'];
};

export type UpdateCarDto = {
  cost?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type FindCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCarsQuery = { __typename?: 'Query', findAll: Array<{ __typename?: 'CarDTO', _id: string, name: string, cost: number, price: number, created: any, updated?: any | null }> };

export type DeleteOneMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteOneMutation = { __typename?: 'Mutation', deleteCar: string };

export type AddInputMutationVariables = Exact<{
  name: Scalars['String'];
  cost: Scalars['Float'];
  price: Scalars['Float'];
}>;


export type AddInputMutation = { __typename?: 'Mutation', create: { __typename?: 'CarDTO', _id: string, name: string, cost: number, price: number } };

export type UpdatecarMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  cost: Scalars['Float'];
  price: Scalars['Float'];
}>;


export type UpdatecarMutation = { __typename?: 'Mutation', updateCar: { __typename?: 'CarDTO', _id: string } };

export type FindOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindOneQuery = { __typename?: 'Query', car: { __typename?: 'CarDTO', _id: string, name: string, cost: number, price: number, created: any, updated?: any | null } };

export const FindCarsDocument = gql`
    query findCars {
  findAll {
    _id
    name
    cost
    price
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindCarsGQL extends Apollo.Query<FindCarsQuery, FindCarsQueryVariables> {
    override document = FindCarsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneDocument = gql`
    mutation deleteOne($id: String!) {
  deleteCar(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneGQL extends Apollo.Mutation<DeleteOneMutation, DeleteOneMutationVariables> {
    override document = DeleteOneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddInputDocument = gql`
    mutation addInput($name: String!, $cost: Float!, $price: Float!) {
  create(createCar: {name: $name, cost: $cost, price: $price}) {
    _id
    name
    cost
    price
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddInputGQL extends Apollo.Mutation<AddInputMutation, AddInputMutationVariables> {
    override document = AddInputDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatecarDocument = gql`
    mutation updatecar($id: String!, $name: String!, $cost: Float!, $price: Float!) {
  updateCar(updatecar: {name: $name, cost: $cost, price: $price}, id: $id) {
    _id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatecarGQL extends Apollo.Mutation<UpdatecarMutation, UpdatecarMutationVariables> {
    override document = UpdatecarDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindOneDocument = gql`
    query findOne($id: String!) {
  car(id: $id) {
    _id
    name
    cost
    price
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindOneGQL extends Apollo.Query<FindOneQuery, FindOneQueryVariables> {
    override document = FindOneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }