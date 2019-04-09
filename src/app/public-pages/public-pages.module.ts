import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PostApiService } from '../services/post.service';
import { GetUserService } from '../services/get.service';


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    
    ReactiveFormsModule,
    PublicPagesRoutingModule,
    FormsModule,
    HttpClientModule

    
  ],
  exports: [RegisterComponent,
  LoginComponent],
  providers: [
    PostApiService,
    GetUserService

  ]
})
export class PublicPagesModule { }
