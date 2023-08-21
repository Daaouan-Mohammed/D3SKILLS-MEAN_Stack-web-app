import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent {
  isFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.pageYOffset > 200; // Adjust the scroll threshold as needed
  }
}
