import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef;
  map: google.maps.Map;

  constructor() {}
    ionViewWillEnter(){
      this.exibirMapa();
    }

  exibirMapa(): void{
    const posicao = new google.maps.LatLng(-22.174222276334117, -47.39390635985415);
    const opcoes = {
      center: posicao,
      zoom: 10,
      disableDefaultUI: false
    };
      this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);
  }

}
