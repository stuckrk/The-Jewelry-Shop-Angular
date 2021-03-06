import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  template: `
    <app-header></app-header>
    <div class="image">
      <img src="../../assets/images/LogoforJewelryShop.png">
    </div>
    <div>
      <h1>Our Story</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque sollicitudin molestie. Proin sit amet cursus sapien, et porta elit. Aenean fermentum odio at accumsan mattis. In luctus sapien vitae arcu eleifend, ut scelerisque urna iaculis. Nulla eleifend at sem eu faucibus. Maecenas efficitur neque vitae pellentesque consectetur. Proin efficitur magna non scelerisque dapibus. Curabitur porta mauris non velit posuere, sit amet accumsan leo sollicitudin. Sed dignissim tellus sit amet nisi placerat porta. Phasellus scelerisque malesuada est nec pharetra. Nam fermentum feugiat lacus, nec sodales lacus convallis at.</p>
      <p>Morbi ut pharetra urna. Vestibulum aliquam dignissim augue, sed bibendum nibh pretium luctus. Nam auctor et magna eget euismod. Mauris sed nisl ante. Vivamus sollicitudin lobortis nisl, eu blandit dolor cursus et. Nam varius consectetur enim, nec placerat orci euismod et. Vestibulum sollicitudin, sapien at lobortis aliquet, tortor ex efficitur dolor, in consequat nunc ex ac est. Vivamus sed hendrerit turpis. Nam vitae mollis lorem. Vivamus ac mattis odio. Maecenas sit amet auctor massa, at rhoncus urna. Proin vulputate eros a odio lacinia malesuada. Sed eget ullamcorper neque.</p>
    </div>
    <app-footer></app-footer>
  `
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
