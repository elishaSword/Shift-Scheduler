import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'rev-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  myForm: FormGroup;

  user: User = new User();

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: 
        ['', 
          [
            Validators.required, 
            // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]
        ]],

      confirmPassword: 
        ['', 
          [
            Validators.required,
            // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]
        ]],

      phone:[null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
    }, {
      validators: this.passwordMatchValidator("password", "confirmPassword")
    } )
  }


  passwordMatchValidator(password: string, confirmPassword: string) {
    return (control: AbstractControl) => {
      const passwordControl = control.get(password);
      const confirmPasswordControl = control.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl?.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
           return ({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
            return null;
      }
    };
  }


  onSubmit(form: FormGroup) {
    console.log('Your form data : ', form.value);
}

  get email(){
    return this.myForm.get('email');
  }
  get firstName(){
    return this.myForm.get('firstName');
  }
  get lastName(){
    return this.myForm.get('lastName');
  }
  get phone(){
    return this.myForm.get('phone');
  }
  get password(){
    return this.myForm.get('password');
  }
  get confirmPassword(){
    return this.myForm.get('confirmPassword');
  }




}
