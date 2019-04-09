import { Router } from '@angular/router'; 
import { GetUserService } from './../../services/get.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private service:GetUserService,
    private router:Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
          
          password: ['', [Validators.required, Validators.minLength(6)]]
          
      });
  }

  data: any;
  onSubmit() {
    this.submitted = true;

       //stop the process here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
    this.service.getUser(this.loginForm.value).subscribe(response => { 
      this.data=response;
      // if credentials are not valid
      if((Object.keys(response).length)==0){ 
        alert('invalid credentials!!');
      } 
      // else go to profile form
      else {
        localStorage.setItem('profilename',this.data[0].firstName);
        localStorage.setItem('id',this.data[0].id);
        this.router.navigate(["user/mypage"]);
      }
       
      }); 
  }
}
