import {Component} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpService} from '../../services/http/http.service';
import {LoginRequest} from '../../models/login-request.model';
import {ToastService} from '../../services/toast/toast.service';
import {LoginResponse} from '../../models/login-response.model';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private httpService: HttpService, private toastService: ToastService, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginRequest: LoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.httpService.login(loginRequest).subscribe({
        next: (loginResponse: LoginResponse) => {
          this.authService.setToken(loginResponse.token);

          this.toastService.show('Login ok', false);
          this.router.navigate(['/activities']);
        },
        error: (err) => {
          this.toastService.show('El email o contraseña no son correctos', true);
        }
      });
    }
  }


}
