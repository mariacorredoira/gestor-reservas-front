import { Component, signal } from '@angular/core';
import { ToastComponent } from "./components/toast/toast.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ToastComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    protected readonly title = signal('gestor-reservas-front');
}
