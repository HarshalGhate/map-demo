import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-maps-project';
  mapCenter = [ 73.8567,18.5204];
  basemapType = 'streets';
  mapZoomLevel = 10;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }

  mapClicked(e:any){
    console.warn(e);
    
  }
}
