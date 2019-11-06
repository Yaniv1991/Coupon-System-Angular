import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { ClientType } from 'src/app/models/clientType';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  email: string = '';
  // tslint:disable-next-line: no-inferrable-types
  password: string = '';
  submitted = false;
  public clientType: ClientType;
  public user?: User;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) { }
  ngOnInit() {

  }
public isInvalid(): boolean {
  return this.loginForm.invalid;
}

  public onSubmit() {
    this.authenticationService.login(this.email, this.password, this.clientType);
  }
  public logout() {
    this.authenticationService.logout();
  }


}
