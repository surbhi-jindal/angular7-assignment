import { UpdateService } from './../../services/update.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import { GetUserService } from './../../services/get.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private service:GetUserService,
    private updateservice:UpdateService) { }

    user;
    userId:string;
    data:any;
   ngOnInit() {
     this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phnumber:['', Validators.required],
      address:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
      history:['']
    });
      
    this.service.getProfile(localStorage.getItem('id')).subscribe(response => { 
      this.user=response;
      
      this.profileForm.controls['fullName'].setValue(this.user.firstName + " " + this.user.lastName);
      this.profileForm.controls['email'].setValue(this.user.email);
      this.profileForm.controls['phnumber'].setValue(this.user.phnumber);
      this.profileForm.controls['address'].setValue(this.user.address);
      this.profileForm.controls['history'].setValue(this.user.history);
      this.profileForm.controls['firstName'].setValue(this.user.firstName);
      this.profileForm.controls['lastName'].setValue(this.user.lastName);
      this.profileForm.controls['password'].setValue(this.user.password);
      this.profileForm.controls['cpassword'].setValue(this.user.cpassword);
      
    }
  );
  }
  onSubmit() {
    this.submitted = true;
    
    //stop the process here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    //else update the form
    else{
      var fullname=this.profileForm.get('fullName').value.split(' '); 
      this.profileForm.get('firstName').setValue(fullname[0]); 
      this.profileForm.get('lastName').setValue(fullname[1]);
      this.updateservice.putdata(localStorage.getItem('id'), this.profileForm.value).subscribe(response=>{
       this.data=response;
        console.log("success",this.data);
     });
    }
    
}

  }

