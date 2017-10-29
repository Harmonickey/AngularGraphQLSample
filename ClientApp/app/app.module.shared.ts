import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { MyGraphQLService } from './services/MyGraphQL.service';

import { ApolloModule } from 'apollo-angular';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'http://localhost:53187'
	})
});

export function provideClient(): ApolloClient {
	return client;
}

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent
	],
	providers: [
		MyGraphQLService
	],
    imports: [
        CommonModule,
        HttpModule,
		FormsModule,
		ApolloModule.forRoot(provideClient),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
