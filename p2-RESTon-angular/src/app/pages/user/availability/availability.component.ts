import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Availability } from 'src/app/models/availability';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/services/rest/user-api.service';

@Component({
  selector: 'rev-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit{
  // user: User = JSON.parse(atob(localStorage.getItem("user")));
  avail:Availability;
  days:string[] = [];
  myForm: FormGroup;
  user: User;


  constructor(private authService: AuthService, private fb: FormBuilder, private userApiService: UserApiService) {}

  ngOnInit(){
    this.user = this.authService.loggedInUser.value;
    this.avail = this.authService.loggedInUser.value.availability;
    
    delete this.avail.id;
    delete this.avail.user;
    console.log(this.avail)
    Object.keys(this.avail).forEach(key => {
      this.days.push(key);
    })

    // let group = {};

    // for (const day of this.days){
    //   group[`${day}`] = [this.user.availability[day]];
    // }
    // this.myForm = this.fb.group(group);
    
  }


    onSubmit(): Promise<User> {
      console.log(this.user.availability);
      return new Promise((resolve, reject) =>{
        this.userApiService.put(this.user)
        .then(res => { 
          resolve(res);
          this.authService.setLoggedInUser(res, false);
        })
        .catch(error => {
          console.log(error);
          reject('There was an error updating the current user');
        })
      })
    }
  
}
