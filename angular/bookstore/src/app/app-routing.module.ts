import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';

const routes: Routes = [
  {path: 'BookListComponent', component: BookListComponent},
  {path: 'BookAddComponent', component: BookAddComponent},
  {path: 'BookDeleteComponent', component: BookDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
