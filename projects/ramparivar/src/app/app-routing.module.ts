import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent} from '../app/Components/home/home.component';
import{ AboutUsComponent} from '../app/Components/about-us/about-us.component';
import{ ContactUsComponent} from '../app/Components/contact-us/contact-us.component'
import{ PastEventsComponent} from '../app/Components/home/past-events/past-events.component';
import{ UpcomingEventsComponent} from '../app/Components/home/upcoming-events/upcoming-events.component';
import{PagenNotFoundComponent} from '../app/Component/pagen-not-found/pagen-not-found.component';
import{ImageGalleryComponent} from '../app/Components/image-gallery/image-gallery.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'Upcoming Evenet',component:UpcomingEventsComponent}
    ]
  },
  {path:'home',component:HomeComponent},
  {path:'Aboutus',component:AboutUsComponent},
  {path:'ContactUS',component:ContactUsComponent},
  {path:'ImageGallery',component:ImageGalleryComponent},
  
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
