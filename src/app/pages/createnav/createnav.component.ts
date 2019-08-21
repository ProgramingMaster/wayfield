import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { CreateComponent } from './create/create.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ons-page[createnav]',
  template: `
  <ons-navigator swipeable [page]="page"></ons-navigator>
  `,
  styleUrls: ['./createnav.component.scss']
})
export class CreateNavComponent {
  page = CreateComponent;
}
