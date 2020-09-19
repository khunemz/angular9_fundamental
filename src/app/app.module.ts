import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { AuthService } from './shared/services/auth.service';
import { NotificationService } from './shared/services/notification.service';
=======
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
<<<<<<< HEAD
    HttpClientModule,
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [
    AuthService,
    NotificationService
=======
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent
>>>>>>> 244d30ea6dbaf1cb99887af2ec8c9f6bff474d86
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
