import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenTextValidator(invalidToDos: string[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    // TODO: Improve this validator to match real world use cases
    const forbidden = invalidToDos.includes(control.value);
    return forbidden ? {'forbiddenToDo': {value: control.value}} : null;
  };
}
