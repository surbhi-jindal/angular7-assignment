import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { PrivatePagesRoutingModule } from './private-pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { UpdateService } from '../services/update.service';
import { UpcomingsComponent } from './upcomings/upcomings.component';
import { PastComponent } from './past/past.component';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent, FaqComponent, MyBookingsComponent, UpcomingsComponent, PastComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrivatePagesRoutingModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    ProfileComponent,
    FaqComponent ,
    MyBookingsComponent 

  ],
  providers: [
    UpdateService
  ]
})
export class PrivatePagesModule { }
