import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any;
  //subServices: any;

  constructor(private _services: ServicesService) { }

  ngOnInit() {
    this._services.getServices().subscribe((services: any) => {
      this.services = services;
      console.log(services);
    })
  }

  /*getSubServices(serviceId: string){
    this._services.getSubServices(serviceId).subscribe((subServices: any) => {
      this.subServices = subServices;
      console.log(subServices);
    })
  }*/

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 900,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}
