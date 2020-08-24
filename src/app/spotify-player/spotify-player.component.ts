import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-player',
  templateUrl: './spotify-player.component.html',
  styleUrls: ['./spotify-player.component.css']
})
export class SpotifyPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public changeIframeSrc(): void {
    // document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)]; 
  }
}
