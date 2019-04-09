import { PastComponent } from './past/past.component';
import { UpcomingsComponent } from './upcomings/upcomings.component';
import { HeaderComponent } from './header/header.component'; 
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { FaqComponent } from './faq/faq.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [ 
{ 
path:'mypage', 
component: HeaderComponent,
canActivate: [AuthService],
children :[
    {
        path:'faq',
        component: FaqComponent
    },
    {
        path:'my-bookings',
        component: MyBookingsComponent,
        children :[
            {
                path:'upcoming',
                component: UpcomingsComponent
        
            },
            {
                path:'past',
                component: PastComponent
            }
        ]
    },
    {
        path:'profile',
        component: ProfileComponent
    },
   
]
} 
]; 

@NgModule({ 
imports: [RouterModule.forChild(routes)], 
exports: [RouterModule] 
}) 
export class PrivatePagesRoutingModule { }
