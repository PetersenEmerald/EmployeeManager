import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseFormDirective } from '../../base-form.directive';

@Component({
  selector: 'app-short-text',
  templateUrl: './short-text.component.html',
  styleUrls: ['./short-text.component.css']
})
export class ShortTextComponent extends BaseFormDirective {
    constructor(public ngForm: NgForm) {
      super();
    }
}
