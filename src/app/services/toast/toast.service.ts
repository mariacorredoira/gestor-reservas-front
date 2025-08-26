import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    message = signal<string | null>(null);
    error = signal<boolean>(false);

    show(msg: string, error: boolean = false) {
        this.error.set(error);
        this.message.set(msg);
        setTimeout(() => (this.clear()), 4000); // Toast desaparece a los 4 segundos
    }

    clear() {
        this.message.set(null);
        this.error.set(false);
    }

}
