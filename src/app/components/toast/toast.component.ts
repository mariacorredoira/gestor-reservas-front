import { Component, computed } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ToastService } from "../../services/toast/toast.service";

@Component({
    selector: 'app-toast',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './toast.component.html',
    styleUrl: './toast.component.css'
})
export class ToastComponent {

    constructor(public toastService: ToastService) {
    }

    visible = computed(() => this.toastService.message() !== null);

}
