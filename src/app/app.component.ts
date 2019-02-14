import { Component } from '@angular/core';
import { IdentityService } from './identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public identitySvc: IdentityService) {}

  ngOnInit() {
  }

}
