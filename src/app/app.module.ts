import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*External Modules */
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AgmCoreModule } from '@agm/core';


/*App components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesFormComponent } from './places-form/places-form.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesMapComponent } from './places-map/places-map.component';

import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PlacesFormComponent,
    PlacesListComponent,
    PlacesMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgr0Z1tmRBZteBjNa33LDqoZ4ly-7C-V8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
