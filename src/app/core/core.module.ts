import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlModule } from './graphql/graphql.module';
import { ApolloModule } from 'apollo-angular';



@NgModule({
  declarations: [HeaderComponent ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphqlModule,
    ApolloModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}