import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "./customValidators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  projectForm: FormGroup = new FormGroup({
    'projectName': new FormControl(
      null,
      [Validators.required, CustomValidators.isForbiddenProjectName],
      [CustomValidators.asyncInvalidProjectName]
    ),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'projectStatus': new FormControl('Critical')
  });

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.projectForm.value)
  }

}
