import { Component } from '@angular/core';
import { Field } from '../dynamic/models/field.model'
import { ShortText } from '../dynamic/models/short-text.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }

  data: {
    firstName: string;
    lastName: string;
    street: string;
    phone: number;
  } = {
    firstName: 'aaaa',
    lastName: 'bbbbb',
    street: 'street',
    phone: 3223432,
  };

  fields: Field<any>[] = [
    new ShortText({
      placeHolder: 'First Name',
      label: 'FirstName',
      name: 'firstName',
      priority: 3,
    }),
    new ShortText({
      placeHolder: 'Last Name',
      label: 'Last Name',
      name: 'lastName',
      priority: 2,
    }),
    new ShortText({
      placeHolder: 'Strret',
      label: 'Street',
      name: 'street',
      priority: 1,
    }),
    new ShortText({
      placeHolder: 'Phone Number',
      label: 'Phone Number',
      name: 'phone',
      priority: 0,
    }),
  ];

  onSubmit(event: any): void {
    event.preventDefault();
    console.log('got data', this.data);
  }
}
