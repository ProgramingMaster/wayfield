import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { CWorkoutComponent } from './cworkout/cworkout.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ons-page[create]',
  template: `
    <ons-toolbar>
      <div class="center">Create</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content">
      <ons-list>
        <ons-list-item (click)="push()" modifier="chevron" tappable>
          Create Workout
        </ons-list-item>
        <ons-list-item modifier="chevron" tappable>
          Create Day
        </ons-list-item>
        <ons-list-item modifier="chevron" tappable>
          Create Week
        </ons-list-item>
        <ons-list-item modifier="chevron" tappable>
          Create Routine
        </ons-list-item>
      </ons-list>
    </div>
  `,
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private _navigator: OnsNavigator) {
  }

  push() {
    this._navigator.element.pushPage(CWorkoutComponent, {animation: 'slide'});
  }

  pop() {
    this._navigator.element.popPage();
  }
}
