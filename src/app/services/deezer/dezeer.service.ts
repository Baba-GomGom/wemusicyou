import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DezeerService {

  constructor(private httpClient: HttpClient) { }

  login(): void {
    const APP_ID = "342562";
    const redirect_uri = encodeURI("https://gomri.fr/Nindo");
    const perms = "basic_access,email";
    const baseUrl = "https://connect.deezer.com/oauth/auth.php";
    
    const params = new HttpParams()
      .set('app_id', APP_ID)
      .set('redirect_uri', redirect_uri)
      .set('perms', perms);

      window.location.href = `${baseUrl}?${params.toString()}`;
  }

  public processRequest(searchType: string, searchInput: string): Observable<any> {
    const token = 'fr6047d0bfb5dc449eb6f3f9b3f1947c';
    const basrUrl  = "https://api.deezer.com/";
    
    return this.httpClient.get(`${basrUrl}${searchType}?q=${searchInput}`)
    
  }
}
