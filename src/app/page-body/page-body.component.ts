import { Component, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { PexelsService } from '../services/pexels/pexels.service';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit, AfterViewInit {

  @ViewChild('pageBody') pageBody;

  constructor(private renderer: Renderer2, private pexelsService: PexelsService) { }


  async ngAfterViewInit() {
    const pexelsBody = await this.pexelsService.getPexelImage().toPromise();
    const urlCssProperty = `url("${pexelsBody.photos[0].src.landscape}")`;
    this.renderer.setStyle(this.pageBody.nativeElement, 'background-image', urlCssProperty); 

    setInterval( async() => {
      const pexelsBody = await this.pexelsService.getPexelImage().toPromise();
      const urlCssProperty = `url("${pexelsBody.photos[0].src.landscape}")`;
      this.renderer.setStyle(this.pageBody.nativeElement, 'background-image', urlCssProperty);  
    }, 50000); //50 sec
  }

  ngOnInit(): void {

  }

}
