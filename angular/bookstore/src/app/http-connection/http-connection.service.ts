import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
export interface PeriodicElement {
  title: string;
  position: number;
  weight: number;
  symbol: string;
}
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};
@Injectable({
  providedIn: 'root'
})

export class HttpConnectionService {
  

  constructor(private http:HttpClient) {

  }
  bookList:any;
  getBookLists(){
    const dataSource: PeriodicElement[]=[];
    this.http.get('http://localhost:3000/api/textbooks',httpOptions)
      .subscribe(
        (data:any) => {
          
          this.bookList = data;
          for (let index = 0; index < data.length; index++) {
            dataSource.push({position: 1, title: 'Hydrogen', weight: 1.0079, symbol: 'H'});
          }
          console.log(dataSource);
        }
      );
      return dataSource;
  }
}
