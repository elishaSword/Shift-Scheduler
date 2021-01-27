import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Availability } from 'src/app/models/availability';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rev-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit{
  user: User = JSON.parse(atob(localStorage.getItem("user")));
  avail:Availability;
  days:string[] = [];
  myForm: FormGroup;


  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(){
    // this.authService.loggedInUser 
    this.avail = this.user.availability;
    delete this.avail.id;
    delete this.avail.user;

    Object.keys(this.avail).forEach(key => {
      this.days.push(key);
    })

    // let group = {};

    // for (const day of this.days){
    //   group[`${day}`] = [this.user.availability[day]];
    // }
    // this.myForm = this.fb.group(group);
    
  }


  onSubmit(){
    console.log(this.user.availability);
  
  }

}
