import { HttpClient, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
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

  public getAlbum(): Observable<any> {
    const token = 'fr996d8e279f395dd2cc212bbfd2ca3f';
    
    return this.httpClient.get("https://api.deezer.com/search?q=ninho");
    
  }
}
