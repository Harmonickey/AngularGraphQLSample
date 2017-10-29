import { Injectable } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import * as graphQLTypes from '../models/GraphQLTypes';
import { ApolloExecutionResult } from 'apollo-client';

import { Observable } from 'rxjs/Observable';

import gql from 'graphql-tag';

const getPersonQuery = gql`
  query GetPersonQuery($id: ID!) {
    person(id: $id) {
        id
        name
        gender
        homeworld {
          id
          name
          terrains
          diameter
        }
        eyeColor
        hairColor
    }
  }
`;

@Injectable()
export class MyGraphQLService {
	constructor(private apollo: Apollo) { }

	personData: ApolloQueryObservable<graphQLTypes.PersonData>;

	getPersonData(id: String): ApolloQueryObservable<graphQLTypes.PersonData> {
		this.personData = this.apollo.watchQuery<graphQLTypes.PersonData>({
			query: getPersonQuery,
			variables: {
				id: id
			}
		});
		return this.personData;
	}
}