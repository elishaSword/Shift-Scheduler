import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'rev-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = JSON.parse(atob(localStorage.getItem("user")));
  // user1: User= new User();
  myForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: [this.user.firstName, [
        Validators.required
      ]],
      lastName: [this.user.lastName, [
        Validators.required
      ]],
      email: [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      phone:[this.user.phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]]
    })



    // this.authService.register(this.user1);
    console.log(this.user);

    // this.authService.loggedInUser;

  }

  // email = new FormControl(this.user.email, [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'This field cannot be empty!';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getGeneralError(){
    return 'This field cannot be empty!';
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

}
