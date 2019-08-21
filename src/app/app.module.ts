import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Onsen UI
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

// Smart Components
import { CreateNavComponent } from './pages/createnav/createnav.component';
import { CreateComponent } from './pages/createnav/create/create.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { ProfileComponent } from './pages/profile/profile.component';

// Dumb Components
import { CWorkoutComponent } from './pages/createnav/create/cworkout/cworkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    WorkoutComponent,
    ProfileComponent,
    CWorkoutComponent,
    CreateNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  entryComponents: [
    CreateComponent,
    WorkoutComponent,
    ProfileComponent,
    CWorkoutComponent,
    CreateNavComponent
  ],
  providers: [OnsNavigator],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }

