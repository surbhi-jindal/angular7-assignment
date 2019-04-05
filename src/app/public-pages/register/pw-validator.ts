import { FormGroup } from '@angular/forms'; 
export class EqualPasswordsValidator { 

    public static validate(password: string, cpassword: string) { 
    return (group: FormGroup): {[key: string]: any} => { 
    let passwordNew = group.controls[password]; 
    let confirmPassword = group.controls[cpassword]; 
    
    if (passwordNew.value != confirmPassword.value) { 
    return { 
        mismatchedPasswords: true 
    }; 
    } 
    }; 
    } 
    }

