import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../cognito/cognito.service';
import { IUser } from '../cognito/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;
  signUpForm!: FormGroup;

  constructor(private router: Router,
    private cognitoService: CognitoService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
      password: new FormControl({ value: '', disabled: false }, [Validators.required]),
      code: new FormControl({ value: '', disabled: false }, [Validators.required]),
    });
  }

  public signUp(): void {
    this.loading = true;
    this.user.email = this.signUpForm.get('email')?.value;
    this.user.password = this.signUpForm.get('password')?.value;
    console.log(this.user);
    this.cognitoService.signUp(this.user)
      .then(() => {
        this.loading = false;
        this.isConfirm = true;
      }).catch(() => {
        this.loading = false;
      });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.user.code = this.signUpForm.get('code')?.value;
    this.cognitoService.confirmSignUp(this.user)
      .then(() => {
        this.router.navigate(['/signin']);
      }).catch(() => {
        this.loading = false;
      });
  }

}