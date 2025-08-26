import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { passwordValidator } from "../../validators/password.validator";
import { Router } from "@angular/router";
import { HttpService } from "../../services/http/http.service";
import { UserRequest } from "../../models/user-request.model";
import { CommonModule } from "@angular/common";
import { ToastService } from "../../services/toast/toast.service";

@Component({
    selector: 'app-register',
    imports: [
        ReactiveFormsModule,
        CommonModule,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {

    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router, private toastService: ToastService) {
        this.registerForm = this.fb.group({
            nombre: ['', Validators.required],
            primerApellido: ['', Validators.required],
            segundoApellido: [''],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8), passwordValidator()]]
        });

    }

    onSubmit() {
        if (this.registerForm.valid) {
            console.log('Register data:', this.registerForm.value);

            // Mapear a UserRequest
            const userRequest: UserRequest = {
                name: this.registerForm.value.nombre,
                firstSurname: this.registerForm.value.primerApellido,
                secondSurname: this.registerForm.value.segundoApellido, // opcional
                email: this.registerForm.value.email,
                password: this.registerForm.value.password
            };

            this.httpService.register(userRequest).subscribe({
                next: (res) => {
                    this.toastService.show('Usuario registrado con éxito', false);
                    this.router.navigate(['/login']);

                },
                error: (err) => {
                    this.toastService.show('Error al registrar al usuario', true);
                }
            });
        } else {
            alert("El formulario no es válido");
        }
    }


}
