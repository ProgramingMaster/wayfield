import { Component } from '@angular/core';
import { CreateNavComponent } from './pages/createnav/createnav.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { ProfileComponent } from './pages/profile/profile.component';

@Component({
  selector: 'app-root',
  template: `
    <ons-tabbar swipeable tab-border>
      <div class="tabbar__content"></div>
      <div class="tabbar">
        <ons-tab label="Workout" [page]="tab1" active></ons-tab>
        <ons-tab label="Create" [page]="tab2"></ons-tab>
        <ons-tab label="Profile" [page]="tab3"></ons-tab>
      </div>
    </ons-tabbar>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tab1 = WorkoutComponent;
  tab2 = CreateNavComponent;
  tab3 = ProfileComponent;
}
