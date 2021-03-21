import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  favoriteColor='';
  author:string = '';
  title:string='';
  rating:number=0;
  copies:number=0;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  authorInput(event:any){
    this.author = event.target.value;
    console.log(this.author);
  }
  titleInput(event:any){
    this.title = event.target.value;
    console.log(this.title);
  }
  ratingInput(event:any){
    this.rating = event.target.value;
    console.log(this.rating);
  }
  copiesInput(event:any){
    this.copies = event.target.value;
    console.log(this.copies);
  }

  submit(){
    this.http.post('http://localhost:3000/api/textbooks',{
      author: this.author,
      title: this.title, 
      rating: this.rating,
      copies: this.copies
    }).subscribe(
        (data:any) => {
          console.log(data);
        }
      )
  }

}
