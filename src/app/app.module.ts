import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageBodyComponent } from './page-body/page-body.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyPlayerComponent } from './spotify-player/spotify-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageBodyComponent,
    SpotifyPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
