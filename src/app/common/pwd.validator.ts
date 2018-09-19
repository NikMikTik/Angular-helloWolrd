import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";


export class FormValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    static shouldContainAt(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(control.value);
                if (!(control.value).includes('@'))
                    resolve({ shouldContainAt: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
} 