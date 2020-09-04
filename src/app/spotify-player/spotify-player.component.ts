import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify/spotify.service';


@Component({
  selector: 'app-spotify-player',
  templateUrl: './spotify-player.component.html',
  styleUrls: ['./spotify-player.component.css']
})
export class SpotifyPlayerComponent implements OnInit {

  public spotifyResponse = null;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  public changeIframeSrc(): void {
    // document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)]; 
  }

  public async spotifySearch(): Promise<any> {
    const res = await this.spotifyService.search('album', 'booba').toPromise();
    
    
    
    
    this.spotifyResponse = res;
  }

}
