import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './componets/survey/survey.component';
import { environment } from '../environments/environment.prod';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
