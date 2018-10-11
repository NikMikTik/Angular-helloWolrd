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
                if (!(control.value).includes('@'))
                    resolve({ shouldContainAt: true });
                else
                    resolve(null);
            }, 2000);
        });
    }

    static MatchPassword(control: AbstractControl) {
        let password = control.get('password').value; // to get value in input tag
        let confirmPassword = control.get('confirmPassword').value; // to get value in input tag
         if(password != confirmPassword) {
             return {MatchPassword: true};
         } else {
             return null
         }
     }
    //  static shouldContainAt(control: AbstractControl): Promise<ValidationErrors | null> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (!(control.value).includes('@'))
    //                 resolve({ shouldContainAt: true });
    //             else
    //                 resolve(null);
    //         }, 2000);
    //     });
    // }

} 