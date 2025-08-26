import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) return null;

        // Al menos una mayúscula
        const hasUpperCase = /[A-Z]/.test(value);
        // Al menos un símbolo (no letra ni número)
        const hasSymbol = /[^a-zA-Z0-9]/.test(value);

        const valid = hasUpperCase && hasSymbol;

        return valid ? null : { passwordStrength: true };
    };
}
