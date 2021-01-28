import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mailbox } from 'src/app/models/mailbox';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { EmailValidationService } from 'src/app/services/email-validation.service';

@Component({
  selector: 'rev-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  myForm: FormGroup;

  user: User = new User();

  validEmail: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private mailboxService: EmailValidationService) { }


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
    this.user = form.value;

    console.log(this.mailboxService.showValidation(this.user.email));

    this.mailboxService.showValidation(this.user.email)
    .subscribe((validation: Mailbox) => {
      this.validEmail = validation.smtp_check;
      console.log(validation.smtp_check);

      if(this.validEmail){
        console.log(this.validEmail + 'inside the if')
        console.log(this.user.email);
        // this.authService.register(this.user)
        // .then(response => {
        //   console.log(response);
        // }).catch(
        //   errorMessage => {
        //     console.log(errorMessage);
        //     // this.error = errorMessage;
        //   }
        // )
        
        return this.validEmail = false;
      } else{
        console.log("failed creating user due to invalid email");
        return this.validEmail = true;
      }
    });

    // console.log(this.validEmail.smtp_check);
    // console.log('Your form data : ', form.value);
    // console.log("this is the user data: ", this.user)
    // console.log("submitted");


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
