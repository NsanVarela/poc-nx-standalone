import {Component, Input} from '@angular/core';

@Component({
  selector: 'nx-standalone-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() text = '';
}
