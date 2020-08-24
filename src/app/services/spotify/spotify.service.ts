import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) { }


  search(qType: string, query: string): Observable<any> {
    const baseUrl = 'https://api.spotify.com/v1/search';


    const token = 'BQC0yEm_xUSOHi7u6icvKOiFc4uIpXQ83K16ULmIzXr0XzKCJiV2Ricr2iAzmg-2ZH8I1F5Mp5Bn370SKJ7TZmmGf9wzoNZN3IjgvKALZ4a03Dlfgw5JMHyHLXDV-mP2LawpRLq6-KNg93B7gdzaKSdCpR6g9Xu2WsaJ';

    qType = 'album';
    query = 'booba';
    //const url = `${baseUrl}?q=${query}&type=${qType}`;
    const url = 'https://api.spotify.com/v1/search?q=booba&type=track';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer:' + token 
      })
    };

    return this.httpClient.get(url, httpOptions);

  }
}
