import { Component, OnInit } from '@angular/core';

const CLIENTS_ID = {
  spotity: 'bac7d5a03faa42a3a986aa3d568a7f0c'
};

const REDIRECT_URL = 'https://gomri.fr/wemusicyou';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
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

}

