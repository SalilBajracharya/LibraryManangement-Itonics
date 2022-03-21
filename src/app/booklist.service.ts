import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  private url = "https://6232c4578364d63035c35271.mockapi.io/api/books/Books";

  constructor(private httpClient: HttpClient) {

  }

  getBooks()
  {
    return this.httpClient.get(this.url);;
  }



}
