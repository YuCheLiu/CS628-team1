import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  _id:string="";
  bookIdInput(event:any){
    this._id = event.target.value;
    console.log(this._id);
  }
  deleteBook(){
    this.http.delete(`http://localhost:3000/api/textbooks/${this._id}`)
    .subscribe(
        (data:any) => {
          if(data.status == 404){
            console.log("??");
          }
          console.log(data);
        }
      );
    }
}
