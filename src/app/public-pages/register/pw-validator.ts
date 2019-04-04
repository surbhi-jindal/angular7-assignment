import { FormGroup } from '@angular/forms'; 


export function pwvalidator(pass, cpass) { 
    return (formGroup: FormGroup)=>{
const password = formGroup.controls[pass]; 
const cpassword = formGroup.controls[cpass]; 
// if password and confirm password do not match then alert box shows
if(password.value != cpassword.value)
{
    alert("Passwords and confirm password does not match");
}

}
}
