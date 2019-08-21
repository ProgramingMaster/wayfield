import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ons-page[workout]',
  template: `
    <ons-toolbar>
      <div class="center">Workout</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      Workout page
    </div>
  `,
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent {
}
