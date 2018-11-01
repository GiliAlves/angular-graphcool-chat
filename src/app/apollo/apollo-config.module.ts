import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  declarations: []
})
export class ApolloConfigModule {

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {
    const uri = 'https://api.graph.cool/simple/v1/cjnv7bj9p65qw0144v7mkhs4p';
    const http = httpLink.create({ uri });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
