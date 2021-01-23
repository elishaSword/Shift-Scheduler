import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { RegisterFormComponent } from 'src/app/login/register-form/register-form.component';
import { LoginFormComponent } from 'src/app/login/login-form/login-form.component';
import { LoginPageComponent } from 'src/app/pages/landing/login-page/login-page.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { LandingPageComponent } from 'src/app/pages/landing/landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    LandingPageComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class LandingModule { }
