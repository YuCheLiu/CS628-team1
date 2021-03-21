import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export interface PeriodicElement {
  title: string;
  _id: number;
  rating: number;
  copies: number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  ELEMENT_DATA: PeriodicElement[] = [];  
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };
  constructor( private http:HttpClient){}
  
  getBookLists(){
    this.ELEMENT_DATA = []; 
    this.http.get('http://localhost:3000/api/textbooks',this.httpOptions)
      .subscribe(
        (data:any) => {
          for (let index = 0; index < data.length; index++) {
            this.ELEMENT_DATA.push({
              _id: data[index]._id, 
              title: data[index].title, 
              rating: data[index].rating,
              copies: data[index].copies});
          }
        }
      );
      
  }

}
