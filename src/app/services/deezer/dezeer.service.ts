import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DezeerService {

  private app_id = "342562";
  private key = "215816be8d11b9f2fc29d0d293db4952";
  private auth_token = '';

  constructor(private httpClient: HttpClient) { }

  login(): void {
    const redirect_uri = encodeURI("https://gomri.fr/Nindo");
    const perms = "basic_access,email";
    const baseUrl = "https://connect.deezer.com/oauth/auth.php";
    
    const params = new HttpParams()
      .set('app_id', this.app_id)
      .set('redirect_uri', redirect_uri)
      .set('perms', perms);

      window.location.href = `${baseUrl}?${params.toString()}`;
  }

  public async getToken() {
    const code = 'frfa70e30b026b1de1aadeff78a4f67b';
    const tokenUrl = `https://connect.deezer.com/oauth/access_token.php?app_id=${this.app_id}&secret=${this.key}&code=${code}`;
    const res = await this.httpClient.get(tokenUrl).toPromise();
    console.log('TOKEN', res);
  }

  public processRequest(searchType: string, searchInput: string): Observable<any> {

    this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    const basrUrl  = "https://api.deezer.com/";
    return this.httpClient.get(`${basrUrl}${searchType}?q=${searchInput}`,  {headers}) 
  }
}
