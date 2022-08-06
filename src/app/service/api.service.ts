import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getProduct(): Observable<any> {
    // console.log('Calling GetPincodes API');
    return this.http.get(
      'https://api.themoviedb.org/3/search/movie?api_key=30c1ad8eb87c1f9399494de21d2b2918&query=a'
    ); // My API Link
  }
}
