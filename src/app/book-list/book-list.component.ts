import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../booklist.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService : BooklistService ) { }

  ngOnInit(): void {
  }

  books:any = this.bookService.getBooks()
      .subscribe(response => {
        this.books = response;
      })
}
