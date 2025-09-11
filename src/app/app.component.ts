import {Component, signal} from '@angular/core';
import {ToastComponent} from "./components/toast/toast.component";
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {AuthService} from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  protected readonly title = signal('gestor-reservas-front');
}
