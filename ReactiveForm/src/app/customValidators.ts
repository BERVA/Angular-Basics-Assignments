import {AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CustomValidators{

  static isForbiddenProjectName(control: FormControl): { [p: string]: Boolean } | null {
    if(control.value === 'Test'){
      return {'nameIsForbidden': true};
    } else {
      return  null;
    }
  }

  static asyncInvalidProjectName(control: AbstractControl): any {
    const promise = new Promise(

      (resolve, reject) => {
        setTimeout( ()=> {
          if(control.value === 'TestProject'){
            resolve({invalidProjectName: true})
          } else {
            resolve(null);
          }
        }, 1500)
      }
    );
    return promise;
  }



  // static asyncInvalidProjectName(): AsyncValidatorFn{
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     const forbiddenProjectName = 'Test';
  //     if(control.value === forbiddenProjectName){
  //       return of({ asyncInvalidProjectName: true}) }
  //     else {
  //       return of(null); }
  //   }
  // }
}
