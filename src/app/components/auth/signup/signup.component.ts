import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SignUpRequest } from '../../../models/dto/signUpRequest';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpRequest: SignUpRequest = new SignUpRequest();
  message: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signUp() {
    this.authService.userSignUp(this.signUpRequest).subscribe(() => {
      this.message = '註冊成功';
      this.router.navigate(['/']);
    },
      error => {
        this.message = '註冊失敗';
      }
    )
  }
}
