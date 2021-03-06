import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'], 
  template: `
    <footer>
      <div class="location">
          <h2>Location</h2>
          <h4>The Jewelry Shop</h4>
          <p>111 Lorem Ipsum Way</p>
          <p>Lorem Ipsum, Ipsum, 33333</p>
          <p>000.000.0000</p>
      </div>
      <div class="social">
          <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
          </ul>
      </div>
      <div class="hours">
        <ul>
            <li><p>Monday: 00:00 AM - 00:00 PM</p></li>
            <li><p>Tuesday: 00:00 AM - 00:00 PM</p></li>
            <li><p>Wednesday: 00:00 AM - 00:00 PM</p></li>
            <li><p>Thursday: 00:00 AM - 00:00 PM</p></li>
            <li><p>Friday: 00:00 AM - 00:00 PM</p></li>
            <li><p>Saturday: 00:00 AM - 00:00 PM</p></li>
            <li><p>Sunday: 00:00 AM - 00:00 PM</p></li>
        </ul>
      </div>
    </footer>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
