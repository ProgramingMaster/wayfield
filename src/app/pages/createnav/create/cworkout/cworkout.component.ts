import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ons-page[cwork]',
  template: `
    <ons-toolbar>
      <div class="left">
        <ons-back-button>Back</ons-back-button>
      </div>
      <div class="center">Create Workout</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      <div style="padding: 10px">
        <div><ons-input placeholder="Name"></ons-input></div>
      </div>
    </div>
  `,
  styleUrls: ['./cworkout.component.scss']
})
export class CWorkoutComponent {
}
