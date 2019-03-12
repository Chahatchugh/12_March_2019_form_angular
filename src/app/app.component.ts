import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  num = '+91';
  user = {
    name: '',
    email: '',
    phone: '',
    line1: '',
    line2: '',
    district: '',
    state: '',
    code: '' ,
  };
  onSubmit(accept){
    console.log (accept);
  }
}