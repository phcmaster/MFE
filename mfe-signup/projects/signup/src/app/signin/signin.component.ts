import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../cognito/cognito.service';
import { IUser } from '../cognito/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loading: boolean;
  user: IUser;
  signinForm!: FormGroup;

  constructor(private router: Router,
    private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.signinForm = new FormGroup({
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
      password: new FormControl({ value: '', disabled: false }, [Validators.required])
    });
  }


  public signIn(): void {
    this.loading = true;
    this.user.email = this.signinForm.get('email')?.value;
    this.user.password = this.signinForm.get('password')?.value;
    this.cognitoService.signIn(this.user)
      .then(() => {
        this.cognitoService.getUser().then(user => {
          sessionStorage.setItem('userData', JSON.stringify(user));
          this.router.navigate(['/stickers']);
        });
      }).catch(() => {
        this.loading = false;
      });
  }

}