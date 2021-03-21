import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import {HttpClientModule} from '@angular/common/http'
import { HttpConnectionService } from './http-connection/http-connection.service';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [HttpConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
