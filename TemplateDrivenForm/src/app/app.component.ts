import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild('f') subscriptionForm: NgForm | undefined;
  defaultSubs: String = 'Advanced';
  submitted = false;
  subsForm = {
    email: '',
    password: '',
    subscription: ''
  }

  onSubmit(){
    console.log(this.subscriptionForm)
    console.log(this.subscriptionForm?.value.email)
    this.subsForm = {
      email: this.subscriptionForm?.value.email,
      password: this.subscriptionForm?.value.password,
      subscription: this.subscriptionForm?.value.subscriptions

    }
    this.submitted = true;
  }

}
