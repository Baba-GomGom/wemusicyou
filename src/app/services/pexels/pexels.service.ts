import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = '563492ad6f917000010000013ac3d04b10cd46d281f9c6cb5b7ac181';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {

  constructor(private httpClient: HttpClient) { }

   getPexelImage(): Observable<any> {
    const baseUrl = "https://api.pexels.com/v1/search?query=landscape&per_page=1&page="
    const page = Math.floor((Math.random() * 5000) + 1);
    const url = `${baseUrl}${page}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': API_KEY
      })
    };

    return this.httpClient.get(url, httpOptions);

  }
}
