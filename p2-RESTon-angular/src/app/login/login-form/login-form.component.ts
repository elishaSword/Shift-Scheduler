import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/rest/user-api.service';

@Component({
  selector: 'rev-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {
  }


  
  onSubmit(user: User){
    console.log("submitted");
    this.user.username = user.username;
    this.user.password = user.password;
    console.log(user.username);
  }

}
