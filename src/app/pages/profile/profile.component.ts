import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ons-page[profile]',
  template: `
    <ons-toolbar>
      <div class="center">Profile</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      Profile page
    </div>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
}
