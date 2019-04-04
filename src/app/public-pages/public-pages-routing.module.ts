import { AuthPublicService } from './../services/auth-public.service';
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 

const routes: Routes = [ 
{ 
path: 'login', 
canActivate:[AuthPublicService],
component: LoginComponent ,

}, 
{ 
path: 'register', 
component: RegisterComponent ,
canActivate:[AuthPublicService],
}, 
{ 
path:'', 
redirectTo: '/public/register', 
pathMatch: 'full' 
} 
]; 

@NgModule({ 
imports: [RouterModule.forChild(routes)], 
exports: [RouterModule] 
}) 
export class PublicPagesRoutingModule { }
