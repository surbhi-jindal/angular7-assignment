import { PostApiService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {pwvalidator} from './pw-validator';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private service:PostApiService,
    private router:Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          phnumber:['', Validators.required],
          address:['', Validators.required],
          
          cpassword: ['', [Validators.required, Validators.minLength(6)]],
          history:['']
      },
      {validator: pwvalidator('password','cpassword')}
      );
  }

  onSubmit() {
      this.submitted = true;

       //stop the process here if form is invalid
      if (this.registerForm.invalid) {
          return false;
      }

      //if the form is valid then post the form

      this.service.createUser(this.registerForm.value).subscribe();
      this.router.navigate(['/public/login']);
  }
}
