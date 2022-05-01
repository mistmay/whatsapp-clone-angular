import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class FakeMessageApiService {

  constructor(private http: HttpClient) { }

  getMessagesFromApi() {
    return this.http.get<ApiResponse>('https://dummyjson.com/comments');
  }

}
