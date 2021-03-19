import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { LeftPanelComponent } from './Components/Layout/left-panel/left-panel.component';
import { MainComponent } from './Components/main/main.component';
import { HomeComponent } from './Components/home/home.component';
import { ImageGalleryComponent } from './Components/image-gallery/image-gallery.component';
import { PastEventsComponent } from './Components/home/past-events/past-events.component';
import { UpcomingEventsComponent } from './Components/home/upcoming-events/upcoming-events.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LocationComponent } from './Components/contact/location/location.component';
import { SendmailComponent } from './Components/contact/sendmail/sendmail.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignupComponent } from './Components/Auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenNotFoundComponent } from './Component/pagen-not-found/pagen-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent,
    MainComponent,
    HomeComponent,
    ImageGalleryComponent,
    PastEventsComponent,
    UpcomingEventsComponent,
    AboutUsComponent,   
    ContactUsComponent,
    LocationComponent,
    SendmailComponent,  
    LoginComponent, SignupComponent, PagenNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
