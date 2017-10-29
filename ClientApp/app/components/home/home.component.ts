import { Component, OnInit } from '@angular/core';
import { MyGraphQLService } from "../../services/MyGraphQL.service";
import * as graphQLTypes from "../../models/GraphQLTypes";

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	providers: [MyGraphQLService]
})
export class HomeComponent implements OnInit {

	person: graphQLTypes.Person;
	errors: string[]; 

	constructor(private graphQLService: MyGraphQLService) {}

	ngOnInit(): void { //"cGVvcGxlOjE=" is Luke Skywalker
		this.graphQLService.getPersonData("cGVvcGxlOjE=").subscribe(({ data }) => {
			if (data.person) {
				this.person = data.person;
			} else {
				this.errors = data.errors;
			}
		});
	}
}