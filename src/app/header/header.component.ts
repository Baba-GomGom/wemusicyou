import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DezeerService } from '../services/deezer/dezeer.service';

const CLIENTS_ID = {
  spotity: 'bac7d5a03faa42a3a986aa3d568a7f0c'
};

const REDIRECT_URL = 'https://gomri.fr/wemusicyou';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('tabGroup') tabGroup;

  constructor(private deezerService: DezeerService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('afterViewInit => ', this.tabGroup.selectedIndex);
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('index => ', tabChangeEvent.tab.textLabel);
  }

  public spotifyLogin(): void {
    const scopes = 'user-read-private user-read-email';
    const url = 'https://accounts.spotify.com/authorize'
      + '?response_type=code'
      + '&client_id='
      + CLIENTS_ID.spotity
      + (scopes ? '&scope=' + encodeURIComponent(scopes) : '')
      + '&redirect_uri=' + encodeURIComponent(REDIRECT_URL);

    window.location.href = url;
  }
    
  public deezerLogin(): void {
    console.log('1');
    this.deezerService.login();
  }

  public async getArtist()  {
    const res = await this.deezerService.getAlbum().toPromise();
    console.log(res);
  }
}

