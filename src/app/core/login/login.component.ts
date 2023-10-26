import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { ILogin } from '../../shared/models/login.model';
import { ConstantLabel } from '../../shared/constant-label';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: ILogin;
  alert: boolean;
  constructor(private _router: Router, private _loginService: LoginService) {
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    this._loginService.getUsers().subscribe(users => {
      console.log(users)
      for (let i = 0; i < users.length; i++) {
        console.log(this.loginForm.value.username == users[i].username)
        if (this.loginForm.value.username == users[i].username && this.loginForm.value.password == users[i].password) {
          localStorage.setItem(ConstantLabel.currentUserToken, users[i].id.toString());
          this._router.navigate(['product-list']);
          break;
        }
        else {
          localStorage.removeItem(ConstantLabel.currentUserToken);
          this.alert = true;
        }
      }
    })
  }
  closeAlert() {
    this.alert = false;
  }
}
